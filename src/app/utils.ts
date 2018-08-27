import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor() {
  }

  formatDate(date: string, time: string): string {
    const ddate = new Date(Date.parse(date));
    const dtime = new Date(Date.parse(time));
    const combinedDate = new Date();
    combinedDate.setFullYear(ddate.getFullYear(), ddate.getMonth(), ddate.getDate());
    combinedDate.setHours(dtime.getHours(), dtime.getMinutes());
    return combinedDate.toLocaleString(undefined, {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'});
  }
}
