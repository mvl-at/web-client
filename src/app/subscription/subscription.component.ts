import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbDateAdapter, NgbDateStruct, NgbTimeAdapter, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../rest/data-service';
import {Utils} from '../utils';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

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
  last = 'year';
  isLast = true;
  unlimited = true;
  // intervals = new Map<string, string>().set('year', 'Jahr').set('month', 'Monat').set('week', 'Woche').set('day', 'Tag');
  intervals = [{id: 'year', name: 'Jahr'}, {id: 'month', name: 'Monat'}, {id: 'week', name: 'Woche'}, {id: 'day', name: 'Tag'}];
  utils: Utils;

  activeModal: NgbActiveModal;

  constructor(private modal: NgbActiveModal, private service: DataService, private utilsInst: Utils, private sanitizer: DomSanitizer) {
    this.activeModal = modal;
    if (utilsInst.hasRole('event')) {
      this.isLast = false;
      this.unlimited = false;
      const now = new Date(Date.now());
      this.from = new CalDateAdapter().toModel({year: now.getFullYear(), month: now.getMonth() + 2, day: 1});
      now.setMonth(now.getMonth() + 2);
      now.setDate(0);
      this.to = new CalDateAdapter().toModel({year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()});
    }
    this.utils = utilsInst;
  }

  ngOnInit() {
  }

  calendar(pdf: boolean): SafeUrl {
    const url = this.service.calendar(pdf, this.isLast ? null : this.from,
      this.unlimited ? '99991212' : this.to,
      this.isLast ? this.last : null,
      this.note);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
