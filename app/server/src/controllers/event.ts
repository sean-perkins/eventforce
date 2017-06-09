'use strict';

import * as async from 'async';
import * as request from 'request';
import * as jsforce from 'jsforce';
import * as https from 'https';
import { Response, Request, NextFunction } from 'express';
import { SalesForceUser, Event, Session, Attendee, SessionAttendee, EventAttendee } from './../models/index';
import { SalesForceEmail, DateFormat } from './../common/index';

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
                    .where(`Event__c = '${req.params.id}' AND Status__c != 'Draft'`)
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
        const event = req.body.event;
        const payload = attendee.payload(event.id);
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
                    });
                }
                postEventAttendee(connection, {
                    Attendee__c: ret.id,
                    Event__c: event.id,
                }).then(() => {
                    postEmailNotification(connection, sessionAttendees, attendee, event)
                        .then(() => {
                            res.json({
                                status: 200,
                                message: 'Success'
                            });
                        }, (error) => {
                            res.json(error);
                        });
                }, () => {
                    res.json({
                        status: 500,
                        message: 'Error: Failed to save EventAttendee.'
                    });
                });

            });
    });
};

const getSessionsForEvent = (connection: any, eventId: string) => {
    return new Promise((resolve, reject) => {
        connection.sobject(Session.Model)
            .select('*')
            .where(`Event__c = '${eventId}' AND Status__c != 'Draft'`)
            .execute((err: any, sessions: any[]) => {
                if (err) {
                    return reject(err);
                }
                resolve(sessions.map(session => new Session(session)));
            });
    });
};


const postEventAttendee = (connection: any, payload: any) => {
    return new Promise((resolve, reject) => {
         connection.sobject(EventAttendee.Model)
            .create(payload, (err: any, ret: any) => {
                if (err) {
                     console.error(err);
                     return reject(err);
                }
                resolve(ret);
            });
    });
};

const postEmailNotification = (connection: any, payloads: any, attendee: any, event: any) => {
    let displayedSessions = ``;
    for (const session of event.sessions) {
        displayedSessions += `- ${session.name} (${DateFormat.format(session.start)} to ${DateFormat.format(session.end)})`;
        displayedSessions += '\n            ';
    }
    return new Promise((resolve, reject) => {
        connection.sobject(SessionAttendee.Model).insertBulk(payloads, (err: any, rets: any) => {
            if (err) {
                return console.error(err);
            }
            SalesForceEmail.send(
                connection,
                attendee.email,
                'Eventforce: New Event Registration',
            `
            ${attendee.firstName} ${attendee.lastName}:

            Congratulations! You have successfully registered to the event: ${event.name}.

            The event starts at ${DateFormat.format(event.start)} and ends at ${DateFormat.format(event.end)}.

            The sessions you have registered to are:
            ${displayedSessions}

            Thanks!
            Eventforce Support
            noreply@eventforce.com
            `).then(() => {
                resolve();
            }, () => {
                reject({
                    status: 500,
                    message: 'Error sending email registrations.'
                });
            });
        });
    });
};
