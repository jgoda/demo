'use-strict'
/*Module Imports*/
var Web3 = require('web3');
let config = require('config');

/*Local imports*/
var userContract = require('../../contract/User.js').userContract;

/*Global Vars*/

var web3 = new Web3(new Web3.providers.HttpProvider(config.WEB3.HOST));
web3.eth.defaultAccount = web3.eth.accounts[0];

var CoursetroContract = web3.eth.contract(userContract);
var user = CoursetroContract.at(config.WEB3.CONTRACT_ADDRESS);


exports.getAddress = function () {
    return user.address;
};

exports.addUser = function (name, phone, cb) {
    console.log(name, phone);
    user.doesUserExist.call(phone, function (err, exists) {
        console.log(err, exists);
        if (exists === true) {
            return cb(null, false);
        }
        user.addUser(name, phone, {from: web3.eth.accounts[1], gas: 3000000});
        return cb(null, true);
    })

};

exports.doesUserExist = function (phone) {

    return user.doesUserExist(phone);

};


exports.updateTypeUcc = function (phone, insurance, realState, education, health, goods, ent, tourism, food, cb) {

    console.log(user.doesUserExist(phone));
    user.doesUserExist.call(phone, function (err, exists) {
        console.log(err, exists);
        if (exists === false) {
            return cb(null, false);
        }
        user.updateUserUCCType(phone, insurance, realState, education, health, goods, ent, tourism, food, {
            from: web3.eth.accounts[1],
            gas: 3000000
        });
        return cb(null, true);
    })


};

exports.getUserUCCtype = function (phone, cb) {
    user.getUserUCCtype.call(phone, function (err, data) {
        console.log(data);
        cb(err, {
            insurance: data[0],
            realState: data[1],
            education: data[2],
            health: data[3],
            goods: data[4],
            ent: data[5],
            tourism: data[6],
            food: data[7]
        });
    })
};

exports.updateModeOfCommunication = function (phone, voice, sms, ADrec, ADlive, robo, cb) {
    user.doesUserExist.call(phone, function (err, exists) {
        console.log(err, exists);
        if (exists === false) {
            return cb(null, false);
        }
        user.updateUserUCCMode(phone, voice, sms, ADrec, ADlive, robo, {from: web3.eth.accounts[1], gas: 3000000});
        return cb(null, true);
    })

};
exports.getUserUCCMode = function (phone, cb) {
    user.getUserUCCMode.call(phone, function (err, data) {
        console.log(data);
        cb(err, {voice: data[0], sms: data[1], ADrec: data[2], ADlive: data[3], robo: data[4]});
    })
};
exports.updateBand = function (phone, t1, t2, t3, t4, t5, t6, t7, t8, t9, cb) {
    user.doesUserExist.call(phone, function (err, exists) {
        console.log(err, exists);
        if (exists === false) {
            return cb(null, false);
        }
        user.updateUserUCCTime(phone, t1, t2, t3, t4, t5, t6, t7, t8, t9, {from: web3.eth.accounts[1], gas: 3000000});
        return cb(null, true);
    })
};

exports.getUserUCCTime = function (phone, cb) {
    user.getUserUCCTime.call(phone, function (err, data) {
        cb(err, {
            t1: data[0],
            t2: data[1],
            t3: data[2],
            t4: data[3],
            t5: data[4],
            t6: data[5],
            t7: data[6],
            t8: data[7],
            t9: data[8]
        })
    })
};
exports.updateDay = function (phone, mon, tue, wed, thus, fri, sat, sun, nat, cb) {

    user.doesUserExist.call(phone, function (err, exists) {
        console.log(err, exists);
        if (exists === false) {
            return cb(null, false);
        }
        user.updateUserUCCDay(phone, mon, tue, wed, thus, fri, sat, sun, nat, {
            from: web3.eth.accounts[1],
            gas: 3000000
        });
        return cb(null, true);
    })
};

exports.getUserUCCDay = function (phone, cb) {
    user.getUserUCCDay.call(phone, function (err, data) {
        cb(err, {
            mon: data[0],
            tue: data[1],
            wed: data[2],
            thus: data[3],
            fri: data[4],
            sat: data[5],
            sun: data[6],
            nat: data[7]
        })
    })
};

exports.lodgeComplaint = function (phone, UCCcaller, status, usrComment, cb) {

    user.doesUserExist.call(phone, function (err, exists) {
        console.log(err, exists);
        if (exists === false) {
            return cb(null, false);
        }
        user.lodgeComplaint(UCCcaller, phone, status, usrComment, {
            from: web3.eth.accounts[1],
            gas: 3000000
        });
        return cb(null, true);
    })

};

exports.scrubbing_getUserConsent = function (phone, UCCCaller) {
    return user.scrubbing_getUserConsent(phone, UCCCaller);
};


exports.bulkupdateUCC = function (phone, pref) {

    return user.bulkupdateUCC(phone, pref, {
        from: web3.eth.accounts[1],
        gas: 3000000
    });
};