import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url_interviews = 'https://finalprojecttsystemsback-production.up.railway.app/interviews/paginated_interviews'
  protected http = inject(HttpClient);
  constructor() { }

  get_interviews(number_page :number) {
    let url: string = this.url_interviews+'?page='+number_page+'&size=5';
    return this.http.get<any[]>(url);
}
}
