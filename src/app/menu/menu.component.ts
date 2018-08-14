import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent, logout, UserInfo} from '../login/login.component';
import {EventManagementComponent} from '../event-management/event-management.component';
import {InstrumentEditorComponent} from '../instrument-editor/instrument-editor.component';

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

  addEvent() {
    this.modalService.open(EventManagementComponent);
  }

  addInstrument() {
    this.modalService.open(InstrumentEditorComponent);
  }

  userInfo() {
    return UserInfo;
  }

  lo() {
    logout();
  }
}
