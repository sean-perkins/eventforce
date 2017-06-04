// libs
import { Observable } from 'rxjs/Observable';
import { ActionReducer } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as appReducers from './reducers/index';
import * as appStates from './states/index';

export interface IAppState {
    events: appStates.EventState
};

const reducers = {
    events: appReducers.eventsReducer
};

const developmentReducer: ActionReducer<IAppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
    if (String('<%= BUILD_TYPE %>') === 'dev') {
        return developmentReducer(state, action);
    } else {
        return productionReducer(state, action);
    }
}
