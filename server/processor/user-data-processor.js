'use-strict'

let chainManager = require('../chain/chain.js');


exports.getUserSettings = function (phone, cb) {

    chainManager.getUserUCCtype(phone, function (err, data) {
        let result = {};
        result['uccType'] = data;

        chainManager.getUserUCCMode(phone, function (err, data) {
            result['uccMode'] = data;


            chainManager.getUserUCCDay(phone, function (err, data) {
                result['uccDay'] = data;

                chainManager.getUserUCCTime(phone, function (err, data) {
                    result['uccTime'] = data;
                    cb(err, result);
                })
            })
        })

    })

   /* chainManager.getSubscriberDetails(phone, function (err, data) {
        let result = {};



        insurance = data['uccInsurance'];
        realState = data['uccRealstate'];
        education = data['uccEducation'];
        health = data['uccHealth'];
        goods = data['uccGood'];
        ent = data['uccEnt'];
        tourism = data['uccTourism'];
        food = data['uccFood'];
        voice = data['mocVoice'];
        sms = data['mocSMS'];
        ADrec = data['mocADrec'];
        ADlive = data['mocADlive'];
        robo = data['mocRobo'];
        t1 = data['bandT1'];
        t2 = data['bandT2'];
        t3 = data['bandT3'];
        t4 = data['bandT4'];
        t5 = data['bandT5'];
        t6 = data['bandT6'];
        t7 = data['bandT7'];
        t8 = data['bandT8'];
        t9 = data['bandT9'];
        mon = data['dayMon'];
        tue = data['dayTue'];
        wed = data['dayWed'];
        thus = data['dayThus'];
        fri = data['dayFri'];
        sat = data['daySat'];
        sun = data['daySun'];
        nat = data['datNat'];
    })*/

};