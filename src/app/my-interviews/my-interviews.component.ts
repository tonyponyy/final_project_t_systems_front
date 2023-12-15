import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { RequestService } from '../service/request.service';
import { RouterLink } from '@angular/router';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-interviews',
  standalone: true,
  imports: [LateralBarComponent,RouterLink,DatePipe],
  templateUrl: './my-interviews.component.html',
  styleUrl: './my-interviews.component.css'
})
export class MyInterviewsComponent {
constructor(public requestservice: RequestService){}
protected interviews :any[] =[];
protected class :string[] = ["is-success","is-primary","is-link","is-info","is-warning","is-danger"];
protected pagination={current_page: 0,total_pages: 0, total_items: 0};

ngOnInit() {
this.get_page(0);
}

get_page(n_page : number){
  this.requestservice.get_interviews(n_page).subscribe((data: any) => {
    this.interviews = data.interviews;
    this.pagination.current_page = data.currentPage
    this.pagination.total_pages = data.totalPages
    this.pagination.total_items = data.totalItems
  });
}
  search(query :string){
    if (query == ""){
      this.get_page(0);
    }else{
      this.requestservice.search_interviews(query).subscribe((data: any) => {
        console.log(data)
        this.interviews = data.interviews;
        this.pagination.current_page = data.currentPage
        this.pagination.total_pages = data.totalPages
        this.pagination.total_items = data.totalItems
      });
    }
  }

}
