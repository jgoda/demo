'use-strict'

/*Local Imports*/
let logManager = require('../../utils/log-manager.js');
let chainManager = require('../../server/chain/chain.js');
let processor = require('../../server/processor');
let uploadDir = __dirname + "/../../scrubFolder/";
let excelProcessor = require('../../utils/excel-parser.js');
let utils = require('../../utils/utils.js');
let request = require('../../server/http-request.js');
let crypt = require('../../utils/crypt.js');


/*Global Vars*/
let logger = logManager.getLogger();

exports.parseScrubFile = function (req, res) {
    console.log('parseScrub', req.body);
    let file = req.files.scrubFile;

    let actualHdrs = [];
    let excelHeaders = {
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
        'datNat': false
    };

    if (req.body.voice === 'on') {
        excelHeaders["mocVoice"] = true;
        actualHdrs.push("mocVoice");
    }
    if (req.body.sms === 'on') {
        excelHeaders["mocSMS"] = true;
        actualHdrs.push("mocSMS");
    }
    if (req.body.ADrec === 'on') {
        excelHeaders["mocADrec"] = true;
        actualHdrs.push("mocADrec");
    }
    if (req.body.ADlive === 'on') {
        excelHeaders["mocADlive"] = true;
        actualHdrs.push("mocADlive");
    }
    if (req.body.robo === 'on') {
        excelHeaders["mocRobo"] = true;
        actualHdrs.push("mocRobo");
    }
    if (req.body.t1 === 'on') {
        excelHeaders["bandT1"] = true;
        actualHdrs.push("bandT1");
    }
    if (req.body.t2 === 'on') {
        excelHeaders["bandT2"] = true;
        actualHdrs.push("bandT2");
    }
    if (req.body.t3 === 'on') {
        excelHeaders["bandT3"] = true;
        actualHdrs.push("bandT3");
    }
    if (req.body.t4 === 'on') {
        excelHeaders["bandT4"] = true;
        actualHdrs.push("bandT4");
    }
    if (req.body.t5 === 'on') {
        excelHeaders["bandT5"] = true;
        actualHdrs.push("bandT5");
    }
    if (req.body.t6 === 'on') {
        excelHeaders["bandT6"] = true;
        actualHdrs.push("bandT6");
    }
    if (req.body.t7 === 'on') {
        excelHeaders["bandT7"] = true;
        actualHdrs.push("bandT7");
    }
    if (req.body.t8 === 'on') {
        excelHeaders["bandT8"] = true;
        actualHdrs.push("bandT8");
    }
    if (req.body.t9 === 'on') {
        excelHeaders["bandT9"] = true;
        actualHdrs.push("bandT9");
    }
    if (req.body.mon === 'on') {
        excelHeaders["dayMon"] = true;
        actualHdrs.push("dayMon");
    }
    if (req.body.tue === 'on') {
        excelHeaders["dayTue"] = true;
        actualHdrs.push("dayTue");
    }
    if (req.body.wed === 'on') {
        excelHeaders["dayWed"] = true;
        actualHdrs.push("dayWed");
    }
    if (req.body.thus === 'on') {
        excelHeaders["dayThus"] = true;
        actualHdrs.push("dayThus");
    }
    if (req.body.fri === 'on') {
        excelHeaders["dayFri"] = true;
        actualHdrs.push("dayFri");
    }
    if (req.body.sat === 'on') {
        excelHeaders["daySat"] = true;
        actualHdrs.push("daySat");
    }
    if (req.body.sun === 'on') {
        excelHeaders["daySun"] = true;
        actualHdrs.push("daySun");
    }
    if (req.body.nat === 'on') {
        excelHeaders["datNat"] = true;
        actualHdrs.push("datNat");
    }

    console.log(excelHeaders);

    let food_scrub = [];
    let entertainment_scrub = [];
    let tourism_scrub = [];
    let health_scrub = [];
    let insurance_scrub = [];
    let real_estate_scrub = [];
    let education_scrub = [];
    let goods_scrub = [];


    file.mv(uploadDir + file.name, function (err, data) {

        let xlData = excelProcessor.parseExcel(uploadDir + file.name, 0);
        let todayDateStr = utils.todayDateString();
        let result_arr = [];
        processScrubFile(0, xlData, excelHeaders, todayDateStr, insurance_scrub, real_estate_scrub, education_scrub, health_scrub, goods_scrub, entertainment_scrub, tourism_scrub, food_scrub, result_arr, function (err, result) {
            console.log('data received', result);
            let sheetHeaders = excelHeaders.length !== 0 ? excelHeaders : Object.keys(result[0]);
            console.log("sheetHeaders", sheetHeaders);
            excelProcessor.createExcelFromJson(uploadDir, 'scrubbing_output.xlsx', 'Sheet', result, sheetHeaders);

            /* excelProcessor.createExcelFromJson(uploadDir, 'insurance_scrubbing_output.xlsx', 'Insurance', result, sheetHeaders);
             excelProcessor.createExcelFromJson(uploadDir, 'education_scrubbing_output.xlsx', 'Education', result, sheetHeaders);
             excelProcessor.createExcelFromJson(uploadDir, 'health_scrubbing_output.xlsx', 'Health', result, sheetHeaders);
             excelProcessor.createExcelFromJson(uploadDir, 'consumerGoodsscrubbing_output.xlsx', 'ConsumerGoods', result, sheetHeaders);
             excelProcessor.createExcelFromJson(uploadDir, 'tourism_scrubbing_output.xlsx', 'Tourism', result, sheetHeaders);
             excelProcessor.createExcelFromJson(uploadDir, 'entertainment_scrubbing_output.xlsx', 'Entertainment', result, sheetHeaders);
             excelProcessor.createExcelFromJson(uploadDir, 'food_scrubbing_output.xlsx', 'Food', result, sheetHeaders);*/

            console.log('end');
            res.redirect('/scrubFile?success=true');
        });

    })
};

