import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { RequestService } from '../service/request.service';
import { RouterLink } from '@angular/router';
import { TokenService } from '../service/token.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-interviews',
  standalone: true,
  imports: [LateralBarComponent,RouterLink,DatePipe],
  templateUrl: './interviews.component.html',
  styleUrl: './interviews.component.css'
})
export class InterviewsComponent {
constructor(public requestservice: RequestService, public tokenservice: TokenService){}
protected interviews :any[] =[];
protected faimg : string[] = ["fa-briefcase", "fa-code", "fa-laptop-code","fa-terminal","fa-paperclip"]
protected class :string[] = ["is-success","is-primary","is-link","is-info","is-warning","is-danger"];
protected pagination={current_page: 0,total_pages: 0, total_items: 0};
public role :string ="";
protected loaded :boolean = false;

ngOnInit() {
this.role = this.tokenservice.getUser();  
this.get_page(0);
}

get_page(n_page : number){
  this.requestservice.get_interviews(n_page).subscribe((data: any) => {
    this.interviews = data.interviews;
    this.pagination.current_page = data.currentPage
    this.pagination.total_pages = data.totalPages
    this.pagination.total_items = data.totalItems
    this.loaded = true;
  });
}
  search(query :string){
    if (query == ""){
      this.get_page(0);
    }else{
      this.requestservice.search_interviews(query).subscribe((data: any) => {
        this.interviews = data.interviews;
        this.pagination.current_page = data.currentPage
        this.pagination.total_pages = data.totalPages
        this.pagination.total_items = data.totalItems
      });
    }
  }

}
