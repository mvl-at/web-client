import {Component, OnInit} from '@angular/core';
import {Member} from '../members/members.component';
import {UserInfo} from '../login/login.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  password1: string;
  password2: string;
  member: Member;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  userInfo() {
    return UserInfo;
  }

  passwordOk(): boolean {
    return this.password1 && this.password1 === this.password2;
  }

  ok() {
  }
}

interface Credentials {
  memberId: number;
  username: string;
  password: string;
}
