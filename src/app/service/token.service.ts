import { Injectable } from '@angular/core';

const TOKEN_KEY='auth-token';
const ROLE_KEY='auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  singOut(): void{
    window.sessionStorage.clear();
  }

  public saveToken(token : string) : void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() : string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRole(role: any): void{
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, role);
  }

  public getUser(): any{
    return window.sessionStorage.getItem(ROLE_KEY);
  }

}