function processScrubFile(index, xlData, excelHeaders, todaystr, insurance_scrub, real_estate_scrub, education_scrub, health_scrub, goods_scrub, entertainment_scrub, tourism_scrub, food_scrub, result, cb) {
    let dow = new Date().getDay();
    let _next_dow = [];
    let _month = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun', 'nat'];

    console.log(index, xlData.length);
    if (index < xlData.length) {
        let phone = xlData[index]['numbers'];

        let url = 'http://localhost:3000/api/subscriber/' + phone;

        request.makeFetchCall(url, function (err, subscriberDetail) {
            //console.log("makegetcall", err, subscriberDetail, typeof subscriberDetail);
            if (subscriberDetail) {
                subscriberDetail = JSON.parse(subscriberDetail);
                console.log('adding result');
                var encryptedphnum = crypt.encrypt(todaystr.concat(phone));
                let cell = { 'phone': encryptedphnum };
                if (excelHeaders["mocVoice"]) {
                    cell['mocVoice'] = subscriberDetail['mocVoice'];
                }
                if (excelHeaders["mocSMS"]) {
                    cell['mocSMS'] = subscriberDetail['mocSMS'];
                }
                if (excelHeaders["mocADrec"]) {
                    cell['mocADrec'] = subscriberDetail['mocADrec'];
                }
                if (excelHeaders["mocADlive"]) {
                    cell['mocADlive'] = subscriberDetail['mocADlive'];
                }
                if (excelHeaders["mocRobo"]) {
                    cell['mocRobo'] = subscriberDetail['mocRobo'];
                }
                if (excelHeaders["bandT1"]) {
                    cell['bandT1'] = subscriberDetail['bandT1'];
                }
                if (excelHeaders["bandT2"]) {
                    cell['bandT2'] = subscriberDetail['bandT2'];
                }
                if (excelHeaders["bandT3"]) {
                    cell['bandT3'] = subscriberDetail['bandT3'];
                }
                if (excelHeaders["bandT4"]) {
                    cell['bandT4'] = subscriberDetail['bandT4'];
                }
                if (excelHeaders["bandT5"]) {
                    cell['bandT5'] = subscriberDetail['bandT5'];
                }
                if (excelHeaders["bandT6"]) {
                    cell['bandT6'] = subscriberDetail['bandT6'];
                }
                if (excelHeaders["bandT7"]) {
                    cell['bandT7'] = subscriberDetail['bandT7'];
                }
                if (excelHeaders["bandT8"]) {
                    cell['bandT8'] = subscriberDetail['bandT8'];
                }
                if (excelHeaders["bandT9"]) {
                    cell['bandT9'] = subscriberDetail['bandT9'];
                }
                if (excelHeaders["dayMon"]) {
                    cell['dayMon'] = subscriberDetail['dayMon'];
                }
                if (excelHeaders["dayTue"]) {
                    cell['dayTue'] = subscriberDetail['dayTue'];
                }
                if (excelHeaders["dayWed"]) {
                    cell['dayWed'] = subscriberDetail['dayWed'];
                }
                if (excelHeaders["dayThus"]) {
                    cell['dayThus'] = subscriberDetail['dayThus'];
                }
                if (excelHeaders["dayFri"]) {
                    cell['dayFri'] = subscriberDetail['dayFri'];
                }
                if (excelHeaders["daySat"]) {
                    cell['daySat'] = subscriberDetail['daySat'];
                }
                if (excelHeaders["daySun"]) {
                    cell['daySun'] = subscriberDetail['daySun'];
                }
                if (excelHeaders["datNat"]) {
                    cell['datNat'] = subscriberDetail['datNat'];
                }

                console.log("cell= ", cell);
                if (subscriberDetail['uccInsurance']) {
                    insurance_scrub.push(cell);
                }
                if (subscriberDetail['uccRealstate']) {
                    real_estate_scrub.push(cell);
                }
                if (subscriberDetail['uccEducation']) {
                    education_scrub.push(cell);
                }
                if (subscriberDetail['uccHealth']) {
                    health_scrub.push(cell);
                }
                if (subscriberDetail['uccGood']) {
                    goods_scrub.push(cell);
                }
                if (subscriberDetail['uccEnt']) {
                    entertainment_scrub.push(cell);
                }
                if (subscriberDetail['uccTourism']) {
                    tourism_scrub.push(cell);
                }
                if (subscriberDetail['uccFood']) {
                    food_scrub.push(cell);
                }

                result.push(cell);

                console.log("result", result);

            };
            console.log('added');
            index++;
            processScrubFile(index, xlData, excelHeaders, todaystr, insurance_scrub, real_estate_scrub, education_scrub, health_scrub, goods_scrub, entertainment_scrub, tourism_scrub, food_scrub, result, cb);

        });
    }
    else {
        console.log("came here");
        cb(null, result);
    }
}

