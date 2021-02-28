// Enrollment Form
const enrollmentForm = document.forms[0];
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

async function getOwner(){
    var owner = await window.EnrollmentContract.methods.owner().call();
    console.log(owner);
}

// Enrollment form submit event listener
enrollmentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form data
    const formData = new FormData(this);
    // Get entries
    const entries = formData.entries();
    //Make object of entries
    const data = Object.fromEntries(entries);

    console.log(entries);
    console.log(data);
    //getOwner();

    window.EnrollmentContract.methods.addStudent(data["username"],data["address"],data["age"],data["email"],data["programLevel"],data["blockchainEnrolled"]).send({from: theAccounts[0]});
    /*
    //Send form data to contract
    fetch("https://",{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    //Call Success Popup and refresh
    .then()
    //Call Failure Popup with error
    .catch();
    */
});