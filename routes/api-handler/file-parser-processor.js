'use-strict'

/*Local Imports*/
let logManager = require('../../utils/log-manager.js');
let chainManager = require('../../server/chain/chain.js');
let processor = require('../../server/processor');
let uploadDir = __dirname + "/../../scrubFolder/";
var XLSX = require('xlsx');


/*Global Vars*/
let logger = logManager.getLogger();

exports.parseFile = function (req, res) {
    let file = req.files.scrubFile;

    file.mv(uploadDir + file.name, function (err, data) {
        readFile(uploadDir + file.name, function (err, data) {
            let outputFile = uploadDir + 'scrubbed_output.xlsx';
            let wb = XLSX.utils.book_new();
            let ws = XLSX.utils.aoa_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
            XLSX.writeFile(wb, outputFile);
        });
        console.log('end');
        res.redirect('/scrubFile?success=true');


    })


};

function readFile(filePath, cb) {
    let workbook = XLSX.readFile(filePath);
    let sheet_name_list = workbook.SheetNames;
    let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    let today = new Date();
    var datestr;
    var monstr;
    if (today.getDate() < 10) {
        datestr = "0".concat(today.getDate().toString());
    }
    else {
        datestr = today.getDate().toString();
    }
    if (today.getMonth() < 10) {

        monstr = "0".concat(today.getMonth().toString());
    }
    else {
        monstr = today.getMonth().toString();
    }
    let yearstr = today.getFullYear().toString();
    let hrstr = today.getHours().toString();
    let minstr = today.getMinutes().toString();
    let secstr = today.getSeconds().toString();
    let todaystr = datestr.concat(monstr, yearstr, hrstr, minstr, secstr);
    processFile(0, xlData, todaystr, [], cb);

}

function processFile(index, xlData, todaystr, result, cb) {
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
            });
        }
        index++;
        processFile(index, xlData, todaystr, result, cb);
    } else {
        cb(null, result);
    }
}


