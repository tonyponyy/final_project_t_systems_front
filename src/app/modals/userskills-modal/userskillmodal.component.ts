import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output("ngOnInit") ngOnInit: EventEmitter<any> = new EventEmitter

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

    const modalElement = document.getElementById('userskills'+this.id_modal);
    if (modalElement) {
      modalElement.classList.add('is-active');
    }
  }

  send() {

    this.request
      .qualificate_userskill(this.id_user, this.id_skill, this.userSkillForm.value)
      .subscribe(
        (data: any) => {
          this.ngOnInit.emit();
          this.closeModal();
        },
        (error) => {

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
