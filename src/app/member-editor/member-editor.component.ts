import { Component, OnInit } from '@angular/core';
import {Editor} from '../app.component';
import {Instrument, Member} from '../members/members.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-member-editor',
  templateUrl: './member-editor.component.html',
  styleUrls: ['./member-editor.component.css']
})
export class MemberEditorComponent extends Editor<Member> implements OnInit {

  private instruments: Instrument[];
  private instrumentId: string;

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
  }

  ngOnInit() {
    this.service.getInstruments().subscribe(i => this.instruments = i);
  }

  defaults(): Member {
    return {id: null, lastName: null, firstName: null, instrumentId: null,
      active: true, deleted: false, loginAllowed: true, picture: null, joined: new Date(Date.now()).getFullYear()};
  }

  processedEntity(): Member {
    this.entity.instrumentId = parseInt(this.instrumentId, 10);
    return this.entity;
  }

  url(): string {
    return 'members';
  }
}
