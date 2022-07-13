import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-classe-details',
  templateUrl: './classe-details.component.html',
  styleUrls: ['./classe-details.component.css']
})
export class ClasseDetailsComponent implements OnInit {

  @Input() classe!: any;
  @Output() showDetails: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  showInfo(classe: any) {
      //sthis.classe = classe
        this.showDetails.emit(classe);
  }

}