function processFilteredScrubFile(index, xlData, todaystr, result, cb) {
    let dow = new Date().getDay();
    let _next_dow = [];
    let _month = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun', 'nat'];

    console.log(index, xlData.length);
    if (index < xlData.length) {
        let phone = xlData[index]['numbers'];

        let url = 'http://localhost:3000/api/subscriber/' + phone;

        request.makeFetchCall(url, function (err, subscriberDetail) {
            console.log("makegetcall", err, subscriberDetail, typeof subscriberDetail);
            if (subscriberDetail) {
                subscriberDetail = JSON.parse(subscriberDetail);
                console.log('adding result');
                var encryptedphnum = crypt.encrypt(todaystr.concat(phone));
                let cell = {
                    'phone': encryptedphnum,
                    'uccInsurance': subscriberDetail['uccInsurance'],
                    'uccRealstate': subscriberDetail['uccRealstate'],
                    'uccEducation': subscriberDetail['uccEducation'],
                    'uccGood': subscriberDetail['uccGood'],
                    'uccHealth': subscriberDetail['uccHealth'],
                    'uccEnt': subscriberDetail['uccEnt'],
                    'uccTourism': subscriberDetail['uccTourism'],
                    'uccFood': subscriberDetail['uccFood'],
                    'mocVoice': subscriberDetail['mocVoice'],
                    'mocSMS': subscriberDetail['mocSMS'],
                    'mocADrec': subscriberDetail['mocADrec'],
                    'mocADlive': subscriberDetail['mocADlive'],
                    'mocRobo': subscriberDetail['mocRobo'],
                    'bandT1': subscriberDetail['bandT1'],
                    'bandT2': subscriberDetail['bandT2'],
                    'bandT3': subscriberDetail['bandT3'],
                    'bandT4': subscriberDetail['bandT4'],
                    'bandT5': subscriberDetail['bandT5'],
                    'bandT6': subscriberDetail['bandT6'],
                    'bandT7': subscriberDetail['bandT7'],
                    'bandT8': subscriberDetail['bandT8'],
                    'bandT9': subscriberDetail['bandT9'],
                    'dayMon': subscriberDetail['dayMon'],
                    'dayTue': subscriberDetail['dayTue'],
                    'dayWed': subscriberDetail['dayWed'],
                    'dayThus': subscriberDetail['dayThus'],
                    'dayFri': subscriberDetail['dayFri'],
                    'daySat': subscriberDetail['daySat'],
                    'daySun': subscriberDetail['daySun'],
                    'datNat': subscriberDetail['datNat']
                };
                result.push(cell);
                console.log('added');
            }
            index++;
            processFilteredScrubFile(index, xlData, todaystr, result, cb);
        });
    } else {
        cb(null, result);
    }
}

