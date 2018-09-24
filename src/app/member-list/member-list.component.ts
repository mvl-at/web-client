import {Component, OnInit} from '@angular/core';
import {DataService} from '../rest/data-service';
import {Member} from '../members/members.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MemberEditorComponent} from '../member-editor/member-editor.component';
import {List} from '../list';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent extends List<Member> implements OnInit {

  constructor(protected service: DataService, protected modal: NgbModal) {
    super(service, modal);
  }

  ngOnInit() {
  }

  editor(): any {
    return MemberEditorComponent;
  }

  urlName(): string {
    return 'members';
  }
}
