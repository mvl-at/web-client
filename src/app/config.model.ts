import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface AppConfig {
  restHost: string;
  assetsHost: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigManager {

  public config: AppConfig;

  constructor(private http: HttpClient) {
    this.load();
  }

  load(): Observable<AppConfig> {
    const jsonFile = `assets/config/config.${environment.name}.json`;
    return this.http.get<AppConfig>(jsonFile);
  }
}
