import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsUrl = 'api/posts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getPost(id: number): Observable<Post> {
    const postUrl = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(postUrl);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  createPost(post: Post): Observable<Post> {
    return this.http
      .post<Post>(this.postsUrl, post, this.httpOptions)
      .pipe(
        tap((newPost: Post) => console.log(`Added post w/ id=${newPost.id}`))
      );
  }

  deletePost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete<Post>(url, this.httpOptions).pipe(
      tap(() => {
        console.log(`Deleted post id=${id}`);
        this.location.back();
      })
    );
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http
      .put<Post>(url, post, this.httpOptions)
      .pipe(tap((_) => console.log(`Deleted post id=${post.id}`)));
  }

  constructor(private http: HttpClient, private location: Location) {}
}
