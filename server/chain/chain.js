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


exports.addUser = function (name, phone, TSPvalue, cb) {
    console.log('addUser', name, phone, TSPvalue);

    let subscriberPostObject = {
        url: 'http://localhost:3000/api/subscriber/',
        headers: {
            'Accept': 'application/json'
        }
    };

    let participant = {
        $class: 'org.example.biznet.subscriber',
        'mobno': phone,
        'tsp': 'resource:org.example.biznet.TSP#' + TSPvalue,
        'uccInsurance': false,
        'uccRealstate': false,
        'uccEducation': false,
        'uccHealth': false,
        'uccGood': false,
        'uccEnt': false,
        'uccTourism': false,
        'uccFood': false,
        'mocVoice': false,
        'mocSMS': false,
        'mocADrec': false,
        'mocADlive': false,
        'mocRobo': false,
        'bandT1': false,
        'bandT2': false,
        'bandT3': false,
        'bandT4': false,
        'bandT5': false,
        'bandT6': false,
        'bandT7': false,
        'bandT8': false,
        'bandT9': false,
        'dayMon': false,
        'dayTue': false,
        'dayWed': false,
        'dayThus': false,
        'dayFri': false,
        'daySat': false,
        'daySun': false,
        'datNat': false,
        'consentnos': []
    };

    subscriberPostObject['method'] = 'POST';
    subscriberPostObject['body'] = participant;
    subscriberPostObject['json'] = true;
    request.fetchData(subscriberPostObject, function (err, response) {
        console.log('POST response status: ', response.status);
        cb(null, true);
    });
}

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
            tsp: participant['tsp'],
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
            return cb(null, []);
        }
        else {
            console.log("user exists");
            let indvl = JSON.parse(subscriberDetail);
            return cb(null, indvl['consentnos']);
        }
    })
};

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
            'tsp': 'resource:org.example.biznet.TSP#TSP1',
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
    let url = 'http://localhost:3000/api/contentTemplate?filter=%7B%22where%22%3A%20%7B%22telemarketer_owner%22%3A%20%22resource%3Aorg.example.biznet.telemarketer%23' + entity + '%22%7D%7D';
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

    /* { '$class': 'org.example.biznet.headers',
    headerstr: 'HDR1',
    regMobNo: 'string',
    telemarketer_owner: 'resource:org.example.biznet.telemarketer#TM1' } */
    console.log("getHeaderbyHeaderName");


    let url = 'http://localhost:3000/api/headers?filter=%7B%22where%22%3A%20%7B%22headerstr%22%3A%20%22' + header + '%22%7D%7D';

    request.makeFetchCall(url, function (err, data1) {
        let data = JSON.parse(data1);
        console.log("return data", data);
        console.log("typeof data", typeof data[0])
        return cb(err, data[0]);
    })

};

exports.getComplaintsbyTSPTAP = function (TSPID, cb) {
    /*let data = [{
        '$class': 'org.example.biznet.complaint',
        complaintID: 'wmejn',
        uccHeader: 'HDR1',
        OAP: 'TSP1',
        complainee: 'resource:org.example.biznet.telemarketer#TM1',
        rtn: [],
        datentime: '12/03/2019 04:05:34',
        description: 'blah blah',
        uccStatus: 'TransferredtoOAP',
        TAP: 'resource:org.example.biznet.TSP#TSP1',
        complainant: 'resource:org.example.biznet.subscriber#9012345678'
    },
        {
            '$class': 'org.example.biznet.complaint',
            complaintID: 'zvdtk',
            uccHeader: 'HDR1',
            OAP: 'TSP1',
            complainee: 'resource:org.example.biznet.telemarketer#TM1',
            rtn: [],
            datentime: '12/03/2019 04:05:34',
            description: 'blah blah',
            uccStatus: 'Recorded',
            TAP: 'resource:org.example.biznet.TSP#TSP1',
            complainant: 'resource:org.example.biznet.subscriber#9012345678'
        }];
    return cb(null, data);*/

    console.log("getComplaintsbyTSP");

    let url = 'http://localhost:3000/api/complaint?filter=%7B%22where%22%3A%20%7B%22TAP%22%3A%20%22resource%3Aorg.example.biznet.TSP%23' + TSPID + '%22%7D%7D';

    request.makeFetchCall(url, function (err, data1) {
        data = JSON.parse(data1);
        console.log("return data", data);
        console.log("typeof data", typeof data)
        return cb(err, data);
    });
};

