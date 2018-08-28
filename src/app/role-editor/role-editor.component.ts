import {Component, OnInit} from '@angular/core';
import {Role} from '../roles/roles.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Editor} from '../app.component';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-role-editor',
  templateUrl: './role-editor.component.html',
  styleUrls: ['./role-editor.component.css']
})
export class RoleEditorComponent extends Editor<Role> implements OnInit {

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
  }

  ngOnInit() {
  }

  defaults(): Role {
    return {id: null, name: null, namePlural: null};
  }

  processedEntity(): Role {
    return this.entity;
  }

  url(): string {
    return 'roles';
  }
}
