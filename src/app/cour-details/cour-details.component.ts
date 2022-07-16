import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '../class.service';
import { Cour } from '../cour';




@Component({
  selector: 'app-cour-details',
  templateUrl: './cour-details.component.html',
  styleUrls: ['./cour-details.component.css']
})
export class CourDetailsComponent implements OnInit {

  cour!:Cour;

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
    private http: HttpClient,
    private service : ClassService
  ) { }

  ngOnInit(): void {
    this.getCour();
  }


  getCour(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.classService.getCour(id)
      .subscribe(cour => this.cour= cour);
  }


}
