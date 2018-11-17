module.exports.userContract= [
    {
        "constant": false,
        "inputs": [
            {
                "name": "mobno",
                "type": "uint128"
            },
            {
                "name": "_newUsername",
                "type": "string"
            },
            {
                "name": "_newUserpoints",
                "type": "uint32"
            }
        ],
        "name": "changeUser",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "mobno",
                "type": "uint128"
            }
        ],
        "name": "getUserName",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "userName",
                "type": "string"
            },
            {
                "name": "userPoint",
                "type": "uint32"
            },
            {
                "name": "mobno",
                "type": "uint128"
            }
        ],
        "name": "addUser",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "users",
        "outputs": [
            {
                "name": "id",
                "type": "uint128"
            },
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "point",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "mobno",
                "type": "uint128"
            }
        ],
        "name": "getUser",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getUserlist",
        "outputs": [
            {
                "name": "",
                "type": "uint128[]"
            },
            {
                "name": "",
                "type": "uint32[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_uName",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_uPoints",
                "type": "uint32"
            },
            {
                "indexed": false,
                "name": "_uID",
                "type": "uint128"
            }
        ],
        "name": "addedUser",
        "type": "event"
    }
];