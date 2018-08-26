import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  private members: Member[] = [];
  private instruments: Instrument[] = [];

  constructor(private http: HttpClient, private service: DataService) { }

  ngOnInit() {
    this.service.getMembers().subscribe(m => this.members = m);
    this.service.getInstruments().subscribe(i => this.instruments = i);
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
