import { EventState } from './../states/event.state';
import * as actions from '../actions/event.action';

export function eventsReducer(
    state: EventState = new EventState,
    action: actions.Actions) {
        switch(action.type) {
            case EventState.ActionTypes.INIT:
                return (<any>Object).assign({}, state, {
                    events: [],
                    loading: true
                });
            case EventState.ActionTypes.FETCH_COMPLETE:
                return (<any>Object).assign({}, state, {
                    events: action.payload,
                    loading: false
                });
            case EventState.ActionTypes.FETCH_SESSIONS_COMPLETE:
                return (<any>Object).assign({}, state, {
                    sessions: action.payload
                });
            default:
                return state;
        }
}
