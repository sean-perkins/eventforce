"use strict";
exports.__esModule = true;
var Event = (function () {
    function Event(options) {
        if (options === void 0) { options = {}; }
        this.Id = options.Id;
        this.Name = options.Name;
        this.start = options.start;
        this.end = options.end;
        this.status = options.status;
        this.sessions = Array.isArray(options.sessions) ? options.sessions : [];
        this.attendees = Array.isArray(options.attendees) ? options.attendees : [];
    }
    return Event;
}());
Event.Model = 'Event__c';
exports.Event = Event;
