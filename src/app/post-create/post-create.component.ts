import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../model/services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  // properties
  enterTitle: string = '';
  enterContent: string = '';

  constructor(public postService: PostsService) {}

  ngOnInit(): void {}

  onPost(form: NgForm) {
    if (form.invalid) return false;
    this.postService.onAddPost(form.value.title, form.value.content);
  }
}
