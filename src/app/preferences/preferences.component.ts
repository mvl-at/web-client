import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {AccessTokenInst, DataService} from '../rest/data-service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  titleProgress: number = undefined;
  defaultTitleProgress: number = undefined;
  isDefault = false;

  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private service: DataService) {
    http.get<boolean>(service.assetUrl + 'defaultTitle').subscribe(d => this.isDefault = d);
  }

  ngOnInit() {
  }

  titleChange(event, isDefault: boolean) {
    const fileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const param = 'title' + (isDefault ? '?default=true' : '');
      this.service.postPicture(file, param).subscribe(p => {
        if (isDefault) {
          this.defaultTitleProgress = p;
        } else {
          this.titleProgress = p;
        }
      });
    }
  }

  save() {
    this.service.postDefaultTitle(this.isDefault).subscribe(() =>
      this.activeModal.close('close')
    );

  }
}
