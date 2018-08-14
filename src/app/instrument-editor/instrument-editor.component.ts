import {Component, OnInit} from '@angular/core';
import {Instrument} from '../members/members.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Editor} from '../app.component';

@Component({
  selector: 'app-instrument-editor',
  templateUrl: './instrument-editor.component.html',
  styleUrls: ['./instrument-editor.component.css']
})
export class InstrumentEditorComponent extends Editor<Instrument> implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
    super();
  }

  ngOnInit() {
  }

  defaults(): Instrument {
    return {name: '', namePlural: '', id: null};
  }
}
