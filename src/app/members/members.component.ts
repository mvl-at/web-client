import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  private members: Member[] = [];
  private instruments: Instrument[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Member[]>('http://127.0.0.1:8080/members').subscribe(m => this.members = m);
    this.http.get<Instrument[]>('http://127.0.0.1:8080/instruments').subscribe(i => this.instruments = i);
  }

  membersByInstrument(instrument: Instrument) {
    let m: Member[] = [];
    this.members.forEach(function (member) {
      if (member.instrumentId === instrument.id) {
        m = m.concat(member);
      }
    });
    return m;
  }
}

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  joined: number;
  picture: string;
  active: boolean;
  deleted: boolean;
  loginAllowed: boolean;
  instrumentId: number;
}

export interface Instrument {
  id: number;
  name: string;
  namePlural: string;
}
