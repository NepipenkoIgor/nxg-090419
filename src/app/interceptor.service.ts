import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from './config';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL_TOKEN) private _baseUrl: string[],
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: HttpHeaders = req.headers.append('Content-type', 'application/json');
    headers = headers.append('Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE1NTcxNDczMjd9._oExgYV5gC8zlfcvcHnrEqhO7kxHVYTu5SXk96RLc6k');
    const jsonReq: HttpRequest<any> = req.clone(
      {
        headers,
        url: `${this._baseUrl}${req.url}`
      }
    );
    return next.handle(jsonReq)
      .pipe(
        filter(this._isHttpResponse),
        map((res: HttpResponse<any>) => {
          return res.clone({body: res.body && res.body.data});
        })
      );
  }

  private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<any> {
    if (event instanceof HttpResponse) {
      return true;
    }

    return false;
  }

}
