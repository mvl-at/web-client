import {Component, OnInit} from '@angular/core';
import {Member} from '../members/members.component';
import {UserInfo} from '../login/login.component';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  private password1: string;
  private password2: string;
  private member: Member;

  constructor() {
  }

  ngOnInit() {
  }

  userInfo() {
    return UserInfo;
  }

  passwordOk(): boolean {
    return this.password1 && this.password1 === this.password2;
  }
}

interface Credentials {
  memberId: number;
  username: string;
  password: string;
}
