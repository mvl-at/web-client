import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../members/members.component';
import {LeaderRoleMember} from '../leaders/leaders.component';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css'],
})
export class MemberViewComponent implements OnInit {

  @Input() member: Member;
  @Input() leader: LeaderRoleMember;

  constructor() { }

  ngOnInit() {
    if (this.leader !== null && this.leader !== undefined) {
      this.member = this.leader.member;
    }
  }

}
