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

exports.addUser = function (name, phone) {
    return user.addUser(name, phone, {from: web3.eth.accounts[1], gas: 3000000});
};

exports.updateTypeUcc = function (phone, insurance, realState, education, health, goods, ent, tourism, food) {

    return user.updateUserUCCType(phone, insurance, realState, education, health, goods, ent, tourism, food);
};

exports.updateModeOfCommunication = function (phone, voice, sms, ADrec, ADlive, robo) {
    return user.updateUserUCCMode(phone, voice, sms, ADrec, ADlive, robo);
};
exports.updateBand = function (phone, t1, t2, t3, t4, t5, t6, t7, t8, t9) {
    return user.updateUserUCCTime(phone, t1, t2, t3, t4, t5, t6, t7, t8, t9);
};

exports.updateDay = function (phone, mon, tue, wed, thus, fri, sat, sun, nat) {
    return user.updateUserUCCDay(phone, mon, tue, wed, thus, fri, sat, sun, nat);
};