import {HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Instrument, Member} from '../members/members.component';
import {Event} from '../events/events.component';
import {Observable, Subject} from 'rxjs';
import {AppConfigManager} from '../config.model';
import {Role} from '../roles/roles.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public baseUrl: string;
  public assetUrl: string;
  public calendarUrl: string;

  constructor(private http: HttpClient, private config: AppConfigManager) {
    this.loadConfig(config).then();
  }

  async loadConfig(config: AppConfigManager) {
    const c = await config.load().toPromise();
    this.baseUrl = c.restHost;
    this.assetUrl = c.assetsHost;
    this.calendarUrl = c.calendarHost;
  }

  get<T>(name: string): Observable<T[]> {

    return this.http.get<T[]>(this.url(name));
  }

  post<T>(entity: T, name: string): Observable<HttpResponse<object>> {
    return this.http.post(this.url(name), entity, {headers: {'Access-Token': AccessTokenInst}, observe: 'response'});
  }

  delete<T>(entity: T, name: string): Observable<HttpResponse<object>> {
    return this.http.request('delete', this.url(name), {headers: {'Access-Token': AccessTokenInst}, observe: 'response', body: entity});
  }

  url(name: string): string {
    console.log(this.baseUrl + name);
    return this.baseUrl + name;
  }

  getInstruments(): Observable<Instrument[]> {
    return this.get<Instrument>('instruments');
  }

  postInstrument(instrument: Instrument) {
    this.post<Instrument>(instrument, 'instruments');
  }

  getEvents(): Observable<Event[]> {
    return this.get<Event>('events');
  }

  getMembers(): Observable<Member[]> {
    return this.get<Member>('members');
  }

  getMemberPicture(picture: string): string {
    return this.assetUrl + 'member/' + picture;
  }

  getTitleImage(): string {
    return this.assetUrl + '/title';
  }

  postPicture(file: File, url: string) {
    const head = new HttpHeaders({'access-token': AccessTokenInst});
    head.set('access-token', AccessTokenInst);
    const req = new HttpRequest('POST', this.assetUrl + url, file, {
      reportProgress: true,
      headers: head
    });
    const progress = new Subject<number>();
    this.http.request(req).subscribe(e => {
      if (e.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * e.loaded / e.total);
        progress.next(percentDone);
      } else if (e instanceof HttpResponse) {
        progress.complete();
      }
    });
  }

  calendar(pdf: boolean, from: string, to: string, last: string, note: string): string {
    return this.calendarUrl + (pdf ? 'pdf' : 'ical') + '?' +
      (from ? 'from=' + from + '&' : '') +
      (last ? 'last=' + last + '&' : '') +
      'to=' + to +
      (note ? '&note=' + note : '');
  }
}

interface Credentials {
  username: string;
  password: string;
}

export interface UserInfo {
  member: Member;
  roles: Role[];
}

export let AccessTokenInst = '';
export let UserInfoInst = null;

export function logout() {
  AccessTokenInst = null;
  UserInfoInst = null;
}

export function AccessTokenAssign(at: string) {
  AccessTokenInst = at;
}

export function UserInfoAssign(ui: UserInfo) {
  UserInfoInst = ui;
}
