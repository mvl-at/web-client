import {Component, OnInit} from '@angular/core';
import {Instrument} from '../members/members.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Editor} from '../app.component';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-instrument-editor',
  templateUrl: './instrument-editor.component.html',
  styleUrls: ['./instrument-editor.component.css']
})
export class InstrumentEditorComponent extends Editor<Instrument> implements OnInit {

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
   super(activeModal, service);
  }

  ngOnInit() {
  }

  defaults(): Instrument {
    return {name: '', namePlural: '', id: undefined, priority: 0};
  }

  processedEntity(): Instrument {
    return this.entity;
  }

  url(): string {
    return 'instruments';
  }

  entityName(): string {
    return 'Instrument';
  }
}
