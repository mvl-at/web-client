import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from './rest/data-service';
import {AppConfigManager} from './config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

export abstract class Editor<T> {
  entity: T;
  backup: T;

  edit: T;

  protected constructor(public activeModal: NgbActiveModal, public service: DataService) {
    if (this.edit === undefined || this.edit === null) {
      this.entity = this.defaults();
    } else {
      this.entity = this.edit;
    }
  }

  reset() {
    this.entity = Object.assign({}, this.backup);
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
    if (this.edit !== undefined && this.edit !== null) {
      title = 'bearbeiten';
    }
    return this.entityName() + ' ' + title;
  }

  abstract entityName(): string;

  close() {
    this.activeModal.dismiss('close-button');
  }

  abstract url(): string;

  abstract processedEntity(): T;

  setEdit(edit: T) {
    this.edit = edit;
    this.entity = edit;
  }
}

