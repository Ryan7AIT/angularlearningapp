import { Component, OnInit, Output, Input } from '@angular/core';
import { ClassService } from '../class.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  @Input() semester! : string;
  @Input() classes! : string;


  classese = [];
  classese2 = [];

   showdetails:boolean = false;





  constructor(private service : ClassService) { }

  ngOnInit(): void {
     this.getClasses();
     this.getClasses2();
  }

   getClasses() {
     this.classese = this.service.classes
   }

  getClasses2() {
    this.classese2 = this.service.classes2
  }


}
