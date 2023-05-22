require("@nomiclabs/hardhat-ethers");

/* require("@nomicfoundation/hardhat-toolbox"); */

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "hardhat",
  networks: {
      hardhat: {
          blockGasLimit: 30_000_000,
      },
  },
};
