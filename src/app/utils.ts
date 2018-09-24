import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor() {
  }

  formatDate(date: string, time: string): string {
    const dtime = new Date(Date.parse(time));
    const ddate = new Date(Date.parse(date));

    if (date === undefined || date === null) {
      return dtime.toLocaleString(undefined, {hour: 'numeric', minute: 'numeric'});
    }

    if (time === undefined || time === null) {
      return ddate.toLocaleString(undefined, {day: 'numeric', month: 'numeric', year: 'numeric'});
    }

    const combinedDate = new Date();
    combinedDate.setFullYear(ddate.getFullYear(), ddate.getMonth(), ddate.getDate());
    combinedDate.setHours(dtime.getHours(), dtime.getMinutes());
    return combinedDate.toLocaleString(undefined, {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'});
  }
}
