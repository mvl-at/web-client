import { Component, OnInit } from '@angular/core';
import {Editor} from '../app.component';
import {Member} from '../members/members.component';

@Component({
  selector: 'app-member-editor',
  templateUrl: './member-editor.component.html',
  styleUrls: ['./member-editor.component.css']
})
export class MemberEditorComponent extends Editor<Member> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  defaults(): Member {
    return {id: null, lastName: null, firstName: null, instrumentId: null,
      active: true, deleted: false, loginAllowed: true, picture: null, joined: null};
  }
}
