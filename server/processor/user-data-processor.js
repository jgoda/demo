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

};