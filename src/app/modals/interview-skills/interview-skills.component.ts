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

  protected skills : any[] = [];
  protected pagination={current_page: 0,total_pages: 0, total_items: 0};

  constructor(public request: RequestService){}

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
