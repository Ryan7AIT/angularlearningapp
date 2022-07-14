import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COUR } from './cours';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Class } from './class';
import { Cour } from './cour';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3000/cours";


  getCours() {

    return this.http.get<Cour[]>(this.apiUrl);


  }

}
