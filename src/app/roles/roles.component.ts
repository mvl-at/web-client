import { Component, OnInit } from '@angular/core';
import {Member} from '../members/members.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export interface Role {
  id: string;
  name: string;
  namePlural: string;
}

export interface RoleMember {
  id: string;
  roleId: string;
  memberId: number;
  role: Role;
  member: Member;
}
