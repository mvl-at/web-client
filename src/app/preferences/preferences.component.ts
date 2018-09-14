import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Subject} from 'rxjs';
import {AccessToken} from '../login/login.component';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private http: HttpClient) {
  }

  ngOnInit() {
  }

  titleChange(event) {
    const fileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      const head = new HttpHeaders();
      head.set('access-token', AccessToken);
      const req = new HttpRequest('POST', 'http://127.0.0.1:7302/title', file, {
        reportProgress: true,
        headers: head
      });
      // req.headers.
      // req.headers.append('access-token', AccessToken);
      const progress = new Subject<number>();

      // send the http-request and subscribe for progress-updates
      this.http.request(req).subscribe(e => {
        if (e.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          const percentDone = Math.round(100 * e.loaded / e.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (e instanceof HttpResponse) {

          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
      });
    }
  }
}
