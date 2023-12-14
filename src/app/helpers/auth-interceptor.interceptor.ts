import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';

const TOKEN_HEADER_KEY = 'Authorization '

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token :TokenService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let final_request = req;
    const token = this.token.getToken();
    if (token !=null){
      final_request = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY,'Bearer '+ token)})
    }
    console.warn("INTERCEPTOR OK");
    return next.handle(final_request);
  }
}

export const authInterceptorProviders =[
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
]