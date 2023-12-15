import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { SkillModalComponent } from '../modals/skill-modal/skill-modal.component';
import { RequestService } from '../service/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalSkillService } from '../service/modal-skill.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LateralBarComponent,SkillModalComponent, ReactiveFormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  protected skills : any[] = [];
  subscription: Subscription;
  skillForm: FormGroup = new FormGroup({});
  editId : number = -1;
  protected pagination={current_page: 0,total_pages: 0, total_items: 0};

  constructor(public request: RequestService, private formBuilder: FormBuilder, private modalSkill: ModalSkillService){
    this.skillForm = this.formBuilder.group({
      skill_name: [''],
      description: ['']
    });

    this.subscription = this.modalSkill.skillAdded$.subscribe(() => {
      this.get_page(this.pagination.current_page);
    });
  }

  ngOnInit(){
    this.get_page(0);
  }

  get_page(n_page : number){
    this.request.get_skills(n_page).subscribe((data: any) => {
      this.skills = data.skills;
      this.pagination.current_page = data.currentPage
      this.pagination.total_pages = data.totalPages
      this.pagination.total_items = data.totalItems
    });
  }

  deleteSkill(item : any){
    this.request.delete_skill(item).subscribe(
      () => {
        console.log('Skill eliminada con exito');
        this.get_page(this.pagination.current_page)
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
          this.get_page(this.pagination.current_page)
        }, 
        error => {
          console.log('Error ' + error);
        }
      );
    }
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