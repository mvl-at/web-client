import { Component, OnInit } from '@angular/core';
import {Editor} from '../app.component';
import {LeaderRoleMember} from '../leaders/leaders.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-leader-editor',
  templateUrl: './leader-editor.component.html',
  styleUrls: ['./leader-editor.component.css']
})
export class LeaderEditorComponent extends Editor<LeaderRoleMember> implements OnInit {

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
  }

  ngOnInit() {
  }

  defaults(): LeaderRoleMember {
    return undefined;
  }

  entityName(): string {
    return 'Vorstand';
  }

  processedEntity(): LeaderRoleMember {
    return this.entity;
  }

  url(): string {
    return 'leaderRolesMembers';
  }

}
