import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-modal',
  standalone: true,
  imports: [],
  templateUrl: './skill-modal.component.html',
  styleUrl: './skill-modal.component.css'
})
export class SkillModalComponent {
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
