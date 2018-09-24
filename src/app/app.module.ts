import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventsComponent} from './events/events.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {MembersComponent} from './members/members.component';
import {LeadersComponent} from './leaders/leaders.component';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {FormsModule} from '@angular/forms';
import {RolesComponent} from './roles/roles.component';
import {EventEditorComponent} from './event-editor/event-editor.component';
import {InstrumentEditorComponent} from './instrument-editor/instrument-editor.component';
import {RoleEditorComponent} from './role-editor/role-editor.component';
import {MemberEditorComponent} from './member-editor/member-editor.component';
import {MemberViewComponent} from './member-view/member-view.component';
import {LeaderRoleEditorComponent} from './leader-role-editor/leader-role-editor.component';
import {LeaderEditorComponent} from './leader-editor/leader-editor.component';
import {PreferencesComponent} from './preferences/preferences.component';
import {MemberListComponent} from './member-list/member-list.component';
import {LeaderRoleListComponent} from './leader-role-list/leader-role-list.component';
import { LeaderListComponent } from './leader-list/leader-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { CredentialsComponent } from './credentials/credentials.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HomeComponent,
    MembersComponent,
    LeadersComponent,
    LoginComponent,
    MenuComponent,
    RolesComponent,
    EventEditorComponent,
    InstrumentEditorComponent,
    RoleEditorComponent,
    MemberEditorComponent,
    MemberViewComponent,
    LeaderRoleEditorComponent,
    LeaderEditorComponent,
    PreferencesComponent,
    MemberListComponent,
    LeaderRoleListComponent,
    LeaderListComponent,
    EventListComponent,
    InstrumentListComponent,
    CredentialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, EventEditorComponent, InstrumentEditorComponent, RoleEditorComponent, MemberEditorComponent, LeaderRoleEditorComponent, LeaderEditorComponent, PreferencesComponent, CredentialsComponent]
})
export class AppModule {
}
