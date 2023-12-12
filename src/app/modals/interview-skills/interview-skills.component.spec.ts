import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSkillsComponent } from './interview-skills.component';

describe('InterviewSkillsComponent', () => {
  let component: InterviewSkillsComponent;
  let fixture: ComponentFixture<InterviewSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
