import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { RequestService } from '../service/request.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [HttpClientModule,LateralBarComponent,DatePipe],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.css',
})
export class InterviewComponent {
  constructor(private route: ActivatedRoute,private requestservice: RequestService) {}
  protected interview_id: any;
  protected interview:any
  protected user_interview:any;
  protected user_tests :any;
  protected class :string[] = ["is-success","is-primary","is-link","is-info","is-warning","is-danger"];
  protected loaded :boolean = false;
  protected states :string[] =['You have not passed the process','You are enrolled','First interview','In selection process','Hired']


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.interview_id = params.get('id');
      this.get_interview(this.interview_id);
    });
    
}
get_interview(id_interview :any) {
  this.requestservice.get_user_interview(id_interview).subscribe((data: any) => {
    console.log(data);
    this.interview = data.interview;
    this.user_interview = data.user_interview;
    this.user_tests = data.tests;
    this.loaded = true;
  });
}

enroll(){
  this.requestservice.user_enroll_interview(this.interview_id).subscribe((data: any) => {
    this.ngOnInit();
  });
}
}
