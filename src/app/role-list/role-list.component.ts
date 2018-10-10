import {Component, OnInit} from '@angular/core';
import {List} from '../list';
import {Role} from '../roles/roles.component';
import {RoleEditorComponent} from '../role-editor/role-editor.component';
import {DataService} from '../rest/data-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent extends List<Role> implements OnInit {

  constructor(protected service: DataService, protected modal: NgbModal) {
    super(service, modal);
  }

  ngOnInit() {
  }

  editor(): any {
    return RoleEditorComponent;
  }

  urlName(): string {
    return 'roles';
  }

}
