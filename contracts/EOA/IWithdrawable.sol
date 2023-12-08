// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

// Import the Ownable contract from OpenZeppelin
import "@openzeppelin/contracts/access/Ownable.sol";

interface IWithdrawable {
    function withdraw() external;
    function transferOwnership(address newOwner) external;
}
