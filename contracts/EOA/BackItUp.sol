// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

// Import SafeERC20 and ERC20 from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "./IPUSHCommInterface.sol";
import "./IAnonAadhaarVerifier.sol";
// Define the contract

contract BackItUp {
   // Use SafeERC20 for ERC20
   using SafeERC20 for ERC20;
   address public anonAadhaarVerifierAddr;
    // Notes for Different addresses

    // Creator -> This is the address of the person who initially deploys the contract to the Ethereum blockchain. 
    // The creator address is typically set during the contract's constructor and is usually immutable, meaning it cannot be changed after the contract is deployed. 
    // The creator address is often used to restrict certain functions to the original creator of the contract 
    // Define the creator of the contract

    // Owner -> This is often a special address that has certain privileges within the contract. 
    // For example, the owner address might have the ability to change the state of the contract, or to withdraw funds from the contract. 
    // The owner address is typically set during the contract's constructor and is usually immutable. This means that it cannot be changed after the contract is deployed. 
    // The owner address is often used to restrict certain functions to the owner of the contract

    // Beneficiary -> This is the address that will receive any funds or tokens that are transferred from the contract. 
    // For example, if the contract is designed to hold funds in escrow, the beneficiary address would be the address that the funds are sent to when the escrow is released. 
    // The beneficiary address is typically set when the contract is deployed and can be changed at any time by the owner or creator of the contract.


   address public immutable tokenAddress;
   
    address public ETH_SEP_COMM_ADDRESS = 0x0C34d54a09CFe75BCcd878A469206Ae77E0fe6e7;

   // Define the delay of the contract
   uint256 public immutable delay;
   // Define the initial timestamp of the contract
   uint256 public immutable initTimestamp;
    uint256 public immutable funds;
   // Define the state of the contract
   uint8 public state;
   uint256 public executor1;
   uint256 public executor2;
   uint256 public beneficiary;
   uint256 public unlocker1;
   // Define the timestamp of the contract
   uint256 public timestamp;
   address public immutable creator;
    ERC20 token;
    uint256 public contractBalance;
   // Define the events of the contract

   event Restored();
   event SameExecutors();
    event notRightTime();
   event StateChanged(uint8 state);

   // Define the constructor of the contract
   constructor(
       address _tokenAddress,
       uint256 _delay,
       uint256 _funds,
       address _verifierAddr,
       address _creator,
       uint _executor1,
       uint _executor2,
       uint _beneficiary
       
   ) {

        anonAadhaarVerifierAddr = _verifierAddr;
        funds = _funds;
       // Set the creator, executor1, executor2, owner, beneficiary, tokenAddress, delay, state, timestamp, and initTimestamp

       tokenAddress = _tokenAddress;
       delay = _delay;
       state = 0;
       timestamp = block.timestamp + delay;
       initTimestamp = block.timestamp;
       token = ERC20(tokenAddress);
        creator = _creator;
        executor1 = _executor1;
        executor2 = _executor2;
        beneficiary = _beneficiary;
        
   }

 function notif() public {
    IPUSHCommInterface(ETH_SEP_COMM_ADDRESS).sendNotification(
            0xFD60035634DdE0BCb90e96ecD6D18d3c7Cde6a2B, // from channel
            address(this), // to recipient, put address(this) in case you want Broadcast or Subset. For Targeted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                        "+", // segregator
                        "1", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targeted or subset)
                        "+", // segregator
                        "TESTSTSTST", // this is notification title
                        "+", // segregator
                        "~ SolRiders"// notification body
                        
                    )
                )
            )
        );
   }


    function notify(string memory message) internal{

        IPUSHCommInterface(ETH_SEP_COMM_ADDRESS).sendNotification(
            0xFD60035634DdE0BCb90e96ecD6D18d3c7Cde6a2B, // from channel
            address(this), // to recipient, put address(this) in case you want Broadcast or Subset. For Targeted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                        "+", // segregator
                        "1", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targeted or subset)
                        "+", // segregator
                        message, // this is notification title
                        "+", // segregator
                        "~ SolRiders"// notification body
                        
                    )
                )
            )
        );
    }
    
   function verify(uint256[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[34] calldata _pubSignals) public view returns (bool) {
        return IAnonAadhaarVerifier(anonAadhaarVerifierAddr).verifyProof(_pA, _pB, _pC, _pubSignals);
    }

    function withdraw(uint256[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[34] calldata _pubSignals) external {
        require(verify(_pA, _pB, _pC, _pubSignals), "Your idendity proof is not valid");
        require(_pubSignals[0]== beneficiary,"Not beneficiary");
         // If the state is 3, restore the tokens
      if (state == 2 && timestamp < block.timestamp) { 
        state =3;
          // Check if the current timestamp is less than the timestamp
          token.transferFrom(
              creator,
              msg.sender,
              funds
          );
          // Emit the Restored event
          emit Restored();
      }
      else {
        emit notRightTime();
      }
        
    }
   // Define the changeState function
   
  function changeState( uint256[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[34] calldata _pubSignals) 
      external
  { 

      require(verify(_pA, _pB, _pC, _pubSignals), "Your idendity proof is not valid");
        if(state ==0 && (_pubSignals[0]== executor1 || _pubSignals[0] == executor2)){
            state=1;
            unlocker1 = _pubSignals[0];
            timestamp = block.timestamp + delay;

        }
        else if(state ==1 && (_pubSignals[0]== executor1 || _pubSignals[0] == executor2)){
            state =2;
            require(unlocker1 != _pubSignals[0], "same executor");
            timestamp = block.timestamp + delay;
        }
        emit StateChanged(state);

      
  }
  

 receive() external payable {
       // Get the current balance of the contract
       contractBalance= address(this).balance;
   }
}
