'use-strict'

/*Local Imports*/
let logManager = require('../../utils/log-manager.js');
let chainManager = require('../../server/chain/chain.js');


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

    let flag = chainManager.updateTypeUcc(Number(phone), insurance, realState, education, health, goods, ent, tourism, food);
    if (flag === true) {
        res.send({success: true, message: 'Settings Updated'});
    } else {
        res.send({success: false, message: 'User does not exists'});
    }

};

exports.updateModeOfCommunication = function (req, res) {

    let phone = req.body.phone;
    let voice = req.body.voice;
    let sms = req.body.sms;
    let ADrec = req.body.ADrec;
    let ADlive = req.body.ADlive;
    let robo = req.body.robo;

    let flag = chainManager.updateModeOfCommunication(Number(phone), voice, sms, ADrec, ADlive, robo);
    if (flag === true) {
        res.send({success: true, message: 'Settings Updated'});
    } else {
        res.send({success: false, message: 'User does not exists'});
    }

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

    let flag = chainManager.updateBand(Number(phone), t1, t2, t3, t4, t5, t6, t7, t8, t9);
    if (flag === true) {
        res.send({success: true, message: 'Settings Updated'});
    } else {
        res.send({success: false, message: 'User does not exists'});
    }

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

    let flag = chainManager.updateDay(Number(phone), mon, tue, wed, thus, fri, sat, sun, nat);
    if (flag === true) {
        res.send({success: true, message: 'Settings Updated'});
    } else {
        res.send({success: false, message: 'User does not exists'});
    }
};

exports.addUser = function (req, res) {
    let phone = req.body.phone;
    let name = req.body.name;

    let flag = chainManager.addUser(name, Number(phone));
    if (flag === true) {
        res.send({success: true, message: 'User Added Successfully'});
    } else {
        res.send({success: false, message: 'User already exists'});
    }

};