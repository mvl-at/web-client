import {Component, OnInit} from '@angular/core';
import {Instrument} from '../members/members.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-instrument-editor',
  templateUrl: './instrument-editor.component.html',
  styleUrls: ['./instrument-editor.component.css']
})
export class InstrumentEditorComponent implements OnInit {

  private instrument: Instrument = {name: '', namePlural: '', id: null};
  private backup: Instrument;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.backup = Object.assign({}, this.instrument);
  }

  reset() {
    this.instrument = Object.assign({}, this.backup);
  }

  add() {
    console.log(this.instrument);
  }
}
