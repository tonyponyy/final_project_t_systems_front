import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from '../../service/request.service';
import { SkillService } from '../../service/skill.service';

@Component({
  selector: 'app-skill-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './skill-modal.component.html',
  styleUrl: './skill-modal.component.css'
})
export class SkillModalComponent {

  skillForm: FormGroup;
  isNotValid: boolean = false;

  constructor(private formBuilder: FormBuilder, public request : RequestService, public skillS : SkillService) {
    this.skillForm = this.formBuilder.group({
      skill_name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addSkill() {   
    if (this.skillForm.valid) {
      this.request.add_skills(this.skillForm.value).subscribe(
        (result) => {
          this.skillForm.reset();
          this.closeModal();
          this.skillS.metodoDeOtraClase();
        }, (error) => {
          // añadir mensaje de error
          alert('problemon');
        }
      );
    } else {
      this.isNotValid = true
    }
  }
  
  openModal() {    
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.classList.add('is-active');
    }
  }
  
  closeModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.classList.remove('is-active');
    }
  }
  
}
