import { Component, OnInit, Input } from '@angular/core';
import { ClassService } from '../class.service';


@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {

  constructor(private service : ClassService) { }

  @Input() classese!: Array<string>;

  name: string = '';


  ngOnInit(): void {
    }

  showdetails: boolean = false;

  showInfo(classe: any) {
    this.showdetails = true
    this.name = classe
  }


}
