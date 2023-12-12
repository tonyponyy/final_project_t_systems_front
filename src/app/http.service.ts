import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  protected url_test :string = "https://rickandmortyapi.com/api/character/1";
  protected http = inject(HttpClient);
  constructor() {}
  Test(){
    return this.http.get<any[]>(this.url_test);
  }
}
