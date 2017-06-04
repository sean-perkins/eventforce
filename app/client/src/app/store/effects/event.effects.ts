import { EventState } from './../states/event.state';
import { EventService } from './../services/event.service';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
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

    constructor(
        private actions$: Actions,
        private eventService: EventService) {}
}
