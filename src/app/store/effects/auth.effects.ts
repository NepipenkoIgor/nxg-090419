import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import {  Observable, of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import {
  AuthActions,
  LoginError,
  LoginPending,
  LoginSuccess, LogoutError, LogoutPending,
  LogoutSuccess,
  SignUpError,
  SignUpPending,
  SignUpSuccess
} from '../actions/auth.actions';
import { AuthService } from '@shared/services/auth.service';
import { IUser } from '../reducers/user.reducer';
import { SetUser } from '../actions/user.actions';
import { Go } from '../actions/router.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  public login$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActions.LOGIN_PENDING),
      switchMap((action: LoginPending) => {
        return this.authService.login(action.payload)
          .pipe(
            switchMap((user: IUser) => {
              return this.authService.tokenToLocalStorage(user);
            }),
            mergeMap((user: IUser) => [
              new LoginSuccess(user),
              new SetUser(user),
              new Go({path: ['backoffice']})
            ]),
            catchError((err: Error) => of(new LoginError(err)))
          );
      }),
    );

  @Effect()
  public signup$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActions.SIGNUP_PENDING),
      switchMap((action: SignUpPending) => {
        return this.authService.signUp(action.payload)
          .pipe(
            switchMap((user: IUser) => {
              return this.authService.tokenToLocalStorage(user);
            }),
            mergeMap((user: IUser) => [
              new SignUpSuccess(user),
              new SetUser(user),
              new Go({path: ['backoffice']})
            ]),
            catchError((err: Error) => of(new SignUpError(err)))
          );
      }),
    );

  @Effect()
  public logout$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActions.LOGOUT_PENDING),
      switchMap((action: SignUpPending) => {
        return this.authService.removeTokenFromLocalStorage()
          .pipe(
            mergeMap((user: IUser) => [
              new LogoutSuccess(),
              new Go({path: ['login']})
            ]),
            catchError((err: Error) => of(new LogoutError(err)))
          );
      }),
    );

  @Effect()
  public check$: Observable<any> = this.actions$
    .pipe(
      ofType(ROOT_EFFECTS_INIT),
      switchMap(() => {
        return this.authService.getTokenFromLocalStorage()
          .pipe(
            switchMap((token: string | null) => this.authService.checkUser(token)),
            mergeMap((user: IUser) => {
              if (!user) {
                return [new LogoutPending()];
              }
              return [
                new SetUser(user),
              ];
            }),
            catchError((err: Error) => of(new LoginError(err)))
          );
      }),
    );

  public constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {
  }
}
