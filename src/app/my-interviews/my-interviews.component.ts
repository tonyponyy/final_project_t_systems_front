import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
@Component({
  selector: 'app-my-interviews',
  standalone: true,
  imports: [LateralBarComponent],
  templateUrl: './my-interviews.component.html',
  styleUrl: './my-interviews.component.css'
})
export class MyInterviewsComponent {
items :number[] = [1,2,3,4]
}
