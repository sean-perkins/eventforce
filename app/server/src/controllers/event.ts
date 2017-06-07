'use strict';

import * as async from 'async';
import * as request from 'request';
import * as jsforce from 'jsforce';
import * as https from 'https';
import { Response, Request, NextFunction } from 'express';
import { SalesForceUser, Event, Session, Attendee, SessionAttendee } from './../models/index';

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
        getSessionsForEvent(connection, req.params.id)
            .then((sessions) => {
                res.json(sessions);
            }, (error) => {
                console.error(error);
            });
    });
};

export let postEventRegistration = (req: Request, res: Response, next: NextFunction) => {
    connection.login(SalesForceUser.Username, SalesForceUser.Password, (err: any, authRes: any) => {
        if (err) {
            return console.error(err);
        }
        const attendee = new Attendee(req.body);
        const payload = attendee.payload(req.params.id);
        connection.sobject(Attendee.Model)
            .create(payload, (err: any, ret: any) => {
                if (err) {
                    return console.error(err);
                }
                const sessionAttendees: any = [];

                for (const sessionId of req.body.sessions) {
                    sessionAttendees.push({
                        Attendee__c: ret.id,
                        Session__c: sessionId
                    })
                }

                connection.sobject(SessionAttendee.Model).insertBulk(sessionAttendees, (err: any, rets: any) => {
                    if (err) {
                        return console.error(err);
                    }
                    res.json(rets);
                });
            });
    });
};

export let postRegistrationEmail = (req: Request, res: Response, next: NextFunction) => {
     connection.login(SalesForceUser.Username, SalesForceUser.Password, (err: any, authRes: any) => {
        if (err) {
            return console.error(err);
        }
        const body = {
            'inputs' : [
                {
                'emailBody' : 'This is the body of the email',
                'emailAddresses' : 'sean@devonite.com',
                'emailSubject' : 'An email from salesforce',
                'senderType' : 'CurrentUser'
                }
            ]
        };
        // console.log(`${SalesForceUser.InstanceUrl}/services/data/v32.0/query/`);
        // connection.apex.get(`${SalesForceUser.InstanceUrl}/services/data/`, (err: any, ret: any) => {
        //     if (err) {
        //         return console.error(err);
        //     }
        //     console.log('yay!', ret);
        // });

        const options = {
            hostname: 'na54.salesforce.com',
            path: '/services/data/v39.0/quickActions',
            headers: {
                'Authorization': `Bearer ${connection.accessToken}`
            }
        }

        https.get(options, (res) => {
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                console.log('chunk', chunk);
            });

        });

        // const httpReq = http.request({
        //     headers: {
        //         'Authorization': `Bearer ${connection.accessToken}`
        //     },
        //     host: SalesForceUser.InstanceUrl,
        //     path: '/services/data/v39.0/quickActions',
        //     method: 'GET'
        // }, (rel) => {
        //     console.log('headers', JSON.stringify(rel.headers));
        //     rel.setEncoding('utf8');
        //     rel.on('data', (chunk) => {
        //         console.log('body', chunk);
        //     });
        //     console.log('rel', rel);
        // });

        // httpReq.on('error', (err) => {
        //     console.error('error', err);
        // });
        // connection.apex.post(`${SalesForceUser.InstanceUrl}/services/data/v39.0/actions/standard/emailSimple`, body, (err: any, ret: any) => {
        //     if (err) {
        //         return console.error(err);
        //     }
        //     console.log('yay!', ret);
        // });

        // console.log(jsforce);
        // connection.sobject(Attendee.Model)
        //     .quickAction('SendEmail')
        //     .execute((err: any, result: any) => {
        //         if (err) {
        //             return console.error(err);
        //         }
        //         console.log('result!', result);
        //     });
     });
};

let getSessionsForEvent = (connection: any, eventId: string) => {
    return new Promise((resolve, reject) => {
        connection.sobject(Session.Model)
            .select('*')
            .where(`Event__c = '${eventId}'`)
            .execute((err: any, sessions: any[]) => {
                if (err) {
                    return reject(err);
                }
                resolve(sessions.map(session => new Session(session)));
            });
    });
};
