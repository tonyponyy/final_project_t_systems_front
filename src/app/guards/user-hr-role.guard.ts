import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userHrRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  if(window.sessionStorage.getItem('auth-user') == 'user' || window.sessionStorage.getItem('auth-user') == 'hr'){
    return true
  } else{
    router.navigate(['/admin'])
    return false;
  }
};
