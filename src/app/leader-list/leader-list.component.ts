import { Component, OnInit } from '@angular/core';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LeaderRole, LeaderRoleMember} from '../leaders/leaders.component';
import {LeaderRoleEditorComponent} from '../leader-role-editor/leader-role-editor.component';
import {LeaderEditorComponent} from '../leader-editor/leader-editor.component';

@Component({
  selector: 'app-leader-list',
  templateUrl: './leader-list.component.html',
  styleUrls: ['./leader-list.component.css']
})
export class LeaderListComponent implements OnInit {

  private leaders: LeaderRoleMember[];

  constructor(private service: DataService, private modal: NgbModal) { }

  ngOnInit() {
    this.service.get<LeaderRoleMember>('leaderRolesMembers').subscribe(l => this.leaders = l);
  }

  edit(leader: LeaderRoleMember) {
    this.modal.open(LeaderEditorComponent).componentInstance.entity = leader;
  }
}
