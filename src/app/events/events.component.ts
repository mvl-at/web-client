import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../rest/data-service';
import {Utils} from '../utils';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventEditorComponent} from '../event-editor/event-editor.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private events: Event[];

  constructor(private http: HttpClient, private service: DataService, private utils: Utils, private modal: NgbModal) { }

  ngOnInit() {
    this.service.getEvents().subscribe(e => this.events = e);
  }

  edit(event: Event) {
    this.modal.open(EventEditorComponent).componentInstance.entity = event;
  }
}

export class Event {
  id: number;
  date: string;
  time: string;
  musicianTime: string;
  name: string;
  note: string;
  uniform: string;
  place: string;
  musicianPlace: string;
  internal: boolean;
  important: boolean;
}
