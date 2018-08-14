import { Component, OnInit } from '@angular/core';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import {Event} from '../events/events.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Editor} from '../app.component';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent extends Editor<Event> implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
    super();
  }

  ngOnInit() {
  }

  defaults(): Event {
    return {id: null, date: null, internal: false, important: false, name: null,
      musicianTime: null, musicianPlace: null, note: null, place: null, time: null, uniform: null};
  }
}
