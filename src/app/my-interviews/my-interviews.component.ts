import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { RequestService } from '../service/request.service';
import { RouterLink } from '@angular/router';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-interviews',
  standalone: true,
  imports: [LateralBarComponent,RouterLink,DatePipe],
  templateUrl: './my-interviews.component.html',
  styleUrl: './my-interviews.component.css'
})
export class MyInterviewsComponent {
constructor(public requestservice: RequestService){}
protected positions :any[] =[];
protected user_tests :any[] = [];
protected faimg : string[] = ["fa-briefcase", "fa-code", "fa-laptop-code","fa-terminal","fa-paperclip"]
protected class :string[] = ["is-success","is-primary","is-link","is-info","is-warning","is-danger"];
protected pagination={current_page: 0,total_pages: 0, total_items: 0};
protected states :string[] =['You have not passed the process','You are enrolled','First interview','In selection process','Hired']

ngOnInit() {
  this.requestservice.get_user_interviews().subscribe((data: any) => {
    console.log(data);
    this.positions = data.interviews;
    this.user_tests = data.user_test;
    console.info(this.user_tests);
  });
}

}