exports.parsePreferencesFile = function (req, res) {
    let file = req.files.prefFile;
    file.mv(uploadDir + file.name, function (err, data) {

        let xlData = excelProcessor.parseExcel(uploadDir + file.name, 0);
        console.log(xlData);
        logger.info('[parsePreferencesFile]', xlData);

        processPreferencesFile(0, xlData, function (err, result) {
            res.redirect('/bulkPref?success=true');
        });
    });
};

function processPreferencesFile(index, xlData, cb) {
    logger.info('[processPreferencesFile]', index, xlData.length);

    if (index < xlData.length) {

        let phone = xlData[index]['phone'];
        logger.info('[processPreferencesFile]', phone);

        let subscriberRequestObject = {
            url: 'http://localhost:3000/api/subscriber/' + phone,
            headers: {
                'Accept': 'application/json'
            }

        };

        let subscriberPostObject = {
            url: 'http://localhost:3000/api/subscriber/',
            headers: {
                'Accept': 'application/json'
            }

        };

        console.log(xlData[index]['uccInsurance'], xlData[index]['uccRealstate'], xlData[index]['uccEducation']);
        let participant = {
            $class: 'org.example.biznet.subscriber',
            'mobno': phone,
            'tsp': "resource:org.example.biznet.TSP#TSP2",
            'uccInsurance': String(xlData[index]['uccInsurance']) === '1',
            'uccRealstate': String(xlData[index]['uccRealstate']) === '1',
            'uccEducation': String(xlData[index]['uccEducation']) === '1',
            'uccHealth': String(xlData[index]['uccHealth']) === '1',
            'uccGood': String(xlData[index]['uccGood']) === '1',
            'uccEnt': String(xlData[index]['uccEnt']) === '1',
            'uccTourism': String(xlData[index]['uccTourism']) === '1',
            'uccFood': String(xlData[index]['uccFood']) === '1',
            'mocVoice': String(xlData[index]['mocVoice']) === '1',
            'mocSMS': String(xlData[index]['mocSMS']) === '1',
            'mocADrec': String(xlData[index]['mocADrec']) === '1',
            'mocADlive': String(xlData[index]['mocADlive']) === '1',
            'mocRobo': String(xlData[index]['mocRobo']) === '1',
            'bandT1': String(xlData[index]['bandT1']) === '1',
            'bandT2': String(xlData[index]['bandT2']) === '1',
            'bandT3': String(xlData[index]['bandT3']) === '1',
            'bandT4': String(xlData[index]['bandT4']) === '1',
            'bandT5': String(xlData[index]['bandT5']) === '1',
            'bandT6': String(xlData[index]['bandT6']) === '1',
            'bandT7': String(xlData[index]['bandT7']) === '1',
            'bandT8': String(xlData[index]['bandT8']) === '1',
            'bandT9': String(xlData[index]['bandT9']) === '1',
            'dayMon': String(xlData[index]['dayMon']) === '1',
            'dayTue': String(xlData[index]['dayTue']) === '1',
            'dayWed': String(xlData[index]['dayWed']) === '1',
            'dayThus': String(xlData[index]['dayThus']) === '1',
            'dayFri': String(xlData[index]['dayFri']) === '1',
            'daySat': String(xlData[index]['daySat']) === '1',
            'daySun': String(xlData[index]['daySun']) === '1',
            'datNat': String(xlData[index]['datNat']) === '1',
            'consentnos': []
        };

        subscriberRequestObject['method'] = 'GET';

        request.makeFetchCall(subscriberRequestObject['url'], function (err, subscriberDetail) {
            console.log('[getsubscriberRequest]', err, subscriberDetail);
            let indvl = JSON.parse(subscriberDetail);
            if (!subscriberDetail) {
                subscriberPostObject['method'] = 'POST';
                subscriberPostObject['body'] = participant;
                subscriberPostObject['json'] = true;
                request.fetchData(subscriberPostObject, function (err, response) {
                    console.log('POST response status: ', response.status);
                    index++;
                    processPreferencesFile(index, xlData, cb);
                });
            } else {
                participant['consentnos'] = indvl['consentnos'];
                subscriberRequestObject['method'] = 'PUT';
                subscriberRequestObject['body'] = participant;
                subscriberRequestObject['json'] = true;
                request.fetchData(subscriberRequestObject, function (err, response) {
                    console.log('[updatesubscriberRequest]', err, response);
                    index++;
                    processPreferencesFile(index, xlData, cb);
                })

            }
        });

    } else {
        cb(null, true);
    }
}

