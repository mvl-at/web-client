import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {
  AccessTokenAssign,
  AccessTokenInst,
  DataService,
  ExpirationTimer,
  Logout, SetExpirationTimer,
  UserInfo,
  UserInfoAssign,
  UserInfoInst
} from '../rest/data-service';
import {Credentials} from '../credentials/credentials.component';
import {OpenLoginInfo} from '../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private service: DataService, private router: Router) {
  }

  credentials: Credentials = {username: '', password: '', memberId: undefined};
  loginStatus = 0;

  ngOnInit() {
  }

  login() {
    this.http.post(`${this.service.baseUrl}login`, JSON.stringify(this.credentials), {observe: 'response'})
      .subscribe(resp => {
        this.loginStatus = resp.status;
        AccessTokenAssign(resp.headers.get('Access-Token'));
        if (this.loginStatus === 200) {
          this.activeModal.close();
          this.refreshUserInfo();
          const loginComponent = this;
          SetExpirationTimer(setInterval(function () {
            loginComponent.refreshUserInfo();
          }, 1000));
        }
      }, (error: HttpErrorResponse) => this.loginStatus = error.status);
  }

  refreshUserInfo(): boolean {
    let expired = false;
    this.http.get<UserInfo>(`${this.service.baseUrl}userinfo`, {
      headers: new HttpHeaders()
        .set('Access-token', AccessTokenInst), observe: 'response'
    }).subscribe(r => {
      if (r.status === 200) {
        UserInfoAssign(r.body);
      }
    }, () => {
      if (UserInfoInst) {
        expired = true;
        console.log('session expired');
        OpenLoginInfo();
      }
      Logout(this.router);
    });
    return expired;
  }
}
