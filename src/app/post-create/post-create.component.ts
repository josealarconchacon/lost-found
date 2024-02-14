import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../model/post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  // properties
  enterTitle: string = '';
  enterContent: string = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}

  onPost(form: NgForm) {
    if (form.invalid) return false;
    const newPost: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreated.emit(newPost);
  }
}
