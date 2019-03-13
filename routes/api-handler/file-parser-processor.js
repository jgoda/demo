'use-strict'

/*Local Imports*/
let logManager = require('../../utils/log-manager.js');
let chainManager = require('../../server/chain/chain.js');
let processor = require('../../server/processor');
let uploadDir = __dirname + "/../../scrubFolder/";
let excelProcessor = require('../../utils/excel-parser.js');
let utils = require('../../utils/utils.js');
let userProcessor = require('./user-processor.js');
let request = require('../../server/http-request.js');

/*Global Vars*/
let logger = logManager.getLogger();

exports.parseScrubFile = function (req, res) {
    let file = req.files.scrubFile;

    file.mv(uploadDir + file.name, function (err, data) {

        let xlData = excelProcessor.parseExcel(uploadDir + file.name, 0);
        let todayDateStr = utils.todayDateString();

        processScrubFile(0, xlData, todayDateStr, [], function (err, result) {
            excelProcessor.createExcel(uploadDir, 'scrubbing-output.xlsx', 'Sheet1', result);
        });
        console.log('end');
        res.redirect('/scrubFile?success=true');
    })
};

function processScrubFile(index, xlData, todaystr, result, cb) {
    let dow = new Date().getDay();
    let _next_dow = [];
    let _month = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun', 'nat'];

    console.log(index, xlData.length);
    if (index < xlData.length) {
        let phone = xlData[index]['numbers'];
        if (chainManager.doesUserExist(phone) /*&& chainManager.scrubbing_getUserConsent(phone, 1)*/) {
            chainManager.getUserUCCDay(phone, function (err, uccData) {

                console.log(uccData);
                _next_dow[0] = uccData[_month[dow]];
                _next_dow[2] = uccData[_month[7]];
                if (dow < 6) {
                    _next_dow[1] = uccData[_month[dow + 1]];
                }
                else {
                    _next_dow[1] = uccData[_month[0]];
                }
                console.log(_next_dow);
                if (_next_dow[0] || _next_dow[1]) {
                    result.push([todaystr.concat(phone), _next_dow, 23, 34]);
                }
                console.log(result);
                index++;
                processScrubFile(index, xlData, todaystr, result, cb);
            });
        } else {
            index++;
            processScrubFile(index, xlData, todaystr, result, cb);
        }

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
            url: 'http://localhost:3000/subscriber/' + phone,
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        };

        subscriberRequestObject['method'] = 'GET';

        request.fetchData(subscriberRequestObject, function (err, subscriberDetail) {
            if (err) {
                index++;
                processPreferencesFile(index, xlData, cb);
            } else {
                let participant = {
                    $class: 'org.example.biznet.subscriber',
                    'uccInsurance': xlData[index]['uccInsurance'] === '1',
                    'uccRealstate': xlData[index]['uccRealstate'] === '1',
                    'uccEducation': xlData[index]['uccEducation'] === '1',
                    'uccHealth': xlData[index]['uccHealth'] === '1',
                    'uccGood': xlData[index]['uccGood'] === '1',
                    'uccEnt': xlData[index]['uccEnt'] === '1',
                    'uccTourism': xlData[index]['uccTourism'] === '1',
                    'uccFood': xlData[index]['uccFood'] === '1',
                    'mocVoice': xlData[index]['mocVoice'] === '1',
                    'mocSMS': xlData[index]['mocSMS'] === '1',
                    'mocADrec': xlData[index]['mocADrec'] === '1',
                    'mocADlive': xlData[index]['mocADlive'] === '1',
                    'mocRobo': xlData[index]['mocRobo'] === '1',
                    'bandT1': xlData[index]['bandT1'] === '1',
                    'bandT2': xlData[index]['bandT2'] === '1',
                    'bandT3': xlData[index]['bandT3'] === '1',
                    'bandT4': xlData[index]['bandT4'] === '1',
                    'bandT5': xlData[index]['bandT5'] === '1',
                    'bandT6': xlData[index]['bandT6'] === '1',
                    'bandT7': xlData[index]['bandT7'] === '1',
                    'bandT8': xlData[index]['bandT8'] === '1',
                    'bandT9': xlData[index]['bandT9'] === '1',
                    'dayMon': xlData[index]['dayMon'] === '1',
                    'dayTue': xlData[index]['dayTue'] === '1',
                    'dayWed': xlData[index]['dayWed'] === '1',
                    'dayThus': xlData[index]['dayThus'] === '1',
                    'dayFri': xlData[index]['dayFri'] === '1',
                    'daySat': xlData[index]['daySat'] === '1',
                    'daySun': xlData[index]['daySun'] === '1',
                    'datNat': xlData[index]['datNat'] === '1',
                    'consentnos': subscriberDetail['consentnos']
                };
                subscriberRequestObject['method'] = 'PUT';
                subscriberRequestObject['body'] = participant;
                request.fetchData(subscriberRequestObject, function (err, response) {
                    index++;
                    processPreferencesFile(index, xlData, cb);
                })

            }
        });

    } else {
        cb(null, true);
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


