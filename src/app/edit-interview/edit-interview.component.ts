import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from '../service/request.service';
import { InterviewSkillsComponent } from "../modals/interview-skills/interview-skills.component";

@Component({
    selector: 'app-edit-interview',
    standalone: true,
    templateUrl: './edit-interview.component.html',
    styleUrl: './edit-interview.component.css',
    imports: [LateralBarComponent, ReactiveFormsModule, InterviewSkillsComponent, RouterModule]
})
export class EditInterviewComponent {
  interviewId : number = 0;
  interview : any = null;
  arraySkills : any[] = [];
  editInterview : FormGroup
  protected class :string[] = ["is-success","is-primary","is-link","is-info","is-warning","is-danger"];

  constructor(private ruta: ActivatedRoute, private formBuilder: FormBuilder, private request: RequestService, private router: Router){
    this.editInterview = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }

  ngOnInit(): void{
    console.log("on init character");
    this.ruta.paramMap.subscribe(params => {
      const idFromParams = params.get('id');
      const idAsNumber = Number(idFromParams);

      
      if (idFromParams !== null) {
        this.interviewId = idAsNumber;

        this.request.get_hr_interview(this.interviewId).subscribe((data : any) => {
          this.interview = data.interview;
          console.log(this.interview);
          this.arraySkills = this.interview.skills
          const originalEndDate = new Date(this.interview.end_date);
          const formattedEndDate = originalEndDate.toISOString().split('T')[0];

          this.editInterview = this.formBuilder.group({
            title: [this.interview.title, Validators.required],
            description: [this.interview.description, Validators.required],
            end_date: [formattedEndDate , Validators.required],
          });
        },
        error => {
          console.log('no');
          
        })
        console.log(this.interviewId);
        
      } else {
        console.error('No se encontró el parámetro "id" en la URL.');
      }
    });
  }

  onSubmit(){
    if (this.editInterview.valid){
      const interview = this.editInterview.value as Interview;
      interview.id = this.interviewId;

      console.log(interview);
      
      this.request.edit_interview(interview).subscribe((data : any) => {
        console.log('si');
        this.addSkillsToInterview(interview)
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

  deleteSkill(skillDelete:any){
    const indexToDelete = this.arraySkills.findIndex(skill => skill.id === skillDelete.id);

    if (indexToDelete !== -1) {
      this.arraySkills.splice(indexToDelete, 1);
      console.log(this.arraySkills);
      
    } else {
        console.log('error');
    }
  }

  recibirArray(array: any[]) {
    for (let index = 0; index < array.length; index++) {
      this.arraySkills.push(array[index])
    }
    this.arraySkills=[... new Set(this.arraySkills)]
    console.log(this.arraySkills)
  }
}

export class Interview {
  id?: number;
  title?: string;
  description?: string;
  end_date?: Date;
}