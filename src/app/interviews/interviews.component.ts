import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';

@Component({
  selector: 'app-interviews',
  standalone: true,
  imports: [LateralBarComponent],
  templateUrl: './interviews.component.html',
  styleUrl: './interviews.component.css'
})
export class InterviewsComponent {
items :number[]=[1,2,3,4,5,6]
}
