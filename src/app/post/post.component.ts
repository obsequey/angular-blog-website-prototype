import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post?: Post;

  showEditModal: boolean = false;
  showDeleteConfirmationModal: boolean = false;

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe(post => this.post = post);
  }

  openPostModal(): void {
    this.showEditModal = true;
  }
  closePostModal(): void {
    this.showEditModal = false;
  }
  openDeleteConfirmationModal(): void {
    this.showDeleteConfirmationModal = true;
  }
  closeDeleteConfirmationModal(): void {
    this.showDeleteConfirmationModal = false;
  }

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  onSubmitForm(): void {
    this.getPost();
  }

  goBack(): void {
    this.location.back();
  }

}
