import {DataService} from './rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

export abstract class List<T> {

  items: T[];

  protected constructor(protected service: DataService, protected modal: NgbModal) {
    this.loadData();
  }

  edit(item: T) {
    const modal = this.modal.open(this.editor());
    modal.componentInstance.entity = item;
    modal.componentInstance.list = this;
    modal.componentInstance.setEdit();
  }

  add() {
    this.modal.open(this.editor()).componentInstance.list = this;
  }

  deleteItem(item: T) {
    this.service.delete(item, this.urlName()).subscribe(i => console.log(i));
  }

  loadData() {
    this.service.get<T>(this.urlName()).subscribe(i => {
      this.items = i;
      this.onLoaded();
    });
    this.loadAdditionalData();
  }

  loadAdditionalData() {
  }

  onLoaded() {
  }

  abstract urlName(): string;

  abstract editor(): any;
}
