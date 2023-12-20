import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from '../../service/request.service';
import { InterviewHrComponent } from '../../interview-hr/interview-hr.component';

@Component({
  selector: 'app-testusers',
  standalone: true,
  imports: [ReactiveFormsModule,InterviewHrComponent],
  templateUrl: './testusers.component.html',
  styleUrl: './testusers.component.css'
})
export class TestusersComponent {
  @Input() id_testuser: any;
  @Input() id_modal: any;
  @Output("ngOnInit") ngOnInit: EventEmitter<any> = new EventEmitter
  
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
    console.log(data)

    this.request.qualificate_user_test(this.id_testuser, data).subscribe(
      (data: any) => {
        this.ngOnInit.emit();
        this.closeModal();
      },
      (error) => {
        console.log(error);
      }
    );

  }

  closeModal() {
    const modalElement = document.getElementById('testusermodal'+this.id_modal);
    if (modalElement) {
      modalElement.classList.remove('is-active');
    }
  }
}