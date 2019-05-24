import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

@Injectable()
export class AuthService {

  public constructor(
    private _http: HttpClient
  ) {
  }

  public login(user: any): Observable<any> {
    return this._http.post('/auth/signin', {...user});
  }

  public signUp(user: any): Observable<any> {
    return this._http.post('/auth/signup', {...user});
  }

  public checkUser(token: string): Observable<any> {
    return this._http.post('/auth/checkuser', {token});
  }

  public tokenToLocalStorage(user: any): Observable<any> {
    if (!user || !user.accessToken) {
      return of(null);
    }
    localStorage.setItem('accessToken', user.accessToken);
    return of(user);
  }

  public getTokenFromLocalStorage(): Observable<any> {
    return of(localStorage.getItem('accessToken'));
  }

  public removeTokenFromLocalStorage(): Observable<any> {
    localStorage.removeItem('accessToken');
    return of(true);
  }

}
