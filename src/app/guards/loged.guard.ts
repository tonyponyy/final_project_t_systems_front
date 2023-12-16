import { CanActivateFn } from '@angular/router';
import { TokenService } from '../service/token.service';

export const logedGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('auth-token')) {
    console.log('El token está guardado');
    return true;
  } else {
    console.log('El token no está guardado');
    //mirar porque hay fallo aquí
    return true;
  }
};
