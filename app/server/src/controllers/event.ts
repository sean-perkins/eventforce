'use strict';

import * as async from 'async';
import * as request from 'request';
import * as jsforce from 'jsforce';
import { Response, Request, NextFunction } from 'express';
import { SalesForceUser, Event, Session } from './../models/index';

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
        const fieldList = [
            'Id',
            'Name',
            'Start__c',
            'End__c',
            'Registration_Limit__c',
            'Remaining_Seats__c',
            'Description__c',
            'Status__c'
        ];
        connection.sobject(Event.Model)
            .select(fieldList.join(', '))
            .where(`Status__c != 'Draft'`)
            .orderby('Start__c', 'ASC')
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
            .retrieve(req.params.id, (err: any, event: any) => {
                 if (err) {
                    if (err.errorCode === 'NOT_FOUND') {
                        return res.status(404).send('Not Found');
                    }
                }
                connection.sobject(Session.Model)
                    .select('*')
                    .where(`Event__c = '${req.params.id}'`)
                    .execute((err: any, sessions: any[]) => {
                        if (err) {
                            return console.error(err);
                        }
                        event = new Event((<any>Object).assign(event, {
                            Sessions__c: sessions
                        }));
                        res.json(event);
                    });
            });
    });
};


export let getEventSessions = (req: Request, res: Response, next: NextFunction) => {
    connection.login(SalesForceUser.Username, SalesForceUser.Password, (err: any, authRes: any) => {
        if (err) {
            return console.error(err);
        }
        connection.sobject(Session.Model)
            .select('*')
            .where(`Event__c = '${req.params.id}'`)
            .execute((err: any, sessions: any[]) => {
                res.json(sessions.map(session => new Session(session)));
            });
    });
};
