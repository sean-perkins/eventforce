"use strict";
exports.__esModule = true;
var SalesForceAuthResponse = (function () {
    function SalesForceAuthResponse(options) {
        if (options === void 0) { options = {}; }
        this.id = options.id;
        this.organizationId = options.organizationId;
        this.url = options.url;
        this.accessToken = options.accessToken;
    }
    return SalesForceAuthResponse;
}());
exports.SalesForceAuthResponse = SalesForceAuthResponse;
