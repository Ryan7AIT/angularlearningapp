import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Class } from '../class';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {



  constructor() { }

  @Input() class!: Class ;


  ngOnInit(): void {
  }


}
