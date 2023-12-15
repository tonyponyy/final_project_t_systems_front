import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../skills/skills.component';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  //private api_url = 'http://localhost:8080/'

  private api_url = 'https://finalprojecttsystemsback-production.up.railway.app/'
  protected http = inject(HttpClient);
  constructor() { }

  //positions
  search_interviews(query :string){
    let url: string = this.api_url+"interviews/search_by/"+query
    return this.http.get<any[]>(url);
  }

  get_interviews(number_page :number) {
    let url: string = this.api_url+'interviews/paginated_interviews'+'?page='+number_page+'&size=6';
    return this.http.get<any[]>(url);
  }
  //user_position 
  get_user_interviews() {
    let url: string = this.api_url+'userinterviews/user_interviews';
    return this.http.get<any[]>(url);
  }


  //skills
  get_skills(){
    let url: string = this.api_url+'skills/paginated_skills?page=0&size=2';
    return this.http.get<any[]>(url);
  }

  add_skills(data: any) :Observable<any>{
    let url: string = this.api_url+'skills/addSkill';
    return this.http.post<any[]>(url,data);
  }

  delete_skill (item : any) {
    let url: string = this.api_url+'skills/deleteSkill/'+item.id;
    return this.http.delete<any[]>(url);
  }

  edit_skill(item : Skill) {
    let url: string = this.api_url+'skills/editSkill/'+item.id;
    return this.http.put<any[]>(url,item);
  }
}
