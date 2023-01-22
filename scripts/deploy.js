const { ethers } = require("hardhat");
const { string } = require("hardhat/internal/core/params/argumentTypes");
const Web3 = require('web3');
const provider = "https://frosty-tame-lambo.ethereum-goerli.discover.quiknode.pro/fe13ddc75d222446fa15e1dfa99048b441b811d2/"
const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));

async function main() {
	const [deployer] = await ethers.getSigners();

	console.log(
	"Deploying contracts with the account:",
	deployer.address
	);

	console.log("Account balance:", (await deployer.getBalance()).toString());
    const contractAddress = "0x5bb8970Cd73A720f0B51542b083F7e7CeD068221";
    const myContract = await ethers.getContractAt("erc20Token", contractAddress);
    console.log(myContract.address)

// Get total supply
        const supply = await myContract.totalSupply()
// console.log(web3.utils.fromWei(supply))
        var name = await myContract.name()
        console.log(name)
        var symbol = await myContract.symbol()
        console.log(symbol)
        // Mint Tokens
        var amt = Web3Client.utils.toWei("1000")
       //var mintRes1 = await myContract.mint("0x0ad4de31fc1E1e01Eaaf815dA18690441190f7ed", amt)
        // Fetch Balance
        var bal1 = await myContract.balanceOf("0x0ad4de31fc1E1e01Eaaf815dA18690441190f7ed")
        console.log(Web3Client.utils.fromWei(bal1.toString()))
        var transferAmt = Web3Client.utils.toWei("100")
        // Transfer Tokens
       // var trans1 = await myContract.transfer("0xb7ddd820147B57F1405F42Dd4C660e30d0999e1a","10000000000000000")
        var bal2 = await myContract.balanceOf("0xb7ddd820147B57F1405F42Dd4C660e30d0999e1a")
        console.log(Web3Client.utils.fromWei(bal2.toString()))    
        // Approve Allowance
        var allowance = await myContract.approve("0xb7ddd820147B57F1405F42Dd4C660e30d0999e1a","10000000000000000" ,{gasLimit: 3e7})
        // get allowance
        var allow1 = await myContract.allowance("0x0ad4de31fc1E1e01Eaaf815dA18690441190f7ed","0xb7ddd820147B57F1405F42Dd4C660e30d0999e1a")
        console.log(Web3Client.utils.fromWei(allow1.toString()))    
        // Transfer from owner's tokens with allowance
        var xferFrom = await myContract.transferFrom("0x0ad4de31fc1E1e01Eaaf815dA18690441190f7ed","0xb7ddd820147B57F1405F42Dd4C660e30d0999e1a","10000000000000000",{gasLimit: 3e7})
        var bal3 = await myContract.balanceOf("0xb7ddd820147B57F1405F42Dd4C660e30d0999e1a")
        console.log(Web3Client.utils.fromWei(bal3.toString()))    
       
// burn tokens
        var burn = await myContract.burn("1000000000000000000000",{gasLimit: 3e7})
        var bal3 = await myContract.balanceOf("0x0ad4de31fc1E1e01Eaaf815dA18690441190f7ed")
        console.log(Web3Client.utils.fromWei(bal3.toString()))
   
}

main()
  .then(() => process.exit(0))
  .catch(error => {
	console.error(error);
	process.exit(1);
  });