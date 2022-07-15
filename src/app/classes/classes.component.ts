import { Component, OnInit, Output, Input } from '@angular/core';
import { ClassService } from '../class.service';
import { Class } from '../class';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classes : Class[] = [];
  classes2 : Class[] = [];

  constructor(private classService : ClassService) { }

  ngOnInit(): void {
    this.getClasses();
    this.getClasses2();
  }

  getClasses(): void {
    this.classService.getClasses()
      .subscribe(classes => this.classes = classes)
  }

  getClasses2(): void {
    this.classService.getClasses2()
      .subscribe(classes2 => this.classes2 = classes2 )
  }


}
