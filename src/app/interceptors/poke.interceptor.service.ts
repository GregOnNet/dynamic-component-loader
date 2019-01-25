import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class PokeInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clone = req.clone({
      setHeaders: { 'X-Authorize': 'I am allowed to do anything.' }
    });

    return next.handle(clone).pipe(
      tap(response => {
        if (response.type === HttpEventType.Response) {
          console.log('Intercepted Response', response.body);
        }
      })
    );
  }
}
