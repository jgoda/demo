'use-strict'

/*Local Imports*/
let logManager = require('../../utils/log-manager.js');
let chainManager = require('../../server/chain/chain.js');
let processor = require('../../server/processor');

exports.saveHeader = function (req, res) {

    console.log("saveHeader");

    let header = req.body.header12;

    console.log("header", header);

    chainManager.getHeaderByHeaderName(header, function (err, data) {
        if (data) {
            let result = {
                status: false,
                message: 'Header already exists'
            };
            return res.send(result);
        } else {
            chainManager.saveHeader(header, "1", function (err, data) {
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

exports.addConsentTemplate = function (req, res) {

    console.log("addConsentTemplate");

    let consentTemplateMsg = req.body.consentTemplateMsg;
    let consentTemplateID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);


    chainManager.addConsentTemplate(consentTemplateID, consentTemplateMsg, function (err, data) {
        if (err) {
            let result = {
                status: false,
                message: 'Something went wrong'
            };
            return res.send(result);
        }
        let result = {
            status: true,
            message: 'Consent Template registered'
        };
        return res.send(result);
    })
};

exports.sendDeleteHeader = function (req, res) {
    console.log("delete header");
    let header = req.body.header;
    //let header = "HDR4";
    console.log("header in header-processor", header);
    chainManager.sendDeleteHeader(header, function (err, data) {
        console.log(data);
        if (data) {
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

exports.sendTransferHeader = function (req, res) {
    console.log("transfer header");
    let header = 'resource:org.example.biznet.headers#' + req.body.tfrheader;
    let newOwner = 'resource:org.example.biznet.telemarketer#' + req.body.newEnt;

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
    chainManager.transferHeaderTransaction(headerTransferRequestObject, function (err, data) {
        if (data) {
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

exports.sendDeleteConsentTemplate = function (req, res) {
    console.log("delete content template");
    let template = req.body.consentID;
    //let header = "HDR3";
    console.log("header in header-processor", template);
    chainManager.sendDeleteConsentTemplate(template, function (err, data) {
        console.log(data);
        if (data) {
            let result = {
                status: false,
                message: 'Deletion failed'
            };
            res.send(result);
        }
        else {
            let result = {
                status: true,
                message: 'Consent Template deleted'
            };
            res.send(result);
        }
    })
};

exports.addContentTemplate = function (req, res) {

    console.log("addContentTemplate");

    let contentTemplateMsg = req.body.contentTemplateMsg;
    let contentTemplateID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);


    chainManager.addContentTemplate(contentTemplateID, contentTemplateMsg, function (err, data) {
        if (err) {
            let result = {
                status: false,
                message: 'Something went wrong'
            };
            return res.send(result);
        }
        let result = {
            status: true,
            message: 'Content Template registered'
        };
        return res.send(result);
    })
};

exports.sendDeleteContentTemplate = function (req, res) {
    console.log("delete content template");
    let template = req.body.contentId;
    //let header = "HDR3";
    console.log("header in header-processor", template);
    chainManager.sendDeleteContentTemplate(template, function (err, data) {
        console.log(data);
        if (data) {
            let result = {
                status: false,
                message: 'Deletion failed'
            };
            res.send(result);
        }
        else {
            let result = {
                status: true,
                message: 'Content Template deleted'
            };
            res.send(result);
        }
    })
};


exports.callConfirmedComplainttoOAP = function (req, res) {
    console.log("complaint fwd to OAP");

    let complaintID = "wmejn"; //This detail needs to come from UI

    chainManager.getComplaintbyID(complaintID, function (err, complaintDetails) {
        let newComplaintDetails = complaintDetails;
        newComplaintDetails['uccStatus'] = 'TransferredtoOAP';
        chainManager.updateComplaintStatus(newComplaintDetails, function (err, data) {
            console.log(err, data);
            if (data) {
                let result = {
                    status: true,
                    message: 'Complaint status updated'
                };
                res.send(result);
            }
            else {
                let result = {
                    status: false,
                    message: 'Complaint status not updated'
                };
                res.send(result);
            }
        });
    });
};

exports.closeComplaintbyTAP = function (req, res) {
    console.log("close complaint by TAP");

    let complaintID = "wmejn"; //This detail needs to come from UI

    chainManager.getComplaintbyID(complaintID, function (err, complaintDetails) {
        let newComplaintDetails = complaintDetails;
        newComplaintDetails['uccStatus'] = 'ClosedbyTAP';
        chainManager.updateComplaintStatus(newComplaintDetails, function (err, data) {
            console.log(err, data);
            if (data) {
                let result = {
                    status: true,
                    message: 'Complaint status updated'
                };
                res.send(result);
            }
            else {
                let result = {
                    status: false,
                    message: 'Complaint status not updated'
                };
                res.send(result);
            }
        });
    });
}

exports.closeComplaintbyOAP = function (req, res) {
    console.log("close complaint by OAP");
    let complaintID = "wmejn"; //This detail needs to come from UI


    chainManager.getComplaintbyID(complaintID, function (err, complaintDetails) {
        let newComplaintDetails = complaintDetails;
        newComplaintDetails['uccStatus'] = 'ClosedbyOAP';
        chainManager.updateComplaintStatus(newComplaintDetails, function (err, data) {
            console.log(err, data);
            if (data) {
                let result = {
                    status: true,
                    message: 'Complaint status updated'
                };
                res.send(result);
            }
            else {
                let result = {
                    status: false,
                    message: 'Complaint status not updated'
                };
                res.send(result);
            }
        });
    });
}

exports.resolvedbyOAP = function (req, res) {
    console.log("close complaint by OAP");

    let complaintID = "wmejn"; //This detail needs to come from UI

    chainManager.getComplaintbyID(complaintID, function (err, complaintDetails) {
        let newComplaintDetails = complaintDetails;
        newComplaintDetails['uccStatus'] = 'Resolved';
        chainManager.updateComplaintStatus(newComplaintDetails, function (err, data) {
            console.log(err, data);
            if (data) {
                let result = {
                    status: true,
                    message: 'Complaint status updated'
                };
                res.send(result);
            }
            else {
                let result = {
                    status: false,
                    message: 'Complaint status not updated'
                };
                res.send(result);
            }
        });
    });
}