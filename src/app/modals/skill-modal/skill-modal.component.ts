import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-skill-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './skill-modal.component.html',
  styleUrl: './skill-modal.component.css'
})
export class SkillModalComponent {

  skillForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public request : RequestService) {
    this.skillForm = this.formBuilder.group({
      skill_name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addSkill() {   
    if (this.skillForm.valid) {
      this.request.add_skills(this.skillForm.value).subscribe(
        (result) => {
          console.log('Skill añadida correctamente');
          
        }, (error) => {
          // añadir mensaje de error
          alert('problemon');
        }
      );
    }
  }
  
  openModal() {
    console.log('abriendo modal');
    
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
