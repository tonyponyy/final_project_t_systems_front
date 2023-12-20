import { Component, Input } from '@angular/core';
import { RequestService } from '../../service/request.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-userskillmodal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './userskillmodal.component.html',
  styleUrl: './userskillmodal.component.css',
})
export class UserskillmodalComponent {
  @Input() id_modal: any;
  @Input() id_user: any;
  @Input() id_skill: any;
  userSkillForm: FormGroup;
  userSkillFormUser: userSkillForm = new userSkillForm();

  constructor(
    public request: RequestService,
    private formBuilder: FormBuilder
  ) {
    this.userSkillForm = this.formBuilder.group({
      qualification: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  openModal() {
    console.log('abriendo modal');
    const modalElement = document.getElementById('userskills'+this.id_modal);
    if (modalElement) {
      modalElement.classList.add('is-active');
    }
  }

  send() {
    console.log('id_user:' + this.id_user + '  id_skill' + this.id_skill);
    console.log(this.userSkillForm.value);
    this.request
      .qualificate_userskill(this.id_user, this.id_skill, this.userSkillForm.value)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.closeModal();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  closeModal() {
    const modalElement = document.getElementById('userskills'+this.id_modal);
    if (modalElement) {
      modalElement.classList.remove('is-active');
    }
  }
}

export class userSkillForm {
  userSkillForm?: string;
}
