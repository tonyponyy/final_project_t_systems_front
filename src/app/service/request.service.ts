import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../skills/skills.component';
import { Interview } from '../edit-interview/edit-interview.component';
import { Comment } from '../modals/comment/comment.component';
import { Test } from '../modals/create-test/create-test.component';

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

  edit_interview(interview : Interview) {
    let url: string = this.api_url+'interviews/editInterview/'+interview.id;
    return this.http.put<any[]>(url,interview);
  }

  qualificate_userskill(id_user :number,id_skill :number,data :object){
    let url: string = this.api_url+'userskills/qualificate/'+id_user+'/'+id_skill
    return this.http.post<any[]>(url,data);
  }

  //datos del usuario
  get_user(){
    let url: string = this.api_url+'users/current_user/info';
    return this.http.get<any[]>(url);
  }
  upload_photo(file : any){
    let url: string = this.api_url+'users/photo';
    return this.http.put(url,file, { responseType: 'text' });
  }

  upload_resume(file : any){
    let url: string = this.api_url+'users/resume';
    return this.http.put(url,file, { responseType: 'text' });
  }

  get_users(number_page :number) {
    let url: string = this.api_url+'users/paginated_users'+'?page='+number_page+'&size=6';
    return this.http.get<any[]>(url);
  }

  get_user_resume(user_id:number){
    let url: string = this.api_url+'users/user_resume/'+user_id;
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

  new_interview(data:any){
    let url: string = this.api_url+'interviews/addInterview';
    return this.http.post<any[]>(url,data);
  }

  add_skill_interview(id_interview : number, id_skill : number){
    let url: string = this.api_url+'interviews_skills/add_by_ids/'+id_interview+'/'+id_skill;
    return this.http.post<any[]>(url,{ responseType: 'text'});
  }

  delete_skill_interview(id_interview : number, id_skill : number){
    let url: string = this.api_url+'interviews_skills/delete_by_ids/'+id_interview+'/'+id_skill;
    return this.http.delete<any[]>(url);
  }

  delete_interview(id_interview: number){
    let url: string = this.api_url+'interviews/deleteInterview/'+id_interview;
    return this.http.delete<any[]>(url);
  }

  change_state(id_ui : number, state : number){
    let url: string = this.api_url+'userinterviews/changeState/'+id_ui+'/'+state;
    return this.http.put(url, "{}", { responseType: 'text' });
  }

  change_comment(id_ui : number, comment : Comment){    
    let url: string = this.api_url+'userinterviews/changeComment/'+id_ui;
    return this.http.put<any[]>(url, comment);
  }
  
  create_test(test: Test){
    let url: string = this.api_url+'tests/addTest';
    return this.http.post<any[]>(url, test);
  }

}
