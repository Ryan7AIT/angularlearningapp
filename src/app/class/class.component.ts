import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ClassService } from '../class.service';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  @Output() showDetails: EventEmitter<any> = new EventEmitter();


  constructor() { }

  @Input() class!: any ;
  @Input() semester!: string;


  ngOnInit(): void {
  }

  onShow(c:any) {
    this.showDetails.emit(c);  }

  // onShow(class):an {
  //   this.showDetails.emit(classe);
  // }



}
