import { Action } from '@ngrx/store';
import { EventState } from './../states/event.state';

export class InitAction implements Action {
    type = EventState.ActionTypes.INIT;
    payload = null;
}

export class FetchEventsAction implements Action {
    type = EventState.ActionTypes.FETCH;
    constructor(public payload?: any) {}
}

export class FetchEventsCompleteAction implements Action {
    type = EventState.ActionTypes.FETCH_COMPLETE;
    constructor(public payload: any[]) {}
}

export class FetchEventsFailedAction implements Action {
    type = EventState.ActionTypes.FETCH_FAILED;
    payload = null;
}


export type Actions
    = InitAction
    | FetchEventsAction
    | FetchEventsCompleteAction
    | FetchEventsFailedAction;
