import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Instrument, Member} from '../members/members.component';
import {Event} from '../events/events.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private cache: Map<string, Array<object>> = new Map<string, Array<object>>();
  private baseUrl = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) {
  }

  get<T>(name: string): T[] {

    this.fetch(name);

    if (this.cache[name] == null) {
      this.cache[name] = [];
    }
    return this.cache[name];
  }

  fetch(name: string) {
    this.http.get(this.url(name)).subscribe(i => this.cache[name] = i);
  }

  url(name: string): string {
    return this.baseUrl + name;
  }

  getInstruments(): Instrument[] {
    return this.get<Instrument>('instruments');
  }

  getEvents(): Event[] {
    return this.get<Event>('events');
  }

  getMembers(): Member[] {
    return this.get<Member>('members');
  }
}
