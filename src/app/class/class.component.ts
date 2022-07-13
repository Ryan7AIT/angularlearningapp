import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  @Input() class: any ;

  ngOnInit(): void {
  }


}
