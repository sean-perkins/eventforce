'use strict';
exports.__esModule = true;
var jsforce = require("jsforce");
var index_1 = require("./../models/index");
var connection = new jsforce.Connection({
    instanceUrl: index_1.SalesForceUser.InstanceUrl
});
/**
 * GET /api/events
 * Returns the Events from Salesforce
 */
exports.getEvents = function (req, res, next) {
    connection.login(index_1.SalesForceUser.Username, index_1.SalesForceUser.Password, function (err, authRes) {
        if (err) {
            return console.error(err);
        }
        connection.sobject(index_1.Event.Model)
            .select('Id, Name')
            .execute(function (err, result) {
            if (err) {
                return console.error(err);
            }
            res.json(result
                .map(function (res) { return new index_1.Event(res); }));
        });
    });
};
/**
 * GET /api/v1/event/:id
 * Returns a single event by id
 */
exports.getEvent = function (req, res, next) {
    connection.login(index_1.SalesForceUser.Username, index_1.SalesForceUser.Password, function (err, authRes) {
        if (err) {
            return console.error(err);
        }
        connection.sobject(index_1.Event.Model)
            .select('Id, Name')
            .where("Id = '" + req.params.id + "'")
            .execute(function (err, result) {
            if (err) {
                return console.error(err);
            }
            res.json(result.map(function (event) { return new index_1.Event(event); })[0]);
        });
    });
};
