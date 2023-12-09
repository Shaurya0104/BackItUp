// scripts/deploy.js
const { ethers } = require("hardhat");
const { exec } = require("child_process");

async function main() {
 const ProjName = await ethers.getContractFactory("ProjName");
 const projName = await ProjName.deploy(0); // Set initial service fee
 const Token = await ethers.getContractFactory("SolRiders"); //token
 const token = await Token.deploy()
 const tokenAddress = token.getAddress();
 console.log("ProjName deployed to:", projName.target);
 const verifier = await ethers.deployContract("Verifier"); //Verifier
 await verifier.waitForDeployment();

 const _verifierAddress = verifier.getAddress();
 // You can add more interactions here if needed
 const appId = BigInt(
  process.env.APP_ID
).toString();

const anonAadhaarVerifier = await ethers.deployContract(
  "AnonAadhaarVerifier",
  [_verifierAddress, appId]
);
await anonAadhaarVerifier.waitForDeployment();


 // Deploying a backup contract (example)
 const funds = "10";
 const delay = "0";
 const verifierAddress = anonAadhaarVerifier.getAddress();
 const executor1Nullifier = "8342611605558802468582569879314199988106501944757509573088422314952680209705";
 const executor2Nullifier = "10655706780475660315368236249496825506536068114802302124989010119522849142676";
 const beneficiaryNullifier = "9999046083161807991207948004694129209214019014658775265663935807423678754738";
 
 const deployBackupContractTx = await projName.deployBackupContract(
  tokenAddress,
  funds,
  delay,
  verifierAddress,
  executor1Nullifier,
  executor2Nullifier,
  beneficiaryNullifier
 );

 const spenderAddress = "BackupContractAddress"; // change this accordingl [Important] @0xn4utilus

// Call the approve function
const approveTx = await token.approve(spenderAddress, funds);
await approveTx.wait();
console.log(`Approval done for address: ${spenderAddress}`);
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
   console.error(error);
   process.exit(1);
 });