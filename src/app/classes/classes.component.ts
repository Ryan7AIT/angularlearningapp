import { Component, OnInit, Output, Input } from '@angular/core';
import { ClassService } from '../class.service';
import { Class } from '../class';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  @Input() semester! : string;


  classes : Class[] = [];
  classes2 : Class[] = [];

  showdetails:boolean = false;

  constructor(private service : ClassService) { }

  ngOnInit(): void {
    this.getClasses();
    this.getClasses2();
  }

  getClasses(): void {
    this.service.getClasses()
      .subscribe(classes => this.classes = classes)
  }

  getClasses2(): void {
    this.service.getClasses2()
      .subscribe(classes2 => this.classes2 = classes2 )
  }


}
