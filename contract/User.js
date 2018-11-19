module.exports.userContract = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_UCCcaller",
                "type": "uint128"
            }
        ],
        "name": "getComplaintslist",
        "outputs": [
            {
                "name": "",
                "type": "uint128[]"
            },
            {
                "name": "",
                "type": "uint16[]"
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
                "name": "_userName",
                "type": "string"
            },
            {
                "name": "_mobno",
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
        "constant": false,
        "inputs": [
            {
                "name": "_mobno",
                "type": "uint128"
            },
            {
                "name": "_blockt1",
                "type": "bool"
            },
            {
                "name": "_blockt2",
                "type": "bool"
            },
            {
                "name": "_blockt3",
                "type": "bool"
            },
            {
                "name": "_blockt4",
                "type": "bool"
            },
            {
                "name": "_blockt5",
                "type": "bool"
            },
            {
                "name": "_blockt6",
                "type": "bool"
            },
            {
                "name": "_blockt7",
                "type": "bool"
            },
            {
                "name": "_blockt8",
                "type": "bool"
            },
            {
                "name": "_blockt9",
                "type": "bool"
            }
        ],
        "name": "updateUserUCCTime",
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
                "name": "_mobno",
                "type": "uint128"
            }
        ],
        "name": "getUserUCCDay",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_mobno",
                "type": "uint128"
            }
        ],
        "name": "doesUserExist",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_mobno",
                "type": "uint128"
            }
        ],
        "name": "getUserUCCtype",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_mobno",
                "type": "uint128"
            }
        ],
        "name": "getUserUCCTime",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
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
                "name": "_mobno",
                "type": "uint128"
            },
            {
                "name": "_blockmon",
                "type": "bool"
            },
            {
                "name": "_blocktue",
                "type": "bool"
            },
            {
                "name": "_blockwed",
                "type": "bool"
            },
            {
                "name": "_blockthurs",
                "type": "bool"
            },
            {
                "name": "_blockfri",
                "type": "bool"
            },
            {
                "name": "_blocksat",
                "type": "bool"
            },
            {
                "name": "_blocksun",
                "type": "bool"
            },
            {
                "name": "_blocknational",
                "type": "bool"
            }
        ],
        "name": "updateUserUCCDay",
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
                "name": "_mobno",
                "type": "uint128"
            },
            {
                "name": "_consentno",
                "type": "uint128"
            }
        ],
        "name": "revokeUserConsent",
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
                "name": "_mobno",
                "type": "uint128"
            },
            {
                "name": "_blockvoice",
                "type": "bool"
            },
            {
                "name": "_blocksms",
                "type": "bool"
            },
            {
                "name": "_blockADrec",
                "type": "bool"
            },
            {
                "name": "_blockADlive",
                "type": "bool"
            },
            {
                "name": "_blockrobo",
                "type": "bool"
            }
        ],
        "name": "updateUserUCCMode",
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
                "name": "_mobno",
                "type": "uint128"
            }
        ],
        "name": "getUserConsentlist",
        "outputs": [
            {
                "name": "",
                "type": "uint128[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_mobno",
                "type": "uint128"
            }
        ],
        "name": "getUserUCCMode",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_UCCcaller",
                "type": "uint128"
            },
            {
                "name": "_complainant",
                "type": "uint128"
            }
        ],
        "name": "getComplaintdesc",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "_UCCcaller",
                "type": "uint128"
            },
            {
                "name": "_complainant",
                "type": "uint128"
            },
            {
                "name": "_type",
                "type": "uint16"
            },
            {
                "name": "_desc",
                "type": "string"
            }
        ],
        "name": "lodgeComplaint",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_mobno",
                "type": "uint128"
            },
            {
                "name": "_consentno",
                "type": "uint128"
            }
        ],
        "name": "addUserConsent",
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
                "name": "_mobno",
                "type": "uint128"
            },
            {
                "name": "_blockfin",
                "type": "bool"
            },
            {
                "name": "_block_real_estate",
                "type": "bool"
            },
            {
                "name": "_blockedu",
                "type": "bool"
            },
            {
                "name": "_blockhealth",
                "type": "bool"
            },
            {
                "name": "_blockgoods",
                "type": "bool"
            },
            {
                "name": "_blockent",
                "type": "bool"
            },
            {
                "name": "_blocktourism",
                "type": "bool"
            },
            {
                "name": "_blockfood",
                "type": "bool"
            }
        ],
        "name": "updateUserUCCType",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
