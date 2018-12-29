import {Component, OnInit} from '@angular/core';
import {Editor} from '../app.component';
import {Archive} from '../archive/archive.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-archive-editor',
  templateUrl: './archive-editor.component.html',
  styleUrls: ['./archive-editor.component.css']
})
export class ArchiveEditorComponent extends Editor<Archive> implements OnInit {

  styles = [];
  searchStyle = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term.length < 2 ? []
        : this.styles.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

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
