import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cour } from '../cour';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent implements OnInit {

  @Input() cour!: Cour ;
  @Output() onChange: EventEmitter<any> = new EventEmitter;


  //status =false;
  isChecked :boolean  = true;


  progress: number = 0;

  constructor() { }

  ngOnInit(): void {
    //this.onChanges();

  }

  onChanges(c: any) {
    c.status = ! c.status
    this.onChange.emit(c);

  }





}
