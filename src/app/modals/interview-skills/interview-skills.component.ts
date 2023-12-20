import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-interview-skills',
  standalone: true,
  imports: [],
  templateUrl: './interview-skills.component.html',
  styleUrl: './interview-skills.component.css'
})
export class InterviewSkillsComponent {
  @Input() skills2: any[] = [];
  @Output() arrayEnviado = new EventEmitter<any[]>();

  protected skills : any[] = [];
  interviewSkills : any[] = []
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

  isSkillAdded(item: any): boolean {
    return this.interviewSkills.includes(item);
  }

  addSkill(item: any) {
    if (!this.interviewSkills.includes(item)) {
      this.interviewSkills.push(item);
      console.log(this.interviewSkills);
    } else {
      console.log('El item ya está en el array.');
    }
  }

  enviarArray() {
    this.arrayEnviado.emit(this.interviewSkills);
    this.interviewSkills =  [];
    this.closeModal();
    this.ngOnInit();
  }

  closeModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.classList.remove('is-active');
    }
  }
}
