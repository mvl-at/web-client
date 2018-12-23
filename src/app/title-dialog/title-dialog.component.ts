import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-title-dialog',
  templateUrl: './title-dialog.component.html',
  styleUrls: ['./title-dialog.component.css']
})
export class TitleDialogComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, public service: DataService) { }

  ngOnInit() {
  }

}
