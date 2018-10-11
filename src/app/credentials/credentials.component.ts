import {Component, OnInit} from '@angular/core';
import {Member} from '../members/members.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Utils} from '../utils';
import {UserInfoInst} from '../rest/data-service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  password1: string;
  password2: string;
  member: Member;
  changePassword = true;
  utils: Utils;

  constructor(public activeModal: NgbActiveModal, utils: Utils) {
    this.utils = utils;
  }

  ngOnInit() {
  }

  userInfo() {
    return UserInfoInst;
  }

  passwordOk(): boolean {
    return this.password1 && this.password1 === this.password2;
  }

  ok() {
    const credentials: Credentials = {memberId: this.member.id, username: this.member.username, password: (this.password1) ? this.password1 : undefined};
  }
}

export interface Credentials {
  memberId: number;
  username: string;
  password: string;
}
