import { Component, Input } from '@angular/core';

export interface Comment {
  id: number;
  message: string;
  name: string;
  work: string;
  agency: string;
  photo: string;
}

@Component({
  selector: 'tech-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment!: Comment;

  constructor() {}

  ngOnInit(): void {}
}
