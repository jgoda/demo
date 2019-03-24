'use-strict'

/*Local Imports*/
let logManager = require('../../utils/log-manager.js');
let chainManager = require('../../server/chain/chain.js');
let processor = require('../../server/processor');


/*Global Vars*/
let logger = logManager.getLogger();

exports.updateTypeUcc = function (req, res) {
    let phone = req.body.phone;
    let subscriberDets = {
        $class: 'org.example.biznet.subscriber',
        'tsp': 'resource:org.example.biznet.TSP#TSP1',
        'uccInsurance': req.body.insurance,
        'uccRealstate': req.body.realState,
        'uccEducation': req.body.education,
        'uccHealth': req.body.health,
        'uccGood': req.body.goods,
        'uccEnt': req.body.ent,
        'uccTourism': req.body.tourism,
        'uccFood': req.body.food,
        'mocVoice': req.body.voice,
        'mocSMS': req.body.sms,
        'mocADrec': req.body.ADrec,
        'mocADlive': req.body.ADlive,
        'mocRobo': req.body.robo,
        'bandT1': req.body.t1,
        'bandT2': req.body.t2,
        'bandT3': req.body.t3,
        'bandT4': req.body.t4,
        'bandT5': req.body.t5,
        'bandT6': req.body.t6,
        'bandT7': req.body.t7,
        'bandT8': req.body.t8,
        'bandT9': req.body.t9,
        'dayMon': req.body.mon,
        'dayTue': req.body.tue,
        'dayWed': req.body.wed,
        'dayThus': req.body.thus,
        'dayFri': req.body.fri,
        'daySat': req.body.sat,
        'daySun': req.body.sun,
        'datNat': req.body.nat,
        'consentnos': []
    };

    var number = 1;
    chainManager.updateSubscriberDetails(phone, subscriberDets, number, function (err, flag) {
        if (flag === true) {
            res.send({ success: true, message: 'Settings Updated' });
        } else {
            res.send({ success: false, message: 'User does not exists' });
        }

    });
};

exports.updateModeOfCommunication = function (req, res) {
    let phone = req.body.phone;
    let subscriberDets = {
        $class: 'org.example.biznet.subscriber',
        'tsp': 'resource:org.example.biznet.TSP#TSP1',
        'uccInsurance': req.body.insurance,
        'uccRealstate': req.body.realState,
        'uccEducation': req.body.education,
        'uccHealth': req.body.health,
        'uccGood': req.body.goods,
        'uccEnt': req.body.ent,
        'uccTourism': req.body.tourism,
        'uccFood': req.body.food,
        'mocVoice': req.body.voice,
        'mocSMS': req.body.sms,
        'mocADrec': req.body.ADrec,
        'mocADlive': req.body.ADlive,
        'mocRobo': req.body.robo,
        'bandT1': req.body.t1,
        'bandT2': req.body.t2,
        'bandT3': req.body.t3,
        'bandT4': req.body.t4,
        'bandT5': req.body.t5,
        'bandT6': req.body.t6,
        'bandT7': req.body.t7,
        'bandT8': req.body.t8,
        'bandT9': req.body.t9,
        'dayMon': req.body.mon,
        'dayTue': req.body.tue,
        'dayWed': req.body.wed,
        'dayThus': req.body.thus,
        'dayFri': req.body.fri,
        'daySat': req.body.sat,
        'daySun': req.body.sun,
        'datNat': req.body.nat,
        'consentnos': []
    };

    var number = 2;
    console.log(subscriberDets);
    chainManager.updateSubscriberDetails(phone, subscriberDets, number, function (err, flag) {
        if (flag === true) {
            res.send({ success: true, message: 'Settings Updated' });
        } else {
            res.send({ success: false, message: 'User does not exists' });
        }

    });
};

exports.updateBand = function (req, res) {
    let phone = req.body.phone;
    let subscriberDets = {
        $class: 'org.example.biznet.subscriber',
        'tsp': 'resource:org.example.biznet.TSP#TSP1',
        'uccInsurance': req.body.insurance,
        'uccRealstate': req.body.realState,
        'uccEducation': req.body.education,
        'uccHealth': req.body.health,
        'uccGood': req.body.goods,
        'uccEnt': req.body.ent,
        'uccTourism': req.body.tourism,
        'uccFood': req.body.food,
        'mocVoice': req.body.voice,
        'mocSMS': req.body.sms,
        'mocADrec': req.body.ADrec,
        'mocADlive': req.body.ADlive,
        'mocRobo': req.body.robo,
        'bandT1': req.body.t1,
        'bandT2': req.body.t2,
        'bandT3': req.body.t3,
        'bandT4': req.body.t4,
        'bandT5': req.body.t5,
        'bandT6': req.body.t6,
        'bandT7': req.body.t7,
        'bandT8': req.body.t8,
        'bandT9': req.body.t9,
        'dayMon': req.body.mon,
        'dayTue': req.body.tue,
        'dayWed': req.body.wed,
        'dayThus': req.body.thus,
        'dayFri': req.body.fri,
        'daySat': req.body.sat,
        'daySun': req.body.sun,
        'datNat': req.body.nat,
        'consentnos': []
    };

    var number = 3;
    chainManager.updateSubscriberDetails(phone, subscriberDets, number, function (err, flag) {
        if (flag === true) {
            res.send({ success: true, message: 'Settings Updated' });
        } else {
            res.send({ success: false, message: 'User does not exists' });
        }

    });
};

