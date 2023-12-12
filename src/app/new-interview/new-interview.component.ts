import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { InterviewSkillsComponent } from '../modals/interview-skills/interview-skills.component';

@Component({
  selector: 'app-new-interview',
  standalone: true,
  imports: [LateralBarComponent, InterviewSkillsComponent],
  templateUrl: './new-interview.component.html',
  styleUrl: './new-interview.component.css'
})
export class NewInterviewComponent {

}
