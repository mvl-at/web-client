import {Component, OnInit} from '@angular/core';
import {Instrument} from '../members/members.component';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {InstrumentEditorComponent} from '../instrument-editor/instrument-editor.component';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit {

  private instruments: Instrument[];

  constructor(private service: DataService, private modal: NgbModal) {
  }

  ngOnInit() {
    this.service.get<Instrument>('instruments').subscribe(i => this.instruments = i);
  }

  edit(instrument: Instrument) {
    this.modal.open(InstrumentEditorComponent).componentInstance.entity = instrument;
  }
}
