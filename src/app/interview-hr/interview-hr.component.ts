import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import {
  ActivatedRoute,
  Router,
  RouterModule,
} from '@angular/router';
import { RequestService } from '../service/request.service';
import { DatePipe } from '@angular/common';
import { FileserviceService } from '../service/fileservice.service';
import { CommentComponent } from '../modals/comment/comment.component';
import { UserskillmodalComponent } from '../modals/userskills-modal/userskillmodal.component';
import { CreateTestComponent } from '../modals/create-test/create-test.component';
import { TestusersComponent } from '../modals/testusers/testusers.component';
import { EditTestComponent } from '../modals/edit-test/edit-test.component';


@Component({
  selector: 'app-interview-hr',
  standalone: true,
  templateUrl: './interview-hr.component.html',
  styleUrl: './interview-hr.component.css',
  imports: [LateralBarComponent, DatePipe, RouterModule, CommentComponent,UserskillmodalComponent,CreateTestComponent,TestusersComponent, EditTestComponent],

})
export class InterviewHrComponent {

  constructor(
    private route: ActivatedRoute,
    private requestservice: RequestService,
    private f_service: FileserviceService,
    private router: Router
  ) {}

  protected interview_id: any;
  protected interview: any;
  protected user_interview: any;
  protected meetingTest: any;
  protected user_skills: any;
  protected tests: any;
  protected loaded: boolean = false;
  public states: string[] = [
    'Not passed the process',
    'Enrolled',
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
        
        this.interview = data.interview;
        this.meetingTest = this.interview.tests;
        this.user_interview = data.users;
        this.user_skills = data.user_skills;
        this.tests = data.tests;
        this.loaded = true;
        
      });
  }

  delete_user_test(user_test: any) {
    this.requestservice.delete_user_test(user_test.id).subscribe((data:any) => {
      this.ngOnInit();
    }, error => {       this.ngOnInit();    })
  }

  view_resume(id_user: number, name: string) {
    this.requestservice.get_user_resume(id_user).subscribe((data: any) => {
      this.f_service.get_base64_file(
        data.resume.resume,
        id_user + name + '.pdf'
      );
    });
  }

  asignTest(test: any, user: any){

    this.requestservice.asign_test_user(user.id, test.id).subscribe((data: any) => {
      this.ngOnInit();
    }, error => {
    })
  }

  changeState(user: any, item: any) {
    let idState = this.stateId(item);
    this.requestservice.change_state(user.id, idState).subscribe(
      (data: any) => {
        this.ngOnInit();
      },
      (error) => {
      }
    );
  }

  stateId(item: string): number {
    switch (item) {
      case 'Not passed the process':
        return 0;
        break;
      case 'Enrolled':
        return 1;
        break;
      case 'First interview':
        return 2;
        break;
      case 'In selection process':
        return 3;
        break;
      case 'Hired':
        return 4;
        break;
      default:
        return 0;
        break;
    }
  }

  delete_interview(id_interview:number){    
    this.requestservice.delete_interview(id_interview).subscribe((data: any)=>{
      console.log('borrado');
      this.router.navigate(['/interviews'])
    }, error => {
      console.log(error);
    })
  }

  delete_test(test_id: any){
    this.requestservice.delete_test(test_id).subscribe((data: any) => {
      this.ngOnInit();
    }, error=>{console.log(error);
    })
  }

  delete(skill_user: any) {
    this.requestservice.delete_skill_user(skill_user.user.id,skill_user.skill.id).subscribe((data:any) => {
      this.ngOnInit();
    }, error => {
    });
  }
}
