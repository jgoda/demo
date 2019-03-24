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
router.post('/submitComplaint', apiHandler.userProcessor.submitComplaint)
router.post('/complaint', apiHandler.userProcessor.submitComplaint);
router.post('/scrubFile', apiHandler.fileProcessor.parseScrubFile);
router.post('/prefUpdate', apiHandler.fileProcessor.parsePreferencesFile);
router.post('/header', apiHandler.headerProcessor.saveHeader);
router.post('/saveHeader', apiHandler.headerProcessor.saveHeader);
router.post('/addConsentTemplate', apiHandler.headerProcessor.addConsentTemplate);
router.post('/consentUpdate', apiHandler.fileProcessor.parseConsentsFile);
router.post('/deScrubFile', apiHandler.fileProcessor.deScrubFile);
router.post('/sendDeleteHeader', apiHandler.headerProcessor.sendDeleteHeader);
router.post('/sendTransferHeader', apiHandler.headerProcessor.sendTransferHeader);
router.post('/sendDeleteConsentTemplate', apiHandler.headerProcessor.sendDeleteConsentTemplate);
router.post('/sendDeleteContentTemplate', apiHandler.headerProcessor.sendDeleteContentTemplate);
router.post('/addContentTemplate', apiHandler.headerProcessor.addContentTemplate);
router.post('/makeSubscriberExcelComplaints', apiHandler.fileProcessor.makeSubscriberComplaintsExcel);
router.post('/makeEntityComplaintsExcel', apiHandler.fileProcessor.makeEntityComplaintsExcel);
router.post('/callConfirmedComplainttoOAP', apiHandler.headerProcessor.callConfirmedComplainttoOAP);
router.post('/closeComplaintbyTAP', apiHandler.headerProcessor.closeComplaintbyTAP);
router.post('/closeComplaintbyOAP', apiHandler.headerProcessor.closeComplaintbyOAP);
router.post('/resolvedbyOAP', apiHandler.headerProcessor.resolvedbyOAP);
//router.post('/getConsents', apiHandler.userProcessor.getConsents);
//router.post('/subscribervalsget', apiHandler.userProcessor.subscribervalsget);

module.exports = router;