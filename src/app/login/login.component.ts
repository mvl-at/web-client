import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Member} from '../members/members.component';
import {Role} from '../roles/roles.component';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  credentials: Credentials = {username: '', password: ''};
  loginStatus = 0;

  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private service: DataService) {
  }

  ngOnInit() {
  }

  login() {
    this.http.post(`${this.service.baseUrl}login`, JSON.stringify(this.credentials), {observe: 'response'})
      .subscribe(resp => {
        this.loginStatus = resp.status;
        AccessToken = resp.headers.get('Access-Token');
        if (this.loginStatus === 200) {
          this.activeModal.close();
          this.refreshUserInfo();
        }
      }, (error: HttpErrorResponse) => this.loginStatus = error.status);
  }

  refreshUserInfo() {
    this.http.get<UserInfo>(`${this.service.baseUrl}userinfo`, {
      headers: new HttpHeaders()
        .set('Access-token', AccessToken)
    }).subscribe(u => UserInfo = u);
  }
}

interface Credentials {
  username: string;
  password: string;
}

interface UserInfo {
  member: Member;
  roles: Role[];
}

export let AccessToken = '';
export let UserInfo = null;

export function logout() {
  AccessToken = null;
  UserInfo = null;
}
