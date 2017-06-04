import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

    constructor(private http: Http) { }

    getEvents(): Observable<any> {
        return this.http.get('/api/v1/events');
    }

}
