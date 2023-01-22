require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = process.env.Private_Key;

module.exports = {
  solidity: "0.8.0",
  networks: {
  	goerli: {
  		url: `https://frosty-tame-lambo.ethereum-goerli.discover.quiknode.pro/fe13ddc75d222446fa15e1dfa99048b441b811d2/`,
  		accounts: [`0x${Private_Key}`]
  	}
  },
  allowUnlimitedContractSize: true
};