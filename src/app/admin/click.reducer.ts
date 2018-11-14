import { Action } from '@ngrx/store';
import {ClickActions, ClickActionTypes} from './click.actions';


export interface ClickState {
  clicks: number;
}

export const initialClickState: ClickState = {
  clicks: 0
};

export function clickReducer(state = initialClickState, action: ClickActions): ClickState {
  switch (action.type) {
    case ClickActionTypes.PerformClick:
      return {
        ...state,
        clicks: state.clicks + 1
      };
    case ClickActionTypes.ResetClicks:
      return {
        ...state,
        clicks: 0
      };
    case ClickActionTypes.OverrideClicks:
      return {
        ...state,
        clicks: action.payload
      };
    default:
      return state;
  }
}
