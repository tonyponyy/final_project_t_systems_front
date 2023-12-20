import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RequestService } from '../service/request.service';
import { InterviewSkillsComponent } from '../modals/interview-skills/interview-skills.component';

@Component({
  selector: 'app-edit-interview',
  standalone: true,
  templateUrl: './edit-interview.component.html',
  styleUrl: './edit-interview.component.css',
  imports: [
    LateralBarComponent,
    ReactiveFormsModule,
    InterviewSkillsComponent,
    RouterModule,
  ],
})
export class EditInterviewComponent {
  interviewId: number = 0;
  interview: any = null;
  arraySkills: any[] = [];
  arrayNewSkills: any[] = [];
  editInterview: FormGroup;
  protected class: string[] = [
    'is-success',
    'is-primary',
    'is-link',
    'is-info',
    'is-warning',
    'is-danger',
  ];

  constructor(
    private ruta: ActivatedRoute,
    private formBuilder: FormBuilder,
    private request: RequestService,
    private router: Router
  ) {
    this.editInterview = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ruta.paramMap.subscribe((params) => {
      const idFromParams = params.get('id');
      const idAsNumber = Number(idFromParams);

      if (idFromParams !== null) {
        this.interviewId = idAsNumber;

        this.request.get_hr_interview(this.interviewId).subscribe(
          (data: any) => {
            this.interview = data.interview;
            this.arraySkills = this.interview.skills;
            const originalEndDate = new Date(this.interview.end_date);
            const formattedEndDate = originalEndDate
              .toISOString()
              .split('T')[0];

            this.editInterview = this.formBuilder.group({
              title: [this.interview.title, Validators.required],
              description: [this.interview.description, Validators.required],
              end_date: [formattedEndDate, Validators.required],
            });
          },
          (error) => {
          }
        );
      } else {
      }
    });
  }

  onSubmit() {
    if (this.editInterview.valid) {
      const interview = this.editInterview.value as Interview;
      interview.id = this.interviewId;


      this.request.edit_interview(interview).subscribe(
        (data: any) => {
          this.router.navigate(['/interviews']);
        },
        (error) => {
        }
      );
    }
  }


  deleteSkill(skill_id :number) {
    this.request
        .delete_skill_interview(this.interview.id, skill_id)
        .subscribe(
          (data: any) => {
            this.ngOnInit()
          },
          (error) => {
          }
    );}
  
  recibirArray(array: any[]) {
    let resultado = array.filter(obj1 => !this.arraySkills.some(obj2 => obj2.id === obj1.id));

    for (let i = 0; i < resultado.length; i++) {
      const newSkill = resultado[i];
      
      this.request
        .add_skill_interview(this.interview.id, newSkill.id)
        .subscribe(
          (data: any) => {
            this.ngOnInit();
          },
          (error) => {
          }
        );
    }
  }
  
}


export class Interview {
  id?: number;
  title?: string;
  description?: string;
  end_date?: Date;
}
