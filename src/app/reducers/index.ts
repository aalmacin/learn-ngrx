import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {CountState, countReducer} from '../count.reducer';

export interface State {
  count: CountState;
}

export const reducers: ActionReducerMap<State> = {
  count: countReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
