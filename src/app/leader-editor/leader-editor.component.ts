import {Component, OnInit} from '@angular/core';
import {Editor} from '../app.component';
import {LeaderRole, LeaderRoleMember} from '../leaders/leaders.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';
import {Member} from '../members/members.component';

@Component({
  selector: 'app-leader-editor',
  templateUrl: './leader-editor.component.html',
  styleUrls: ['./leader-editor.component.css']
})
export class LeaderEditorComponent extends Editor<LeaderRoleMember> implements OnInit {

  members: Member[];
  leaderRoles: LeaderRole[];

  private member: string;
  private leaderRole: string;

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
    this.service.get<Member[]>('members').subscribe(m => {
      this.members = m.sort((a, b) =>
        a.lastName > b.lastName ? 1 : -1);
      this.entity.memberId = this.members[0].id;
    });
    this.service.get<LeaderRole[]>('leaderRoles').subscribe(l => {
      this.leaderRoles = l.sort((a, b) => a.name > b.name ? 1 : -1);
      this.entity.leaderRoleId = this.leaderRoles[0].id;
    });
  }

  ngOnInit() {
  }

  defaults(): LeaderRoleMember {
    return {
      id: undefined,
      member: null,
      memberId: undefined,
      leaderRole: null,
      leaderRoleId: undefined,
      priority: undefined,
      deputy: undefined
    };
  }

  entityName(): string {
    return 'Vorstand';
  }

  processedEntity(): LeaderRoleMember {
    this.entity.memberId = parseInt(this.entity.memberId.toString(), 10);
    this.entity.leaderRoleId = parseInt(this.entity.leaderRoleId.toString(), 10);
    this.entity.leaderRole = undefined;
    this.entity.member = undefined;
    return this.entity;
  }

  url(): string {
    return 'leaderRolesMembers';
  }

}
