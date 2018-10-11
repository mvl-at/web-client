import {DataService} from './rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

export abstract class List<T> {

  items: T[];

  protected constructor(protected service: DataService, protected modal: NgbModal) {
    this.loadData();
  }

  edit(item: T) {
    this.modal.open(this.editor()).componentInstance.entity = item;
  }

  add() {
    this.modal.open(this.editor());
  }

  deleteItem(item: T) {
    this.service.delete(item, this.urlName()).subscribe(i => console.log(i));
  }

  loadData() {
    this.service.get<T>(this.urlName()).subscribe(i => this.items = i);
    this.loadAdditionalData();
  }

  loadAdditionalData() {
  }

  abstract urlName(): string;

  abstract editor(): any;
}
