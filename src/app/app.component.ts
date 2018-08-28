import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from './rest/data-service';

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

  protected constructor(public activeModal: NgbActiveModal, public service: DataService) {
    this.entity = this.defaults();
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

  close() {
    this.activeModal.dismiss('close-button');
  }

  abstract url(): string;

  abstract processedEntity(): T;
}

