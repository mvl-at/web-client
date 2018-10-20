import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbDateAdapter, NgbDateStruct, NgbTimeAdapter, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';

export class CalDateAdapter extends NgbDateAdapter<string> {

  fromModel(value: string): NgbDateStruct {
    let date = null;
    if (value) {
      date = {year: parseInt(value.substr(0, 4), 10), month: parseInt(value.substr(4, 2), 10), day: parseInt(value.substr(6, 2), 10)};
    }
    return date;
  }

  toModel(date: NgbDateStruct): string {
    if (date) {
      return date.year.toString(10) + date.month.toString(10).padStart(2, '0') + date.day.toString(10).padStart(2, '0');
    }
    return '';
  }

}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: CalDateAdapter}]
})
export class SubscriptionComponent implements OnInit {

  from: string;
  to: string;
  note: string;
  last = 'month';
  isLast: boolean;
  unlimited: boolean;
  // intervals = new Map<string, string>().set('year', 'Jahr').set('month', 'Monat').set('week', 'Woche').set('day', 'Tag');
  intervals = [{id: 'year', name: 'Jahr'}, {id: 'month', name: 'Monat'}, {id: 'week', name: 'Woche'}, {id: 'day', name: 'Tag'}];

  constructor(private active: NgbActiveModal, private service: DataService) {
  }

  ngOnInit() {
  }

  abo() {
  }

  pdf() {
  }

  calendar(pdf: boolean): string {
    return this.service.calendar(pdf, this.isLast ? null : this.from,
      this.unlimited ? '99991212' : this.to,
      this.isLast ? this.last : null,
      this.note);
  }
}
