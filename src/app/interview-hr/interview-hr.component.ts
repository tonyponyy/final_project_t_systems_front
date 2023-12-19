import { Component } from '@angular/core';
import { LateralBarComponent } from "../lateral-bar/lateral-bar.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RequestService } from '../service/request.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-interview-hr',
    standalone: true,
    templateUrl: './interview-hr.component.html',
    styleUrl: './interview-hr.component.css',
    imports: [LateralBarComponent,DatePipe]
})
export class InterviewHrComponent {
  constructor(private route: ActivatedRoute,private requestservice: RequestService) {}

  protected interview_id: any;
  protected interview:any
  protected user_interview:any;
  protected tests :any;
  protected loaded :boolean = false;
  public states :string[] =['You have not passed the process','You are enrolled','First interview','In selection process','Hired'];
  protected class :string[] = ["is-success","is-primary","is-link","is-info","is-warning","is-danger"];


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.interview_id = params.get('id');
      this.get_interview(this.interview_id);
    });
    
}
get_interview(id_interview :any) {
  this.requestservice.get_hr_interview(id_interview).subscribe((data: any) => {
    console.log(data);
    this.interview = data.interview;
    this.user_interview = data.users;
    this.tests = data.tests;
    this.loaded = true;
  });
}

edit(id_interview :number){
console.log("edit -->"+id_interview)
}
delete(id_interview :number){
console.log("delete -->"+id_interview)
}

}
