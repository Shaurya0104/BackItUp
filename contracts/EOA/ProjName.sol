// SPDX-License-Identifier: UNLICENSED

// Use the Solidity version 0.8.4
pragma solidity ^0.8.4;

// Import the Ownable contract from OpenZeppelin
import "@openzeppelin/contracts/access/Ownable.sol";
// Import the IERC20 interface from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// Import the XYZ contract
import "./ProjectName.sol";
// Import the Withdrawable contract
import "./Withdrawable.sol";

// Define the XYZser contract that inherits from Withdrawable
contract ProjName is Withdrawable {
   // Define the service fee of the contract
   uint256 public serviceFee;
   // Define the creator address of the contract
   address public creatorAddress;


   // Define the events of the contract
   event DeployedBackupContract(
       address indexed backupContract,
       address indexed deployer
   );

   // Define the constructor of the contract
   constructor(
       uint256 _initialServiceFee
   ) {
       // Set the service fee, creator address, and delay
       serviceFee = _initialServiceFee;
   }


    // Define the deployBackupContract function
  function deployBackupContract(
      address _tokenAddress,
      uint256 funds,
      uint256 _delay,
      address _verifierAddr,
       uint _executor1,
       uint _executor2,
       uint _beneficiary
  ) external payable {
      // Check if the value sent is less than the service fee
      require(msg.value >= serviceFee, "Insufficient payment for service");
      require(_tokenAddress != address(0), "Zero address not allowed for token");
    creatorAddress = msg.sender;
      // Deploy a new XYZ contract
      ProjectName backupContract = new ProjectName(
          _tokenAddress,
          _delay,
          funds,
          _verifierAddr,
          msg.sender,
          _executor1,
          _executor2,
          _beneficiary

      );

      // Emit the DeployedBackupContract event
      emit DeployedBackupContract(
          address(backupContract),
          msg.sender
      );
  }

  
}
