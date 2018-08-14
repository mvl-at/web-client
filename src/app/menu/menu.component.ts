import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent, logout, UserInfo} from '../login/login.component';
import {EventEditorComponent} from '../event-editor/event-editor.component';
import {InstrumentEditorComponent} from '../instrument-editor/instrument-editor.component';
import {RoleEditorComponent} from '../role-editor/role-editor.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  showLogin() {
    this.modalService.open(LoginComponent);
  }

  addEvent() {
    this.modalService.open(EventEditorComponent);
  }

  addInstrument() {
    this.modalService.open(InstrumentEditorComponent);
  }

  addRole() {
    this.modalService.open(RoleEditorComponent);
  }

  userInfo() {
    return UserInfo;
  }

  lo() {
    logout();
  }
}
