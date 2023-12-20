import { CanActivateFn } from '@angular/router';

export const logedGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('auth-token')) {
    return true;
  } else {
    return false;
  }
};
