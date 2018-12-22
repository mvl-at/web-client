import {Component, OnInit} from '@angular/core';
import {List} from '../list';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {ArchiveEditorComponent} from '../archive-editor/archive-editor.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent extends List<Archive> implements OnInit {

  sortField = 'title';
  ascending = true;

  constructor(service: DataService, modal: NgbModal) {
    super(service, modal);
  }

  ngOnInit() {
  }

  editor(): any {
    return ArchiveEditorComponent;
  }

  urlName(): string {
    return 'archive';
  }

  compareArchive(a: Archive, b: Archive): number {
    return (a[this.sortField] > b[this.sortField] ? 1 : -1) * (this.ascending ? 1 : -1);
  }

  onLoaded() {
    this.items.sort((a, b) => this.compareArchive(a, b));
  }

  sort(property: string) {
    this.ascending = (this.sortField === property) !== this.ascending;
    this.sortField = property;
    this.onLoaded();
  }
}

export interface Archive {
  id: number;
  title: string;
  style: string;
  level: string;
  composer: string;
  arranger: string;
  publisher: string;
  location: string;
  note: string;
}