exports.parseConsentsFile = function (req, res) {
    let file = req.files.consentFile;
    //let tmHeaderforConsent = "TD-DIWALI";
    file.mv(uploadDir + file.name, function (err, data) {

        let xlData = excelProcessor.parseExcel(uploadDir + file.name, 0);
        console.log(xlData);
        logger.info('[parseConsentsFile]', xlData);

        processConsentsFile(0, xlData, function (err, result) {
            res.redirect('/bulkPref?success=true');
        });
    });
};

function processConsentsFile(index, xlData, cb) {

    updateSubscriberConsents(index, xlData, cb);
    //  updateEntityConsents(index, xlData, cb);
    logger.info('[processConsentsFile]', index, xlData.length);
}

function updateEntityConsents(index, xlData, cb) {
    if (index < xlData.length) {
        let phone = xlData[index]['phone'];
        let templtID = xlData[index]['templateID'];

        let templateRequestObject = {
            url: 'http://localhost:3000/api/contentTemplate/' + templtID,
            headers: {
                'Accept': 'application/json'
            }
        };

        templateRequestObject['method'] = 'GET';
        request.makeFetchCall(templateRequestObject['url'], function (err, templateDetail) {
            if (!templateDetail) {
            }
            else {
                let indvl = JSON.parse(templateDetail);
                if (!indvl['subscribersConsent'].includes(String(phone))) {
                    indvl['subscribersConsent'].push(String(phone));
                }
                templateRequestObject['method'] = 'PUT';
                templateRequestObject['body'] = participant;
                templateRequestObject['json'] = true;
                request.fetchData(templateRequestObject, function (err, response) {
                    console.log('Template PUT response status: ', response.status);
                });
            }
        });
        index++;
        processConsentsFile(index, xlData, cb);
    }
}

