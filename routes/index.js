var express = require('express');
var router = express.Router();

var chain = require('../server/chain/chain.js');
let uploadDir = __dirname + "/../scrubFolder/";
let excelProcessor = require('../utils/excel-parser.js');


let processor = require('../server/processor');

/* GET home page. */
router.get('/setting', function (req, res, next) {
    chain.getConsentList('', function (err, consent) {
        res.render('subscriber', { consent });
    });

});
router.get('/login', function (req, res) {
    res.render('login', {});

});
router.get('/scrubFile', function (req, res) {
    let success = req.query.success || false;
    res.render('fileUpload', { success: success });

});

router.get('/bulkPref', function (req, res) {
    let success = req.query.success || false;
    res.render('prefUpload', { success: success });

});

router.get('/bulkConsents', function (req, res) {
    let success = req.query.success || false;
    res.render('consentsUpload', { success: success });
});

router.get('/deScrub', function (req, res) {
    let success = req.query.success || false;
    res.render('tmvFunction', { success: success });

});


router.get('/register', function (req, res) {
    res.render('register', {});

});

router.get('/custConsent', function (req, res) {
    let contentTemplates = {
        'contentTemplateID': 'CONTENT1',
        'contentTemplateID': 'CONTENT2',
        'contentTemplateID': 'CONTENT3'
    }
    let consentTemplates = {
        'consentTemplateID': 'CONSENT1',
        'consentTemplateID': 'CONSENT2',
        'consentTemplateID': 'CONSENT3'
    }
    res.render('getConsent', { contentTemplates: contentTemplates, consentTemplates: consentTemplates });
});


router.get('/complaint', function (req, res) {
    res.render('complaints', {});

});

router.get('/download', function (req, res) {

    let outputFile = uploadDir + 'scrubbing_output.xlsx';
    res.download(outputFile);

});
router.get('/complaintScrubDownload', function (req, res) {

    let outputFile = uploadDir + 'complaintScrubDownload.xlsx';
    res.download(outputFile);

});


router.get('/insurancedownload', function (req, res) {

    let outputFile = uploadDir + 'insurance_scrubbing_output.xlsx';
    res.download(outputFile);

});

router.get('/entertainmentdownload', function (req, res) {

    let outputFile = uploadDir + 'entertainment_scrubbing_output.xlsx';
    res.download(outputFile);

});

router.get('/tourismdownload', function (req, res) {

    let outputFile = uploadDir + 'tourism_scrubbing_output.xlsx';
    res.download(outputFile);

});

router.get('/goodsdownload', function (req, res) {

    let outputFile = uploadDir + 'goods_scrubbing_output.xlsx';
    res.download(outputFile);

});

router.get('/healthdownload', function (req, res) {

    let outputFile = uploadDir + 'health_scrubbing_output.xlsx';
    res.download(outputFile);

});

router.get('/educationdownload', function (req, res) {

    let outputFile = uploadDir + 'education_scrubbing_output.xlsx';
    res.download(outputFile);

});

router.get('/realestatedownload', function (req, res) {

    let outputFile = uploadDir + 'realestate_scrubbing_output.xlsx';
    res.download(outputFile);

});

router.get('/insurancedownload', function (req, res) {

    let outputFile = uploadDir + 'insurance_scrubbing_output.xlsx';
    res.download(outputFile);

});

router.get('/complaintSubscriberDownload', function (req, res) {

    let outputFile = uploadDir + 'subscriber_complaints_output.xlsx';
    res.download(outputFile);

});

router.get('/complaintEntityDownload', function (req, res) {

    let outputFile = uploadDir + 'entities_complaints_output.xlsx';
    res.download(outputFile);

});

router.get('/entity/register', function (req, res) {
    res.render('entityRegister', {});

});
router.get('/entity/login', function (req, res) {
    res.render('entityLogin', {});

});
router.get('/entity', function (req, res) {
    res.render('entity', {});

});

router.get('/landingPage', function (req, res) {
    res.render('entityLanding', {});
});


router.get('/headers', function (req, res) {
    let entity = req.query.entity;
    console.log("entity = ", entity);
    chain.getHeadersForEntity(entity, function (err, headers) {
        res.render('headers', { headers });
    })
});

router.get('/consent', function (req, res) {
    let entity = req.query.entityid;
    console.log("In consents. entity = ", entity);
    chain.getConsentForEntity(entity, function (err, consents) {
        res.render('consentTemplate', { templates: consents });
    })
});

router.get('/content', function (req, res) {
    let entity = req.query.entityid;
    console.log("In contents. entity = ", entity);
    chain.getContentForEntity(entity, function (err, contents) {
        res.render('content', { templates: contents });
    })
});

router.get('/header', function (req, res) {
    let header = req.query.header;
    console.log("header in index.js", header);
    res.render('deleteheaders', { headerval: header });
});

