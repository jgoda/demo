'use-strict'
/*Module Imports*/
let request = require('../../server/http-request.js');


exports.getAddress = function () {
    return user.address;
};

exports.getSubscriberDetails = function (phone, cb) {


};

exports.updateSubscriberDetails = function (phone, subscriberDetails, cb) {

};

exports.saveSubscriberDetails = function (subscriberDetails, cb) {

};

exports.getHeadersForEntity = function (entity, cb) {
    let headers = [
        {
            "$class": "org.example.biznet.headers",
            "headerstr": "1",
            "contentTemplates": [],
            "consentTemplates": [],
            "telemarketer_owner": "resource:org.example.biznet.telemarketer#1"
        },
        {
            "$class": "org.example.biznet.headers",
            "headerstr": "14",
            "contentTemplates": [],
            "consentTemplates": [],
            "telemarketer_owner": "resource:org.example.biznet.telemarketer#14"
        },
        {
            "$class": "org.example.biznet.headers",
            "headerstr": "2",
            "contentTemplates": [],
            "consentTemplates": [],
            "telemarketer_owner": "resource:org.example.biznet.telemarketer#2"
        },
        {
            "$class": "org.example.biznet.headers",
            "headerstr": "3",
            "contentTemplates": [],
            "consentTemplates": [],
            "telemarketer_owner": "resource:org.example.biznet.telemarketer#1"
        },
        {
            "$class": "org.example.biznet.headers",
            "headerstr": "4",
            "contentTemplates": [],
            "consentTemplates": [],
            "telemarketer_owner": "resource:org.example.biznet.telemarketer#1"
        },
        {
            "$class": "org.example.biznet.headers",
            "headerstr": "5",
            "contentTemplates": [],
            "consentTemplates": [],
            "telemarketer_owner": "resource:org.example.biznet.telemarketer#1"
        }
    ];
    return cb(null, headers);
};

exports.getTemplatesForHeader = function (header, cb) {

    let templates = [
        {
            "$class": "org.example.biznet.contentTemplate",
            "contentTemplateID": "template1",
            "contentTemplateMsg": "This is the text to be sent by the sms. It can be 140 characters long and it can have variable values the positions for which will be denoted by ##pos1## and so on",
            "subscribersConsent": [
                "9876543210",
                "9876543211"
            ],
            "contentType": "Transactional",
            "contentCategory": "Insurance",
            "header_owner": "resource:org.example.biznet.headers#1"
        },
        {
            "$class": "org.example.biznet.contentTemplate",
            "contentTemplateID": "template1",
            "contentTemplateMsg": "This is the text to be sent by the sms. It can be 140 characters long and it can have variable values the positions for which will be denoted by ##pos1## and so on",
            "subscribersConsent": [
                "9876543210",
                "9876543211"
            ],
            "contentType": "Transactional",
            "contentCategory": "Health",
            "header_owner": "resource:org.example.biznet.headers#1"
        }, {
            "$class": "org.example.biznet.contentTemplate",
            "contentTemplateID": "template1",
            "contentTemplateMsg": "This is the text to be sent by the sms. It can be 140 characters long and it can have variable values the positions for which will be denoted by ##pos1## and so on",
            "subscribersConsent": [
                "9876543210",
                "9876543211"
            ],
            "contentType": "Transactional",
            "contentCategory": "RealState",
            "header_owner": "resource:org.example.biznet.headers#1"
        }, {
            "$class": "org.example.biznet.contentTemplate",
            "contentTemplateID": "template1",
            "contentTemplateMsg": "This is the text to be sent by the sms. It can be 140 characters long and it can have variable values the positions for which will be denoted by ##pos1## and so on",
            "subscribersConsent": [
                "9876543210",
                "9876543211"
            ],
            "contentType": "Transactional",
            "contentCategory": "Travel",
            "header_owner": "resource:org.example.biznet.headers#1"
        }, {
            "$class": "org.example.biznet.contentTemplate",
            "contentTemplateID": "template1",
            "contentTemplateMsg": "This is the text to be sent by the sms. It can be 140 characters long and it can have variable values the positions for which will be denoted by ##pos1## and so on",
            "subscribersConsent": [
                "9876543210",
                "9876543211"
            ],
            "contentType": "Transactional",
            "contentCategory": "Education",
            "header_owner": "resource:org.example.biznet.headers#1"
        },
    ];

    cb(null, templates);
};
