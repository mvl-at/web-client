import { Component, OnInit } from '@angular/core';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TitleDialogComponent} from '../title-dialog/title-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: DataService, private modal: NgbModal) { }

  ngOnInit() {
  }

  titleFullscreen() {
    this.modal.open(TitleDialogComponent, {size: 'lg'});
  }
}
