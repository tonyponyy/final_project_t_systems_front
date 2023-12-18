import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const hrRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  if(window.sessionStorage.getItem('auth-user') == 'hr'){
    return true
  } else if (window.sessionStorage.getItem('auth-user') == 'admin'){
    router.navigate(['/admin'])
    return false;
  } else {
    router.navigate(['/interviews'])
    return false;
  }
};
