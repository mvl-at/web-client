import { Component, OnInit } from '@angular/core';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import {Event} from '../events/events.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {

  private event: Event = new Event();
  private backup: Event;
  private date: Date;
  private name: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.event.note = 'baum';
    this.backup = Object.assign({}, this.event);
  }

  j() {
    return JSON.stringify(this.event);
  }

  add() {
    console.log(this.event);
    console.log(this.date.toString());
    console.log(this.date.toLocaleString());
    console.log(this.date.valueOf());
  }

  reset() {
    this.event = Object.assign({}, this.backup);
  }
}
