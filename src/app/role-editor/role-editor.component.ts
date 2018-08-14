import {Component, OnInit} from '@angular/core';
import {Role} from '../roles/roles.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role-editor',
  templateUrl: './role-editor.component.html',
  styleUrls: ['./role-editor.component.css']
})
export class RoleEditorComponent implements OnInit {

  private role: Role = {id: '', name: '', namePlural: '' };
  private backup: Role;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.backup = Object.assign({}, this.role);
  }

  reset() {
    this.role = Object.assign({}, this.backup);
  }

  add() {
    console.log(this.role);
  }
}
