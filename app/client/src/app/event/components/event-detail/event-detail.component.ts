import { IAppState, getEventDetail, getEventsLoading } from './../../../store/app.state';
import { Store } from '@ngrx/store';
import { Event } from './../../../common/models/Event';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as eventAction from './../../../store/actions/event.action';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

    event$: Observable<Event>;

    loading$: Observable<boolean>;

    constructor(
        private route: ActivatedRoute,
        private store$: Store<IAppState>
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.event$ = this.store$.let(getEventDetail);
        this.loading$ = this.store$.let(getEventsLoading);
        this.store$.dispatch(new eventAction.InitAction);
        this.store$.dispatch(new eventAction.FindEventAction(id));
    }

}
