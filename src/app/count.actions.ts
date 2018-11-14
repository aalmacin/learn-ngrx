import { Action } from '@ngrx/store';

export enum CountActionTypes {
  Increment = '[Count] Increment',
  Decrement = '[Count] Decrement',
  Reset = '[Count] Reset'
}

export class Increment implements Action {
  readonly type = CountActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = CountActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = CountActionTypes.Reset;
}

export type CountActions = Increment | Decrement | Reset;
