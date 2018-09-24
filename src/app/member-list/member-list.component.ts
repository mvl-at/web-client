import {Component, OnInit} from '@angular/core';
import {DataService} from '../rest/data-service';
import {Member} from '../members/members.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MemberEditorComponent} from '../member-editor/member-editor.component';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  private members: Member[];

  constructor(private service: DataService, private modal: NgbModal) {
  }

  ngOnInit() {
    this.service.getMembers().subscribe(m => this.members = m);
  }

  edit(member: Member) {
    this.modal.open(MemberEditorComponent).componentInstance.entity = member;
  }

  delete(member: Member) {
    member.instrument = undefined;
    this.service.delete({id: member.id}, 'members').subscribe(m => console.log(m));
  }
}
