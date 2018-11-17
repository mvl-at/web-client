import {DataService} from './rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';

export abstract class List<T> {

  static deleteButtonUp = true;
  items: T[] = [];

  protected constructor(protected service: DataService, protected modal: NgbModal) {
    this.loadData();
    document.addEventListener('keydown', function (event) {
      if (event.key.toLowerCase() === 'shift') {
        List.deleteButtonUp = false;
      }
    });
    document.addEventListener('keyup', function (event) {
      if (event.key.toLowerCase() === 'shift') {
        List.deleteButtonUp = true;
      }
    });
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
    if (List.deleteButtonUp) {
      const dialog = this.modal.open(DeleteDialogComponent);
      dialog.componentInstance.itemName = this.itemName(item);
      dialog.result.catch(r => {
          if (r === 'delete') {
            this.deleteFromServer(item);
          }
        }
      );
    } else {
      this.deleteFromServer(item);
    }
  }

  deleteFromServer(item: T) {
    this.service.delete(item, this.urlName()).subscribe(i => this.loadData());
  }

  loadData() {
    this.service.get<T[]>(this.urlName()).subscribe(i => {
      this.items = i;
      this.onLoaded();
    });
    this.loadAdditionalData();
  }

  loadAdditionalData() {
  }

  onLoaded() {
  }

  itemName(item: T): string {
    if (item.hasOwnProperty('name')) {
      // @ts-ignore
      return item.name;
    }

    return item.toLocaleString();
  }

  abstract urlName(): string;

  abstract editor(): any;
}
