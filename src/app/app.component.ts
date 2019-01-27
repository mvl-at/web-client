import {Component, HostListener} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from './rest/data-service';
import {List} from './list';
import {LicenseComponent} from './license/license.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public modalService: NgbModal) {
  }

  isClosed(): boolean {
    return LoginInfoClosed;
  }

  close() {
    LoginInfoClosed = true;
  }

  showLicense() {
    this.modalService.open(LicenseComponent, {size: 'lg'});
  }
}

export let LoginInfoClosed = true;

export function OpenLoginInfo() {
  LoginInfoClosed = false;
}

export abstract class Editor<T> {
  entity: T;
  backup: T;

  edit = false;
  list: List<any>;

  protected constructor(public activeModal: NgbActiveModal, public service: DataService) {
    // if (this.edit === undefined || this.edit === null) {
    //   this.entity = this.defaults();
    // } else {
    //   this.entity = this.edit;
    // }
    this.entity = this.defaults();
  }

  @HostListener('window:keyup', ['$event'])
  keyUp(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.add();
    }
  }

  reset() {
    if (this.edit) {
      this.entity = Object.assign({}, this.backup);
    } else {
      this.entity = this.defaults();
    }
  }

  abstract defaults(): T;

  add() {
    console.log(this.entity);
    this.service.post(this.processedEntity(), this.url()).subscribe(resp => {
      if (resp.status === 200) {
        this.close();
      }
    });
  }

  title(): string {
    let title = 'hinzufügen';
    if (this.edit) {
      title = 'bearbeiten';
    }
    return this.entityName() + ' ' + title;
  }

  abstract entityName(): string;

  close() {
    this.activeModal.dismiss('close-button');
    if (this.list) {
      this.list.loadData();
    }
  }

  abstract url(): string;

  abstract processedEntity(): T;

  setEdit() {
    this.edit = true;
    this.backup = Object.assign({}, this.entity);
  }

  okText(): string {
    return this.edit ? 'Ändern' : 'Hinzufügen';
  }
}

