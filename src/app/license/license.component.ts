import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {

  year: number;
  constructor(public activeModal: NgbActiveModal) {
    this.year = new Date(Date.now()).getFullYear();
  }

  ngOnInit() {
  }

}