exports.getComplaintsbyHeader = function (hdr, cb) {
    /*[
  {
    "$class": "org.example.biznet.complaint",
    "complaintID": "ckmme",
    "uccHeader": "HDR1",
    "OAP": "resource:org.example.biznet.TSP#TSP1",
    "complainee": "resource:org.example.biznet.telemarketer#TM1",
    "rtn": [],
    "datentime": "12/03/2019 04:05:34",
    "uccStatus": "Recorded",
    "TAP": "resource:org.example.biznet.TSP#TSP1",
    "complainant": "resource:org.example.biznet.subscriber#9012345678"
  },
  {
    "$class": "org.example.biznet.complaint",
    "complaintID": "eazha",
    "uccHeader": "HDR1",
    "OAP": "resource:org.example.biznet.TSP#TSP1",
    "complainee": "resource:org.example.biznet.telemarketer#TM1",
    "rtn": [],
    "datentime": "12/03/2019 04:05:34",
    "uccStatus": "Recorded",
    "TAP": "resource:org.example.biznet.TSP#TSP1",
    "complainant": "resource:org.example.biznet.subscriber#9012345678"
  },
  {
    "$class": "org.example.biznet.complaint",
    "complaintID": "kjsnv",
    "uccHeader": "HDR1",
    "OAP": "resource:org.example.biznet.TSP#TSP1",
    "complainee": "resource:org.example.biznet.telemarketer#TM1",
    "rtn": [],
    "datentime": "12/03/2019 04:05:34",
    "uccStatus": "Recorded",
    "TAP": "resource:org.example.biznet.TSP#TSP1",
    "complainant": "resource:org.example.biznet.subscriber#9012345678"
  }*/

    console.log("getComplaintsbyHeaders");
    let url = 'http://localhost:3000/api/complaint?filter=%7B%22where%22%3A%20%7B%22uccHeader%22%3A%22' + hdr + '%22%7D%7D';
    request.makeFetchCall(url, function (err, data1) {
        data = JSON.parse(data1);
        console.log("return data", data);
        console.log("typeof data", typeof data);
        return cb(err, data);
    });
};

exports.getComplaintsbyTSPOAP = function (TSPID, cb) {
    /*let data = [{
        '$class': 'org.example.biznet.complaint',
        complaintID: 'wmejn',
        uccHeader: 'HDR1',
        OAP: 'TSP1',
        complainee: 'resource:org.example.biznet.telemarketer#TM1',
        rtn: [],
        datentime: '12/03/2019 04:05:34',
        description: 'blah blah',
        uccStatus: 'TransferredtoOAP',
        TAP: 'resource:org.example.biznet.TSP#TSP1',
        complainant: 'resource:org.example.biznet.subscriber#9012345678'
    },
        {
            '$class': 'org.example.biznet.complaint',
            complaintID: 'zvdtk',
            uccHeader: 'HDR1',
            OAP: 'TSP1',
            complainee: 'resource:org.example.biznet.telemarketer#TM1',
            rtn: [],
            datentime: '12/03/2019 04:05:34',
            description: 'blah blah',
            uccStatus: 'Recorded',
            TAP: 'resource:org.example.biznet.TSP#TSP1',
            complainant: 'resource:org.example.biznet.subscriber#9012345678'
        }];

    return cb(null, data);*/

    console.log("getComplaintsbyTSP");

    let url = 'http://localhost:3000/api/complaint?filter=%7B%22where%22%3A%20%7B%22OAP%22%3A%22' + TSPID + '%22%7D%7D';

    request.makeFetchCall(url, function (err, data1) {
        let data = JSON.parse(data1);
        console.log("return data", data);
        console.log("typeof data", typeof data)
        return cb(err, data);
    });
};

