import { Action } from '@ngrx/store';
import { EventState } from './../states/event.state';

export function eventsReducer(
    state: EventState,
    action: Action) {
        switch(action.type) {
            case EventState.ActionTypes.INIT:
                return (<any>Object).assign({}, state, {
                    events: []
                });
            case EventState.ActionTypes.FETCH_EVENTS:
                return (<any>Object).assign({}, state, {
                    events: action.payload
                });
            default:
                return state;
        }
}
