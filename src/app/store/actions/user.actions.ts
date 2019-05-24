import { Action } from '@ngrx/store';

export enum UserActions {
  SET_USER = '[USER] SET_USER'
}

export class SetUser implements Action {
  public type: string = UserActions.SET_USER;

  public constructor(public payload: any) {
  }
}

export type  UserActionsType = SetUser;
