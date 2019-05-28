import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../../interceptor.service';
import { BASE_URL_TOKEN, baseUrl } from '../../config';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { ValidatorService } from './validator.service';
import { ValidationErrors } from '@angular/forms';
import { environment } from '../../../environments/environment';

describe('Validator service ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
        },
        {
          provide: AuthService,
          useValue: {
            getTokenFromLocalStorage(): Observable<string> {
              return of('');
            }
          }
        },
        {provide: BASE_URL_TOKEN, useValue: baseUrl},
        ValidatorService
      ]
    });
  });

  it('test uniqUsernameValidator ', inject([ValidatorService, HttpTestingController], (
    validatorService: ValidatorService, backend: HttpTestingController
  ) => {
    validatorService.uniqUsernameValidator('inep', null).subscribe((err: ValidationErrors | null) => {
      expect(err).toEqual(null);
    });
    backend
      .expectOne({
        method: 'POST',
        url: `${environment.baseUrl}/auth/checkUsername`
      })
      .flush({data: null});
  }));
  it('test uniqUsernameValidator with error ', inject([ValidatorService, HttpTestingController], (
    validatorService: ValidatorService, backend: HttpTestingController
  ) => {
    validatorService.uniqUsernameValidator('inep', null).subscribe((err: ValidationErrors | null) => {
      expect(err).toEqual({notuniqe: true});
    });
    backend
      .expectOne({
        method: 'POST',
        url: `${environment.baseUrl}/auth/checkUsername`
      })
      .flush({data: {notuniqe: true}});
  }));
});
