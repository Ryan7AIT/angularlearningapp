import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }



  @Input() comments!: Comment[]

  ngOnInit(): void {
  }

}