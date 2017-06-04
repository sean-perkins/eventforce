"use strict";
exports.__esModule = true;
var SalesForceUser = (function () {
    function SalesForceUser() {
    }
    Object.defineProperty(SalesForceUser, "Username", {
        get: function () {
            return process.env.SALESFORCE_USERNAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalesForceUser, "Password", {
        get: function () {
            return "" + process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_SECURITY_TOKEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SalesForceUser, "InstanceUrl", {
        get: function () {
            return process.env.SALESFORCE_INSTANCE_URL;
        },
        enumerable: true,
        configurable: true
    });
    return SalesForceUser;
}());
exports.SalesForceUser = SalesForceUser;
