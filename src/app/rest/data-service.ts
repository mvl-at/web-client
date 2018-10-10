import {HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Instrument, Member} from '../members/members.component';
import {Event} from '../events/events.component';
import {Observable, Subject} from 'rxjs';
import {AccessToken} from '../login/login.component';
import {AppConfigManager} from '../config.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public baseUrl: string;
  public assetUrl: string;

  constructor(private http: HttpClient, private config: AppConfigManager) {
    this.loadConfig(config).then();
  }

  async loadConfig(config: AppConfigManager) {
    const c = await config.load().toPromise();
    this.baseUrl = c.restHost;
    this.assetUrl = c.assetsHost;
  }

  get<T>(name: string): Observable<T[]> {

    return this.http.get<T[]>(this.url(name));
  }

  post<T>(entity: T, name: string): Observable<HttpResponse<object>> {
    return this.http.post(this.url(name), entity, {headers: {'Access-Token': AccessToken}, observe: 'response'});
  }

  delete<T>(entity: T, name: string): Observable<HttpResponse<object>> {
    return this.http.request('delete', this.url(name), {headers: {'Access-Token': AccessToken}, observe: 'response', body: entity});
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
    const head = new HttpHeaders({'access-token': AccessToken});
    head.set('access-token', AccessToken);
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
}
