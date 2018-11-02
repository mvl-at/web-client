import { Component, OnInit } from '@angular/core';
import {Editor} from '../app.component';
import {LeaderRole, LeaderRoleMember} from '../leaders/leaders.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';
import {Member} from '../members/members.component';
import {Role, RoleMember} from '../roles/roles.component';

@Component({
  selector: 'app-leader-editor',
  templateUrl: './role-member-editor.component.html',
  styleUrls: ['./role-member-editor.component.css']
})
export class RoleMemberEditorComponent extends Editor<RoleMember> implements OnInit {

  members: Member[];
  roles: Role[];

  private member: string;

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
    this.service.get<Member[]>('members').subscribe(m => this.members = m);
    this.service.get<Role[]>('roles').subscribe(l => this.roles = l);
  }

  ngOnInit() {
  }

  defaults(): RoleMember {
    return {id: undefined, member: null, memberId: undefined, role: null, roleId: undefined};
  }

  entityName(): string {
    return 'Rollen Mitglieder';
  }

  processedEntity(): RoleMember {
    this.entity.memberId = parseInt(this.entity.memberId.toString(), 10);
    this.entity.role = undefined;
    this.entity.member = undefined;
    return this.entity;
  }

  url(): string {
    return 'rolesMembers';
  }

}
