import {Component, OnInit} from '@angular/core';
import {Editor} from '../app.component';
import {Archive} from '../archive/archive.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-archive-editor',
  templateUrl: './archive-editor.component.html',
  styleUrls: ['./archive-editor.component.css']
})
export class ArchiveEditorComponent extends Editor<Archive> implements OnInit {

  constructor(public activeModal: NgbActiveModal, public service: DataService) {
    super(activeModal, service);
  }

  ngOnInit() {
  }

  defaults(): Archive {
    return {
      id: undefined,
      arranger: '',
      composer: '',
      level: '',
      location: '',
      note: '',
      publisher: '',
      style: '',
      title: '',
      subtitles: '',
      score: true
    };
  }

  entityName(): string {
    return 'Archiveintrag';
  }

  processedEntity(): Archive {
    return this.entity;
  }

  url(): string {
    return 'archive';
  }
}
