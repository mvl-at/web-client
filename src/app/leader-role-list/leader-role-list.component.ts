import {Component, OnInit} from '@angular/core';
import {DataService} from '../rest/data-service';
import {LeaderRole} from '../leaders/leaders.component';
import {LeaderRoleEditorComponent} from '../leader-role-editor/leader-role-editor.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {List} from '../list';

@Component({
  selector: 'app-leader-role-list',
  templateUrl: './leader-role-list.component.html',
  styleUrls: ['./leader-role-list.component.css']
})
export class LeaderRoleListComponent extends List<LeaderRole> implements OnInit {

  constructor(protected service: DataService, protected modal: NgbModal) {
    super(service, modal);
  }

  ngOnInit() {
  }

  editor(): any {
    return LeaderRoleEditorComponent;
  }

  urlName(): string {
    return 'leaderRoles';
  }
}
