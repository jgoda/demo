var express = require('express');
var router = express.Router();

var chain = require('../server/chain/chain.js');

let processor = require('../server/processor');

/* GET home page. */
router.get('/setting', function (req, res, next) {
    res.render('index', {title: 'Express'});

});
router.get('/login', function (req, res) {
    res.render('login', {});

});

router.get('/register', function (req, res) {
    res.render('register', {});

});
router.get('/complaint', function (req, res) {
    res.render('complaints', {});

});

module.exports = router;
