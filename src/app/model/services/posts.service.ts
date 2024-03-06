import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
  // An array of Post objects, which holds the list of posts.
  private posts: Post[] = [];
  // RxJS Subject that will be used to notify any subscribers when posts are updated.
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  //   returns a copy of the posts array without modifying the array
  onGetPosts() {
    this.http
      .get<{ message: string; posts: Post[] }>(
        'http://localhost:3000/api/posts'
      )
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  // return Subject as an Observable
  onGetPostUpdated() {
    return this.postsUpdated.asObservable();
  }

  onAddPost(title: string, content: string) {
    const post: Post = {
      id: null,
      title: title,
      content: content,
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
