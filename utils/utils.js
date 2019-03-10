let logManager = require('./log-manager');
let logger = logManager.getLogger();

exports.todayDateString = function () {
    let today = new Date();
    let datestr;
    let monstr;
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
    return datestr.concat(monstr, yearstr, hrstr, minstr, secstr);
}