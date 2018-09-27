import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Subject} from 'rxjs';
import {AccessToken} from '../login/login.component';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private service: DataService) {
  }

  ngOnInit() {
  }

  titleChange(event) {
    const fileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.service.postPicture(file, 'title');
    }
  }
}
