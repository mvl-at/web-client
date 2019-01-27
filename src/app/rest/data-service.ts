import {HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Instrument, Member} from '../members/members.component';
import {Event} from '../events/events.component';
import {Observable, Subject} from 'rxjs';
import {AppConfigManager} from '../config.model';
import {Role} from '../roles/roles.component';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public baseUrl: string;
  public assetUrl: string;
  public calendarPdfUrl: string;
  public calendarWebCalUrl: string;
  public libraryUrl: string;

  constructor(private http: HttpClient, private config: AppConfigManager) {
    this.loadConfig(config).then();
  }

  async loadConfig(config: AppConfigManager) {
    const c = await config.load().toPromise();
    this.baseUrl = c.restHost;
    this.assetUrl = c.assetsHost;
    this.calendarPdfUrl = c.calendarPdfHost;
    this.calendarWebCalUrl = c.calendarWebCalHost;
    this.libraryUrl = c.libraryHost;
  }

  get<T>(name: string, header?: HttpHeaders): Observable<T> {
    return this.http.get<T>(this.url(name), {headers: header});
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
    return this.get<Instrument[]>('instruments');
  }

  postInstrument(instrument: Instrument) {
    this.post<Instrument>(instrument, 'instruments');
  }

  getEvents(): Observable<Event[]> {
    return this.get<Event[]>('events');
  }

  getMembers(): Observable<Member[]> {
    return this.get<Member[]>('members');
  }

  getMemberPicture(picture: string): string {
    return this.assetUrl + 'member/' + picture;
  }

  getTitleImage(thumbnail: boolean): string {
    return this.assetUrl + '/title?thumbnail=' + thumbnail;
  }

  postPicture(file: File, url: string): Observable<number> {
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
    return progress.asObservable();
  }

  postDefaultTitle(value: boolean): Observable<HttpResponse<object>> {
    return this.http.post(this.assetUrl + 'defaultTitle', value, {headers: {'Access-Token': AccessTokenInst}, observe: 'response'});
  }

  calendar(pdf: boolean, from: string, to: string, last: string, note: string): string {
    return (pdf ? this.calendarPdfUrl : this.calendarWebCalUrl) + (pdf ? 'pdf' : 'ical') + '?' +
      (from ? 'from=' + from + '&' : '') +
      (last ? 'last=' + last + '&' : '') +
      'to=' + to +
      (note ? '&note=' + note : '') +
      (pdf ? '' : '&int=true');
  }
}

interface Credentials {
  username: string;
  password: string;
}

export interface UserInfo {
  exp: string;
  member: Member;
  roles: Role[];
}

export let AccessTokenInst = '';
export let UserInfoInst = null;
export let ExpirationTimer = 0;

export function Logout(router: Router) {
  AccessTokenInst = null;
  UserInfoInst = null;
  if (ExpirationTimer) {
    clearInterval(ExpirationTimer);
  }
  router.navigateByUrl('/home').catch();
  // window.location.href = '/home';
}

export function AccessTokenAssign(at: string) {
  AccessTokenInst = at;
}

export function UserInfoAssign(ui: UserInfo) {
  if (ui) {
    UserInfoInst = ui;
  } else {
    UserInfoInst = null;
    AccessTokenInst = null;
  }
}

export function SetExpirationTimer(timer: number) {
  ExpirationTimer = timer;
}
