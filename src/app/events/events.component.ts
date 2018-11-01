import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService, UserInfoInst} from '../rest/data-service';
import {Utils} from '../utils';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SubscriptionComponent} from '../subscription/subscription.component';
import {Member} from '../members/members.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];
  declinations: Declination[];

  constructor(private http: HttpClient, private service: DataService, protected utils: Utils, private modal: NgbModal) {
  }

  ngOnInit() {
    this.service.getEvents().subscribe(e => this.events = e.sort((a, b) => (a.date > b.date) ? 1 : -1));
    if (UserInfoInst) {
      this.service.get<Declination>('declinations/member/' + UserInfoInst.toLocaleString()).subscribe(d => this.declinations = d);
    }
  }

  dia() {
    this.modal.open(SubscriptionComponent);
  }

  loggedIn(): boolean {
    return !!(UserInfoInst);
  }

  declinationByEvent(event: Event): Declination {
    this.declinations.forEach(d => {
      if (d.eventId === event.id) {
        return d;
      }
    });
    return null;
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

export interface Declination {
  id: number;
  memberId: number;
  member: Member;
  eventId: number;
  event: Event;
  declined: boolean;
  time: string;
}
