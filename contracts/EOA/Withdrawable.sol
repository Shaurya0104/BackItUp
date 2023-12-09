// SPDX-License-Identifier: UNLICENSED

// Use the Solidity version 0.8.4
pragma solidity ^0.8.4;

// Import the Ownable contract from OpenZeppelin
import "@openzeppelin/contracts/access/Ownable.sol";
// Import the IERC20 interface from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// Import the XYZ contract
import "./ProjectName.sol";

// Define the Withdrawable contract that inherits from Ownable
contract Withdrawable is Ownable {

 // Define the constructor of the contract
 constructor() Ownable(msg.sender) {} 

 // Define the withdraw function
 function withdraw() external onlyOwner {
     // Get the balance of the contract
     uint256 balance = address(this).balance;
     // Check if the balance is zero
     require(balance != 0, "No funds to withdraw");
     // Try to transfer the balance to the owner
     (bool success, ) = payable(owner()).call{value: balance}("");
     // Check if the transfer was successful
     require(success, "Transfer failed");
 }

 // Define the withdrawToken function
 function withdrawToken(address _tokenAddress) external onlyOwner {
     // Get the token
     IERC20 token = IERC20(_tokenAddress);
     // Get the balance of the token in the contract
     uint256 tokenBalance = token.balanceOf(address(this));
     // Check if the token balance is zero
     require(tokenBalance != 0, "No tokens to withdraw");
     // Transfer the token balance to the owner
     token.transfer(owner(), tokenBalance);
 }
}

