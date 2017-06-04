'use strict';
exports.__esModule = true;
var jsforce = require("jsforce");
var index_1 = require("./../models/index");
var connection = new jsforce.Connection({
    instanceUrl: index_1.SalesForceUser.InstanceUrl
});
/**
 * POST /api/salesforce/login
 * Authenticates the user with Salesforce
 */
exports.loginSalesforce = function (req, res, next) {
    connection.login(index_1.SalesForceUser.Username, index_1.SalesForceUser.Password, function (err, authRes) {
        if (err) {
            return console.error(err);
        }
        res.json(new index_1.SalesForceAuthResponse(Object.assign(authRes, connection)));
    });
};
