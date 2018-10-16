import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from './rest/data-service';
import {AppConfigManager} from './config.model';
import {List} from './list';
import {Title} from '@angular/platform-browser';

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

