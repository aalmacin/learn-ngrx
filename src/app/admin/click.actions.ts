import { Action } from '@ngrx/store';

export enum ClickActionTypes {
  PerformClick = '[Click] Perform Click',
  OverrideClicks = '[Click] Override Clicks',
  ResetClicks = '[Click] Reset Clicks'
}

export class PerformClick implements Action {
  readonly type = ClickActionTypes.PerformClick;
}

export class OverrideClicks implements Action {
  readonly type = ClickActionTypes.OverrideClicks;
  constructor(public readonly payload: number) {
  }
}

export class ResetClicks implements Action {
  readonly type = ClickActionTypes.ResetClicks;
}

export type ClickActions = PerformClick | ResetClicks | OverrideClicks;
