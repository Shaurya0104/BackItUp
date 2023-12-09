pragma solidity 0.8.19;

import "./FunctionsResponse.sol";
import "./FunctionsRequest.sol";
interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    /**
     * @dev Returns the value of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the value of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves a `value` amount of tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 value) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    /**
     * @dev Sets a `value` amount of tokens as the allowance of `spender` over the
     * caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 value) external returns (bool);

    /**
     * @dev Moves a `value` amount of tokens from `from` to `to` using the
     * allowance mechanism. `value` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
}

interface IOwnable {
    function owner() external returns (address);

    function transferOwnership(address recipient) external;

    function acceptOwnership() external;
}

interface IFunctionsRouter {
    /// @notice The identifier of the route to retrieve the address of the access control contract
    /// The access control contract controls which accounts can manage subscriptions
    /// @return id - bytes32 id that can be passed to the "getContractById" of the Router
    function getAllowListId() external view returns (bytes32);

    /// @notice Set the identifier of the route to retrieve the address of the access control contract
    /// The access control contract controls which accounts can manage subscriptions
    function setAllowListId(bytes32 allowListId) external;

    /// @notice Get the flat fee (in Juels of LINK) that will be paid to the Router owner for operation of the network
    /// @return adminFee
    function getAdminFee() external view returns (uint72 adminFee);

    /// @notice Sends a request using the provided subscriptionId
    /// @param subscriptionId - A unique subscription ID allocated by billing system,
    /// a client can make requests from different contracts referencing the same subscription
    /// @param data - CBOR encoded Chainlink Functions request data, use FunctionsClient API to encode a request
    /// @param dataVersion - Gas limit for the fulfillment callback
    /// @param callbackGasLimit - Gas limit for the fulfillment callback
    /// @param donId - An identifier used to determine which route to send the request along
    /// @return requestId - A unique request identifier
    function sendRequest(
        uint64 subscriptionId,
        bytes calldata data,
        uint16 dataVersion,
        uint32 callbackGasLimit,
        bytes32 donId
    ) external returns (bytes32);

    /// @notice Sends a request to the proposed contracts
    /// @param subscriptionId - A unique subscription ID allocated by billing system,
    /// a client can make requests from different contracts referencing the same subscription
    /// @param data - CBOR encoded Chainlink Functions request data, use FunctionsClient API to encode a request
    /// @param dataVersion - Gas limit for the fulfillment callback
    /// @param callbackGasLimit - Gas limit for the fulfillment callback
    /// @param donId - An identifier used to determine which route to send the request along
    /// @return requestId - A unique request identifier
    function sendRequestToProposed(
        uint64 subscriptionId,
        bytes calldata data,
        uint16 dataVersion,
        uint32 callbackGasLimit,
        bytes32 donId
    ) external returns (bytes32);

    /// @notice Fulfill the request by:
    /// - calling back the data that the Oracle returned to the client contract
    /// - pay the DON for processing the request
    /// @dev Only callable by the Coordinator contract that is saved in the commitment
    /// @param response response data from DON consensus
    /// @param err error from DON consensus
    /// @param juelsPerGas - current rate of juels/gas
    /// @param costWithoutFulfillment - The cost of processing the request (in Juels of LINK ), without fulfillment
    /// @param transmitter - The Node that transmitted the OCR report
    /// @param commitment - The parameters of the request that must be held consistent between request and response time
    /// @return fulfillResult -
    /// @return callbackGasCostJuels -
    function fulfill(
        bytes memory response,
        bytes memory err,
        uint96 juelsPerGas,
        uint96 costWithoutFulfillment,
        address transmitter,
        FunctionsResponse.Commitment memory commitment
    ) external returns (FunctionsResponse.FulfillResult, uint96);

    /// @notice Validate requested gas limit is below the subscription max.
    /// @param subscriptionId subscription ID
    /// @param callbackGasLimit desired callback gas limit
    function isValidCallbackGasLimit(
        uint64 subscriptionId,
        uint32 callbackGasLimit
    ) external view;

    /// @notice Get the current contract given an ID
    /// @param id A bytes32 identifier for the route
    /// @return contract The current contract address
    function getContractById(bytes32 id) external view returns (address);

    /// @notice Get the proposed next contract given an ID
    /// @param id A bytes32 identifier for the route
    /// @return contract The current or proposed contract address
    function getProposedContractById(
        bytes32 id
    ) external view returns (address);

    /// @notice Return the latest proprosal set
    /// @return ids The identifiers of the contracts to update
    /// @return to The addresses of the contracts that will be updated to
    function getProposedContractSet()
        external
        view
        returns (bytes32[] memory, address[] memory);

    /// @notice Proposes one or more updates to the contract routes
    /// @dev Only callable by owner
    function proposeContractsUpdate(
        bytes32[] memory proposalSetIds,
        address[] memory proposalSetAddresses
    ) external;

    /// @notice Updates the current contract routes to the proposed contracts
    /// @dev Only callable by owner
    function updateContracts() external;

    /// @dev Puts the system into an emergency stopped state.
    /// @dev Only callable by owner
    function pause() external;

    /// @dev Takes the system out of an emergency stopped state.
    /// @dev Only callable by owner
    function unpause() external;
}

/// @title Chainlink Functions client interface.
interface IFunctionsClient {
    /// @notice Chainlink Functions response handler called by the Functions Router
    /// during fullilment from the designated transmitter node in an OCR round.
    /// @param requestId The requestId returned by FunctionsClient.sendRequest().
    /// @param response Aggregated response from the request's source code.
    /// @param err Aggregated error either from the request's source code or from the execution pipeline.
    /// @dev Either response or error parameter will be set, but never both.
    function handleOracleFulfillment(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) external;
}

/// @title Chainlink Functions Subscription interface.
interface IFunctionsSubscriptions {
    struct Subscription {
        uint96 balance; // ═════════╗ Common LINK balance that is controlled by the Router to be used for all consumer requests.
        address owner; // ══════════╝ The owner can fund/withdraw/cancel the subscription.
        uint96 blockedBalance; // ══╗ LINK balance that is reserved to pay for pending consumer requests.
        address proposedOwner; // ══╝ For safely transferring sub ownership.
        address[] consumers; // ════╸ Client contracts that can use the subscription
        bytes32 flags; // ══════════╸ Per-subscription flags
    }

    struct Consumer {
        bool allowed; // ══════════════╗ Owner can fund/withdraw/cancel the sub.
        uint64 initiatedRequests; //   ║ The number of requests that have been started
        uint64 completedRequests; // ══╝ The number of requests that have successfully completed or timed out
    }

    /// @notice Get details about a subscription.
    /// @param subscriptionId - the ID of the subscription
    /// @return subscription - see IFunctionsSubscriptions.Subscription for more information on the structure
    function getSubscription(
        uint64 subscriptionId
    ) external view returns (Subscription memory);

    /// @notice Retrieve details about multiple subscriptions using an inclusive range
    /// @param subscriptionIdStart - the ID of the subscription to start the range at
    /// @param subscriptionIdEnd - the ID of the subscription to end the range at
    /// @return subscriptions - see IFunctionsSubscriptions.Subscription for more information on the structure
    function getSubscriptionsInRange(
        uint64 subscriptionIdStart,
        uint64 subscriptionIdEnd
    ) external view returns (Subscription[] memory);

    /// @notice Get details about a consumer of a subscription.
    /// @param client - the consumer contract address
    /// @param subscriptionId - the ID of the subscription
    /// @return consumer - see IFunctionsSubscriptions.Consumer for more information on the structure
    function getConsumer(
        address client,
        uint64 subscriptionId
    ) external view returns (Consumer memory);

    /// @notice Get details about the total amount of LINK within the system
    /// @return totalBalance - total Juels of LINK held by the contract
    function getTotalBalance() external view returns (uint96);

    /// @notice Get details about the total number of subscription accounts
    /// @return count - total number of subscriptions in the system
    function getSubscriptionCount() external view returns (uint64);

    /// @notice Time out all expired requests: unlocks funds and removes the ability for the request to be fulfilled
    /// @param requestsToTimeoutByCommitment - A list of request commitments to time out
    /// @dev The commitment can be found on the "OracleRequest" event created when sending the request.
    function timeoutRequests(
        FunctionsResponse.Commitment[] calldata requestsToTimeoutByCommitment
    ) external;

    /// @notice Oracle withdraw LINK earned through fulfilling requests
    /// @notice If amount is 0 the full balance will be withdrawn
    /// @notice Both signing and transmitting wallets will have a balance to withdraw
    /// @param recipient where to send the funds
    /// @param amount amount to withdraw
    function oracleWithdraw(address recipient, uint96 amount) external;

    /// @notice Owner cancel subscription, sends remaining link directly to the subscription owner.
    /// @dev Only callable by the Router Owner
    /// @param subscriptionId subscription id
    /// @dev notably can be called even if there are pending requests, outstanding ones may fail onchain
    function ownerCancelSubscription(uint64 subscriptionId) external;

    /// @notice Recover link sent with transfer instead of transferAndCall.
    /// @dev Only callable by the Router Owner
    /// @param to address to send link to
    function recoverFunds(address to) external;

    /// @notice Create a new subscription.
    /// @return subscriptionId - A unique subscription id.
    /// @dev You can manage the consumer set dynamically with addConsumer/removeConsumer.
    /// @dev Note to fund the subscription, use transferAndCall. For example
    /// @dev  LINKTOKEN.transferAndCall(
    /// @dev    address(ROUTER),
    /// @dev    amount,
    /// @dev    abi.encode(subscriptionId));
    function createSubscription() external returns (uint64);

    /// @notice Create a new subscription and add a consumer.
    /// @return subscriptionId - A unique subscription id.
    /// @dev You can manage the consumer set dynamically with addConsumer/removeConsumer.
    /// @dev Note to fund the subscription, use transferAndCall. For example
    /// @dev  LINKTOKEN.transferAndCall(
    /// @dev    address(ROUTER),
    /// @dev    amount,
    /// @dev    abi.encode(subscriptionId));
    function createSubscriptionWithConsumer(
        address consumer
    ) external returns (uint64 subscriptionId);

    /// @notice Propose a new owner for a subscription.
    /// @dev Only callable by the Subscription's owner
    /// @param subscriptionId - ID of the subscription
    /// @param newOwner - proposed new owner of the subscription
    function proposeSubscriptionOwnerTransfer(
        uint64 subscriptionId,
        address newOwner
    ) external;

    /// @notice Accept an ownership transfer.
    /// @param subscriptionId - ID of the subscription
    /// @dev will revert if original owner of subscriptionId has not requested that msg.sender become the new owner.
    function acceptSubscriptionOwnerTransfer(uint64 subscriptionId) external;

    /// @notice Remove a consumer from a Chainlink Functions subscription.
    /// @dev Only callable by the Subscription's owner
    /// @param subscriptionId - ID of the subscription
    /// @param consumer - Consumer to remove from the subscription
    function removeConsumer(uint64 subscriptionId, address consumer) external;

    /// @notice Add a consumer to a Chainlink Functions subscription.
    /// @dev Only callable by the Subscription's owner
    /// @param subscriptionId - ID of the subscription
    /// @param consumer - New consumer which can use the subscription
    function addConsumer(uint64 subscriptionId, address consumer) external;

    /// @notice Cancel a subscription
    /// @dev Only callable by the Subscription's owner
    /// @param subscriptionId - ID of the subscription
    /// @param to - Where to send the remaining LINK to
    function cancelSubscription(uint64 subscriptionId, address to) external;

    /// @notice Check to see if there exists a request commitment for all consumers for a given sub.
    /// @param subscriptionId - ID of the subscription
    /// @return true if there exists at least one unfulfilled request for the subscription, false otherwise.
    /// @dev Looping is bounded to MAX_CONSUMERS*(number of DONs).
    /// @dev Used to disable subscription canceling while outstanding request are present.
    function pendingRequestExists(
        uint64 subscriptionId
    ) external view returns (bool);

    /// @notice Set subscription specific flags for a subscription.
    /// Each byte of the flag is used to represent a resource tier that the subscription can utilize.
    /// @param subscriptionId - ID of the subscription
    /// @param flags - desired flag values
    function setFlags(uint64 subscriptionId, bytes32 flags) external;

    /// @notice Get flags for a given subscription.
    /// @param subscriptionId - ID of the subscription
    /// @return flags - current flag values
    function getFlags(uint64 subscriptionId) external view returns (bytes32);
}


interface GnosisSafe {
    function execTransactionFromModule(
        address to,
        uint256 value,
        bytes calldata data,
        Enum.Operation operation
    ) external returns (bool success);
}

interface IPUSHCommInterface {
    function sendNotification(
        address _channel,
        address _recipient,
        bytes calldata _identity
    ) external;
}