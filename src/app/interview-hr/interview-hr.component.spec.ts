import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewHrComponent } from './interview-hr.component';

describe('InterviewHrComponent', () => {
  let component: InterviewHrComponent;
  let fixture: ComponentFixture<InterviewHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewHrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
