//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.19;

import {RecoveryExecutionModule} from "./ModuleFlattened.sol";

contract SafeModuleFactory {

    function createNewRecovery(
        address _safe,
        address router,
        // address[2] memory _executors,
        uint256 _periodUntilRecovery,
        address _token,
        uint256 _allowance,
        address _verifier,
        uint256 _firstNullifier,
        uint256 _secondNullifier,
        uint256 _thirdNullifier,
        string memory _source
    ) external returns (RecoveryExecutionModule) {
        RecoveryExecutionModule newModule = new RecoveryExecutionModule(
            // _owner,
            _safe,
            router,
            // _executors,
            _periodUntilRecovery,
            // _destination,
            _token,
            _allowance,
            _verifier,
            _firstNullifier,
            _secondNullifier,
            _thirdNullifier,
            _source
        );
        return newModule;
    }
}
