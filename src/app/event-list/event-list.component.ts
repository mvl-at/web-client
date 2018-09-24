import { Component, OnInit } from '@angular/core';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Event} from '../events/events.component';
import {EventEditorComponent} from '../event-editor/event-editor.component';
import {Utils} from '../utils';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  private events: Event[];

  constructor(private service: DataService, private modal: NgbModal, private utils: Utils) { }

  ngOnInit() {
    this.service.get<Event>('events').subscribe(e => this.events = e);
  }

  edit(event: Event) {
    this.modal.open(EventEditorComponent).componentInstance.entity = event;
  }
}
