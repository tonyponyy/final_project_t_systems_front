import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hrRoleGuard } from './hr-role.guard';

describe('hrRoleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hrRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
