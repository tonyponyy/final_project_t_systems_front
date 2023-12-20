import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestService } from '../../service/request.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Test } from '../create-test/create-test.component';

@Component({
  selector: 'app-edit-test',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-test.component.html',
  styleUrl: './edit-test.component.css',
})
export class EditTestComponent {
  @Input() test: any;
  @Input() id_modal: any;
  @Input() id_interview: any;
  @Output("ngOnInit") ngOnInit: EventEmitter<any> = new EventEmitter

  editTestForm: FormGroup;
  testToEdit : Test = new Test;

  constructor(
    public request: RequestService,
    private formBuilder: FormBuilder
  ) {
    this.editTestForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }

  openModal() {
    const originalEndDate = new Date(this.test.end_date);
    const formattedEndDate = originalEndDate
      .toISOString()
      .split('T')[0];
      
    this.editTestForm = this.formBuilder.group({
      title: [this.test.name, Validators.required],
      description: [this.test.description, Validators.required],
      end_date: [formattedEndDate, Validators.required],
    });

    const modalElement = document.getElementById('modalEditTest'+this.id_modal);
    if (modalElement) {
      modalElement.classList.add('is-active');
    }
  }

  editTest(){
    if (this.editTestForm.valid) {
      this.testToEdit.name = this.editTestForm.value.title;
      this.testToEdit.description = this.editTestForm.value.description;
      this.testToEdit.id_interview = this.id_interview.id
      this.testToEdit.end_date = this.editTestForm.value.end_date;

      console.log(this.testToEdit);
      
      this.request.edit_test(this.test.id,this.testToEdit).subscribe((data:any) => {
        this.ngOnInit.emit();
        this.closeModal();
      }, error => {
        console.log(error);
      })
    }
  }

  closeModal() {
    const modalElement = document.getElementById('modalEditTest'+this.id_modal);
    if (modalElement) {
      modalElement.classList.remove('is-active');
    }
  }
}
