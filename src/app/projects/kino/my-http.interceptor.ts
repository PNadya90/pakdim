import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = request.clone({
        headers:this.addExtraHeaders(request.headers)
    })
    return next.handle(authReq);
  }

  private addExtraHeaders(headers: HttpHeaders): HttpHeaders {
    let xToken = localStorage['token'];
    let clid = localStorage['id'];
    if(xToken){
      headers = headers.append('X-Auth-Token', xToken);
    }
    if(clid){
      headers = headers.append('client-id', clid);
    }
    return headers;
  } 
}
