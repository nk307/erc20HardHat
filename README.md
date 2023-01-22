Deploying erc20 token which allows mint, transfer, and burn for a custom token.

Deployment Environment - Goerli Test Network
Contract Address - "0x5bb8970Cd73A720f0B51542b083F7e7CeD068221"

Installation Steps


```npm install```

Creating the erc20 smart contract

Compile the smart contract

```npx hardhat compile```

Setup the Config File
hardhat.config.js
```
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = "ADD_YOUR_PRIVATE_KEY_HERE"

module.exports = {
  solidity: "0.7.3",
  networks: {
  	ropsten: {
  		url: `YOUR_NETWORK_PROVIDER`,
  		accounts: [`0x${Private_Key}`]
  	}
  }
};
```

Deployment

```npx hardhat run scripts/deploy.js --network goerli```
