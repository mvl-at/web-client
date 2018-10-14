import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];
  instruments: Instrument[] = [];

  membersInstruments = new Map<number, Member[]>();
  firstFetchDone = false;

  constructor(private http: HttpClient, private service: DataService) {
  }

  ngOnInit() {
    this.service.getMembers().subscribe(m => {
      this.members = m.filter(me => me.active);
      this.relations();
    });
    this.service.getInstruments().subscribe(i => {
      this.instruments = i.sort((a, b) => (a.name > b.name) ? 1 : -1);
      this.relations();
    });
  }

  membersByInstrument(instrument: Instrument): Member[] {
    let m: Member[] = [];
    this.members.forEach(function (member) {
      if (member.instrumentId === instrument.id) {
        m = m.concat(member);
      }
    });
    m.sort((a, b) => {
      const joinedDiff = a.joined - b.joined;
      if (joinedDiff !== 0) {
        return joinedDiff;
      }
      return (a.lastName > b.lastName) ? 1 : -1;
    });
    return m;
  }

  membersFromInstrument(instrument: Instrument): Member[] {
    return this.membersInstruments.has(instrument.id) ? this.membersInstruments.get(instrument.id) : [];
  }

  relations() {
    if (this.firstFetchDone) {
      this.instruments.forEach(i => this.membersInstruments.set(i.id, this.membersByInstrument(i)));
      this.instruments = this.instruments.filter((i) => this.membersInstruments.get(i.id).length > 0);
      this.membersInstruments.forEach((v, k) => {
        if (v.length === 0) {
          this.membersInstruments.delete(k);
        }
      });
    } else {
      this.firstFetchDone = true;
    }
  }
}

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  joined: number;
  picture: string;
  active: boolean;
  loginAllowed: boolean;
  username: string;
  instrumentId: number;
  instrument: Instrument;
  birthday: string;
}

export interface Instrument {
  id: number;
  name: string;
  namePlural: string;
}
