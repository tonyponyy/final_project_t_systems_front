import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url_interviews = 'https://finalprojecttsystemsback-production.up.railway.app/interviews/paginated_interviews?page=0&size=2'
  protected http = inject(HttpClient);
  constructor() { }

  get_interviews() {
    let url: string = this.url_interviews;
    return this.http.get<any[]>(url);
}
}
