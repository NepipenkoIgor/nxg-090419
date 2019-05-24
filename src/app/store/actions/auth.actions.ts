import { Action } from '@ngrx/store';

export enum AuthActions {
  LOGIN_PENDING = '[Auth] LOGIN_PENDING',
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGIN_ERROR = '[Auth] LOGIN_ERROR',

  SIGNUP_PENDING = '[Auth] SIGNUP_PENDING',
  SIGNUP_SUCCESS = '[Auth] SIGNUP_SUCCESS',
  SIGNUP_ERROR = '[Auth] SIGNUP_ERROR',

  LOGOUT_PENDING = '[Auth] LOGOUT_PENDING',
  LOGOUT_SUCESSS = '[Auth] LOGOUT_SUCESSS',
  LOGOUT_ERROR = '[Auth] LOGOUT_ERROR',
}

export class LoginPending implements Action {
  public type: string = AuthActions.LOGIN_PENDING;

  public constructor(public payload: any) {
  }
}

export class LoginSuccess implements Action {
  public type: string = AuthActions.LOGIN_SUCCESS;

  public constructor(public payload: any) {
  }
}

export class LoginError implements Action {
  public type: string = AuthActions.LOGIN_ERROR;

  public constructor(public payload: Error) {
  }
}


export class SignUpPending implements Action {
  public type: string = AuthActions.SIGNUP_PENDING;

  public constructor(public payload: any) {
  }
}

export class SignUpSuccess implements Action {
  public type: string = AuthActions.SIGNUP_SUCCESS;

  public constructor(public payload: any) {
  }
}

export class SignUpError implements Action {
  public type: string = AuthActions.SIGNUP_ERROR;

  public constructor(public payload: Error) {
  }
}

export class LogoutPending implements Action {
  public type: string = AuthActions.LOGOUT_PENDING;
}

export class LogoutSuccess implements Action {
  public type: string = AuthActions.LOGOUT_SUCESSS;
}

export class LogoutError implements Action {
  public type: string = AuthActions.LOGOUT_ERROR;

  public constructor(public payload: Error) {
  }
}

export type AuthActionsType =
  | LoginPending
  | LoginSuccess
  | LoginError
  | SignUpPending
  | SignUpSuccess
  | SignUpError
  | LogoutPending
  | LogoutSuccess
  | LogoutError;
