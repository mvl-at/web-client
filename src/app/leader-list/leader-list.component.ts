import {Component, OnInit} from '@angular/core';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LeaderRoleMember} from '../leaders/leaders.component';
import {LeaderEditorComponent} from '../leader-editor/leader-editor.component';
import {List} from '../list';

@Component({
  selector: 'app-leader-list',
  templateUrl: './leader-list.component.html',
  styleUrls: ['./leader-list.component.css']
})
export class LeaderListComponent extends List<LeaderRoleMember> implements OnInit {

  constructor(protected service: DataService, protected modal: NgbModal) {
    super(service, modal);
  }

  ngOnInit() {
  }

  editor(): any {
    return LeaderEditorComponent;
  }

  urlName(): string {
    return 'leaderRolesMembers';
  }

  onLoaded() {
    this.items.sort((a, b) => (a.priority - b.priority));
  }

  itemName(lrm: LeaderRoleMember): string {
    return lrm.member.firstName + ' ' + lrm.member.lastName + ' als ' + (lrm.leaderRole.name + lrm.deputy ? ' Stellvetreter' : '');
  }
}
