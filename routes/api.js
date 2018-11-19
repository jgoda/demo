'use-strict'
var express = require('express');
var router = express.Router();

let apiHandler = require('./api-handler');

router.post('/addUser', apiHandler.userProcessor.addUser);
router.post('/uccType', apiHandler.userProcessor.updateTypeUcc);
router.post('/uccMode', apiHandler.userProcessor.updateModeOfCommunication);
router.post('/uccTime', apiHandler.userProcessor.updateBand);
router.post('/uccDay', apiHandler.userProcessor.updateDay);
router.post('/setting', apiHandler.userProcessor.getUserSettings);
router.post('/login', apiHandler.userProcessor.login);
router.post('/complaint', apiHandler.userProcessor.fileComplaint);


module.exports = router;