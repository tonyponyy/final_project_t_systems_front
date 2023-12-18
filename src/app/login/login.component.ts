import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TokenService } from '../service/token.service';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formGroup: FormGroup;
  emailNotValid : boolean = false;
  passwordNotValid : boolean = false;
  errorMessage : string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService : TokenService,
    private router: Router,
    private iservice: ImageService
  ) {
    this.formGroup = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  send_login() {
    if (this.formGroup.get('userName')?.invalid){
      this.emailNotValid = true;
    } else {
      this.emailNotValid= false;
    }
    if (this.formGroup.valid) {
      this.passwordNotValid = false;
      this.emailNotValid = false;
      this.authService.login(this.formGroup.value).subscribe(
        (result) => {
          console.log(result);
          this.iservice.destroy_image();
          this.tokenService.saveToken(result.token);
          this.tokenService.saveRole(result.role);          
          if(result.role == 'admin'){
            this.router.navigate(['/admin'])
          } else {
            this.router.navigate(['/interviews'])
          }
        },
        (error) => {
          if (error.status === 401) {
            this.errorMessage = 'Usuario o contraseña incorrecta';
            this.formGroup.get('password')?.reset();
          } else {
            this.errorMessage = 'Error en la autenticación';
            console.log(error);
            
            this.formGroup.reset();

          }
        }
      );
    } else {
      this.passwordNotValid = true;
    }
  }
}
