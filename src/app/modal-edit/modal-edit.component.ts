import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  @Input() post?: Post;

  @Output() close = new EventEmitter();

  closeModal(): void {
    this.close.emit();
  }
  // Stops the event (click)
  // Don't close a modal
  // when the modal itself is clicked
  stopClosingEvent(event: Event): void {
    event.stopPropagation();
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  // Updates the current post or creates a new one
  onSubmitForm(form: NgForm): void {
    if (this.post) {
      this.postService.updatePost(this.post).subscribe(() => this.closeModal());
    }
    return;
  }

}
