import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private commentService : CommentService) { }



  @Input() comments!: Idea[]

  ngOnInit(): void {
  }

  onShow() {
    console.log(12)
  }

}
