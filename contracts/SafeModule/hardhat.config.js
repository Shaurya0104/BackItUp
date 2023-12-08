require("@nomicfoundation/hardhat-toolbox");

const endpointUrl = "https://polygon-mumbai.infura.io/v3/714d9bb975a74fc7bd2abc58b6465b3a";
const privateKey = "b5d5a4b7dfe696a180ab4812aa0c7fe305671483cd0ff4779c52baeae1f220fd";
const endpointUrlPolygon = "https://polygon-mainnet.infura.io/v3/714d9bb975a74fc7bd2abc58b6465b3a";
const endpointUrlAvalanche = "https://avalanche-mainnet.infura.io/v3/714d9bb975a74fc7bd2abc58b6465b3a";
const endpointUrlSepolia = "https://sepolia.infura.io/v3/714d9bb975a74fc7bd2abc58b6465b3a";
// require("@tenderly/hardhat-tenderly");
module.exports = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: {
      snowtrace: "snowtrace", // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: "snowtrace",
        chainId: 43114,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan",
          browserURL: "https://avalanche.routescan.io"
        }
      }
    ]
  },
  networks: {
    mumbai: {
      url: endpointUrl,
      accounts: [privateKey],
    },
    polygon: {
      url: endpointUrlPolygon,
      accounts : [privateKey],
      gasPrice : 50000000000
    },
    avalanche : {
      url: endpointUrlAvalanche,
      accounts : [privateKey],
    },
    snowtrace: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      apiKey: {
        snowtrace: "snowtrace", // apiKey is not required, just set a placeholder
      },
      accounts: [privateKey]
    },
    sepolia : {
      url: endpointUrlSepolia,
      accounts : [privateKey],
    },
  },
};