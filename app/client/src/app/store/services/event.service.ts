import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Event, Session } from '../../common/index';

@Injectable()
export class EventService {

    constructor(private http: Http) { }

    /**
     * Returns an array of Event objects loaded from Salesforce
     */
    getEvents(): Observable<any> {
        return this.http.get('/api/v1/events')
            .map(res => res.json())
            .map(res => res.map(event => new Event(event)));
    }

    /**
     * Finds the sessions under an event
     * @param id The event id
     */
    getEventSessions(id: string): Observable<any> {
        return this.http.get(`/api/v1/event/${id}/sessions`)
            .map(res => res.json())
            .map(res => res.map(session => new Session(session)));
    }

    /**
     * Finds an event object by id
     * @param id The event id
     */
    getEvent(id: string): Observable<any> {
        return this.http.get(`/api/v1/event/${id}`)
            .map(res => res.json())
            .map(res => new Event(res));
    }

    /**
     * Registers an user (attendee) to an event and session(s).
     * @param id The event id to register to
     * @param payload The registration payload
     */
    register(id: string, payload: any): Observable<any> {
        return this.http.post(`/api/v1/event/${id}/register`, payload)
            .map(res => res.json());
    }

}
