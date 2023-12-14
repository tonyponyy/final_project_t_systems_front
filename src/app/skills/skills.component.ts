import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { SkillModalComponent } from '../modals/skill-modal/skill-modal.component';
import { RequestService } from '../service/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LateralBarComponent,SkillModalComponent, ReactiveFormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills : any[] = [];
  skillForm: FormGroup = new FormGroup({});
  editId : number = -1;
  constructor(public request: RequestService, private formBuilder: FormBuilder){
    this.skillForm = this.formBuilder.group({
      skill_name: [''],
      description: ['']
    });
  }

  ngOnInit(){
    this.getSkills();
  }

  deleteSkill(item : any){
    this.request.delete_skill(item).subscribe(
      () => {
        console.log('Skill eliminada con exito');
        this.getSkills();
      },
      error => {
        console.log('Error ' + error);
      }
    )
  }

  editSkill(){

    if (this.skillForm.valid) {
      const skill : Skill = this.skillForm.value as Skill;
      skill.id = this.editId;      
      console.log(skill);
      
      this.request.edit_skill(skill).subscribe(
        () => {
          console.log('Skill editada con exito');
          this.closeModal();
          this.getSkills();
        }, 
        error => {
          console.log('Error ' + error);
        }
      );
    }
  }

  getSkills(){
    this.request.get_skills().subscribe((data :any) => {
      this.skills = data
      console.log(data);
    });
  }

  openModal(item : any) {
    console.log('abriendo modal');
    this.editId = item.id
    const modalElement = document.getElementById('editModal');
    if (modalElement) {
      modalElement.classList.add('is-active');

      this.skillForm = this.formBuilder.group({
        skill_name: [item.skill_name, Validators.required],
        description: [item.description, Validators.required],
      });

    }
  }

  closeModal() {
    const modalElement = document.getElementById('editModal');
    if (modalElement) {
      modalElement.classList.remove('is-active');
    }
  }

}

export class Skill {
  id?: number;
  skill_name?: string;
  description?: string;
}