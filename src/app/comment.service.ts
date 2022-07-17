import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from './comment';
import { Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = "http://localhost:3000/comments";

  constructor(
    private http: HttpClient
  ) { }

  getComments() {
    return this.http.get<Comment[]>(this.url);
  }

  addIdea(newcomment:Comment): Observable<Comment> {
    return this.http.post<Comment>(this.url,newcomment)
  }



}
