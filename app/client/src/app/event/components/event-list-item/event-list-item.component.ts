import { EventService } from './../../../store/services/event.service';
import { Observable } from 'rxjs/Observable';
import { IAppState, getEventSessions } from './../../../store/app.state';
import { Store } from '@ngrx/store';
import { Event, Session } from './../../../common/index';
import { Component, Input, OnInit } from '@angular/core';

import * as eventActions from './../../../store/actions/event.action';

@Component({
    selector: 'ef-event-list-item',
    templateUrl: './event-list-item.component.html',
    styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {

    @Input() event: Event;

    sessions: any[];

    private _displaySessions = true;

    constructor(private eventService: EventService) { }

    ngOnInit() {
    }

    toggleSessions(): void {
        this._displaySessions = !this._displaySessions;
        this.eventService.getEventSessions(this.event.id).subscribe(sessions => {
            this.sessions = sessions;
        });
    }

    get displaySessions(): boolean {
        return this._displaySessions;
    }

}
