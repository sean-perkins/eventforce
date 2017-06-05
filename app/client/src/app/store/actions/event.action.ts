import { Event } from './../../common/models/Event';
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

export class FetchEventSessionsAction implements Action {
    type = EventState.ActionTypes.FETCH_SESSIONS;
    /**
     *
     * @param payload The id of the Event to load sessions for
     */
    constructor(public payload: string) {}
}

export class FetchEventSessionsCompleteAction implements Action {
    type = EventState.ActionTypes.FETCH_SESSIONS_COMPLETE;
    constructor(public payload: any[]) {}
}

export class FetchEventSessionsFailedAction implements Action {
    type = EventState.ActionTypes.FETCH_SESSIONS_FAILED;
    payload = null;
}

export class FindEventAction implements Action {
    type = EventState.ActionTypes.FIND;
    /**
     *
     * @param payload The id of the Event
     */
    constructor(public payload: string) {}
}

export class FindEventCompleteAction implements Action {
    type = EventState.ActionTypes.FIND_COMPLETE;
    constructor(public payload: Event) {}
}

export class FindEventFailedAction implements Action {
    type = EventState.ActionTypes.FIND_FAILED;
    payload = null;
}

export type Actions
    = InitAction
    | FetchEventsAction
    | FetchEventsCompleteAction
    | FetchEventsFailedAction
    | FetchEventSessionsAction
    | FetchEventSessionsCompleteAction
    | FetchEventSessionsFailedAction
    | FindEventAction
    | FindEventCompleteAction
    | FindEventFailedAction;
