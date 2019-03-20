var express = require('express');
var router = express.Router();

var chain = require('../server/chain/chain.js');
let uploadDir = __dirname + "/../scrubFolder/";


let processor = require('../server/processor');

/* GET home page. */
router.get('/setting', function (req, res, next) {
    res.render('subscriber', {title: 'Express'});

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

router.get('/complaint', function (req, res) {
    res.render('complaints', {});

});

router.get('/download', function (req, res) {

    let outputFile = uploadDir + 'scrubbing_output.xlsx';
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
    //console.log("entity = ", entity);
    res.render('entityLanding', {});
});


router.get('/headers/:entity', function (req, res) {
    let entity = req.params.entity;
    console.log("entity = ", entity);
    chain.getHeadersForEntity(entity, function (err, headers) {
        res.render('headers', {headers});
    })
});

router.get('/consent/:entity', function (req, res) {
    let entity = req.params.entity;
    console.log("In consents. entity = ", entity);
    chain.getConsentForEntity(entity, function (err, consents) {
        res.render('consent', {consents});
    })
});

router.get('/content/:entity', function (req, res) {
    let entity = req.params.entity;
    console.log("In contents. entity = ", entity);
    chain.getContentForEntity(entity, function (err, contents) {
        res.render('content', {contents});
    })
});

router.get('/header', function(req,res) {
    let header = req.query.header;
    console.log("header in index.js", header);
    res.render('deleteheaders',{headerval: header});
});

router.get('/transferHeaders/:header', function(req,res) {
    let header = req.params.header;
    res.render('transferHeaders',{headerval: header});
});

/*router.get('/templates/:header', function (req, res) {
    let header = req.params.header;
    chain.getTemplatesForHeader(header, function (err, templates) {
        res.render('templates', {templates});
    })
});*/

router.get('/backToScrubbingPage', function (req, res) {
    res.render('scrubbing', {});

});

router.get('/scrubbing', function (req, res) {
    res.render('scrubbing', {});
});

router.get('/gotoEntity', function (req, res) {
    res.render('entity', {});
});

router.get('/mainPage', function (req, res) {
    res.render('main', {});
});

router.get('/gotoSubscriber', function (req, res) {
    res.render('subscriber', {});
});

router.get('/sender/register', function (req, res) {
    res.render('senderRegister', {});

});

router.get('/gotoSender', function (req, res) {
    res.render('sender', {});
});

router.get('/sender/login', function (req, res) {
    res.render('senderLogin', {});

});
router.get('/senderlandingpage', function (req, res) {
    res.render('senderLandingPage', {});

});

module.exports = router;
