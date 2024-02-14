import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { PostsService } from 'src/app/model/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  // properties
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostsService) {}

  ngOnInit() {
    this.posts = this.postService.onGetPosts();
    this.postsSub = this.postService
      .onGetPostUpdated()
      .subscribe((post: Post[]) => {
        this.posts = post;
      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}
