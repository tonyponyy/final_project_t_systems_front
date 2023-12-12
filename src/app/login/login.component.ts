import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  send_login(){
    console.log("aaaa")
    let username = "cobayo2@gmail.com"
    let password = "12345678"
    
      this.authService.login(username,password).subscribe((data: any) => {
        console.log(data)
        if (data !=null){
        }
      });
  }
}
