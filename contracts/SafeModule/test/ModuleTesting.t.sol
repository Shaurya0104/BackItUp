//SPDX-License-Identifier: MIT

pragma solidity >=0.6.2 <0.9.0;

import {Test, console} from "forge-std/Test.sol";
import {DeployComp} from "../script/DeployComp.sol";
import {RecoveryExecutionModule} from "../src/MainModule.sol";
import {MockChainlinkRouter} from "../test/mocks/MockChainlinkRouter.sol";
import {Safe, Enum} from "../lib/safe-contracts/contracts/Safe.sol";
import {SafeProxy} from "../lib/safe-contracts/contracts/proxies/SafeProxy.sol";
import "../lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol";
import "../lib/openzeppelin-contracts/contracts/utils/cryptography/MessageHashUtils.sol";

// contract Enum {
//     enum Operation {
//         Call,
//         DelegateCall
//     }
// }

contract ModuleTest is Test {
    
    using MessageHashUtils for bytes32;
    using ECDSA for bytes32;
    DeployComp deployer;
    RecoveryExecutionModule safeModule;
    MockChainlinkRouter router;
    Safe safe;
    SafeProxy safeProxy;
    address owner;
    address executor1;
    address executor2;
    uint256 ownerKey;
    uint256 exec1Key;
    uint256 exec2Key;
    address[] owners = [owner];
    uint256 _threshold = 1;
    address to = address(0);
    bytes data = bytes(abi.encode(uint256(0)));
    address fallbackHandler = address(0);
    address paymentToken = address(0);
    uint256 payment = 0;
    address paymentReceiver = address(0);
    address[2] executors = [executor1, executor2];
    uint256 _periodUntilRecovery = 1;
    address _destination = makeAddr("nominee");
    string source = "hello";

    function setUp() public {
        (owner, ownerKey) = makeAddrAndKey("owner");
        (executor1, exec1Key) = makeAddrAndKey("executor1");
        (executor2, exec2Key) = makeAddrAndKey("executor2");
        owners = [owner];
        deployer = new DeployComp();
        {
            safe = deployer.runone();
        }
        {
            safeProxy = deployer.runForProxy(
                address(safe),
                owners,
                _threshold,
                to,
                data,
                fallbackHandler,
                paymentToken,
                payment,
                payable(paymentReceiver)
            );
        }
        {
            router = deployer.runtwo();
        }
        {
            safeModule = deployer.runthree(
                owners,
                [executor1, executor2],
                _periodUntilRecovery,
                _destination,
                source,
                address(router),
                address(safeProxy)
            );
        }
        vm.startPrank(owner);
        // bytes32 ModuleEnable = keccak256(
        //     abi.encodeWithSignature("0x610b5925", address(safeModule))
        // );
        // // bytes32 moduleEnableHash = ModuleEnable.toEthSignedHash();
        // (uint8 v, bytes32 r, bytes32 s) = vm.sign(ownerKey, ModuleEnable);
        // bytes memory forcalldata = abi.encodeWithSelector(
        //     Safe.execTransaction.selector,
        //     address(safeProxy),
        //     0,
        //     abi.encodeWithSelector(
        //         bytes4(keccak256("enableModule(address)")),
        //         address(safeModule)
        //     ),
        //     Enum.Operation.Call,
        //     0,
        //     0,
        //     0,
        //     address(0),
        //     payable(address(0)),
        //     abi.encodePacked(v, r, s)
        // );
         bytes32 requiredHash;
{         requiredHash = safe.getTransactionHash(
            address(safe),
            0,
            abi.encodeWithSelector(
                safe.enableModule.selector,
                address(safeModule)
            ),
            Enum.Operation.Call,
            0,
            0,
            0,
            address(0),
            payable(address(0)),
            0
        );}
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ownerKey, requiredHash);
        bytes memory forCallData;
        bytes memory packedSign = abi.encodePacked(r,s,v);
{         forCallData = abi.encodeWithSelector(
            Safe.execTransaction.selector,
            address(safe),
            0,
            abi.encodeWithSelector(
                safe.enableModule.selector,
                address(safeModule)
            ),
            Enum.Operation.Call,
            0,
            0,
            0,
            address(0),
            payable(address(0)),
            0,
            packedSign
        );}
        address(safeProxy).call(forCallData);
        vm.stopPrank();
    }

    function testIfModuleEnabled() public {
        assert(safe.isModuleEnabled(address(safeModule)) == true);
    }
}
