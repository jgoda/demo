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

    let outputFile = uploadDir + 'scrubbed_output.xlsx';
    res.download(outputFile);

});

module.exports = router;
