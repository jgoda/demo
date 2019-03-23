var express = require('express');
var router = express.Router();

var chain = require('../server/chain/chain.js');
let uploadDir = __dirname + "/../scrubFolder/";


let processor = require('../server/processor');

/* GET home page. */
router.get('/setting', function (req, res, next) {
    chain.getConsentList('', function (err, consent) {
        res.render('subscriber', {consent});
    });

});
router.get('/login', function (req, res) {
    res.render('login', {});

});
router.get('/scrubFile', function (req, res) {
    let success = req.query.success || false;
    res.render('fileUpload', {success: success});

});

router.get('/bulkPref', function (req, res) {
    let success = req.query.success || false;
    res.render('prefUpload', {success: success});

});

router.get('/bulkConsents', function (req, res) {
    let success = req.query.success || false;
    res.render('consentsUpload', {success: success});
});

router.get('/deScrub', function (req, res) {
    let success = req.query.success || false;
    res.render('tmvFunction', {success: success});

});


router.get('/register', function (req, res) {
    res.render('register', {});

});

router.get('/custConsent', function (req, res) {
    let contentTemplates = {'contentTemplateID': 'CONTENT1','contentTemplateID': 'CONTENT2','contentTemplateID': 'CONTENT3'}
    let consentTemplates = {'consentTemplateID': 'CONSENT1','consentTemplateID': 'CONSENT2','consentTemplateID': 'CONSENT3'}
    res.render('getConsent', {contentTemplates:contentTemplates, consentTemplates:consentTemplates});
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

router.get('/descrubdownload', function (req, res) {

    let outputFile = uploadDir + 'de_scrubbing_output.xlsx';
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
        res.render('headers', {headers});
    })
});

router.get('/consent', function (req, res) {
    let entity = req.query.entityid;
    console.log("In consents. entity = ", entity);
    chain.getConsentForEntity(entity, function (err, consents) {
        res.render('consentTemplate', {templates: consents});
    })
});

router.get('/content', function (req, res) {
    let entity = req.query.entityid;
    console.log("In contents. entity = ", entity);
    chain.getContentForEntity(entity, function (err, contents) {
        res.render('content', {templates: contents});
    })
});

router.get('/header', function (req, res) {
    let header = req.query.header;
    console.log("header in index.js", header);
    res.render('deleteheaders', {headerval: header});
});

router.get('/transferHeaders/:header', function (req, res) {
    let header = req.params.header;
    res.render('transferHeaders', {headerval: header});
    chain.getHeaderByHeaderName(header, function (err, headers) {
        console.log("transferHeaders", headers);
        res.render('transferHeaders', {headers});
    })
});

router.get('/content', function (req, res) {
    let content = req.query.content;
    console.log("template in index.js", content);
    chain.getContentTemplatebyName(content, function (err, templates) {
        console.log("deleteContent", templates);
        res.render('deleteContent', {templates});
    })
});

router.get('/getconsent', function (req, res) {
    let template = req.query.content;
    console.log("template in index.js", template);
    chain.getConsentTemplatesbyTemplateID(template, function (err, consentTemplates) {
        console.log("getConsent", consentTemplates);
        res.render('getConsent', {consentTemplates});
    })
});

router.get('/transfer', function (req, res) {
    let header = req.query.header;
    console.log("header in index.js", header);
    chain.getConsentTemplatebyName(header, function (err, headers) {
        console.log("transferHeaders", headers);
        res.render('transferHeaders', {headers});
    })
});

router.get('/templates', function (req, res) {
    let header = req.query.header;
    chain.getTemplatesForHeader(header, function (err, templates) {
        res.render('templates', {templates});
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
        res.render('complaintStatus',complaints);
    });

});

router.get('/tspHome', function (req, res) {
    let TSPID = req.query.TSP;
    console.log("TSPID in index.js", TSPID);
    res.render('TSP_main', {tspID: TSPID});
});

router.get('/tspComplaints', function (req, res) {
    let TSPID = req.query.TSP;
    console.log("TSPID in index.js", TSPID);
    chain.getComplaintsbyTSP(TSPID, function (err, complaints) {
        console.log("tspComplaints", complaints);
        res.render('tspComplaints', {complaints});
    })
});

router.get('/complaintDetails', function (req, res) {
    let compID = req.query.complaint;
    console.log("TSPID in index.js", compID);
    chain.getComplaintDetails(compID, function (err, compl) {
        console.log("complaintsDetails", compl);
        res.render('complaintsDetails', {compl});
    })
});

module.exports = router;
