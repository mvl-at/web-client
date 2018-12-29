import {Component, OnInit} from '@angular/core';
import {List} from '../list';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ArchiveEditorComponent} from '../archive-editor/archive-editor.component';
import {Utils} from '../utils';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent extends List<Archive> implements OnInit {

  itemAmounts = [5, 10, 20, 50, 100];
  itemAmount: number;
  sortField = 'title';
  ascending = true;
  search = '';
  page = 1;
  styles = [];

  displayItems = [];
  pagedItems = [];

  constructor(service: DataService, modal: NgbModal, private utils: Utils) {
    super(service, modal);
    this.itemAmount = 5;
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
    return (this.utils.accentFold(a[this.sortField]) > this.utils.accentFold(b[this.sortField]) ? 1 : -1) * (this.ascending ? 1 : -1);
  }

  onLoaded() {
    this.styles = this.items.map(a => a.style).filter((archive, i, a) => a.indexOf(archive) === i);
    this.displayItems = this.items.sort((a, b) => this.compareArchive(a, b));
    this.filter();
  }

  sort(property: string) {
    this.ascending = !((this.sortField === property) && this.ascending);
    this.sortField = property;
    this.onLoaded();
  }

  filter() {
    this.displayItems = this.items.filter(a => this.contains(a));
    this.page = 1;
    this.slice();
  }

  contains(a: Archive): boolean {
    const cstring = this.utils.accentFold(this.search);
    return this.utils.accentFold(a.title).includes(cstring) ||
      this.utils.accentFold(a.subtitles).includes(cstring) ||
      this.utils.accentFold(a.composer).includes(cstring) ||
      this.utils.accentFold(a.arranger).includes(cstring) ||
      this.utils.accentFold(a.style).includes(cstring) ||
      this.utils.accentFold(a.publisher).includes(cstring) ||
      this.utils.accentFold(a.location).includes(cstring);
  }

  slice() {
    const startItem = (this.page - 1) * this.itemAmount;
    console.log(startItem + ' - ' + (startItem + this.itemAmount));
    this.pagedItems = this.displayItems.slice(startItem, startItem + this.itemAmount);
  }

  changedPages() {
    this.itemAmount = parseInt(this.itemAmount.toString(), 10);
    console.log('selected');
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
  subtitles: string;
  score: boolean;
  location: string;
  note: string;
}
