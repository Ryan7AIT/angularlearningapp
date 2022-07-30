import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import { Idea } from '../comment';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment!: Idea;
  votes!: number;
  voted!: any

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
  ) { }

  ngOnInit(): void {
    this.getComment();
    this.getVotes();
  }

  vote(idea: Idea) {

    // if(this.voted.user_id)

    this.commentService.vote(idea)
      .subscribe(c => this.comment = c)

      // this.getComment();
  }

  getVotes(): any {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.commentService.getVotes(id).subscribe(
      v => this.voted = v
      );

    // if()

  };



  getComment(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.commentService.getComment(id)
      .subscribe(comment => this.comment= comment);
  }

}
