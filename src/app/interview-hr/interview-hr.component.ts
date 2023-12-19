import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { RequestService } from '../service/request.service';
import { DatePipe } from '@angular/common';
import { FileserviceService } from '../service/fileservice.service';

@Component({
  selector: 'app-interview-hr',
  standalone: true,
  templateUrl: './interview-hr.component.html',
  styleUrl: './interview-hr.component.css',
  imports: [LateralBarComponent, DatePipe, RouterModule],
})
export class InterviewHrComponent {
  constructor(private route: ActivatedRoute,private requestservice: RequestService,private f_service:FileserviceService, private router: Router) {}

  protected interview_id: any;
  protected interview: any;
  protected user_interview: any;
  protected tests: any;
  protected loaded: boolean = false;
  public states: string[] = [
    'You have not passed the process',
    'You are enrolled',
    'First interview',
    'In selection process',
    'Hired',
  ];
  protected class: string[] = [
    'is-success',
    'is-primary',
    'is-link',
    'is-info',
    'is-warning',
    'is-danger',
  ];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.interview_id = params.get('id');
      this.get_interview(this.interview_id);
    });
  }
  get_interview(id_interview: any) {
    this.requestservice
      .get_hr_interview(id_interview)
      .subscribe((data: any) => {
        console.log(data);
        this.interview = data.interview;
        this.user_interview = data.users;
        console.log('userinterview', this.user_interview);
        this.tests = data.tests;
        this.loaded = true;
      });
  }

edit(id_interview :number){
console.log("edit -->"+id_interview)
}

view_resume(id_user:number,name :string){
  this.requestservice.get_user_resume(id_user).subscribe((data: any) => {
    this.f_service.get_base64_file(data.resume.resume,id_user+name+".pdf")
  });

}

  changeState(user: any, item: any) {
    let idState = this.stateId(item);
    this.requestservice.change_state(user.id,idState).subscribe((data:any) => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  stateId(item: string): number {
    switch (item) {
      case 'You have not passed the process':
        return 4;
        break;
      case 'You are enrolled':
        return 1;
        break;
      case 'First interview':
        return 3;
        break;
      case 'In selection process':
        return 2;
        break;
      case 'Hired':
        return 5;
        break;
        default:
        return 0 ;
        break
    }
  }
  delete(id_interview: number) {
    this.requestservice.delete_interview(id_interview).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/interviews']);
      },
      (error) => {
        console.log('error');
      }
    );
  }
}
