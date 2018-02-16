import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
      if (!(req.url.indexOf('login') > 0 || req.url.indexOf('rest/v2/electronics/products') > 0 || req.url.indexOf('oauth/token') > 0)) {
        req = req.clone({
            setHeaders: {
              'Content-Type' : 'application/json; charset=utf-8',
              'Accept'       : 'application/json',
              'Authorization': `Bearer ${AuthService.getToken()}`
            }
          });
      }

    return next.handle(req);
  }
}
