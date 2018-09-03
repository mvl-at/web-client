import {Component, OnInit} from '@angular/core';
import {Event} from '../events/events.component';
import {NgbActiveModal, NgbDateAdapter, NgbDateNativeAdapter, NgbTimeAdapter, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {Editor} from '../app.component';
import {DataService} from '../rest/data-service';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import {NgbTime} from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

export class JSONTimeAdapter extends NgbTimeAdapter<Date> {

  fromModel(value: Date): NgbTimeStruct {
    let time = null;
    if (value !== null) {
      time = {hour: value.getHours(), minute: value.getMinutes(), second: value.getSeconds()};
    }
    return time;
  }

  toModel(time: NgbTimeStruct): Date {
    const date = new Date();
    if (time != null) {
      date.setHours(time.hour, time.minute, time.second);
    }
    return date;
  }

}

@Component({
  selector: 'app-event-management',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}, {provide: NgbTimeAdapter, useClass: JSONTimeAdapter}]
})
export class EventEditorComponent extends Editor<Event> implements OnInit {

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
  }

  ngOnInit() {
  }

  defaults(): Event {
    return {
      id: null, date: null, internal: false, important: false, name: null,
      musicianTime: null, musicianPlace: null, note: null, place: null, time: null, uniform: null
    };
  }

  processedEntity(): Event {
    return this.entity;
  }

  url(): string {
    return 'events';
  }
}
