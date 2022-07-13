import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../class';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-classe-details',
  templateUrl: './classe-details.component.html',
  styleUrls: ['./classe-details.component.css']
})
export class ClasseDetailsComponent implements OnInit {

  //@Input() classe!: Class;
  //@Output() showDetails: EventEmitter<any> = new EventEmitter();

  classe!: Class;

  //classe?: Class

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
    //private location: Location
  ) { }

  ngOnInit(): void {
    this.getClass();
  }



  getClass(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.classService.getClasse(id)
      .subscribe(classe => this.classe = classe);
  }

}
