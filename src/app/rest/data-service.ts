import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Instrument, Member} from '../members/members.component';
import {Event} from '../events/events.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private baseUrl = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) {
  }

  get<T>(name: string): Observable<T[]> {

    return this.http.get<T[]>(this.url(name));
  }

  // fetch(name: string) {
  //   this.http.get(this.url(name)).subscribe(i => this.cache[name] = i);
  // }

  url(name: string): string {
    return this.baseUrl + name;
  }

  getInstruments(): Observable<Instrument[]> {
    return this.get<Instrument>('instruments');
  }

  getEvents(): Observable<Event[]> {
    return this.get<Event>('events');
  }

  getMembers(): Observable<Member[]> {
    return this.get<Member>('members');
  }
}
