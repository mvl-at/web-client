import {Component, OnInit} from '@angular/core';
import {Event} from '../events/events.component';
import {
  NgbActiveModal,
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDateStruct,
  NgbTimeAdapter,
  NgbTimeStruct
} from '@ng-bootstrap/ng-bootstrap';
import {Editor} from '../app.component';
import {DataService} from '../rest/data-service';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import {NgbTime} from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

export class JSONTimeAdapter extends NgbTimeAdapter<Date> {

  fromModel(value: Date): NgbTimeStruct {
    let time = null;
    console.log(value);
    if (value !== null) {
      const parsedValue = new Date(Date.parse(value.toString()));
      time = {hour: parsedValue.getHours(), minute: parsedValue.getMinutes(), second: parsedValue.getSeconds()};
    }
    return time;
  }

  toModel(time: NgbTimeStruct): Date {
    const date = new Date();
    if (time !== null) {
      date.setHours(time.hour, time.minute, time.second);
    }
    return date;
  }

}

export class JSONDateAdapter extends NgbDateAdapter<Date> {

  fromModel(value: Date): NgbDateStruct {
    console.log(value);
    let date = null;
    if (value !== null) {
      const parsedValue = new Date(Date.parse(value.toString()));
      date = {year: parsedValue.getFullYear(), month: parsedValue.getMonth(), day: parsedValue.getDay()};
    }
    return date;
  }

  toModel(date: NgbDateStruct): Date {
    const cDate = new Date();
    if (date !== null) {
      cDate.setFullYear(date.year, date.month, date.day);
    }
    return cDate;
  }

}

@Component({
  selector: 'app-event-management',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: JSONDateAdapter}, {provide: NgbTimeAdapter, useClass: JSONTimeAdapter}]
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

  entityName(): string {
    return 'Termin';
  }
}
