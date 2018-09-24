import {Component, OnInit} from '@angular/core';
import {DataService} from '../rest/data-service';
import {LeaderRole} from '../leaders/leaders.component';
import {LeaderRoleEditorComponent} from '../leader-role-editor/leader-role-editor.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leader-role-list',
  templateUrl: './leader-role-list.component.html',
  styleUrls: ['./leader-role-list.component.css']
})
export class LeaderRoleListComponent implements OnInit {

  private leaderRoles: LeaderRole[];

  constructor(private service: DataService, private modal: NgbModal) {
  }

  ngOnInit() {
    this.service.get<LeaderRole>('leaderRoles').subscribe(l => this.leaderRoles = l);
  }

  edit(leaderRole: LeaderRole) {
    this.modal.open(LeaderRoleEditorComponent).componentInstance.entity = leaderRole;
  }
}
