import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';
import {PreferencesComponent} from '../preferences/preferences.component';
import {MemberListComponent} from '../member-list/member-list.component';
import {CredentialsComponent} from '../credentials/credentials.component';
import {DataService, Logout, UserInfoInst} from '../rest/data-service';
import {Utils} from '../utils';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;
  utils: Utils;
  active = '';

  constructor(private modalService: NgbModal, private utilsInst: Utils, public service: DataService, private router: Router) {
    this.utils = utilsInst;
  }

  ngOnInit() {
  }

  showLogin() {
    this.modalService.open(LoginComponent, {size: 'sm'});
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
    Logout(this.router);
    this.active = '';
  }

  classes(name: string): string {
    return (this.active === name) ? 'active' : '';
  }
}
