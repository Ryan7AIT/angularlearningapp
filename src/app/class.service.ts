import { Injectable } from '@angular/core';
import { CLASSES } from './classes';
import { CLASSES2 } from './classes2';
import { Observable, of } from 'rxjs';
import { COUR } from './cours';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Class } from './class';
import { Cour } from './cour';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3000/classes";

  classes = [];
  classes2 = [];
  progress = 0;


  getClasses() {

    return this.http.get<Class[]>(this.apiUrl);
  }

  getClasses2() {
    const classes2 = of(CLASSES2);
    return classes2
    }

  getClasse(id: number) {

    const url = `http://localhost:3000/classes/${id}`
    return this.http.get<Class>(url);
  }

  getCour(id: number) {

    const url = `http://localhost:3000/classes.1.cours/${id}`
    return this.http.get<Cour>(url);
  }

    getCours(){
    const coursUrl = "http://localhost:3000/cours";
    return this.http.get<Cour[]>(coursUrl);

  }

  updateCours(v:any){
    const url = `http://localhost:3000/cours/${v.id}`;

    return this.http.put<Cour>(url,v)

  }

  updateClass(v:any){
    const url = `http://localhost:3000/classes/${v.id}`;

    return this.http.put<Cour>(url,v)

  }

  clacProgress() {


    return this.classes ;
  }


}
