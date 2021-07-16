import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-modal-confirm-deletion',
  templateUrl: './modal-confirm-deletion.component.html',
  styleUrls: ['./modal-confirm-deletion.component.scss'],
})
export class ModalConfirmDeletionComponent implements OnInit {
  @Input() postId?: number;

  @Output() close = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  closeModal(): void {
    this.close.emit();
  }
  // Stops the event (click)
  // Don't close a modal
  // when the modal itself is clicked
  stopClosingEvent(event: Event): void {
    event.stopPropagation();
  }

  deletePost(): void {
    if (this.postId) {
      this.postService.deletePost(this.postId).subscribe();
    }
    this.delete.emit();
  }

  constructor(private postService: PostService) {}

  ngOnInit(): void {}
}
