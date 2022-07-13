import { Injectable } from '@angular/core';
import { CLASSES } from './classes';
import { CLASSES2 } from './classes2';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

  classes = CLASSES;
  classes2 = CLASSES2;

}
