//SPDX-License-Identifier: MIT

pragma solidity >=0.6.2 <0.9.0;

interface OracleConsumer {
    function handleOracleFulfillment(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) external;
}

contract MockChainlinkRouter {
    OracleConsumer consumer;

    function setUp(address _consumer) public {
        consumer = OracleConsumer(_consumer);
    }

    function sendRequest(
        uint64,
        bytes memory,
        uint16,
        uint32,
        bytes32
    ) external pure returns (uint256) {
        return 1;
    }

    function returnFulfillment() external {
        consumer.handleOracleFulfillment(
            bytes32(abi.encode(1)),
            abi.encode(uint256(block.timestamp - 10)),
            bytes(abi.encode(uint256(0)))
        );
    }
}
