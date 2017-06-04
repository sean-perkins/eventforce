import { Event } from './../../../common/models/Event';
import { Observable } from 'rxjs/Observable';
import { IAppState, getEvents } from './../../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as eventActions from '../../../store/actions/event.action';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

    events$: Observable<Event[]>;

    constructor(private store$: Store<IAppState>) { }

    ngOnInit() {
        this.events$ = this.store$.let(getEvents);
        this.store$.dispatch(new eventActions.FetchEventsAction);
    }

}
