import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  images = new Map([
    ['large-icon.svg', false],
    ['mvl-inverted.svg', false],
    ['mvl-raw.svg', true],
    ['mvl-blue.svg', false],
    ['mvl-footer.svg', false],
    ['favicon.svg', false]]);

  color = '#1d4e82';

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
