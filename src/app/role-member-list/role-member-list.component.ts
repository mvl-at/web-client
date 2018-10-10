import {Component, OnInit} from '@angular/core';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LeaderEditorComponent} from '../leader-editor/leader-editor.component';
import {List} from '../list';
import {RoleMember} from '../roles/roles.component';
import {RoleMemberEditorComponent} from '../role-member-editor/role-member-editor.component';

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
}
