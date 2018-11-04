import {Component, Input, NgZone, OnInit} from '@angular/core';
import {Member} from '../members/members.component';
import {LeaderRoleMember} from '../leaders/leaders.component';
import {DataService} from '../rest/data-service';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css'],
})
export class MemberViewComponent implements OnInit {

  static cantinaMode = false;
  static audio: HTMLAudioElement;

  @Input() member: Member;
  @Input() leader: LeaderRoleMember;

  constructor(public service: DataService, private ngZone: NgZone) {
    MemberViewComponent.audio = new Audio('assets/bier-broesel.ogg');
    MemberViewComponent.audio.load();
    MemberViewComponent.audio.addEventListener('ended', () => (MemberViewComponent.cantinaMode = false));
  }

  cantina() {
    // @ts-ignore
    this.ngZone.run(() => {
      MemberViewComponent.cantinaMode = !MemberViewComponent.cantinaMode;
      MemberViewComponent.audio.play();
    });
  }

  ngOnInit() {
    if (this.leader !== null && this.leader !== undefined) {
      this.member = this.leader.member;
    }
    // @ts-ignore
    window.cantina = this.cantina.bind(this);
  }

  dummyPicture(event, member: Member) {
    event.target.src = '/assets/icons/avatar-' + ((member.gender === 'f') ? 'female' : 'male') + '.png';
  }

  isCantina(): boolean {
    return MemberViewComponent.cantinaMode;
  }
}
