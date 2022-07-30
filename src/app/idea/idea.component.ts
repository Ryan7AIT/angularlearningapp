import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../comment';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

  constructor(private commentService : CommentService) { }



  @Input() comments!: Idea[]

  ngOnInit(): void {
  }

  onShow() {
    console.log(12)
  }

}
