import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];

  showModal: boolean = false;

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  openPostModal(): void {
    this.showModal = true;
  }
  closePostModal(): void {
    this.showModal = false;
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  onSubmitForm(): void {
    this.getPosts();
  }

}
