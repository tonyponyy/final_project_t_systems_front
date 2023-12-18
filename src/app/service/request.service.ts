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

  get_user_interview(id_interview :number){
    let url: string = this.api_url+'interviews/show_interview_user/'+id_interview
    return this.http.get<any[]>(url);
  }

  get_hr_interview(id_interview :number){
    let url: string = this.api_url+'interviews/show_interview_rh/'+id_interview
    return this.http.get<any[]>(url);
  }
  //user_position 
  get_user_interviews() {
    let url: string = this.api_url+'userinterviews/user_interviews';
    return this.http.get<any[]>(url);
  }

  user_enroll_interview(id_interview :number){
    let url: string = this.api_url+'userinterviews/user_join_interview/'+id_interview;
    return this.http.post(url, "{}", { responseType: 'text' });
  }

  //skills
  get_skills(number_page :number){
    let url: string = this.api_url+'skills/paginated_skills?page='+number_page+'&size=5';
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

  //datos del usuario
  get_user(){
    let url: string = this.api_url+'users/current_user/info';
    return this.http.get<any[]>(url);
  }
  upload_photo(file : any){
    console.log(file)
    let url: string = this.api_url+'users/photo';
    return this.http.put(url,file, { responseType: 'text' });
  }

  get_users(number_page :number) {
    let url: string = this.api_url+'users/paginated_users'+'?page='+number_page+'&size=6';
    return this.http.get<any[]>(url);
  }

  //admin
  delete_user(id_user :number){
    let url: string = this.api_url+'users/deleteUser/'+id_user;
    return this.http.delete<any[]>(url);

  }
  set_role(id_user :number, role_name :string){
    let url: string = this.api_url+'users/change_role/'+id_user+"/"+role_name;
    return this.http.put(url, "{}", { responseType: 'text' });
  }

}
