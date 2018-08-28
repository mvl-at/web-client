import { Component, OnInit } from '@angular/core';
import {Event} from '../events/events.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Editor} from '../app.component';
import {DataService} from '../rest/data-service';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent extends Editor<Event> implements OnInit {

  private now: Date = new Date(Date.now());
  private date: NgbDate = new NgbDate(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
  }

  ngOnInit() {
  }

  defaults(): Event {
    return {id: null, date: null, internal: false, important: false, name: null,
      musicianTime: null, musicianPlace: null, note: null, place: null, time: null, uniform: null};
  }

  processedEntity(): Event {
    return this.entity;
  }

  url(): string {
    return 'events';
  }
}
