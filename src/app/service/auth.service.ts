import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = "https://finalprojecttsystemsback-production.up.railway.app/auth/"
const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(data:any) :Observable<any>{
    return this.http.post(AUTH_API+"login",data);
  }
}
