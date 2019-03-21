'use-strict'

/*Local Imports*/
let logManager = require('../../utils/log-manager.js');
let chainManager = require('../../server/chain/chain.js');
let processor = require('../../server/processor');

exports.saveHeader = function (req, res) {

    console.log("saveHeader");

    let header = req.body.header;
    let entity = req.body.entity;

    chainManager.getHeaderByHeaderName(header, function (err, data) {
        if (data) {
            let result = {
                status: false,
                message: 'Header already exists'
            };
            return res.send(result);
        } else {
            chainManager.saveHeader(header, entity, function (err, data) {
                if (err) {
                    let result = {
                        status: false,
                        message: 'Something went wrong'
                    };
                    return res.send(result);
                }
                let result = {
                    status: true,
                    message: 'Header registered'
                };
                return res.send(result);
            })
        }
    })
};

exports.sendDeleteHeader = function(req, res) {
    console.log("delete header");
    let header = req.body.header;
    //let header = "HDR4";
    console.log("header in header-processor", header);
    chainManager.sendDeleteHeader(header, function (err, data) {
        console.log(data);
        if(data) {
            let result = {
                status: false,
                message: 'Deletion failed'
            };
            res.send(result);
        }
        else {
            let result = {
                status: true,
                message: 'Header deleted'
            };
            res.send(result);
        }
    })
};

exports.sendTransferHeader = function(req, res) {
    console.log("transfer header");
    let header = 'resource:org.example.biznet.headers#'+req.body.headerval;
    let newOwner = 'resource:org.example.biznet.telemarketer#'+req.body.newEntityID;
    
    let transferTransaction = {
        $class: 'org.example.biznet.headerTransfer',
        'regHeader': header,
        'new_tmOwner': newOwner
    };

    let headerTransferRequestObject = {
        url: 'http://localhost:3000/api/headerTransfer',
        headers: {
		'Accept': 'application/json'
            }
    };
    headerTransferRequestObject['method'] = 'POST';
    headerTransferRequestObject['body'] = transferTransaction;
    headerTransferRequestObject['json'] = true;
    chainManager.transferHeaderTransaction(headerTransferRequestObject, function(err,data){
        if(data){
            let result = {
                status: true,
                message: 'Header transfer transaction completed'
            };
            return res.send(result);
        }
        else {
            let result = {
                status: false,
                message: 'Header transfer transaction failed. Please try again'
            };
            return res.send(result);
        }
    })
    /*request.fetchData(headerTransferRequestObject, function (err, response) {
        console.log('header transfer transaction',err,response);
    })*/
}

exports.sendDeleteTemplate = function(req, res) {
    console.log("delete content template");
    let template = req.query.templateval;
    //let header = "HDR3";
    console.log("header in header-processor", template);
    chainManager.sendDeleteTemplate(template, function (err, data) {
        console.log(data);
        if(data) {
            let result = {
                status: false,
                message: 'Deletion failed'
            };
            res.send(result);
        }
        else {
            let result = {
                status: true,
                message: 'Header deleted'
            };
            res.send(result);
        }
    })
};