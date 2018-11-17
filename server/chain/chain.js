'use-strict'
/*Module Imports*/
var Web3 = require('web3');
/*Local imports*/
var userContract = require('../../contract/User.js').userContract;

/*Global Vars*/

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

var CoursetroContract = web3.eth.contract(userContract);
var user = CoursetroContract.at('0xa05e8c1d8b03c863c327b8a64aa5f15a1364b4bb');


exports.getUserByPhone = function (phone) {
    return user.getUser(phone);
};

exports.getAddress = function () {
    return user.address;
};

exports.getUserlist = function () {
    return user.getUserlist();
};