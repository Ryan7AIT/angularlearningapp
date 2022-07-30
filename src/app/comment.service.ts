import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Idea } from './comment';
import { Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = "http://localhost:3000/ideas";
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

  getVotes(id:number) {
    const url = `http://localhost:3000/votes/${id}`

    let voted



    let response = this.http.get<any>(url);

    // console.log(response);

    return response




  }




  getComment(id: number) {

    const url = `http://localhost:3000/ideas/${id}`
    const laravelurl = `http://learningappbacken.test/api/ideas/${id}`
    return this.http.get<Idea>(url);
  }

  vote(idea: Idea): Observable<Idea> {

//    const laravelurl = `http://learningappbacken.test/api/ideas/${id}`



    if(idea.votes < 100 ) {

      idea.votes = idea.votes + 1;
    } else {
      idea.votes = idea.votes - 1;

    }

    const url = `http://localhost:3000/ideas/${idea.id}`;

    return this.http.put<Idea>(url , idea);

  }



}
