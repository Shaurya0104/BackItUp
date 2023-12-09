const fs = require('fs')
const hre = require('hardhat')

async function main() {

    const [deployer] = await ethers.getSigners()
    const ModuleFactory = await hre.ethers.getContractFactory("SafeModuleFactory");
    const moduleFactory = await ModuleFactory.deploy();
    await moduleFactory.deployed();
    console.log("Final address: ", moduleFactory.address);


}

main()
    .then( () => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

    