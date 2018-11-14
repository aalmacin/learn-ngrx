import { Action } from '@ngrx/store';
import {CountActionTypes} from './count.actions';


export interface CountState {
  count: number;
}

export const initialCountState: CountState = {
  count: 0
};

export function countReducer(state = initialCountState, action: Action): CountState {
  switch (action.type) {
    case CountActionTypes.Increment:
      return {
        ...state,
        count: state.count + 1
      };
    case CountActionTypes.Decrement:
      return {
        ...state,
        count: state.count - 1
      };
    case CountActionTypes.Reset:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
}
