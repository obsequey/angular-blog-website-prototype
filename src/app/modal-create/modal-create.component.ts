import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../post.service';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss']
})
export class ModalCreateComponent {
  // @Input() modalActionName: string = 'Submit';

  // @Input() post?: Post;

  @Output() submitForm = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  closeModal(): void {
    this.close.emit();
  }
  // Don't close a modal
  // when the modal itself is clicked
  stopClosingEvent(event: Event): void {
    event.stopPropagation();
  }

  constructor(private postService: PostService) { }

  onSubmitForm(form: NgForm): void {
    this.postService.createPost(form.value).subscribe(() => {
      this.closeModal();
      this.submitForm.emit();
    });
  }
}
