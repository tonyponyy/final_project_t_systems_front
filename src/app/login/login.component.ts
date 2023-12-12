import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService : TokenService
  ) {
    this.formGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  send_login() {
    console.log('login');

    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(
        (result) => {
          console.log(result);
          this.tokenService.saveToken(result.token);
          console.log(this.tokenService.getToken());
        },
        (error) => {
          console.log('problemon');
        }
      );
    }
  }
}
