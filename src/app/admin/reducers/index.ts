import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {clickReducer, ClickState} from '../click.reducer';

export interface State {
  clicks: ClickState;
}

export const reducers: ActionReducerMap<State> = {
  clicks: clickReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
