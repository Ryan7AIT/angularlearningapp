import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  show = false ;

  closemodal() {
    this.show = false
  }

  openmodal() {
    this.show = true
  }
}
