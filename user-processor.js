'use-strict'

/*Local Imports*/
let logManager = require('../../utils/log-manager.js');
let chainManager = require('../../server/chain/chain.js');
let processor = require('../../server/processor');


/*Global Vars*/
let logger = logManager.getLogger();

exports.updateTypeUcc = function (req, res) {

    let phone = req.body.phone;
    let insurance = req.body.insurance;
    let realState = req.body.realState;
    let education = req.body.education;
    let health = req.body.health;
    let goods = req.body.goods;
    let ent = req.body.ent;
    let tourism = req.body.tourism;
    let food = req.body.food;

    chainManager.updateTypeUcc(phone, insurance, realState, education, health, goods, ent, tourism, food, function (err, flag) {
        console.log(err, flag);
        if (flag === true) {
            res.send({success: true, message: 'Settings Updated'});
        } else {
            res.send({success: false, message: 'User does not exists'});
        }

    });

};

exports.updateModeOfCommunication = function (req, res) {

    let phone = req.body.phone;
    let voice = req.body.voice;
    let sms = req.body.sms;
    let ADrec = req.body.ADrec;
    let ADlive = req.body.ADlive;
    let robo = req.body.robo;

    chainManager.updateModeOfCommunication(Number(phone), voice, sms, ADrec, ADlive, robo, function (err, flag) {
        if (flag === true) {
            res.send({success: true, message: 'Settings Updated'});
        } else {
            res.send({success: false, message: 'User does not exists'});
        }

    });

};
exports.updateBand = function (req, res) {

    let phone = req.body.phone;
    let t1 = req.body.t1;
    let t2 = req.body.t2;
    let t3 = req.body.t3;
    let t4 = req.body.t4;
    let t5 = req.body.t5;
    let t6 = req.body.t6;
    let t7 = req.body.t7;
    let t8 = req.body.t8;
    let t9 = req.body.t9;

    chainManager.updateBand(Number(phone), t1, t2, t3, t4, t5, t6, t7, t8, t9, function (err, flag) {
        if (flag === true) {
            res.send({success: true, message: 'Settings Updated'});
        } else {
            res.send({success: false, message: 'User does not exists'});
        }

    });

};

exports.updateDay = function (req, res) {

    let phone = req.body.phone;
    let mon = req.body.mon;
    let tue = req.body.tue;
    let wed = req.body.wed;
    let thus = req.body.thus;
    let fri = req.body.fri;
    let sat = req.body.sat;
    let sun = req.body.sun;
    let nat = req.body.nat;

    chainManager.updateDay(Number(phone), mon, tue, wed, thus, fri, sat, sun, nat, function (err, flag) {
        if (flag === true) {
            res.send({success: true, message: 'Settings Updated'});
        } else {
            res.send({success: false, message: 'User does not exists'});
        }

    });
};

exports.addUser = function (req, res) {
    let phone = req.body.phone;
    let name = req.body.name;

    chainManager.addUser(name, Number(phone), function (err, flag) {
        console.log(flag);
        if (flag === true) {
            res.send({success: true, message: 'User Added Successfully'});
        } else {
            res.send({success: false, message: 'User already exists'});
        }
    });


};

exports.getUserSettings = function (req, res) {
    let phone = req.body.phone;

    processor.user.getUserSettings(phone, function (err, data) {
        res.send(data);
    })

};

exports.login = function (req, res) {
    let phone = req.body.phone;
    let flag = chainManager.doesUserExist(phone);
    if (flag === true) {
        res.send({success: true, message: 'User already exists'});
    } else {
        res.send({success: false, message: 'User does not exists'});
    }

};

//newcode
exports.registerComplaint = function (req, res) {
    let UCCcaller = req.body.UCCcaller;
    let phone = req.body.phone;
    let noconsent = req.body.noconsent;
    let typewpref = req.body.typewpref;
    let modewpref = req.body.modewpref;
    let dtwpref = req.body.dtwpref;
    let behavior = req.body.behavior;
    let others = req.body.others;
    let usrComment = req.body.usrComment
    if (noconsent) {
        chainManager.lodgeComplaint(phone, UCCcaller, 0, usrComment);
    }
    else if (typewpref) {
        chainManager.lodgeComplaint(phone, UCCcaller, 1, usrComment);
    }
    else if (modewpref) {
        chainManager.lodgeComplaint(phone, UCCcaller, 2, usrComment);
    }
    else if (dtwpref) {
        chainManager.lodgeComplaint(phone, UCCcaller, 3, usrComment);
    }
    else if (behavior) {
        chainManager.lodgeComplaint(phone, UCCcaller, 4, usrComment);
    }
    else if (others) {
        chainManager.lodgeComplaint(phone, UCCcaller, 5, usrComment);
    }

};
