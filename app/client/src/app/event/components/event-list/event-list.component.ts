import { Event } from './../../../common/models/Event';
import { Observable } from 'rxjs/Observable';
import { IAppState, getEvents, getEventsLoading } from './../../../store/app.state';
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

    loading$: Observable<boolean>;

    constructor(private store$: Store<IAppState>) { }

    ngOnInit() {
        this.events$ = this.store$.let(getEvents);
        this.loading$ = this.store$.let(getEventsLoading);
        this.store$.dispatch(new eventActions.InitAction);
        this.store$.dispatch(new eventActions.FetchEventsAction);
    }

}
