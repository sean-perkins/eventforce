import { EventState } from './../states/event.state';
import * as actions from '../actions/event.action';

export function eventsReducer(
    state: EventState = new EventState,
    action: actions.Actions) {
        switch(action.type) {
            case EventState.ActionTypes.INIT:
                return (<any>Object).assign({}, state, {
                    events: [],
                    eventDetail: null,
                    loading: true
                });
            case EventState.ActionTypes.FIND:
                return (<any>Object).assign({}, state, {
                    eventDetail: null,
                    loading: true
                });
            case EventState.ActionTypes.FETCH:
                return (<any>Object).assign({}, state, {
                    loading: true
                });
            case EventState.ActionTypes.FIND_COMPLETE:
                return (<any>Object).assign({}, state, {
                    eventDetail: action.payload,
                    loading: false
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
            case EventState.ActionTypes.REGISTER_COMPLETE:
            case EventState.ActionTypes.REGISTER:
                return (<any>Object).assign({}, state, {
                    registering: action.type === EventState.ActionTypes.REGISTER
                });
            default:
                return state;
        }
}
