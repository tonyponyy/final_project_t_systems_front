import { CanActivateFn } from '@angular/router';

export const logedGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('auth-token')) {
    return true;
  } else {
    console.log('El token no está guardado');
    return false;
  }
};
