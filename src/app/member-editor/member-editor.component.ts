import {Component, OnInit} from '@angular/core';
import {Editor} from '../app.component';
import {Instrument, Member} from '../members/members.component';
import {NgbActiveModal, NgbDateAdapter, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';
import {JSONDateAdapter, JSONTimeAdapter} from '../event-editor/event-editor.component';

@Component({
  selector: 'app-member-editor',
  templateUrl: './member-editor.component.html',
  styleUrls: ['./member-editor.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: JSONDateAdapter}, {provide: NgbTimeAdapter, useClass: JSONTimeAdapter}]
})
export class MemberEditorComponent extends Editor<Member> implements OnInit {

  instruments: Instrument[];
  currentFileName = 'Foto';
  genders = [{id: 'm', name: 'Männlich'}, {id: 'f', name: 'Weiblich'}];

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
  }

  ngOnInit() {
    this.service.getInstruments().subscribe(i => {
      this.instruments = i.sort((a, b) => a.name > b.name ? 1 : -1);
      if (!this.entity.instrumentId) {
        this.entity.instrumentId = this.instruments[0].id;
      }
    });
  }

  defaults(): Member {
    return {
      id: null,
      lastName: null,
      firstName: null,
      instrumentId: null,
      active: true,
      loginAllowed: true,
      picture: null,
      joined: new Date(Date.now()).getFullYear(),
      username: undefined,
      instrument: undefined,
      birthday: undefined,
      gender: 'm'
    };
  }

  processedEntity(): Member {
    this.entity.instrumentId = parseInt(this.entity.instrumentId.toString(), 10);
    this.entity.instrument = undefined;
    return this.entity;
  }

  url(): string {
    return 'members';
  }

  entityName(): string {
    return 'Mitglied';
  }

  memberPictureChange(event) {
    const fileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.currentFileName = file.name;
      this.service.postPicture(file, 'member/' + this.entity.id);
    }
  }
}
