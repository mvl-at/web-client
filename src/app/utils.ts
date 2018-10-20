import {Injectable} from '@angular/core';
import {Role} from './roles/roles.component';
import has = Reflect.has;
import {UserInfoInst} from './rest/data-service';

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
      return dtime.toLocaleString(undefined, {hour: '2-digit', minute: '2-digit', timeZone: 'UTC'});
    }

    if (time === undefined || time === null) {
      return ddate.toLocaleString(undefined, {day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC'});
    }

    const combinedDate = new Date();
    combinedDate.setFullYear(ddate.getFullYear(), ddate.getMonth(), ddate.getDate());
    combinedDate.setHours(dtime.getHours(), dtime.getMinutes());
    return combinedDate.toLocaleString(undefined, {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'UTC'
    });
  }

  hasRole(role: string): boolean {
    if (!UserInfoInst) {
      return false;
    }
    let hasRole = false;
    UserInfoInst.roles.forEach(function (uRole: Role) {
      if (uRole.id === 'root' || uRole.id === role) {
        hasRole = true;
      }
    });
    return hasRole;
  }
}
