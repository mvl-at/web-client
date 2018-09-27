import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '../members/members.component';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

  leaders: LeaderRoleMember[];

  constructor(private http: HttpClient, private service: DataService) { }

  ngOnInit() {
    this.service.get<LeaderRoleMember>('leaderRolesMembers').subscribe(l => this.leaders = l);
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
  priority: number;
  leaderRole: LeaderRole;
  member: Member;
}
