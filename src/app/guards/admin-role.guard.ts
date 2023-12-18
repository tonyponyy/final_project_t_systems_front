import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  if(window.sessionStorage.getItem('auth-user') == 'admin'){
    return true
  } else{
    router.navigate(['/interviews'])
    return false;
  }
};