exports.getSubscriberComplaints = function (phone, data2, cb) {
    /*[
{
"$class": "org.example.biznet.headers",
"headerstr": "HDR1",
"regMobNo": "string",
"telemarketer_owner": "resource:org.example.biznet.telemarketer#TM1"
}
]*/
    console.log("getSubscriberComplaints");
    let url = 'http://localhost:3000/api/complaint?filter=%7B%22where%22%3A%20%7B%22complainant%22%3A%20%22resource%3Aorg.example.biznet.subscriber%23' + phone + '%22%7D%7D';
    request.makeFetchCall(url, function (err, data1) {
        let data = JSON.parse(data1);
        let complainant = data[0]['complainant'].substr(1 + data[0]['complainant'].indexOf("#"));
        let tsp_owner = data[0]['TAP'].substr(1 + data[0]['complainant'].indexOf("#"));
        data[0]['complainant'] = complainant;
        data[0]['TAP'] = tsp_owner;
        console.log("return data", data[0]);
        console.log("typeof data", typeof data[0]);
        let returnData = data2;
        returnData['complaintDet'] = data[0];
        return cb(err, returnData);
    });
};

exports.getComplaintDetails = function (compID, cb) {

    /*let data = {
        '$class': 'org.example.biznet.complaint',
        complaintID: 'wmejn',
        uccHeader: 'HDR1',
        OAP: 'TSP1',
        complainee: 'resource:org.example.biznet.telemarketer#TM1',
        rtn: [],
        datentime: '12/03/2019 04:05:34',
        description: 'blah blah',
        uccStatus: 'TransferredtoOAP',
        TAP: 'resource:org.example.biznet.TSP#TSP1',
        complainant: 'resource:org.example.biznet.subscriber#9012345678'
    };
    return cb(null, data);*/

    console.log("getComplaintbyID");
    let url = 'http://localhost:3000/api/complaint?filter=%7B%22where%22%3A%20%7B%22complaintID%22%3A%20%22' + compID + '%22%7D%7D';
    request.makeFetchCall(url, function (err, data1) {
        let data = JSON.parse(data1);
        let complainant = data[0]['complainant'].substr(1 + data[0]['complainant'].indexOf("#"));
        let tsp_owner = data[0]['TAP'].substr(1 + data[0]['complainant'].indexOf("#"));
        data[0]['complainant'] = complainant;
        data[0]['TAP'] = tsp_owner;
        console.log("return data", data[0]);
        console.log("typeof data", typeof data[0])
        return cb(err, data[0]);
    });
};

exports.getComplaintbyID = function (compID, cb) {

    /*
{
"$class": "org.example.biznet.headers",
"headerstr": "HDR1",
"regMobNo": "string",
"telemarketer_owner": "resource:org.example.biznet.telemarketer#TM1"
}
*/
    console.log("getComplaintbyID");
    let url = 'http://localhost:3000/api/complaint?filter=%7B%22where%22%3A%20%7B%22complaintID%22%3A%20%22' + compID + '%22%7D%7D';
    request.makeFetchCall(url, function (err, data1) {
        let data = JSON.parse(data1);
        console.log("return data", data[0]);
        console.log("typeof data", typeof data[0])
        return cb(err, data[0]);
    });
};

exports.getComplaintsforSubscriber = function (phone, cb) {
    /*[
{
"$class": "org.example.biznet.headers",
"headerstr": "HDR1",
"regMobNo": "string",

"telemarketer_owner": "resource:org.example.biznet.telemarketer#TM1"
}
]*/
    console.log("getComplaintfor Subscriber");
    let url = 'http://localhost:3000/api/complaint?filter=%7B%22where%22%3A%20%7B%22complainant%22%3A%20%22resource%3Aorg.example.biznet.subscriber%23' + phone + '%22%7D%7D';
    request.makeFetchCall(url, function (err, data1) {
        let data = JSON.parse(data1);
        console.log("return data", data);
        console.log("typeof data", typeof data);
        return cb(err, data);
    });
}

exports.getContentTemplatebyName = function (template, cb) {
    console.log("getContentTemplatebyName");

    let url = 'http://localhost:3000/api/contentTemplate?filter=%7B%22where%22%3A%20%7B%22contentTemplateID%22%3A%20%22' + template + '%22%7D%7D';
    console.log("url to get content template", url);
    request.makeFetchCall(url, function (err, data1) {
        let data = JSON.parse(data1);
        console.log("return data", data[0]);
        console.log("typeof data", typeof data[0])
        return cb(err, data[0]);
    })

};

