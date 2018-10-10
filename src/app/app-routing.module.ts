import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events/events.component';
import {HomeComponent} from './home/home.component';
import {MembersComponent} from './members/members.component';
import {LeadersComponent} from './leaders/leaders.component';
import {MemberListComponent} from './member-list/member-list.component';
import {LeaderRoleListComponent} from './leader-role-list/leader-role-list.component';
import {LeaderListComponent} from './leader-list/leader-list.component';
import {EventListComponent} from './event-list/event-list.component';
import {InstrumentListComponent} from './instrument-list/instrument-list.component';
import {RoleListComponent} from './role-list/role-list.component';
import {RoleMemberListComponent} from './role-member-list/role-member-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'leaders',
    component: LeadersComponent
  },
  {
    path: 'member-management',
    component: MemberListComponent
  },
  {
    path: 'leader-role-management',
    component: LeaderRoleListComponent
  },
  {
    path: 'leader-management',
    component: LeaderListComponent
  },
  {
    path: 'event-management',
    component: EventListComponent
  },
  {
    path: 'instrument-management',
    component: InstrumentListComponent
  }, {
    path: 'role-management',
    component: RoleListComponent
  },
  {
    path: 'role-member-management',
    component: RoleMemberListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
