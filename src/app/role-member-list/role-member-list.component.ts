import {Component, OnInit} from '@angular/core';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {List} from '../list';
import {RoleMember} from '../roles/roles.component';
import {RoleMemberEditorComponent} from '../role-member-editor/role-member-editor.component';
import {LeaderRoleMember} from '../leaders/leaders.component';

@Component({
  selector: 'app-leader-list',
  templateUrl: './role-member-list.component.html',
  styleUrls: ['./role-member-list.component.css']
})
export class RoleMemberListComponent extends List<RoleMember> implements OnInit {

  constructor(protected service: DataService, protected modal: NgbModal) {
    super(service, modal);
  }

  ngOnInit() {
  }

  editor(): any {
    return RoleMemberEditorComponent;
  }

  urlName(): string {
    return 'rolesMembers';
  }

  onLoaded() {
    this.items.sort((a, b) => (a.member.lastName > b.member.lastName) ? 1 : -1);
  }

  itemName(roleMember: RoleMember): string {
    return roleMember.member.firstName + ' ' + roleMember.member.lastName + ' als ' + roleMember.role.name;
  }
}
