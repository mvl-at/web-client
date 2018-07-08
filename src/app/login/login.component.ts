import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  credentials: Credentials = {username: '', password: ''};
  loginStatus = 0;

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) {
  }

  ngOnInit() {
  }

  login() {
    this.http.post('http://127.0.0.1:8080/login', JSON.stringify(this.credentials), {observe: 'response'})
      .subscribe(resp => {
        this.loginStatus = resp.status;
        AccessToken = resp.headers.get('Access-token');
        if (this.loginStatus === 200) {
          this.activeModal.close();
        }
      }, (error: HttpErrorResponse) => this.loginStatus = error.status);
  }
}

interface Credentials {
  username: string;
  password: string;
}

export let AccessToken = '';
