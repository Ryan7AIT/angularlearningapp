import { Component, OnInit, Output } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Output() comment!: Comment

  constructor(private commentServie: CommentService) { }

  ngOnInit(): void {
    this.getComments();
  }

  title!: string;
  desc!: string;

  comments :Comment[] = []

  getComments(): void {

    this.commentServie.getComments()
      .subscribe(comments => this.comments = comments)

  }

  addIdea() {

    const newComment:Comment = {
      id: this.comments.length + 1,
      title : this.title,
      desc: this.desc,
      status:"done"
    }


    this.commentServie.addIdea(newComment)
    .subscribe((newComment) => this.comments.push(newComment))


    this.title = '';
    this.desc= '';
  }

}
