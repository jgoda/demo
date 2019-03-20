'use-strict'
let express = require('express');
let router = express.Router();

let apiHandler = require('./api-handler');

router.post('/addUser', apiHandler.userProcessor.addUser);
router.post('/uccType', apiHandler.userProcessor.updateTypeUcc);
router.post('/uccMode', apiHandler.userProcessor.updateModeOfCommunication);
router.post('/uccTime', apiHandler.userProcessor.updateBand);
router.post('/uccDay', apiHandler.userProcessor.updateDay);
router.post('/setting', apiHandler.userProcessor.getUserSettings);
router.post('/login', apiHandler.userProcessor.login);
router.post('/complaint', apiHandler.userProcessor.fileComplaint);
router.post('/scrubFile', apiHandler.fileProcessor.parseScrubFile);
router.post('/prefUpdate', apiHandler.fileProcessor.parsePreferencesFile);
router.post('/header', apiHandler.headerProcessor.saveHeader);
router.post('/saveHeader', apiHandler.headerProcessor.saveHeader);
router.post('/consentUpdate', apiHandler.fileProcessor.parseConsentsFile);
router.post('/deScrubFile', apiHandler.fileProcessor.deScrubFile);
router.post('/sendDeleteHeader', apiHandler.headerProcessor.sendDeleteHeader);
router.post('/deleteHeader', apiHandler.headerProcessor.sendDeleteHeader);
router.post('/transferHeader', apiHandler.headerProcessor.sendTransferHeader);
//router.post('/getConsents', apiHandler.userProcessor.getConsents);
//router.post('/subscribervalsget', apiHandler.userProcessor.subscribervalsget);

module.exports = router;