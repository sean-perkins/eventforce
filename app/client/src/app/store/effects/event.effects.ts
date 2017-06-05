import { FindEventFailedAction } from './../actions/event.action';
import { EventState } from './../states/event.state';
import { EventService } from './../services/event.service';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import * as actions from '../actions/event.action';


@Injectable()
export class EventEffects {

    @Effect() getEvents$: Observable<Action> = this.actions$
        .ofType(EventState.ActionTypes.FETCH)
        .startWith(new actions.InitAction)
        .switchMap(() => this.eventService.getEvents())
        .map(payload => new actions.FetchEventsCompleteAction(payload))
        .catch(() => Observable.of(new actions.FetchEventsFailedAction));

    @Effect() getEventDetail$: Observable<Action> = this.actions$
        .ofType(EventState.ActionTypes.FIND)
        .switchMap(({payload}) => this.eventService.getEvent(payload))
        .map(payload => new actions.FindEventCompleteAction(payload))
        .catch((error) => {
            if (error.status === 404) {
                this.router.navigate(['/error/404']);
            }
            return Observable.of(new actions.FindEventFailedAction);
        });

    @Effect() getEventSessions$: Observable<Action> = this.actions$
        .ofType(EventState.ActionTypes.FETCH_SESSIONS)
        .switchMap(({payload}) => this.eventService.getEventSessions(payload))
        .map(payload => new actions.FetchEventSessionsCompleteAction(payload))
        .catch(() => Observable.of(new actions.FetchEventSessionsFailedAction));

    constructor(
        private actions$: Actions,
        private eventService: EventService,
        private router: Router) {}
}
