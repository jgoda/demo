'use-strict'
/*Module Imports*/
let request = require('../../server/http-request.js');


exports.getAddress = function () {
    return user.address;
};

exports.doesUserExist = function (phone, cb) {
    let subscriberRequestObject = {
        url: 'http://localhost:3000/api/subscriber/' + phone,
        headers: {
            'Accept': 'application/json'
        }
    };
    subscriberRequestObject['method'] = 'GET';
    request.makeFetchCall(subscriberRequestObject['url'], function (err, subscriberDetail) {
        console.log("GET query response for does subscriber exist", subscriberDetail);
        if (!subscriberDetail) {
            console.log("subscriber does not exist");
            return cb(null, false);
        }
        else {
            console.log("user exists");
            return cb(null, true);
        }
    })
};

exports.getSubscriberDetails = function (phone, cb) {
    let subscriberRequestObject = {
        url: 'http://localhost:3000/api/subscriber/' + phone,
        headers: {
            'Accept': 'application/json'
        }
    };

    subscriberRequestObject['method'] = 'GET';
    request.makeFetchCall(subscriberRequestObject['url'], function (err, subscriberDetail) {
        let participant = JSON.parse(subscriberDetail);
        cb(err, {
            insurance: participant['uccInsurance'],
            realState: participant['uccRealstate'],
            education: participant['uccEducation'],
            health: participant['uccHealth'],
            goods: participant['uccGood'],
            ent: participant['uccEnt'],
            tourism: participant['uccTourism'],
            food: participant['uccFood'],
            voice: participant['mocVoice'],
            sms: participant['mocSMS'],
            ADrec: participant['mocADrec'],
            ADlive: participant['mocADlive'],
            robo: participant['mocRobo'],
            t1: participant['bandT1'],
            t2: participant['bandT2'],
            t3: participant['bandT3'],
            t4: participant['bandT4'],
            t5: participant['bandT5'],
            t6: participant['bandT6'],
            t7: participant['bandT7'],
            t8: participant['bandT8'],
            t9: participant['bandT9'],
            mon: participant['dayMon'],
            tue: participant['dayTue'],
            wed: participant['dayWed'],
            thus: participant['dayThus'],
            fri: participant['dayFri'],
            sat: participant['daySat'],
            sun: participant['daySun'],
            nat: participant['datNat']
        })
    })
};

exports.getConsentList = function (phone, cb) {
    /*let subscriberRequestObject = {
        url: 'http://localhost:3000/api/subscriber/' + phone,
        headers: {
            'Accept': 'application/json'
        }
    };
    subscriberRequestObject['method'] = 'GET';
    request.makeFetchCall(subscriberRequestObject['url'], function (err, subscriberDetail) {
        console.log("GET query response for does subscriber exist", subscriberDetail);
        if (!subscriberDetail) {
            console.log("subscriber does not exist");
            return cb(null, []);
        }
        else {
            console.log("user exists");
            let indvl = JSON.parse(subscriberDetail);
            return cb(null, indvl['consentnos']);
        }
    })*/
    return cb(null, ["1", "2", "3"]);

}

