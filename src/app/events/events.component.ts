import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private events: Event[];

  constructor(private http: HttpClient, private service: DataService) { }

  ngOnInit() {
    this.events = this.service.getEvents();
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
