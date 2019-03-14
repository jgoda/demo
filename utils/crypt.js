'use-strict'
const Cryptr = require('cryptr');
const cryptr = new Cryptr('SecretKey');

exports.encrypt=function(textToEncrypt){
    return cryptr.encrypt(textToEncrypt);
}

exports.decrypt=function(textToDecrypt){
    return cryptr.decrypt(textToDecrypt);
}