exports.updateSubscriberDetails = function (phone, inputDetails, number, cb) {
    let subscriberRequestObject = {
        url: 'http://localhost:3000/api/subscriber/' + phone,
        headers: {
            'Accept': 'application/json'
        }

    };
    subscriberRequestObject['method'] = 'GET';
    request.makeFetchCall(subscriberRequestObject['url'], function (err, subscriberDetail) {
        let indvl = JSON.parse(subscriberDetail);
        let participant = {
            $class: 'org.example.biznet.subscriber',
            'uccInsurance': indvl['uccInsurance'],
            'uccRealstate': indvl['uccRealstate'],
            'uccEducation': indvl['uccEducation'],
            'uccHealth': indvl['uccHealth'],
            'uccGood': indvl['uccGood'],
            'uccEnt': indvl['uccEnt'],
            'uccTourism': indvl['uccTourism'],
            'uccFood': indvl['uccFood'],
            'mocVoice': indvl['mocVoice'],
            'mocSMS': indvl['mocSMS'],
            'mocADrec': indvl['mocADrec'],
            'mocADlive': indvl['mocADlive'],
            'mocRobo': indvl['mocRobo'],
            'bandT1': indvl['bandT1'],
            'bandT2': indvl['bandT2'],
            'bandT3': indvl['bandT3'],
            'bandT4': indvl['bandT4'],
            'bandT5': indvl['bandT5'],
            'bandT6': indvl['bandT6'],
            'bandT7': indvl['bandT7'],
            'bandT8': indvl['bandT8'],
            'bandT9': indvl['bandT9'],
            'dayMon': indvl['dayMon'],
            'dayTue': indvl['dayTue'],
            'dayWed': indvl['dayWed'],
            'dayThus': indvl['dayThus'],
            'dayFri': indvl['dayFri'],
            'daySat': indvl['daySat'],
            'daySun': indvl['daySun'],
            'datNat': indvl['datNat'],
            'consentnos': indvl['consentnos']
        };
        if (number == 1) {
            participant['uccInsurance'] = inputDetails['uccInsurance'];
            participant['uccRealstate'] = inputDetails['uccRealstate'];
            participant['uccEducation'] = inputDetails['uccEducation'];
            participant['uccHealth'] = inputDetails['uccHealth'];
            participant['uccGood'] = inputDetails['uccGood'];
            participant['uccEnt'] = inputDetails['uccEnt'];
            participant['uccTourism'] = inputDetails['uccTourism'];
            participant['uccFood'] = inputDetails['uccFood'];
        }
        if (number == 2) {
            participant['mocVoice'] = inputDetails['mocVoice'];
            participant['mocSMS'] = inputDetails['mocSMS'];
            participant['mocADrec'] = inputDetails['mocADrec'];
            participant['mocADlive'] = inputDetails['mocADlive'];
            participant['mocRobo'] = inputDetails['mocRobo'];
        }
        if (number == 3) {
            participant['bandT1'] = inputDetails['bandT1'];
            participant['bandT2'] = inputDetails['bandT2'];
            participant['bandT3'] = inputDetails['bandT3'];
            participant['bandT4'] = inputDetails['bandT4'];
            participant['bandT5'] = inputDetails['bandT5'];
            participant['bandT6'] = inputDetails['bandT6'];
            participant['bandT7'] = inputDetails['bandT7'];
            participant['bandT8'] = inputDetails['bandT8'];
            participant['bandT9'] = inputDetails['bandT9'];

        }
        if (number == 4) {
            participant['dayMon'] = inputDetails['dayMon'];
            participant['dayTue'] = inputDetails['dayTue'];
            participant['dayWed'] = inputDetails['dayWed'];
            participant['dayThus'] = inputDetails['dayThus'];
            participant['dayFri'] = inputDetails['dayFri'];
            participant['daySat'] = inputDetails['daySat'];
            participant['daySun'] = inputDetails['daySun'];
            participant['datNat'] = inputDetails['datNat'];

        }
        inputDetails['consentnos'] = participant['consentnos'];
        subscriberRequestObject['method'] = 'PUT';
        subscriberRequestObject['body'] = participant;
        subscriberRequestObject['json'] = true;
        request.fetchData(subscriberRequestObject, function (err, response) {
            console.log('[updatesubscriberRequest]', err, response);
        })
    })
};


exports.saveSubscriberDetails = function (subscriberDetails, cb) {

};

exports.getHeadersForEntity = function (entity, cb) {
    let url = 'http://localhost:3000/api/headers?filter=%7B%22where%22%3A%20%7B%22telemarketer_owner%22%3A%20%22resource%3Aorg.example.biznet.telemarketer%23' + entity + '%22%7D%7D';
    console.log("url for getting headers by entity: ", url);
    request.makeFetchCall(url, function (err, headers1) {
        let headers = JSON.parse(headers1);
        console.log(headers);
        cb(null, headers);
    })
};

exports.getContentForEntity = function (entity, cb) {
    let url = 'http://localhost:3000/api/contentTemplate?filter=%7B%22where%22%3A%20%7B%22telemarketer_owner%22%3A%22resource%3Aorg.example.biznet.telemarketer%23' + entity + '%22%7D%7D';
    console.log("url for getting contentTemplates by entity: ", url);
    request.makeFetchCall(url, function (err, contents1) {
        let contents = JSON.parse(contents1);
        console.log(contents);
        cb(null, contents);
    })
};

exports.getConsentForEntity = function (entity, cb) {
    let url = 'http://localhost:3000/api/consentTemplate?filter=%7B%22where%22%3A%20%7B%22telemarketer_owner%22%3A%22resource%3Aorg.example.biznet.telemarketer%23' + entity + '%22%7D%7D';
    console.log("url for getting consentTemplates by entity: ", url);
    request.makeFetchCall(url, function (err, consents1) {
        let consents = JSON.parse(consents1);
        console.log(consents);
        cb(null, consents);
    })
};

