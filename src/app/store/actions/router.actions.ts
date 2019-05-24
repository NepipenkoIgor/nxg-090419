import { Action } from '@ngrx/store';
import { IRouterPayload } from '../reducers';

export enum RouterActions {
  GO = '[Router] GO',
  BACK = '[Router] BACK',
  FORWARD = '[Router] FORWARD',
}


export class Go implements Action {
  public type: string = RouterActions.GO;

  public constructor(public payload: IRouterPayload) {
  }
}

export class BACK implements Action {
  public type: string = RouterActions.BACK;

}

export class FORWARD implements Action {
  public type: string = RouterActions.FORWARD;
}
