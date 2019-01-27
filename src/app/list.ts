import {DataService} from './rest/data-service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {HttpHeaders} from '@angular/common/http';

export abstract class List<T> {

  static deleteButtonUp = true;
  items: T[] = [];

  protected constructor(protected service: DataService, protected modal: NgbModal) {
    this.loadData();
    document.addEventListener('keydown', function (event: KeyboardEvent) {
      if (event.key.toLowerCase() === 'shift') {
        List.deleteButtonUp = false;
      }
    });
    document.addEventListener('keyup', function (event: KeyboardEvent) {
      if (event.key.toLowerCase() === 'shift') {
        List.deleteButtonUp = true;
      }
    });
  }

  edit(item: T): NgbModalRef {
    const modal = this.modal.open(this.editor(), this.modalOptions());
    modal.componentInstance.entity = item;
    modal.componentInstance.list = this;
    modal.componentInstance.setEdit();
    return modal;
  }

  add(): NgbModalRef {
    const modal = this.modal.open(this.editor(), this.modalOptions());
    modal.componentInstance.list = this;
    return modal;
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
    this.service.get<T[]>(this.urlName(), this.getHeader()).subscribe(i => {
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

  modalOptions() {
    return {};
  }

  getHeader(): HttpHeaders {
    return new HttpHeaders();
  }

  abstract urlName(): string;

  abstract editor(): any;
}
