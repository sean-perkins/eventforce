import { IAppState } from './../app.state';
import { compose } from '@ngrx/core/compose';
import { Event } from './../../common/index';
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

    static state$(state$: Observable<IAppState>): Observable<EventState> {
        return state$.select(state => state.events);
    }

    static getEvents(state$: Observable<any>) {
        return state$.select(state => state.events);
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
        FETCH_FAILED: 'EVENTS_FETCH_FAILED'
    }

    constructor(options: EventState = <EventState>{}) {
        this.events = Array.isArray(options.events) ? options.events : [];
        this.loading = options.loading || false;
        this.searching = options.searching || null;
    }

}

export const getEvents: any = compose(EventState.getEvents, EventState.state$);
export const getEventsLoading: any = compose(EventState.isLoading, EventState.state$);
export const getEventsSearching: any = compose(EventState.isSearching, EventState.state$);
