import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService, UserInfoInst} from '../rest/data-service';
import {Utils} from '../utils';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SubscriptionComponent} from '../subscription/subscription.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];

  constructor(private http: HttpClient, private service: DataService, private utils: Utils, private modal: NgbModal) {
  }

  get userInfo() {
    return UserInfoInst;
  }

  dia() {
    this.modal.open(SubscriptionComponent);
  }

  ngOnInit() {
    const now = new Date(Date.now());
    now.setDate(now.getDate() - 1);
    const nowUnix = now.valueOf();
    this.service.getEvents().subscribe(e => this.events =
      e.filter(ev => Date.parse(ev.date) >= nowUnix)
        .filter(ev => !ev.internal || this.userInfo)
        .sort((a, b) => (a.date > b.date) ? 1 : -1));
  }
}

export interface Event {
  id: number;
  date: string;
  time: string;
  end: string;
  openEnd: number;
  musicianTime: string;
  name: string;
  note: string;
  uniform: string;
  place: string;
  musicianPlace: string;
  internal: boolean;
  important: boolean;
}