exports.updateDay = function (req, res) {
    let phone = req.body.phone;
    let subscriberDets = {
        $class: 'org.example.biznet.subscriber',
        'tsp': 'resource:org.example.biznet.TSP#TSP1',
        'uccInsurance': req.body.insurance,
        'uccRealstate': req.body.realState,
        'uccEducation': req.body.education,
        'uccHealth': req.body.health,
        'uccGood': req.body.goods,
        'uccEnt': req.body.ent,
        'uccTourism': req.body.tourism,
        'uccFood': req.body.food,
        'mocVoice': req.body.voice,
        'mocSMS': req.body.sms,
        'mocADrec': req.body.ADrec,
        'mocADlive': req.body.ADlive,
        'mocRobo': req.body.robo,
        'bandT1': req.body.t1,
        'bandT2': req.body.t2,
        'bandT3': req.body.t3,
        'bandT4': req.body.t4,
        'bandT5': req.body.t5,
        'bandT6': req.body.t6,
        'bandT7': req.body.t7,
        'bandT8': req.body.t8,
        'bandT9': req.body.t9,
        'dayMon': req.body.mon,
        'dayTue': req.body.tue,
        'dayWed': req.body.wed,
        'dayThus': req.body.thus,
        'dayFri': req.body.fri,
        'daySat': req.body.sat,
        'daySun': req.body.sun,
        'datNat': req.body.nat,
        'consentnos': []
    };

    var number = 4;
    chainManager.updateSubscriberDetails(phone, subscriberDets, number, function (err, flag) {
        if (flag === true) {
            res.send({ success: true, message: 'Settings Updated' });
        } else {
            res.send({ success: false, message: 'User does not exists' });
        }

    });
};

exports.addUser = function (req, res) {
    let phone = req.body.phone;
    let name = req.body.name;
    let tsp = "TSP1";

    chainManager.addUser(name, phone, tsp, function (err, flag) {
        console.log(flag);
        if (flag === true) {
            res.send({ success: true, message: 'User Added Successfully' });
        } else {
            res.send({ success: false, message: 'User already exists' });
        }
    });


};

exports.getConsents = function (reg, res) {
    let phone = req.body.phone;
    let conTable = req.body.consentsTable;

    chainManager.getConsentList(phone, function (err, data) {
        cb(err, data);
    })
}

exports.getUserSettings = function (req, res) {
    let phone = req.body.phone;

    chainManager.getSubscriberDetails(phone, function (err, data) {
        console.log("Subscriber details got", data);
        res.send(data);
    })

};

exports.login = function (req, res) {
    let phone = req.body.phone;
    chainManager.doesUserExist(phone, function (err, flag) {
        if (flag === true) {
            res.send({ success: true, message: 'User already exists' });
        } else {
            res.send({ success: false, message: 'User does not exists' });
        }
    })
};

exports.submitComplaint = function (req, res) {

    let uccHeader = "HDR1";//HDR1 is the header name. Must come from UI
    let complainant = "resource:org.example.biznet.subscriber#9012345678"; //9012345678 is the subscriber mobile number. Must come from UI
    let uccDateTime = "12/03/2019 04:05:34";//DateTime at which complaint was filed. Must come from UI
    let complaintID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    let uccStatus = "Recorded"; //If current DateTime is within 3 days of uccDateTime, uccStatus = Recorded, else uccStatus = convertertoReport

    let complainant_phone = complainant.substr(1 + complainant.indexOf("#"));
    chainManager.getSubscriberDetails(complainant_phone, function (err, subscriberData) {
        let uccTAP = subscriberData['tsp'];
        console.log(subscriberData);
        chainManager.getHeaderByHeaderName(uccHeader, function (err1, headerDetails) {
            let uccComplainee = headerDetails['telemarketer_owner'];
            let uccTMname = uccComplainee.substr(1 + uccComplainee.indexOf("#"));
            chainManager.getTMbyTMname(uccTMname, function (err, TM_vals) {
                let uccOAP = TM_vals['serviceProvider'].substr(1+TM_vals['serviceProvider'].indexOf('#'));
                chainManager.lodgeComplaint(complaintID, uccHeader, uccOAP, uccComplainee, uccDateTime, uccStatus, uccTAP, complainant, function (err, data) {
                    /* JSON response
                    { '$class': 'org.example.biznet.complaint',
                        complaintID: 'phxwc',
                        uccHeader: 'HDR1',
                        OAP: 'resource:org.example.biznet.TSP#TSP1',
                        complainee: 'resource:org.example.biznet.telemarketer#TM1',
                        rtn: [],
                        datentime: '12/03/2019 04:05:34',
                        uccStatus: 'Recorded',
                        TAP: 'resource:org.example.biznet.TSP#TSP1',
                        complainant: 'resource:org.example.biznet.subscriber#9012345678' }
                    */
                    if (data) {
                        console.log("user processor true");
                        res.send({ success: true, message: 'Complaint Filed' });
                    }
                    else {
                        console.log("user processor false");
                        res.send({ success: false, message: 'Complaint filing failed' });
                    }
                });
            });
        });
    });
};

function getComplainFlag(complaint) {
    if (complaint === 'noconsent') {
        return 0;
    }
    else if (complaint === 'typewpref') {
        return 1;
    }
    else if (complaint === 'modewpref') {
        return 2;
    }
    else if (complaint === 'dtwpref') {
        return 3;
    }
    else if (complaint === 'behavior') {
        return 4;
    }
    else if (complaint === 'others') {
        return 5;
    }
}
