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
    chainManager.updateSubscriberDetails(phone,subscriberDets, number, function (err, flag) {
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
    chainManager.updateSubscriberDetails(phone,subscriberDets, number, function (err, flag) {
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
    chainManager.updateSubscriberDetails(phone,subscriberDets, number, function (err, flag) {
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
    chainManager.updateSubscriberDetails(phone,subscriberDets, number, function (err, flag) {
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

    chainManager.addUser(name, Number(phone), function (err, flag) {
        console.log(flag);
        if (flag === true) {
            res.send({ success: true, message: 'User Added Successfully' });
        } else {
            res.send({ success: false, message: 'User already exists' });
        }
    });


};

exports.getConsents = function(reg, res) {
    let phone = req.body.phone;
    let conTable = req.body.consentsTable;

    chainManager.getConsentList(phone, function(err, data){
        var consentindex =0;
        while(consentindex<data.length)
        {
            var row = table.insertRow(consentindex);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = data[consentindex];
            consentindex++
        }
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

exports.fileComplaint = function (req, res) {

    let UCCcaller = req.body.UCCcaller;
    let phone = req.body.phone;
    let complaint = req.body.complaint;
    let usrComment = req.body.usrComment || "";

    let status = getComplainFlag(complaint);
    console.log(status);

    chainManager.lodgeComplaint(phone, UCCcaller, status, usrComment, function (err, flag) {
        if (flag === true) {
            res.send({ success: true, message: 'Complaint filed successfully' });
        } else {
            res.send({ success: false, message: 'User does not exists' });
        }
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