router.get('/transferHeaders/:header', function (req, res) {
    let header = req.params.header;
    res.render('transferHeaders', { headerval: header });
    chain.getHeaderByHeaderName(header, function (err, headers) {
        console.log("transferHeaders", headers);
        res.render('transferHeaders', { headers });
    })
});

router.get('/content', function (req, res) {
    let content = req.query.content;
    console.log("template in index.js", content);
    chain.getContentTemplatebyName(content, function (err, templates) {
        console.log("deleteContent", templates);
        res.render('deleteContent', { templates });
    })
});

router.get('/getconsent', function (req, res) {
    let template = req.query.content;
    console.log("template in index.js", template);
    chain.getConsentTemplatesbyTemplateID(template, function (err, consentTemplates) {
        console.log("getConsent", consentTemplates);
        res.render('getConsent', { consentTemplates });
    })
});

router.get('/transfer', function (req, res) {
    let header = req.query.header;
    console.log("header in index.js", header);
    chain.getConsentTemplatebyName(header, function (err, headers) {
        console.log("transferHeaders", headers);
        res.render('transferHeaders', { headers });
    })
});

router.get('/templates', function (req, res) {
    let header = req.query.header;
    chain.getTemplatesForHeader(header, function (err, templates) {
        res.render('templates', { templates });
    })
});

router.get('/backToScrubbingPage', function (req, res) {
    res.render('scrubbing1', {});

});

router.get('/scrubbing', function (req, res) {
    res.render('scrubbing1', {});
});

router.get('/gotoEntity', function (req, res) {
    res.render('entity', {});
});

router.get('/gotoTSP', function (req, res) {
    res.render('TSP', {});
});

router.get('/mainPage', function (req, res) {
    res.render('main', {});
});

router.get('/gotoSubscriber', function (req, res) {
    res.render('subscriber', {});
});

router.get('/fileComplaint', function (req, res) {
    res.render('fileComplaint', {});
});

router.get('/handleConsents', function (req, res) {
    res.render('handleConsents', {});
});

router.get('/handlePreferences', function (req, res) {
    res.render('handlePreferences', {});
});

router.get('/sender/register', function (req, res) {
    res.render('senderRegister', {});
});

router.get('/gotoSender', function (req, res) {
    res.render('sender', {});
});

router.get('/gotoComplaints', function (req, res) {
    res.render('complaints', {});
});

router.get('/sender/login', function (req, res) {
    res.render('senderLogin', {});

});
router.get('/senderlandingpage', function (req, res) {
    res.render('senderLandingPage', {});

});

router.get('/complaintStatus', function (req, res) {
    let sub = req.body.phone;
    console.log('in complaint status in index.js phone is', sub)
    chain.getComplaintsforSubscriber(sub, function (err, complaints) {
        res.render('complaintStatus', complaints);
    });

});

router.get('/tspHome', function (req, res) {
    let TSPID = req.query.TSP;
    console.log("TSPID in index.js", TSPID);
    res.render('TSP_main', { tspID: TSPID });
});

router.get('/tspComplaints', function (req, res) {
    let TSPID = req.query.TSP;
    console.log("TSPID in index.js", TSPID);
    chain.getComplaintsbyTSPTAP(TSPID, function (err, complaints) {

        for (let i = 0; i < complaints.length; i++) {
            let complaint = complaints[i];
            if (complaint['uccStatus'] === 'Recorded' && complaint['TAP'] === ('resource:org.example.biznet.TSP#' + TSPID)) {
                complaint['confirmCall'] = true;
                complaint['confirmScrubbing'] = false;
                console.log('confirmCall', complaint['confirmCall']);
                console.log('confirmScrubbing', complaint['confirmScrubbing']);
            } else if (complaint['uccStatus'] === 'TransferredtoOAP' && complaint['OAP'] === TSPID) {
                complaint['confirmScrubbing'] = true;
                complaint['confirmCall'] = false;
                console.log('confirmCall', complaint['confirmCall']);
                console.log('confirmScrubbing', complaint['confirmScrubbing']);
            }
        }
        console.log("tspComplaints", complaints);
        let Tacc = "resource:org.example.biznet.TSP#" + TSPID;
        chain.getComplaintsbyTSPOAP(TSPID, function (err, complaints1) {

            for (let i = 0; i < complaints1.length; i++) {
                let complaint = complaints1[i];
                if (complaint['uccStatus'] === 'Recorded' && complaint['TAP'] === ('resource:org.example.biznet.TSP#' + TSPID)) {
                    complaint['confirmCall'] = true;
                } else if (complaint['uccStatus'] === 'TransferredtoOAP' && complaint['OAP'] === TSPID) {
                    complaint['confirmScrubbing'] = true;
                }
            }
            res.render('tspComplaints', { TSPID: Tacc, complaints: complaints, complaints1: complaints1 });
        })
    })
});

