const fs = require('fs');
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(deployer);
  let _owner = "0x6729c133C613733641eb784E498770A1097F4AF4"; // Put the owner's address here
  let _safe = "0xb01DCBD8D3B0A8FDf122329daa54CbFE43890F22"; // Put the safe's address here
  let router = "0xb83E47C2bC239B3bf370bc41e1459A34b41238D0"; // Put the router's address here
  let _executors = ["0xa1cb4daB0eE01Ea32ca8a9F63ef894Dda7822Cab", "0x158e02e4A130AFD22426bc3cCA06dD346f4f54Ea"]; // Put the executor's addresses here
  let _periodUntilRecovery = 1; // Put the recovery's period here
  let _destination = "0xd5a302E69943dc4B2f295bB1e88e604b170317B5"; // Put the destination's address here
  let _args = `const address = "${_owner}";\n`;
  let _token = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
  let _allowance = 100000;
  let _verifier = "0x955987BBC2614c6F41977C66cc89f8E6866F6D76";
  let _firstNullifier = '8342611605558802468582569879314199988106501944757509573088422314952680209705';
  let _secondNullifier = '10655706780475660315368236249496825506536068114802302124989010119522849142676';
  let _thirdNullifier = '9999046083161807991207948004694129209214019014658775265663935807423678754738';
  // read source.js file as string
  let _pushAddress = '0x0c34d54a09cfe75bccd878a469206ae77e0fe6e7';
  let _pushChannel = '0xFD60035634DdE0BCb90e96ecD6D18d3c7Cde6a2B';
  let _source = fs.readFileSync("source.js", "utf8").toString();
  _source = _args + _source;
  console.log(_source);
  
  const MainModule = await hre.ethers.getContractFactory("RecoveryExecutionModule");
  // console.log(MainModule);
  const mainModule = await MainModule.deploy(
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
  console.log(mainModule);
    await mainModule.deployed();
  console.log("MainModule deployed to:", mainModule.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
