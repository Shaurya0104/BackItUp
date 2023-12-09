// scripts/deploy.js
const { ethers } = require("hardhat");
const { exec } = require("child_process");

async function main() {
 const ProjName = await ethers.getContractFactory("ProjName");
 const projName = await ProjName.deploy(0); // Set initial service fee
 const Token = await ethers.getContractFactory("SolRiders");
 const token = await Token.deploy()
 const tokenAddress = token.getAddress();
 console.log("ProjName deployed to:", projName.target);
 const verifier = await ethers.deployContract("Verifier");
 await verifier.waitForDeployment();

 const _verifierAddress = verifier.getAddress();
 // You can add more interactions here if needed
 const appId = BigInt(
  "609246576999142755181287323616835836365844250624"
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
 const executor1Nullifier = "5465468435464854";
 const executor2Nullifier = "654546444646846464";
 const beneficiaryNullifier = "654546446498";
 
 const deployBackupContractTx = await projName.deployBackupContract(
  tokenAddress,
  funds,
  delay,
  verifierAddress,
  executor1Nullifier,
  executor2Nullifier,
  beneficiaryNullifier
 );
 


}

main()
 .then(() => process.exit(0))
 .catch((error) => {
   console.error(error);
   process.exit(1);
 });