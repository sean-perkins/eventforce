"use strict";
exports.__esModule = true;
var Session = (function () {
    function Session(options) {
        if (options === void 0) { options = {}; }
        this.name = options.name;
        this.end = options.end;
        this.start = options.start;
        this.status = options.status;
        this.attendees = Array.isArray(options.attendees) ? options.attendees : [];
    }
    return Session;
}());
Session.Model = 'Session__c';
exports.Session = Session;
