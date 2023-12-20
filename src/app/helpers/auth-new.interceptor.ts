import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../service/token.service';

export const authNewInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.includes('auth')) {
    return next(req);
  }
  const token = window.sessionStorage.getItem('auth-token');

  const authReq = req.clone({
    headers: req.headers.set('Authorization','Bearer '+ token)
  });
  return next(authReq);
};
