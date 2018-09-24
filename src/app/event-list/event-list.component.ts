import {Component, OnInit} from '@angular/core';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Event} from '../events/events.component';
import {EventEditorComponent} from '../event-editor/event-editor.component';
import {Utils} from '../utils';
import {List} from '../list';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent extends List<Event> implements OnInit {

  constructor(protected service: DataService, protected modal: NgbModal, private utils: Utils) {
    super(service, modal);
  }

  ngOnInit() {
  }

  editor(): any {
    return EventEditorComponent;
  }

  urlName(): string {
    return 'events';
  }
}
