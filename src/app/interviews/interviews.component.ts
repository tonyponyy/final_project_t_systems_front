import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-interviews',
  standalone: true,
  imports: [LateralBarComponent],
  templateUrl: './interviews.component.html',
  styleUrl: './interviews.component.css'
})
export class InterviewsComponent {
constructor(public httpservice: HttpService){}
items :number[]=[1,2,3,4,5,6]

ngOnInit() {
  this.httpservice.Test().subscribe((data: any) => {
    console.log(data);
  });
}

}
