import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  titleProgress: number = undefined;
  defaultTitleProgress: null = undefined;

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
