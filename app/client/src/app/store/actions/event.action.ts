import { Action } from '@ngrx/store';
import { EventState } from './../states/event.state';

export class InitAction implements Action {
    type = EventState.ActionTypes.INIT;
    payload = null;
}

export class FetchEventsAction implements Action {
    type = EventState.ActionTypes.FETCH_EVENTS;
    constructor(public payload: any) {}
}


export type Actions
    = InitAction;
