import { Component } from '@angular/core';
import { LateralBarComponent } from "../lateral-bar/lateral-bar.component";
import { RequestService } from '../service/request.service';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-admin-view',
    standalone: true,
    templateUrl: './admin-view.component.html',
    styleUrl: './admin-view.component.css',
    imports: [LateralBarComponent, TitleCasePipe]
})
export class AdminViewComponent {
  constructor(public requestservice: RequestService){}
protected all_users :any[] =[];
protected class :string[] = ["is-success","is-primary","is-link","is-info","is-warning","is-danger"];
protected pagination={current_page: 0,total_pages: 0, total_items: 0};

ngOnInit() {
this.get_page(0);
}

get_page(n_page : number){
  this.requestservice.get_users(n_page).subscribe((data: any) => {
    this.all_users = data.users;
    this.pagination.current_page = data.currentPage
    this.pagination.total_pages = data.totalPages
    this.pagination.total_items = data.totalItems
  });
}

change_role(id_user :number, role_name:string){
  this.requestservice.set_role(id_user,role_name).subscribe(
    (data: any) => {
      this.refresh();
    },
    (error: any) => {
  });
  this.refresh
}
delete_user(id_user: number) {
  this.requestservice.delete_user(id_user).subscribe(
    (data: any) => {
      this.refresh();
    },
    (error: any) => {
    }
  );
}
refresh(){
  this.get_page(this.pagination.current_page)
}



}
