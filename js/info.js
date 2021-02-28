// Smart contract Address
const contractAddress = "0xaed85324389c1C987CAc214AdE70d33Cf02C732F";
// ABI  (Application Binary Interface) for smart contract
const abiInfo = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "_username",
				"type": "string"
			}
		],
		"name": "emitUsername",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_walletAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "enum ssfrolic_week4assignment.ProgramLevel",
				"name": "_programLevel",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "_blockchainTrackEnrolled",
				"type": "bool"
			}
		],
		"name": "addStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "removeStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "studentCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "students",
		"outputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "enum ssfrolic_week4assignment.ProgramLevel",
				"name": "programLevel",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "blockchainTrackEnrolled",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];