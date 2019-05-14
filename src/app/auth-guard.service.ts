import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  public constructor(
    private router: Router
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const {url} = state;
    return of(true) // isLogged stream
      .pipe(
        switchMap((isLogged: boolean) => {
          if (!isLogged && (url === '/login' || url === '/signup')) {
            return of(true);
          }
          if (isLogged && (url === '/login' || url === '/signup')) {
            this.router.navigate(['/backoffice']);
            return of(false);
          }
          if (!isLogged) {
            this.router.navigate(['/login']);
          }
          return of(isLogged);
        })
      );
  }

}
