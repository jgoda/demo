'use-strict'

/*Local Imports*/
let logManager = require('../../utils/log-manager.js');
let chainManager = require('../../server/chain/chain.js');
let processor = require('../../server/processor');
let uploadDir = __dirname + "/../../scrubFolder/";
let excelProcessor = require('../../utils/excel-parser.js');
let utils = require('../../utils/utils.js');
let userProcessor = require('./user-processor.js');

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


        if (chainManager.doesUserExist(phone)) {

            let bulkUpdate = [
                xlData[index]['uccInsurance'],
                xlData[index]['uccRealstate'],
                xlData[index]['uccEducation'],
                xlData[index]['uccHealth'],
                xlData[index]['uccGood'],
                xlData[index]['uccEnt'],
                xlData[index]['uccTourism'],
                xlData[index]['uccFood'],
                xlData[index]['mocVoice'],
                xlData[index]['mocSMS'],
                xlData[index]['mocADrec'],
                xlData[index]['mocADlive'],
                xlData[index]['mocRobo'],
                xlData[index]['bandT1'],
                xlData[index]['bandT2'],
                xlData[index]['bandT3'],
                xlData[index]['bandT4'],
                xlData[index]['bandT5'],
                xlData[index]['bandT6'],
                xlData[index]['bandT7'],
                xlData[index]['bandT8'],
                xlData[index]['bandT9'],
                xlData[index]['dayMon'],
                xlData[index]['dayTue'],
                xlData[index]['dayWed'],
                xlData[index]['dayThus'],
                xlData[index]['dayFri'],
                xlData[index]['daySat'],
                xlData[index]['daySun'],
                xlData[index]['datNat']
            ];
            console.log(bulkUpdate);

            let result = chainManager.bulkupdateUCC(phone, bulkUpdate);
            logger.info('[processPreferencesFile] bulkupdateUCC result', result);

            index++;
            processPreferencesFile(index, xlData, cb);

        } else {
            index++;
            processPreferencesFile(index, xlData, cb);
        }


    } else {
        cb(null, true);
    }
}


