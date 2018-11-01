import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Declination} from '../events/events.component';
import {DataService} from '../rest/data-service';
import {Utils} from '../utils';

@Component({
  selector: 'app-declination-view',
  templateUrl: './declination-view.component.html',
  styleUrls: ['./declination-view.component.css']
})
export class DeclinationViewComponent implements OnInit {

  declinations: Declination[];
  reAccepted: Declination[];

  constructor(protected activeModal: NgbActiveModal, private service: DataService, protected utils: Utils) {
  }

  ngOnInit() {
  }

  fetchDeclinations(eventId: number) {
    this.service.get<Declination>('declinations/event/' + eventId)
      .subscribe(d => {
        this.declinations =
          d.sort((a, b) => (a.member.lastName > b.member.lastName ? 1 : -1));
        this.reAccepted = this.declinations.filter(d2 => !d2.declined);
        this.declinations = this.declinations.filter(d2 => d2.declined);
      });
  }
}
