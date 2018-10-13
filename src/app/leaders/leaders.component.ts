import {Component, OnInit} from '@angular/core';
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

  constructor(private http: HttpClient, private service: DataService) {
  }

  ngOnInit() {
    this.service.get<LeaderRoleMember>('leaderRolesMembers').subscribe(l => {
      l.sort(function (a: LeaderRoleMember, b: LeaderRoleMember) {
        return a.priority - b.priority;
      });
      const members = membersOfLeaders(l);
      const nList: LeaderRoleMember[] = [];
      members.forEach(function (member: Member) {
        const leaderRole: LeaderRole = {name: rolesString(functionsOfMember(l, member)), id: 0, namePlural: ''};
        nList.push({leaderRole: leaderRole, member: member, deputy: false, memberId: 0, leaderRoleId: 0, priority: 0, id: 0});
      });
      this.leaders = nList;
    });
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
  deputy: boolean;
  leaderRole: LeaderRole;
  member: Member;
}

export function membersOfLeaders(list: LeaderRoleMember[]): Member[] {
  const members: Member[] = [];
  list.forEach(function (lrm: LeaderRoleMember) {
    if (!includeMember(members, lrm.member)) {
      members.push(lrm.member);
    }
  });
  console.log(members);
  return members;
}

export function includeMember(members: Member[], member: Member): boolean {
  let includes = false;
  members.forEach(function (m: Member) {
    if (m.id === member.id) {
      includes = true;
    }
  });
  return includes;
}

export function functionsOfMember(list: LeaderRoleMember[], member: Member): LeaderRole[] {
  const roles: LeaderRole[] = [];
  list.forEach(function (lrm: LeaderRoleMember) {
    if (lrm.memberId === member.id) {
      if (lrm.deputy) {
        lrm.leaderRole.name += ' Stellvertreter';
      }
      roles.push(lrm.leaderRole);
    }
  });
  return roles;
}

export function rolesString(leaderRoles: LeaderRole[]): string {
  let str = leaderRoles[0].name;
  for (let i = 1; i < leaderRoles.length; i++) {
    str += ', ' + leaderRoles[i].name;
  }
  return str;
}
