import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private events: Event[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Event[]>('http://127.0.0.1:8080/events').subscribe(e => this.events = e);
  }
}

export interface Event {
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
