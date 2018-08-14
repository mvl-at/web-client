import {Component} from '@angular/core';

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

  protected constructor() {
    this.entity = this.defaults();
  }

  reset() {
    this.entity = Object.assign({}, this.backup);
  }

  abstract defaults(): T;

  add() {
    console.log(this.entity);
  }
}

