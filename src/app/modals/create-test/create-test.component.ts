import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-create-test',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-test.component.html',
  styleUrl: './create-test.component.css'
})
export class CreateTestComponent {
  @Input() interview: any;
  createTest: FormGroup;
  test: Test = new Test;

  constructor(
    public request: RequestService,
    private formBuilder: FormBuilder
  ) {
    this.createTest = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      end_date: ['', Validators.required]
    });
  }

  openModal() {
    console.log('abriendo modal');

    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.classList.add('is-active');
    }
  }

  sendComment() {
    if (this.createTest.valid) {
      this.test.name = this.createTest.value.title;
      this.test.description = this.createTest.value.description;
      this.test.id_interview = this.interview.id;
      this.test.end_date = this.createTest.value.end_date;

      console.log(this.test);

      this.request.create_test(this.test).subscribe((data: any) =>{
        console.log(data);
        this.closeModal();
      },
      error =>{
        console.log(error);
      })
      
    }
  }

  closeModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.classList.remove('is-active');
    }
  }
}

export class Test {
  name?: string;
  description?: string;
  id_interview?: number;
  end_date?: Date;
}
