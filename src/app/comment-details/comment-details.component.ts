import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment!: Comment;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
  ) { }

  ngOnInit(): void {
    this.getComment()
  }


  getComment(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.commentService.getComment(id)
      .subscribe(comment => this.comment= comment);
  }

}
