import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';

@Component({
  selector: 'app-new-interview',
  standalone: true,
  imports: [LateralBarComponent],
  templateUrl: './new-interview.component.html',
  styleUrl: './new-interview.component.css'
})
export class NewInterviewComponent {

}
