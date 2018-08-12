import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '../members/members.component';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

  private members: Member[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}

export interface LeaderRole {
  id: number;
  name: string;
  namePlural: string;
}

export interface LeaderRoleMember {
  id: number;
  leaderRoleId: number;
  memberId: number;
}
