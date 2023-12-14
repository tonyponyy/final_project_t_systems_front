import { Component } from '@angular/core';
import { SkillsAddComponent } from '../../skills-add/skills-add.component';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-interview-skills',
  standalone: true,
  imports: [SkillsAddComponent],
  templateUrl: './interview-skills.component.html',
  styleUrl: './interview-skills.component.css'
})
export class InterviewSkillsComponent {

  skills : any[] = [];
  constructor(public request: RequestService){}

  ngOnInit(){
    this.request.get_skills().subscribe((data : any) =>{
      this.skills = data;
    })
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
