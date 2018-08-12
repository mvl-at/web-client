import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent, logout, UserInfo} from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showLogin() {
    this.modalService.open(LoginComponent);
  }

  userInfo() {
    return UserInfo;
  }

  lo() {
    logout();
  }
}
