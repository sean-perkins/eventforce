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
        .ofType(EventState.ActionTypes.FETCH_EVENTS)
        .startWith(new actions.InitAction)
        .switchMap(() => this.eventService.getEvents())
        .map(payload => {
            console.log('here we are!', payload);
            return payload;
        })
        .catch(() => Observable.of(null));

    constructor(
        private actions$: Actions,
        private eventService: EventService) {}
}
