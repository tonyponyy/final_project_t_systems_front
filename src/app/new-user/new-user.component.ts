import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RequestService } from '../service/request.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private request: AuthService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const register: Register = {
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
      };
            
      this.request.register(register).subscribe(
        (data: any) => {
          console.log('loged');
        },
        (error) => {
          console.log('error' + error);
        }
      );
    }
  }
}


export class Register {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}