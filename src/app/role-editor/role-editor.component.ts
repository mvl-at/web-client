import {Component, OnInit} from '@angular/core';
import {Role} from '../roles/roles.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Editor} from '../app.component';

@Component({
  selector: 'app-role-editor',
  templateUrl: './role-editor.component.html',
  styleUrls: ['./role-editor.component.css']
})
export class RoleEditorComponent extends Editor<Role> implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
    super();
  }

  ngOnInit() {
  }

  defaults(): Role {
    return {id: null, name: null, namePlural: null};
  }
}
