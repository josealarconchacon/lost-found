import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() posts = [];
  // test data
  // posts = [
  //   { title: 'Post One', content: 'This is the first blog post.' },
  //   { title: 'Post Two', content: 'This is the second blog post.' },
  //   { title: 'Post 3', content: 'This is the third blog post.' },
  //   { title: 'Post 4', content: 'This is the four blog post.' },
  // ];
  constructor() {}

  ngOnInit() {}
}
