import {Component, OnInit} from '@angular/core';
import {Instrument} from '../members/members.component';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {InstrumentEditorComponent} from '../instrument-editor/instrument-editor.component';
import {List} from '../list';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent extends List<Instrument> implements OnInit {

  constructor(protected service: DataService, protected modal: NgbModal) {
    super(service, modal);
  }

  ngOnInit() {
  }

  urlName(): string {
    return 'instruments';
  }

  editor(): any {
    return InstrumentEditorComponent;
  }

  onLoaded() {
    this.items.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }
}
