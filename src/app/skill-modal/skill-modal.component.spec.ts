import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillModalComponent } from './skill-modal.component';

describe('SkillModalComponent', () => {
  let component: SkillModalComponent;
  let fixture: ComponentFixture<SkillModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
