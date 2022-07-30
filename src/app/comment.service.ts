import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Idea } from './comment';
import { Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = "http://localhost:3000/comments";
  larevlurl = "http://learningappbacken.test/api/ideas";

  constructor(
    private http: HttpClient
  ) { }

  getComments() {
    return this.http.get<Idea[]>(this.url);
  }

  addIdea(newcomment:any): Observable<Idea> {
    return this.http.post<Idea>(this.url,newcomment)
  }




  getComment(id: number) {

    const url = `http://localhost:3000/comments/${id}`
    const laravelurl = `http://learningappbacken.test/api/ideas/${id}`
    return this.http.get<Idea>(url);
  }

  vote(id: number): Observable<Idea> {

    const laravelurl = `http://learningappbacken.test/api/ideas/${id}`


    const url = `http://learningappbacken.test/api/ideas/${id}`;

    return this.http.put<Idea>(url , laravelurl);

  }



}
