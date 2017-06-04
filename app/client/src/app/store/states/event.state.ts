import { IAppState } from './../app.state';
import { compose } from '@ngrx/core/compose';
import { Event, Session } from './../../common/index';
import { Observable } from 'rxjs/Observable';

export class EventState {

    /**
     * Represents the collection of loaded events
     */
    events: Event[];
    /**
     * Represents the loading state of the events
     */
    loading: boolean;
    /**
     * Represents the searching state of the events
     */
    searching: boolean;
    /**
     * Represents a specific events displayed sessions
     */
    sessions: Session[];

    static state$(state$: Observable<IAppState>): Observable<EventState> {
        return state$.select(state => state.events);
    }

    static getEvents(state$: Observable<any>) {
        return state$.select(state => state.events);
    }

    static getEventSessions(state$: Observable<any>) {
        return state$.select(state => state.sessions);
    }

    static isLoading(state$: Observable<any>) {
        return state$.select(state => state.loading);
    }

    static isSearching(state$: Observable<any>) {
        return state$.select(state => state.searching);
    }

    static ActionTypes = {
        INIT: 'EVENTS_INIT',
        FETCH: 'EVENTS_FETCH',
        FETCH_COMPLETE: 'EVENTS_FETCH_COMPLETE',
        FETCH_FAILED: 'EVENTS_FETCH_FAILED',
        FETCH_SESSIONS: `EVENTS_FETCH_SESSIONS`,
        FETCH_SESSIONS_COMPLETE: `EVENTS_FETCH_SESSIONS_COMPLETE`,
        FETCH_SESSIONS_FAILED: `EVENTS_FETCH_SESSIONS_FAILED`
    }

    constructor(options: EventState = <EventState>{}) {
        this.events = Array.isArray(options.events) ? options.events : [];
        this.loading = options.loading || false;
        this.searching = options.searching || null;
        this.sessions = Array.isArray(options.sessions) ? options.sessions: [];
    }

}

export const getEvents: any = compose(EventState.getEvents, EventState.state$);
export const getEventsLoading: any = compose(EventState.isLoading, EventState.state$);
export const getEventsSearching: any = compose(EventState.isSearching, EventState.state$);
export const getEventSessions: any = compose(EventState.getEventSessions, EventState.state$);
