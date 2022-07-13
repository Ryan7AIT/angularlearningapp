import { Component, OnInit, Input } from '@angular/core';
import { ClassService } from '../class.service';
import { Class } from '../class';


@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {

  constructor(private service : ClassService) { }

  @Input() classese!: Class[]
  @Input() semester!: string ;


  class!: Class ;


  ngOnInit(): void {
    }

  showdetails: boolean = false;

  showInfo(classe: Class) {
    this.showdetails = true
    this.class = classe;
  }


}
