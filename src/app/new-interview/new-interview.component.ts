import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { InterviewSkillsComponent } from '../modals/interview-skills/interview-skills.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from '../service/request.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-interview',
  standalone: true,
  imports: [LateralBarComponent, InterviewSkillsComponent, ReactiveFormsModule],
  templateUrl: './new-interview.component.html',
  styleUrl: './new-interview.component.css'
})
export class NewInterviewComponent {
  newInterview: FormGroup;
  arraySkills : any[] = [];
  protected class :string[] = ["is-success","is-primary","is-link","is-info","is-warning","is-danger"];


  constructor(private formBuilder: FormBuilder, private request : RequestService, private router : Router) {
    this.newInterview = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }

  onSubmit(){
    if (this.newInterview.valid){
      this.request.new_interview(this.newInterview.value).subscribe((data : any) => {
        console.log(data);
        this.addSkillsToInterview(data)
      },
      error => {
        console.log('error'+error);
      })
    }
  }

  addSkillsToInterview(interview : any){
    console.log(interview.id);
    for (let i = 0; i < this.arraySkills.length; i++) {
      this.request.add_skill_interview(interview.id,this.arraySkills[i].id).subscribe((data :any) => {
        console.log('funciona');
      },
      error => {
        console.log('error');
      })
    }

    this.router.navigate(['/interviews']);
    
  }

  recibirArray(array: any[]) {
    this.arraySkills = array;
    console.log(this.arraySkills);
  }
}
