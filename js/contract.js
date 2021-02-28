// Web3 initialization
this.web3 = new Web3(
    (window.web3 && window.web3.currentProvider) ||
    new web3.providers.HttpProvider(this.Contract.endpoint));
// Enable MetaMask login
window.ethereum.enable();

// Store metamask account address
web3.eth.getAccounts().then(function(acc){ theAccounts = acc});

// Connect to smart contract
var EnrollmentContract = new web3.eth.Contract(abiInfo,contractAddress);
// set contract network to Ropsten test network
EnrollmentContract.defaultChain = "ropsten";
