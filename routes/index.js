var express = require('express');
var router = express.Router();

var chain = require('../server/chain/chain.js');
let uploadDir = __dirname + "/../scrubFolder/";


let processor = require('../server/processor');

/* GET home page. */
router.get('/setting', function (req, res, next) {
    res.render('index', {title: 'Express'});

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

router.get('/entity/register', function (req, res) {
    res.render('entityRegister', {});

});
router.get('/entity/login', function (req, res) {
    res.render('entityLogin', {});

});
router.get('/entity', function (req, res) {
    res.render('entity', {});

});
router.get('/headers/:entity', function (req, res) {
    let entity = req.params.entity;
    chain.getHeadersForEntity(entity, function (err, headers) {
        res.render('headers', {headers});
    })
});

router.get('/templates/:header', function (req, res) {
    let header = req.params.header;
    chain.getTemplatesForHeader(header, function (err, templates) {
        res.render('templates', {templates});
    })
});


module.exports = router;