exports.getConsentTemplatebyName = function (template, cb) {
    console.log("getConsentTemplatebyName");

    let url = 'http://localhost:3000/api/consentTemplate?filter=%7B%22where%22%3A%20%7B%22consentTemplateID%22%3A%20%22' + template + '%22%7D%7D';

    request.makeFetchCall(url, function (err, data1) {
        let data = JSON.parse(data1);
        console.log("return data", data[0]);
        console.log("typeof data", typeof data[0]);
        return cb(err, data[0]);
    })

};

exports.getConsentTemplatesbyTemplateID = function (template, cb) {
    console.log("getConsentTemplatebyTemplateID");
    console.log("template", template);
    let url = 'http://localhost:3000/api/contentTemplate?filter=%7B%22where%22%3A%20%7B%22contentTemplateID%22%3A%20%22' + template + '%22%7D%7D';

    request.makeFetchCall(url, function (err, contentTemp1) {
        let contentTemp = JSON.parse(contentTemp1);
        console.log("contentTemp", contentTemp[0]);
        let tm_owner = contentTemp[0]['telemarketer_owner'];
        console.log("tm_owner", tm_owner);
        var entityDet = tm_owner.substr(1 + tm_owner.indexOf("#"));
        console.log("headerDet", entityDet);

        let url1 = 'http://localhost:3000/api/consentTemplate?filter=%7B%22where%22%3A%20%7B%22telemarketer_owner%22%3A%22resource%3Aorg.example.biznet.telemarketer%23' + entityDet + '%22%7D%7D';
        console.log("url for getting contentTemplates by entity: ", url);
        request.makeFetchCall(url1, function (err, contents1) {
            let contents = JSON.parse(contents1);
            console.log(contents);
            cb(null, contents);
        });
    });
};

exports.getTMbyTMname = function (TMname, cb) {
    /*{ '$class': 'org.example.biznet.telemarketer',
  tmID: 'TM1',
  callingLineID: 'string',
  tmType: 'Individual',
  tmName: 'string',
  tmpasswd: 'string',
  GSTID: 'string',
  PANID: 'string',
  tmAddr: 'string',
  serviceProvider: 'resource:org.example.biznet.TSP#TSP1' }*/

    console.log("getTMbyTMname");
    let url = 'http://localhost:3000/api/telemarketer/' + TMname;

    request.makeFetchCall(url, function (err, tm_det) {
        console.log("url for getting telemarketers by TM name: ", url);
        request.makeFetchCall(url, function (err, result1) {
            let results = JSON.parse(result1);
            console.log(results);
            cb(null, results);
        });
    });
}


