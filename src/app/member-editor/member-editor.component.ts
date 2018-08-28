import { Component, OnInit } from '@angular/core';
import {Editor} from '../app.component';
import {Member} from '../members/members.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-member-editor',
  templateUrl: './member-editor.component.html',
  styleUrls: ['./member-editor.component.css']
})
export class MemberEditorComponent extends Editor<Member> implements OnInit {

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
  }

  ngOnInit() {
  }

  defaults(): Member {
    return {id: null, lastName: null, firstName: null, instrumentId: null,
      active: true, deleted: false, loginAllowed: true, picture: null, joined: null};
  }

  processedEntity(): Member {
    return this.entity;
  }

  url(): string {
    return 'members';
  }
}