function updateSubscriberConsents(index, xlData, cb) {
    // console.log("Header value:", tmHeader);

    if (index < xlData.length) {
        let phone = xlData[index]['phone'];
        logger.info('[processConsentsFile]', phone);

        let subscriberRequestObject = {
            url: 'http://localhost:3000/api/subscriber/' + phone,
            headers: {
                'Accept': 'application/json'
            }

        };

        let subscriberPostObject = {
            url: 'http://localhost:3000/api/subscriber/',
            headers: {
                'Accept': 'application/json'
            }

        };

        //add consent details to subscriber account
        subscriberRequestObject['method'] = 'GET';
        request.makeFetchCall(subscriberRequestObject['url'], function (err, subscriberDetail) {
            //console.log('[getsubscriberRequest]',err,subscriberDetail);
            if (!subscriberDetail) {
                let participant = {
                    $class: 'org.example.biznet.subscriber',
                    'mobno': phone,
                    'tsp': 'resource:org.example.biznet.TSP#TSP1',
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
                    'consentnos': [String(xlData[index]['templateID'])]
                };
                subscriberPostObject['method'] = 'POST';
                subscriberPostObject['body'] = participant;
                subscriberPostObject['json'] = true;
                request.fetchData(subscriberPostObject, function (err, response) {
                    console.log('POST response status: ', response.status);
                    updateEntityConsents(index, xlData, cb);
                });
            }
            else {
                let indvl = JSON.parse(subscriberDetail);
                if (!indvl['consentnos'].includes(String(xlData[index]['templateID']))) {
                    indvl['consentnos'].push(String(xlData[index]['templateID']));
                }
                let participant = {
                    $class: 'org.example.biznet.subscriber',
                    'tsp': indvl['tsp'],
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
                subscriberRequestObject['method'] = 'PUT';
                subscriberRequestObject['body'] = participant;
                subscriberRequestObject['json'] = true;
                request.fetchData(subscriberRequestObject, function (err, response) {
                    console.log('PUT response status: ', response.status);
                    updateEntityConsents(index, xlData, cb);
                });
            }
        });
    } else {
        cb(null, true);
    }
}

exports.deScrubFile = function (req, res) {
    let file = req.files.descrubFile;

    file.mv(uploadDir + file.name, function (err, data) {

        let xlData = excelProcessor.parseExcel(uploadDir + file.name, 0);

        processdeScrubFile(0, xlData, [], function (err, result) {
            console.log('data received', result);
            excelProcessor.createExcelFromJson(uploadDir, 'de_scrubbing_output.xlsx', 'Sheet1', result, Object.keys(result[0]));
            console.log('end');
            res.redirect('/deScrub?success=true');
        });

    })
};

exports.makeSubscriberComplaintsExcel = function (req, res) {
    let subscriberPh = "9012345678"; //This value needs to come from UI
    chainManager.getComplaintsforSubscriber(subscriberPh, function (err, subsData) {
        console.log('Complaints data for subscriber received', subsData);
        excelProcessor.createExcelFromJson(uploadDir, 'subscriber_complaints_output.xlsx', 'Sheet', subsData, Object.keys(subsData[0]));
        res.redirect('/deScrub?success=true'); //this redirect path needs to be changed
    });
}

exports.makeEntityComplaintsExcel = function (req, res) {
    let uccHeader = "HDR1"; //This value needs to come from UI
    chainManager.getHeaderByHeaderName(uccHeader, function (err, headerData) {
        let uccEntityName = headerData['telemarketer_owner'].substr(1 + headerData['telemarketer_owner'].indexOf('#'));
        getComplaintsByEntity(uccEntityName, function (err, entsData) {
            excelProcessor.createExcelFromJson(uploadDir, 'entities_complaints_output.xlsx', 'Sheet', entsData, Object.keys(entsData[0]));
            res.redirect('/deScrub?success=true'); //this redirect path needs to be changed
        });
    });
}

function getComplaintsByEntity(entityID, cb) {
    let complaintsList = [];
    chainManager.getHeadersForEntity(entityID, function (err, headersList) {
        var index = 0;
        parseHeadersforComplaintsbyEntity(index, headersList, complaintsList, function (err, data) {
            console.log("returned data in getComplaintsByEntity", data);
            return cb(err, data);
        })

    });
}

function parseHeadersforComplaintsbyEntity(index, headersList, complaintsList, cb) {
    console.log("index=", index);
    console.log("complaintsList = ", complaintsList);
    console.log("headersList=", headersList[index]);
    if (index < headersList.length) {
        chainManager.getComplaintsbyHeader(headersList[index]['headerstr'], function (err, indvHdrComplaints) {
            complaintsList = complaintsList.concat(indvHdrComplaints);
            index++;
            parseHeadersforComplaintsbyEntity(index, headersList, complaintsList, cb);
        });
    }
    else {
        cb(null, complaintsList);
    }
};


function processdeScrubFile(index, xlData, result, cb) {
    console.log("in descrub function");
    console.log(index, xlData.length);
    if (index < xlData.length) {
        console.log("in loop");
        let phoneno = crypt.decrypt(xlData[index]['phone']);
        let cell = {
            'phone': phoneno.substring(phoneno.length - 10),
            'uccInsurance': xlData[index]['uccInsurance'],
            'uccRealstate': xlData[index]['uccRealstate'],
            'uccEducation': xlData[index]['uccEducation'],
            'uccHealth': xlData[index]['uccHealth'],
            'uccGood': xlData[index]['uccGood'],
            'uccEnt': xlData[index]['uccEnt'],
            'uccTourism': xlData[index]['uccTourism'],
            'uccFood': xlData[index]['uccFood'],
            'mocVoice': xlData[index]['mocVoice'],
            'mocSMS': xlData[index]['mocSMS'],
            'mocADrec': xlData[index]['mocADrec'],
            'mocADlive': xlData[index]['mocADlive'],
            'mocRobo': xlData[index]['mocRobo'],
            'bandT1': xlData[index]['bandT1'],
            'bandT2': xlData[index]['bandT2'],
            'bandT3': xlData[index]['bandT3'],
            'bandT4': xlData[index]['bandT4'],
            'bandT5': xlData[index]['bandT5'],
            'bandT6': xlData[index]['bandT6'],
            'bandT7': xlData[index]['bandT7'],
            'bandT8': xlData[index]['bandT8'],
            'bandT9': xlData[index]['bandT9'],
            'dayMon': xlData[index]['dayMon'],
            'dayTue': xlData[index]['dayTue'],
            'dayWed': xlData[index]['dayWed'],
            'dayThus': xlData[index]['dayThus'],
            'dayFri': xlData[index]['dayFri'],
            'daySat': xlData[index]['daySat'],
            'daySun': xlData[index]['daySun'],
            'datNat': xlData[index]['datNat']
        };
        result.push(cell);
        console.log('added');
        index++;
        processdeScrubFile(index, xlData, result, cb);
    }
    else {
        cb(null, result);
    }
}

function test() {
    let source = [["9876543210", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543211", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543212", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543213", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543214", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543215", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543216", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543217", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543218", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543219", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543220", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543221", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543222", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543223", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543224", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543225", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543226", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543227", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543228", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543229", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543230", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543231", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543232", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543233", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543234", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543235", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543236", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543237", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543238", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543239", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543240", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"], ["9876543241", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0"]];

    for (let i = 0; i < source.length; i++) {
        let value = source[i];
        let participant = {
            $class: 'org.example.biznet.subscriber',
            'uccInsurance': value[1] === 1,
            'uccRealstate': value[2] === 1,
            'uccEducation': value[3] === 1,
            'uccHealth': value[4] === 1,
            'uccGood': value[5] === 1,
            'uccEnt': value[6] === 1,
            'uccTourism': value[7] === 1,
            'uccFood': value[8] === 1,
            'mocVoice': value[9] === 1,
            'mocSMS': value[10] === 1,
            'mocADrec': value[11] === 1,
            'mocADlive': value[12] === 1,
            'mocRobo': value[13] === 1,
            'bandT1': value[14] === 1,
            'bandT2': value[15] === 1,
            'bandT3': value[16] === 1,
            'bandT4': value[17] === 1,
            'bandT5': value[18] === 1,
            'bandT6': value[19] === 1,
            'bandT7': value[20] === 1,
            'bandT8': value[21] === 1,
            'bandT9': value[22] === 1,
            'dayMon': value[23] === 1,
            'dayTue': value[24] === 1,
            'dayWed': value[25] === 1,
            'dayThus': value[26] === 1,
            'dayFri': value[27] === 1,
            'daySat': value[28] === 1,
            'daySun': value[29] === 1,
            'datNat': value[30] === 1,
            'consentnos': ''
        };

        servicesubscriber.updateParticipant(value[0], participant)
            .toPromise()
            .then(() => {
                //logic
            })


    }
}