exports.saveHeader = function (header, entity, cb) {
    console.log("saveHeader");
    let owner_str = "resource:org.example.biznet.telemarketer#1"
    let hdr = {
        $class: "org.example.biznet.headers",
        "headerstr": header,
        "telemarketer_owner": owner_str,
    };

    let saveHeaderRequest = {
        url: 'http://localhost:3000/api/headers',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    saveHeaderRequest['method'] = 'POST';
    saveHeaderRequest['body'] = hdr;
    saveHeaderRequest['json'] = true;

    request.fetchData(saveHeaderRequest, function (err, data) {
        console.log("saveHeader result", err, data);
        return cb(err, data);
    })
};

exports.sendDeleteHeader = function (header, cb) {
    console.log("sendDeleteHeader");

    let url = 'http://localhost:3000/api/headers/' + header;
    request.makeDeleteCall(url, function (err, data) {
        console.log('sendDeleteHeader', err, data);
        return cb(err, data);
    })
};

exports.sendDeleteConsentTemplate = function (template, cb) {
    console.log("sendDeleteConsentTemplate");

    let url = 'http://localhost:3000/api/consentTemplate/' + template;
    request.makeDeleteCall(url, function (err, data) {
        console.log('sendDeleteConsentTemplate', err, data);
        return cb(err, data);
    })
};

exports.sendDeleteContentTemplate = function (template, cb) {
    console.log("sendDeleteContentTemplate");

    let url = 'http://localhost:3000/api/contentTemplate/' + template;
    request.makeDeleteCall(url, function (err, data) {
        console.log('sendDeleteContentTemplate', err, data);
        return cb(err, data);
    })
};

exports.addConsentTemplate = function (consentTemplateID, consentTemplateMsg, cb) {
    let tmplt = {
        $class: "org.example.biznet.consentTemplate",
        "consentTemplateID": consentTemplateID,
        "consentTemplateMsg": consentTemplateMsg,
        "telemarketer_owner": "resource:org.example.biznet.telemarketer#1"
    };

    let saveconsentTemplateRequest = {
        url: 'http://localhost:3000/api/consentTemplate',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    saveconsentTemplateRequest['method'] = 'POST';
    saveconsentTemplateRequest['body'] = tmplt;
    saveconsentTemplateRequest['json'] = true;

    request.fetchData(saveconsentTemplateRequest, function (err, data) {
        console.log("saveconsentTemplate result", err, data);
        return cb(err, data);
    })

}

exports.addContentTemplate = function (contentTemplateID, contentTemplateMsg, cb) {
    let tmplt = {
        $class: "org.example.biznet.contentTemplate",
        "contentTemplateID": contentTemplateID,
        "contentTemplateMsg": contentTemplateMsg,
        "telemarketer_owner": "resource:org.example.biznet.telemarketer#1"
    };

    let savecontentTemplateRequest = {
        url: 'http://localhost:3000/api/contentTemplate',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    savecontentTemplateRequest['method'] = 'POST';
    savecontentTemplateRequest['body'] = tmplt;
    savecontentTemplateRequest['json'] = true;

    request.fetchData(savecontentTemplateRequest, function (err, data) {
        console.log("savecontentTemplate result", err, data);
        return cb(err, data);
    })

}

exports.lodgeComplaint = function (complaintID, uccDescription, uccHeader, uccOAP, uccComplainee, uccDateTime, uccStatus, uccTAP, complainant, cb) {
    /* JSON response
                    { '$class': 'org.example.biznet.complaint',
                        complaintID: 'phxwc',
                        uccHeader: 'HDR1',
                        OAP: 'resource:org.example.biznet.TSP#TSP1',
                        complainee: 'resource:org.example.biznet.telemarketer#TM1',
                        rtn: [],
                        datentime: '12/03/2019 04:05:34',
                        uccStatus: 'Recorded',
                        TAP: 'resource:org.example.biznet.TSP#TSP1',
                        complainant: 'resource:org.example.biznet.subscriber#9012345678' }
                    */

    let complaintDetails = {
        $class: "org.example.biznet.complaint",
        "complaintID": complaintID,
        "description": uccDescription,
        "uccHeader": uccHeader,
        "OAP": uccOAP,
        "complainee": uccComplainee,
        "rtn": [],
        "datentime": uccDateTime,
        "uccStatus": uccStatus,
        "TAP": uccTAP,
        "complainant": complainant
    };

    let lodgeComplaintRequest = {
        url: 'http://localhost:3000/api/complaint',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    lodgeComplaintRequest['method'] = 'POST';
    lodgeComplaintRequest['body'] = complaintDetails;
    lodgeComplaintRequest['json'] = true;

    request.fetchData(lodgeComplaintRequest, function (err, data) {
        console.log("lodgeComplaintRequest result", err, data);
        cb(err, data);
    });
}


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

exports.getComplaintsByOwnerId = function (ownerId, cb) {

    let whereClause = {
        "where": {
            "owner": "resource:org.example.biznet.TSP#" + ownerId
        }
    };
    let url = 'http://localhost:3000/api/complaint?filter=' + encodeURIComponent(JSON.stringify(whereClause));

    console.log("complaints url", url);
    request.makeFetchCall(url, function (err, data) {
        console.log(err, data);
        return cb(err, data);
    })
}

exports.updateComplaintStatus = function (complaintDetails, cb) {

    let complaintUpdateRequest = {
        url: 'http://localhost:3000/api/complaint/' + complaintDetails['complaintID'],
        headers: {
            'Accept': 'application/json'
        }
    };

    complaintUpdateRequest['method'] = 'PUT';
    complaintUpdateRequest['body'] = complaintDetails;
    complaintUpdateRequest['json'] = true;
    request.fetchData(complaintUpdateRequest, function (err, response) {
        console.log('PUT response status: ', response.status);
        return cb(err, response);
    });
}