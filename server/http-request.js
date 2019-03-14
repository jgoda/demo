'use strict';

/** @module server/lib/httpRequest */

/** Modules import */
let request = require('request');

/** Local Imports */
let logManager = require('./../utils/log-manager.js');

/** Global Vars */
let logger = logManager.getLogger();

/** Function to handle the http request
 * @param {string} url - refers to the url for which http request needs to be made
 * @param {function} cb - refers to the callback function to which http request result needs to be passed
 */
function makeRequest(url, cb) {
    logger.info('[http-requests] Making http request to using the url ', url);

    let options = {};
    if (typeof url === 'object') {
        options = url;
        url = options.url;
    }

    /** If no url has been passed return */
    if (!url) {
        return;
    }
    logger.info('[data] network call BEGIN. [url: %s]', url);

    let currTime = (new Date()).getTime();
    /** Recording current time for performance */

    request({
        url: options.url,
        method: options.method || 'GET', /** By default pick the method GET */
        timeout: options.timeout || 10000, /** Request timeout set to be 10,000 ms */
        headers: options.headers || {},
        qs: options.qs || null,
        json: typeof options.json === 'boolean' ? options.json : true,
        followRedirect: true,
        maxRedirects: 10, /** Max redirects set to 10 */
        body: options.body || null
    }, function (error, response, body) {
        logger.info('[http-request] network call DONE. [url: %s][%s ms]', url, (new Date()).getTime() - currTime);
        return cb(error, body);
    });
}

/**
 * Fetches data from a api endpoint
 * @param {string|object} url - url to fetch data from. If object, must contain "url" field
 * @param {function} cb - callback to call when done
 */
exports.fetchData = function (url, cb) {
    makeRequest(url, cb);
};


exports.makeGetCall = function (url, cb) {
    request.get(url, {}, function (err, res, body) {
        cb(err, body)
    });
};
exports.makeFetchCall = function (url, cb) {
    let options={
        headers:{
            "Accept":"application/json"
        }
    };
    request.get(url, options, function (err, response, body) {
        if(response && response.statusCode==200){
            return cb(null,body);
        }
        return cb(err, null);
    });
};
