import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';
import {EventEditorComponent} from '../event-editor/event-editor.component';
import {InstrumentEditorComponent} from '../instrument-editor/instrument-editor.component';
import {RoleEditorComponent} from '../role-editor/role-editor.component';
import {MemberEditorComponent} from '../member-editor/member-editor.component';
import {LeaderRoleEditorComponent} from '../leader-role-editor/leader-role-editor.component';
import {LeaderEditorComponent} from '../leader-editor/leader-editor.component';
import {PreferencesComponent} from '../preferences/preferences.component';
import {MemberListComponent} from '../member-list/member-list.component';
import {CredentialsComponent} from '../credentials/credentials.component';
import {logout, UserInfoInst} from '../rest/data-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  showLogin() {
    this.modalService.open(LoginComponent);
  }

  addEvent() {
    this.modalService.open(EventEditorComponent);
  }

  addInstrument() {
    this.modalService.open(InstrumentEditorComponent);
  }

  addRole() {
    this.modalService.open(RoleEditorComponent);
  }

  addMember() {
    this.modalService.open(MemberEditorComponent);
  }

  addLeaderRole() {
    this.modalService.open(LeaderRoleEditorComponent);
  }

  addLeader() {
    this.modalService.open(LeaderEditorComponent);
  }

  members() {
    this.modalService.open(MemberListComponent);
  }

  userInfo() {
    return UserInfoInst;
  }

  changePassword() {
    this.modalService.open(CredentialsComponent).componentInstance.member = UserInfoInst.member;
  }

  preferences() {
    this.modalService.open(PreferencesComponent);
  }

  lo() {
    logout();
  }
}
