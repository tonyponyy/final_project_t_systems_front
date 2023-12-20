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
  selector: 'app-comment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  @Input() interview: any;
  @Input() id_modal: any;
  commentForm: FormGroup;
  commentUser: Comment = new Comment(); 

  constructor(
    public request: RequestService,
    private formBuilder: FormBuilder
  ) {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required],
    });
  }

  openModal() {

    const modalElement = document.getElementById('messageModal'+this.id_modal);
    if (modalElement) {
      modalElement.classList.add('is-active');
    }
  }

  sendComment() {
    if (this.commentForm) {
      this.commentUser.comment = this.commentForm.value.comment;
      
      this.request.change_comment(this.interview.id, this.commentUser).subscribe(
        (data: any) => {
          this.closeModal();
        },
        (error) => {
        }
      );
    }
  }

  closeModal() {
    const modalElement = document.getElementById('messageModal'+this.id_modal);
    if (modalElement) {
      modalElement.classList.remove('is-active');
    }
  }
}

export class Comment {
  comment?: string;
}
