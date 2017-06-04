'use strict';

import * as async from 'async';
import * as request from 'request';
import * as jsforce from 'jsforce';
import { Response, Request, NextFunction } from 'express';
import { SalesForceUser, Event } from './../models/index';

const connection: any = new jsforce.Connection({
    instanceUrl: SalesForceUser.InstanceUrl
});

/**
 * GET /api/events
 * Returns the Events from Salesforce
 */
export let getEvents = (req: Request, res: Response, next: NextFunction) => {
    connection.login(SalesForceUser.Username, SalesForceUser.Password, (err: any, authRes: any) => {
        if (err) {
            return console.error(err);
        }
        connection.sobject(Event.Model)
            .select('Id, Name, Start__c, End__c, Registration_Limit__c, Status__c')
            .where(`Status__c != 'Draft'`)
            .execute((err: any, result: any[]) => {
                if (err) {
                    return console.error(err);
                }
                res.json(
                    result
                        .map(res => new Event(res))
                );
            });
    });
};

/**
 * GET /api/v1/event/:id
 * Returns a single event by id
 */
export let getEvent = (req: Request, res: Response, next: NextFunction) => {
    connection.login(SalesForceUser.Username, SalesForceUser.Password, (err: any, authRes: any) => {
        if (err) {
            return console.error(err);
        }
        connection.sobject(Event.Model)
            .select('Id, Name')
            .where(`Id = '${req.params.id}'`)
            .execute((err: any, result: any) => {
                if (err) {
                    return console.error(err);
                }
                res.json(result.map((event: any) => new Event(event))[0]);
            });
    });
};
