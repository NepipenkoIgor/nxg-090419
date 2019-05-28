import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BACK, FORWARD, Go, RouterActions } from '../actions/router.actions';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterEffects {

  @Effect({dispatch: false})
  public navigate$: Observable<any> = this.actions$
    .pipe(
      ofType(RouterActions.GO),
      tap((action: Go) => {
        const {path, query: queryParams, extras} = action.payload;
        this.router.navigate(path, {queryParams, ...extras});
      }),
    );

  @Effect({dispatch: false})
  public navigateBack$: Observable<any> = this.actions$
    .pipe(
      ofType(RouterActions.BACK),
      tap((action: BACK) => {
        this.location.back();
      }),
    );

  @Effect({dispatch: false})
  public navigateForward$: Observable<any> = this.actions$
    .pipe(
      ofType(RouterActions.FORWARD),
      tap((action: FORWARD) => {
        this.location.forward();
      }),
    );

  public constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {
  }
}
