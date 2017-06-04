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

    getEventSessions(id: string): Observable<any> {
        return this.http.get(`/api/v1/event/${id}/sessions`)
            .map(res => res.json())
            .map(res => res.map(session => new Session(session)));
    }

}