router.get('/complaintDetails', function (req, res) {
    let compID = req.query.complaint;
    let scrubbingID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    console.log("TSPID in index.js", compID);
    chain.getComplaintDetails(compID, function (err, compl) {
        console.log("complaintsDetails", compl);
        let tspTAP = compl['TAP'].substr(1 + compl['TAP'].indexOf("#"));
        let DateofCall = compl['datentime'].substr(0, 10);
        let TimeofCall = compl['datentime'].substr(11, 12);

        console.log('tspTAP, date, time', tspTAP, DateofCall, TimeofCall);
        chain.getComplaintsforSubscriber(compl['complainant'], function (err, subsData) {
            console.log('Complaints data for subscriber received', subsData);
            excelProcessor.createExcelFromJson(uploadDir, 'subscriber_complaints_output.xlsx', 'Sheet', subsData, Object.keys(subsData[0]));
            let uccEntity = compl['complainee'].substr(1 + compl['complainee'].indexOf("#"));
            getComplaintsByEntity(uccEntity, function (err, entsData) {
                excelProcessor.createExcelFromJson(uploadDir, 'entities_complaints_output.xlsx', 'Sheet', entsData, Object.keys(entsData[0]));

                console.log("inside-most function");
                res.render('complaintsDetails', { compl: compl, scrubbingID: scrubbingID, tspTAP: tspTAP, callDate: DateofCall, callTime: TimeofCall });
            })
        });
    })
});

function getComplaintsByEntity(entityID, cb) {
    let complaintsList = [];
    chain.getHeadersForEntity(entityID, function (err, headersList) {
        var index = 0;
        parseHeadersforComplaintsbyEntity(index, headersList, complaintsList, function (err, data) {
            console.log("returned data in getComplaintsByEntity", data);
            return cb(err, data);
        })

    });
}

function parseHeadersforComplaintsbyEntity(index, headersList, complaintsList, cb) {
    console.log("index=", index);
    console.log("complaintsList = ", complaintsList);
    console.log("headersList=", headersList[index]);
    if (index < headersList.length) {
        chain.getComplaintsbyHeader(headersList[index]['headerstr'], function (err, indvHdrComplaints) {
            let formatindex = 0;
            let result = [];
            formatEntitiesComplaints(formatindex, indvHdrComplaints, result, function (err, formattedComplaints) {
                complaintsList = complaintsList.concat(formattedComplaints);
                index++;
                parseHeadersforComplaintsbyEntity(index, headersList, complaintsList, cb);
            })
        });
    }
    else {
        cb(null, complaintsList);
    }
};

function formatEntitiesComplaints(formatindex, data1, result, cb) {
    if (formatindex < data1.length) {
        let cell = {
            'complaintID': data1[formatindex]['complaintID'],
            'uccHeader': data1[formatindex]['uccHeader'],
            'OAP': data1[formatindex]['OAP'],
            'complainee': data1[formatindex]['complainee'].substr(1 + data1[formatindex]['complainee'].indexOf("#")),
            'rtn': data1[formatindex]['rtn'],
            'DateofCall': data1[formatindex]['datentime'].substr(0, 10),
            'TimeofCall': data1[formatindex]['datentime'].substr(11, 12),
            'description': data1[formatindex]['description'],
            'uccStatus': data1[formatindex]['uccStatus'],
            'TAP': data1[formatindex]['TAP'].substr(1 + data1[formatindex]['TAP'].indexOf("#")),
            'complainant': data1[formatindex]['complainant'].substr(1 + data1[formatindex]['complainant'].indexOf("#"))
        }
        result.push(cell);
        formatindex++;
        formatEntitiesComplaints(formatindex, data1, result, cb);
    }
    else {
        cb(null, result)
    }

}


router.get('/confirmCall', function (req, res) {
    let compID = req.query.complaint;
    chain.getComplaintDetails(compID, function (err, compl) {
        let tspTAP = compl['TAP'].substr(1 + compl['TAP'].indexOf("#"));
        let DateofCall = compl['datentime'].substr(0, 10);
        let TimeofCall = compl['datentime'].substr(11, 12);
        console.log("complaintsDetails", compl);
        res.render('complaintConfirmCall', { compl, tspTAP, DateofCall, TimeofCall });
    })

});

router.get('/confirmScrubbing', function (req, res) {
    let compID = req.query.complaint;
    chain.getComplaintDetails(compID, function (err, compl) {

        let tspTAP = compl['TAP'].substr(1 + compl['TAP'].indexOf("#"));
        let DateofCall = compl['datentime'].substr(0, 10);
        let TimeofCall = compl['datentime'].substr(11, 12);
        console.log("complaintsDetails", compl);
        res.render('complaintConfirmScrubbing', { compl, tspTAP, DateofCall, TimeofCall });
    })
});

module.exports = router;
