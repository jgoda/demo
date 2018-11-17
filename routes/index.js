var express = require('express');
var router = express.Router();

var chain = require('../server/chain/chain.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', address: chain.getAddress()});
});

router.get('/address', function (req, res) {
    return res.send({address: chain.getAddress(), users: chain.getUserlist()})
});
module.exports = router;
