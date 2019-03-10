'use-strict'
let XLSX = require('xlsx');


exports.parseExcel = function (filePath, sheetIndex) {
    let workbook = XLSX.readFile(filePath);
    let sheet_name_list = workbook.SheetNames;
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[sheetIndex]]);
};

exports.createExcel = function (fileDir, fileName, sheetName, dataToWrite) {

    try {
        let outputFile = fileDir + fileName;
        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.aoa_to_sheet(dataToWrite);
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        XLSX.writeFile(wb, outputFile);
        return true;

    } catch (e) {
    }
    return false;
};