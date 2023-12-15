import { TestBed } from '@angular/core/testing';

import { ModalSkillService } from './modal-skill.service';

describe('ModalSkillService', () => {
  let service: ModalSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
