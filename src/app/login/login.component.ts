import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AccessTokenAssign, AccessTokenInst, DataService, UserInfo, UserInfoAssign, UserInfoInst} from '../rest/data-service';
import {Credentials} from '../credentials/credentials.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  credentials: Credentials = {username: '', password: '', memberId: undefined};
  loginStatus = 0;

  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private service: DataService) {
  }

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
        }
      }, (error: HttpErrorResponse) => this.loginStatus = error.status);
  }

  refreshUserInfo() {
    this.http.get<UserInfo>(`${this.service.baseUrl}userinfo`, {
      headers: new HttpHeaders()
        .set('Access-token', AccessTokenInst)
    }).subscribe(u => UserInfoAssign(u));
  }
}

