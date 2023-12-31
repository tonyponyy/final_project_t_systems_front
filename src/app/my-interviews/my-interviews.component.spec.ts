import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInterviewsComponent } from './my-interviews.component';

describe('MyInterviewsComponent', () => {
  let component: MyInterviewsComponent;
  let fixture: ComponentFixture<MyInterviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInterviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
