"use strict";
exports.__esModule = true;
var Attendee = (function () {
    function Attendee(options) {
        if (options === void 0) { options = {}; }
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.email = options.email;
        this.phone = options.phone;
        this.company = options.company;
    }
    Object.defineProperty(Attendee.prototype, "name", {
        /**
         * The full name of the Attendee
         */
        get: function () {
            return (this.firstName + " " + this.lastName).trim();
        },
        enumerable: true,
        configurable: true
    });
    return Attendee;
}());
Attendee.Model = 'Attendee__c';
exports.Attendee = Attendee;
