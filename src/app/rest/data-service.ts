import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Instrument, Member} from '../members/members.component';
import {Event} from '../events/events.component';
import {Observable} from 'rxjs';
import {AccessToken} from '../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private baseUrl = 'http://127.0.0.1:8080/';
  private assetUrl = 'http://127.0.0.1:7302/';

  constructor(private http: HttpClient) {
  }

  get<T>(name: string): Observable<T[]> {

    return this.http.get<T[]>(this.url(name));
  }

  post<T>(entity: T, name: string): Observable<HttpResponse<object>> {
    return this.http.post(this.url(name), entity, {headers: {'Access-Token': AccessToken}, observe: 'response'});
  }

  url(name: string): string {
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
}
