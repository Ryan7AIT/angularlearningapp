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



  classe!: Class;
  cours: Cour[] = [];
  per!: number ;

  totalLength!: number;




  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
    private http: HttpClient,
    private service : ClassService
    //private location: Location
  ) { }


  ngOnChanges() {

  }
  ngOnInit(): void {
    this.getClass();
    this.getCours();

  }



  getClass(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.classService.getClasse(id)
      .subscribe(classe => this.classe= classe);
  }

  getCours(): void {
    this.classService.getCours()
      .subscribe(cours => this.cours = cours);

  }

  courTerminer(v:Cour){

    const i = this.cours.indexOf(v);

    console.log(v)


    this.service.updateCours(v).subscribe()

    this.updateProg()



  }

  updateProg() {

    const totalLength = this.cours.length;

    const coursCompleted = this.cours.filter(c => c.status == true )

    this.per = (coursCompleted.length * 100) / totalLength;

    this.classe.progress = this.per

    this.service.updateClass(this.classe).subscribe()
  }

  prog() {
    // let l =
    // this.classService.clacProgress()

    const totalLength = this.cours.length;


    const coursCompleted = this.cours.filter(c => c.status == true )
    this.per = (coursCompleted.length * 100) / totalLength;

    console.log(this.per)

   // return this.per
  }







}
