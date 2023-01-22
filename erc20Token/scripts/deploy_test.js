const { ethers } = require("hardhat");



async function main() {
    // Connect to Goerli testnet
    const goerli = await ethers.getDefaultProvider("goerli");

    // Deploy the contract
    const MyToken = await ethers.getContractFactory("MyToken");
    const contract = await MyToken.deploy();
    await contract.deployed();

    // Mint tokens to an address
    await contract.mint("0x0ad4de31fc1E1e01Eaaf815dA18690441190f7ed", "10000");

    // Transfer tokens to another address
    await contract.transfer("0xb7ddd820147B57F1405F42Dd4C660e30d0999e1a", "100");
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
