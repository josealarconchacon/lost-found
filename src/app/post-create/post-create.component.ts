import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  // properties
  enterTitle: string = '';
  enterContent: string = '';
  @Output() postCreated = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onPost() {
    const newPost = { title: this.enterTitle, content: this.enterContent };
    this.postCreated.emit(newPost);
  }
}