exports.getHeaderByHeaderName = function (header, cb) {
    console.log("getHeaderbyHeaderName");

    let url = 'http://localhost:3000/headers/' + header;

    request.makeFetchCall(url, function (err, data) {
        console.log(data);
        cb(err, data);
    })

};

exports.saveHeader = function (header, cb) {
    console.log("saveHeader");
    let data = {
        "headerstr": header,
        "regMobNo": "",
        "telemarketer_owner": [],
    };
    let saveHeader = {
        url: 'http://localhost:3000/api/headers',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: data,
        json: true
    };
    request.fetchData(data, function (err, data) {
        return cb(err, data);
    })
};

exports.sendDeleteHeader = function (header, cb) {
    console.log("sendDeleteHeader");

    let sendDeleteHeader = {
        url: 'http://localhost:3000/api/headers/' + header,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        json: true
    };
    request.fetchData(sendDeleteHeader, function (err, data) {
        return cb(err, data);
    })
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

exports.getUserUCCtype = function (phone, cb) {
    getSubscriberDetails(phone, function (err, data) {
        console.log(data);
        cb(err, {
            insurance: data['uccInsurance'],
            realState: data['uccRealstate'],
            education: data['uccEducation'],
            health: data['uccHealth'],
            goods: data['uccGood'],
            ent: data['uccEnt'],
            tourism: data['uccTourism'],
            food: data['uccFood'],
            voice: data['mocVoice'],
            sms: data['mocSMS']
        });
    })
};

exports.getUserUCCMode = function (phone, cb) {
    getSubscriberDetails(phone, function (err, data) {
        console.log(data);
        cb(err, {
            voice: data['mocVoice'],
            sms: data['mocSMS'],
            ADrec: data['mocADrec'],
            ADlive: data['mocADlive'],
            robo: data['mocRobo']
        })
    })
};

exports.getUserUCCTime = function (phone, cb) {
    getSubscriberDetails(phone, function (err, data) {
        cb(err, {
            t1: data['bandT1'],
            t2: data['bandT2'],
            t3: data['bandT3'],
            t4: data['bandT4'],
            t5: data['bandT5'],
            t6: data['bandT6'],
            t7: data['bandT7'],
            t8: data['bandT8'],
            t9: data['bandT9']
        })
    })
};

exports.getUserUCCDay = function (phone, cb) {
    getSubscriberDetails(phone, function (err, data) {
        cb(err, {
            mon: data['dayMon'],
            tue: data['dayTue'],
            wed: data['dayWed'],
            thus: data['dayThus'],
            fri: data['dayFri'],
            sat: data['daySat'],
            sun: data['daySun'],
            nat: data['datNat']
        })
    })
};

exports.transferHeaderTransaction = function (headerTransferRequestObject, cb) {
    request.fetchData(headerTransferRequestObject, function (err, response) {
        console.log('header transfer transaction', err, response);
        cb(err, response);
    })
}

exports.updateTypeUcc = function (phone, insurance, realState, education, health, goods, ent, tourism, food, cb) {

    /*    console.log(user.doesUserExist(phone));
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
        })*/
};

exports.updateModeOfCommunication = function (phone, voice, sms, ADrec, ADlive, robo, cb) {
    /*    user.doesUserExist.call(phone, function (err, exists) {
            console.log(err, exists);
            if (exists === false) {
                return cb(null, false);
            }
            user.updateUserUCCMode(phone, voice, sms, ADrec, ADlive, robo, { from: web3.eth.accounts[1], gas: 3000000 });
            return cb(null, true);
        })
    */
};

exports.updateBand = function (phone, t1, t2, t3, t4, t5, t6, t7, t8, t9, cb) {
    /*    user.doesUserExist.call(phone, function (err, exists) {
            console.log(err, exists);
            if (exists === false) {
                return cb(null, false);
            }
            user.updateUserUCCTime(phone, t1, t2, t3, t4, t5, t6, t7, t8, t9, { from: web3.eth.accounts[1], gas: 3000000 });
            return cb(null, true);
        })*/
};

exports.updateDay = function (phone, mon, tue, wed, thus, fri, sat, sun, nat, cb) {

    /*    user.doesUserExist.call(phone, function (err, exists) {
            console.log(err, exists);
            if (exists === false) {
                return cb(null, false);
            }
            user.updateUserUCCDay(phone, mon, tue, wed, thus, fri, sat, sun, nat, {
                from: web3.eth.accounts[1],
                gas: 3000000
            });
            return cb(null, true);
        })*/
};





