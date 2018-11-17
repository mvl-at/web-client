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
import {DataService, logout, UserInfoInst} from '../rest/data-service';
import {Utils} from '../utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;
  utils: Utils;
  active = '';

  constructor(private modalService: NgbModal, private utilsInst: Utils, public service: DataService) {
    this.utils = utilsInst;
  }

  ngOnInit() {
  }

  showLogin() {
    this.modalService.open(LoginComponent);
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

  classes(name: string): string {
    return (this.active === name) ? 'active' : '';
  }
}
