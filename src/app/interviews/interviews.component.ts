import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { RequestService } from '../service/request.service';
@Component({
  selector: 'app-interviews',
  standalone: true,
  imports: [LateralBarComponent],
  templateUrl: './interviews.component.html',
  styleUrl: './interviews.component.css'
})
export class InterviewsComponent {
constructor(public requestservice: RequestService){}
items :number[]=[1,2,3,4,5,6]

ngOnInit() {
  this.requestservice.get_interviews().subscribe((data: any) => {
    console.warn(data);
  });

}

}
