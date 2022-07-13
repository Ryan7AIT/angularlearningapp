import { Injectable } from '@angular/core';
import { CLASSES } from './classes';
import { CLASSES2 } from './classes2';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

  classes = [];
  classes2 = [];


  getClasses(): Observable<any[]> {
    const classes = of(CLASSES);
    return classes
  }

  getClasses2() {
    const classes2 = of(CLASSES2);
    return classes2
    }

    getClasse(id: number) {
    const classe = CLASSES.find(c => c.id === id )!;
    return of(classe)
  }


}
