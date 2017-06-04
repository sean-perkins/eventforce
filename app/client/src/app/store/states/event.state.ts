import { Observable } from 'rxjs/Observable';

export class EventState {

    events: any[];

    loading: boolean;

    searching: boolean;

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
        INIT: 'Events Init',
        FETCH_EVENTS: 'Events Fetch'
    }

    constructor(options: EventState = <EventState>{}) {
        this.events = Array.isArray(options.events) ? options.events : [];
        this.loading = options.loading || false;
        this.searching = options.searching || null;
    }


}
