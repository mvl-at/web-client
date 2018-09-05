import { Component, OnInit } from '@angular/core';
import {Editor} from '../app.component';
import {LeaderRole} from '../leaders/leaders.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-leader-role-editor',
  templateUrl: './leader-role-editor.component.html',
  styleUrls: ['./leader-role-editor.component.css']
})
export class LeaderRoleEditorComponent extends Editor<LeaderRole> implements OnInit {

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
  }

  ngOnInit() {
  }

  defaults(): LeaderRole {
    return {id: undefined, name: undefined, namePlural: undefined};
  }

  entityName(): string {
    return 'Vorstandsfunktion';
  }

  processedEntity(): LeaderRole {
    return this.entity;
  }

  url(): string {
    return 'leaderRoles';
  }

}
