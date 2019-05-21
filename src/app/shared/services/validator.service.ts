import { ValidationErrors } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {

  public constructor(private http: HttpClient) {
  }

  public uniqUsernameValidator(value: string): Observable<ValidationErrors | null> {
    if (!value) {
      return of(null);
    }
    return timer(500)
      .pipe(switchMap(() =>
          this.http.post('/auth/checkUsername', {username: value})
            .pipe(
              map((errorObj: ValidationErrors) => (errorObj ? errorObj : null))
            )
        )
      );
  }

  public equalValidator(value: { password: string, cpassword: string }): ValidationErrors | null {
    const [password, cpassword] = Object.values(value);
    return password === cpassword
      ? null
      : {
        notequal: 'Password fields is not equal'
      };
  }


  public usernameValidator(value: string): ValidationErrors | null {
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    return valid
      ? null
      : {
        nospecial: 'No special symbols'
      };
  }
}
