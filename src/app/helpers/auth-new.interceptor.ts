import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../service/token.service';

export const authNewInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request is on its way')

  if (req.url.includes('auth')) {
    return next(req);
  }
  const token = window.sessionStorage.getItem('auth-token');
  console.log(token);
  
  const authReq = req.clone({
    headers: req.headers.set('Authorization','Bearer '+ token)
  });
  return next(authReq);
};
