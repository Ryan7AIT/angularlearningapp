import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../class';
import { Cour } from '../cour';
import { ClassService } from '../class.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-classe-details',
  templateUrl: './classe-details.component.html',
  styleUrls: ['./classe-details.component.css']
})
export class ClasseDetailsComponent implements OnInit {

  //@Input() classe!: Class;
  //@Output() showDetails: EventEmitter<any> = new EventEmitter();

  classe!: Class;
  cours: Cour[] = [];

  //classe?: Class

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
    private http: HttpClient,
    private service : ClassService
    //private location: Location
  ) { }

  ngOnInit(): void {
    this.getClass();
    this.getCours();
  }



  getClass(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.classService.getClasse(id)
      .subscribe(classe => this.classe = classe);
  }

  getCours(): void {
    this.classService.getCours()
      .subscribe(cours => this.cours = cours);
  }

  courTerminer(v:any){

    const i = this.cours.indexOf(v);

    console.log(v.status)

    this.service.updateCours(v)
    .subscribe()

  }



}
