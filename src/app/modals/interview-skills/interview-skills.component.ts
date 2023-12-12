import { Component } from '@angular/core';
import { SkillComponent } from '../../skill/skill.component';
import { SkillsAddComponent } from '../../skills-add/skills-add.component';

@Component({
  selector: 'app-interview-skills',
  standalone: true,
  imports: [SkillsAddComponent],
  templateUrl: './interview-skills.component.html',
  styleUrl: './interview-skills.component.css'
})
export class InterviewSkillsComponent {
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
