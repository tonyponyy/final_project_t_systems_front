import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-testusers',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './testusers.component.html',
  styleUrl: './testusers.component.css'
})
export class TestusersComponent {
  @Input() id_testuser: any;
  @Input() id_modal: any;
  testUserForm: FormGroup;
  commentUser: Comment = new Comment(); 

  constructor(
    public request: RequestService,
    private formBuilder: FormBuilder
  ) {
    this.testUserForm = this.formBuilder.group({
      do_at: ['', Validators.required],
      calification: ['', Validators.required]
    });
  }

  openModal() {
    console.log('abriendo modal');

    const modalElement = document.getElementById('testusermodal'+this.id_modal);
    if (modalElement) {
      modalElement.classList.add('is-active');
    }
  }

  sendData() {

    let data =this.testUserForm.value;
    console.log("id_testuser-->"+this.id_testuser)
/*
    this.request.qualificate_user_test(id_testuser, data).subscribe(
      (data: any) => {
        console.log(data);
        this.closeModal();
      },
      (error) => {
        console.log(error);
      }
    );
*/

  }

  closeModal() {
    const modalElement = document.getElementById('testusermodal'+this.id_modal);
    if (modalElement) {
      modalElement.classList.remove('is-active');
    }
  }
}