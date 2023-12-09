//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import "./Buffer.sol";
import "./CBOR.sol";
import "./ConfirmedOwnerChainlink.sol";
import "./FunctionsClient.sol";
import "./FunctionsResponse.sol";
import "./IAnonAadhaarVerifier.sol";
import "./Interfaces.sol";
import "./SignatureDecoder.sol";


contract RecoveryExecutionModule is
    SignatureDecoder,
    FunctionsClient,
    ConfirmedOwner
{
    using FunctionsRequest for FunctionsRequest.Request;
    //ERRORS
    error UnexpectedRequestID(bytes32 requestId);
    error NotExecutor();
    error UnexpectedRequestId();
    error InvalidTimePeriod();
    error NotOwner();
    error InvalidExecutorInput();
    error InvalidLengthInput();
    error TransferAmountTooHigh();
    error RecoveryLocked();
    error RecoveryModuleAlreadyUsed();
    error DuplicateExecutor();
    error NotNominee();
    //EVENTS
    event RecoveryUnlocked(
        bytes32 indexed requestId,
        bytes TimePeriod,
        bytes err
    );
    event NewApprovalSet(uint256 newApproval);
    event TestEventForRetrieval(uint256);
    event RecoveryExecutionComplete();
    //VARIABLES/CONSTANTS DECLARATION
    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;
    GnosisSafe public immutable safe;
    // address[2] public executors;
    address public immutable contractOwner;
    address public destination;
    uint32 toggle;
    uint256 public immutable periodUntilRecovery;
    bytes source;
    // mapping(address executor => mapping(address token => uint256 allowance)) allowances;
    uint256 allowance;
    address token;
    uint256 foreverLocked;
    address verifier;
    uint256 firstNullifier;
    uint256 secondNullifier;
    uint256 nomineeNullifier;
    bool[2] verified;
    IPUSHCommInterface pushInterface;
    address pushChannel;

    /////////////////////////////
    /////////////////CONSTRUCTOR
    /////////////////////////////

    constructor(
        // address _owner,
        address _safe,
        address router,
        // address[2] memory _executors,
        uint256 _periodUntilRecovery,
        address _token,
        uint256 _allowance,
        address _verifier,
        uint256[3] memory _nullifiers,
        address _pushAddress,
        address _pushChannel,
        string memory _source
    ) FunctionsClient(router) ConfirmedOwner(msg.sender) {
        {
            contractOwner = msg.sender;
            safe = GnosisSafe(_safe);
            // executors = _executors;
            periodUntilRecovery = _periodUntilRecovery;
            token = _token;
            allowance = _allowance;
            verifier = _verifier;
        }
        {
            firstNullifier = _nullifiers[0];
            secondNullifier = _nullifiers[1];
            nomineeNullifier = _nullifiers[2];
        }
        pushInterface = IPUSHCommInterface(_pushAddress);
        pushChannel = _pushChannel;
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(_source);
        source = req.encodeCBOR();
    }

    /////////////////////////////
    ///////////MODIFIERS////////
    ///////////////////////////

    modifier onlyByOwner() {
        checkIfOwner();
        _;
    }

    // modifier onlyExecutor() {
    //     checkIfExecutor();
    //     _;
    // }

    modifier notForeverLockedModifier() {
        notForeverLocked();
        _;
    }

    /////////////////////////////
    ///////////EXTERNAL FUNCTIONS
    /////////////////////////////

    /// @notice Sends offchain request to check if recovery time is satisfied
    /// @dev Sends offchain request via chainlink functions to Airstack, and retrieves last transaction block timestamp
    /// @param subscriptionId Chainlink subscription ID
    /// @param callbackGasLimit The gas limit for callback
    /// @param donId Chainlink's donId for the particular chain. Check chainlink's documentation for further details
    /// @return Returns the requestId of the request sent right now
    function sendRequestForCheck(
        uint[2] calldata _pA,
        uint[2][2] calldata _pB,
        uint[2] calldata _pC,
        uint[34] calldata _pubSignals,
        uint64 subscriptionId, //something that the executor gets when thet add this contract as consumer
        uint32 callbackGasLimit,
        bytes32 donId
    ) external returns (bytes32) {
        if (readyToGoForRequest(_pA, _pB, _pC, _pubSignals)) {
            s_lastRequestId = _sendRequest(
                source,
                subscriptionId,
                callbackGasLimit,
                donId
            );
            return s_lastRequestId;
        } else {
            return bytes32(uint256(0));
        }
    }

    /// @notice Set approval for each executor for each token
    /// @dev Soft approval set up. Does not check for user's token balance. Assumes that the gnosis safe will have balance.
    /// PS: Not an issue tbh
    /// @param _allowanceNew the new allowance to be set for the token
    function setApprovalForExecution(
        uint256 _allowanceNew
    ) external onlyByOwner {
        // if (_executor != executors[0] && _executor != executors[1]) {
        //     revert InvalidExecutorInput();
        // }
        // if (_tokens.length != _allowances.length) {
        //     revert InvalidLengthInput();
        // }
        allowance = _allowanceNew;
        emit NewApprovalSet(_allowanceNew);
    }

    /// @notice Removes an executor in case of an emergency/some other reason
    /// @dev Known vulnerability: Does not remove token allowances set. Not an issue unless the same executor is added again.
    /// @param _executor The executor to be removed
    // function removeExecutor(address _executor) external onlyByOwner {
    //     if (executors[0] == _executor) executors[0] = address(0x0);
    //     else if (executors[1] == _executor) executors[1] = address(0x0);
    //     else revert NotExecutor();
    // }

    /// @notice To be called by the executor for transferring tokens
    /// @dev The toggle must be set to 1 by sendRequestForCheck() first
    function conductExecution(
        uint[2] calldata _pA,
        uint[2][2] calldata _pB,
        uint[2] calldata _pC,
        uint[34] calldata _pubSignals
    ) external notForeverLockedModifier {
        // if(tokens.length != transfers.length) {
        //     revert InvalidLengthInput();
        // }
        if (_pubSignals[0] != nomineeNullifier) {
            revert NotNominee();
        }
        if (
            !IAnonAadhaarVerifier(verifier).verifyProof(
                _pA,
                _pB,
                _pC,
                _pubSignals
            )
        ) {
            revert NotNominee();
        }
        if (toggle != 1) {
            revert RecoveryLocked();
        }
        // for(uint i=0; i<tokens.length;i++) {
        transferTokens(token, allowance);
        // }
        emit RecoveryExecutionComplete();
    }

    /// @notice Toggles the recovery mode off, does not allow any executor to conduct execution anymore
    /// @dev Does not reverse any already done transactions. Can only be called by owner
    function forceToggleOff() external onlyByOwner {
        toggle = 0;
    }

    //////////////////////////////
    ///////////INTERNAL FUNCTIONS
    /////////////////////////////

    function readyToGoForRequest(
        uint[2] calldata _pA,
        uint[2][2] calldata _pB,
        uint[2] calldata _pC,
        uint[34] calldata _pubSignals
    ) internal returns (bool) {
        if (_pubSignals[0] == firstNullifier) {
            if (
                !IAnonAadhaarVerifier(verifier).verifyProof(
                    _pA,
                    _pB,
                    _pC,
                    _pubSignals
                )
            ) {
                revert NotExecutor();
            }
            verified[0] = true;
            pushInterface.sendNotification(
                pushChannel,
                address(this),
                bytes(
                    string(
                        // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                        abi.encodePacked(
                            "0", // this represents minimal identity, learn more: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                            "+", // segregator
                            "1", // define notification type:  https://push.org/docs/notifications/build/types-of-notification (1, 3 or 4) = (Broadcast, targeted or subset)
                            "+", // segregator
                            "Executor Signed", // this is notification title
                            "+", // segregator
                            "Executor 1 has signed ready for recovery!" // notification body
                        )
                    )
                )
            );
            if (verified[1] == true) {
                return true;
            }
            return false;
        } else if (_pubSignals[0] == secondNullifier) {
            if (
                !IAnonAadhaarVerifier(verifier).verifyProof(
                    _pA,
                    _pB,
                    _pC,
                    _pubSignals
                )
            ) {
                revert NotExecutor();
            }
            verified[1] = true;
            pushInterface.sendNotification(
                pushChannel,
                address(this),
                bytes(
                    string(
                        // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                        abi.encodePacked(
                            "0", // this represents minimal identity, learn more: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                            "+", // segregator
                            "1", // define notification type:  https://push.org/docs/notifications/build/types-of-notification (1, 3 or 4) = (Broadcast, targeted or subset)
                            "+", // segregator
                            "Executor Signed", // this is notification title
                            "+", // segregator
                            "Executor 2 has signed ready for recovery!" // notification body
                        )
                    )
                )
            );
            if (verified[0] == true) {
                return true;
            }
            return false;
        } else {
            revert NotExecutor();
        }
    }

    /// @dev To be called by chainlink's library function which is inherited with the contract.
    /// @dev Can only be called by chainlink's router. This is already implemented in inherited function!
    /// @param requestId Request ID of the to-be-fulfilled transaction. Need this for security purposes
    /// @param response Response by the service
    /// @param err In case of error
    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        if (s_lastRequestId != requestId) {
            revert UnexpectedRequestId();
        }
        uint256 lastTimeOfTransaction = abi.decode(response, (uint256));
        if (block.timestamp - lastTimeOfTransaction < periodUntilRecovery) {
            emit TestEventForRetrieval(lastTimeOfTransaction);
            revert InvalidTimePeriod();
        }
        toggle = 1;
        s_lastResponse = response;
        s_lastError = err;
        pushInterface.sendNotification(
                pushChannel,
                address(this),
                bytes(
                    string(
                        // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                        abi.encodePacked(
                            "0", // this represents minimal identity, learn more: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                            "+", // segregator
                            "1", // define notification type:  https://push.org/docs/notifications/build/types-of-notification (1, 3 or 4) = (Broadcast, targeted or subset)
                            "+", // segregator
                            "Ready for Recovery!", // this is notification title
                            "+", // segregator
                            "Beneficiary can pull tokens now!" // notification body
                        )
                    )
                )
            );
        emit RecoveryUnlocked(requestId, response, err);
    }

    function checkIfOwner() internal view {
        if (msg.sender != contractOwner) {
            revert NotOwner();
        }
    }

    // function checkIfExecutor() internal view {
    //     if (msg.sender != executors[0] && msg.sender != executors[1]) {
    //         revert NotExecutor();
    //     }
    // }

    function notForeverLocked() internal view {
        if (foreverLocked != 0) {
            revert RecoveryModuleAlreadyUsed();
        }
    }

    ////////////////////////////
    /////PRIVATE FUNCTIONS//////
    ////////////////////////////

    /// @notice Internal function which calls gnosis safe
    /// @param _token Token to be transferred
    /// @param amountToTransfer yup just what the name says
    function transferTokens(address _token, uint256 amountToTransfer) private {
        bytes memory data = abi.encodeWithSelector(
            IERC20(_token).transfer.selector,
            destination,
            amountToTransfer
        );
        // uint256 _allowance = allowances[msg.sender][_token];
        // if(_allowance < amountToTransfer) {
        //     revert TransferAmountTooHigh();
        // }
        // allowances[msg.sender][_token] = _allowance - amountToTransfer;

        safe.execTransactionFromModule(_token, 0, data, Enum.Operation.Call);
        pushInterface.sendNotification(
                pushChannel,
                address(this),
                bytes(
                    string(
                        // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                        abi.encodePacked(
                            "0", // this represents minimal identity, learn more: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                            "+", // segregator
                            "1", // define notification type:  https://push.org/docs/notifications/build/types-of-notification (1, 3 or 4) = (Broadcast, targeted or subset)
                            "+", // segregator
                            "Recovery Executed!", // this is notification title
                            "+", // segregator
                            "Beneficiary has successfully claimed tokens!" // notification body
                        )
                    )
                )
            );
    }
}
