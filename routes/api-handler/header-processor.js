'use-strict'

/*Local Imports*/
let logManager = require('../../utils/log-manager.js');
let chainManager = require('../../server/chain/chain.js');
let processor = require('../../server/processor');

exports.saveHeader = function (req, res) {

    let header = req.body.header;

    chainManager.getHeaderByHeaderName(header, function (err, data) {
        if (data) {
            let result = {
                status: false,
                message: 'Header already exists'
            };
            return res.send(result);
        } else {
            chainManager.saveHeader(header, function (err, data) {
                if (err) {
                    let result = {
                        status: false,
                        message: 'Something went wrong'
                    };
                    return res.send(result);
                }
                let result = {
                    status: true,
                    message: 'Header registered'
                };
                return res.send(result);
            })
        }
    })
};