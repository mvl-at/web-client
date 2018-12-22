import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
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
import {LeaderListComponent} from './leader-list/leader-list.component';
import {EventListComponent} from './event-list/event-list.component';
import {InstrumentListComponent} from './instrument-list/instrument-list.component';
import {CredentialsComponent} from './credentials/credentials.component';
import {AppConfigManager} from './config.model';
import {RoleMemberEditorComponent} from './role-member-editor/role-member-editor.component';
import {RoleMemberListComponent} from './role-member-list/role-member-list.component';
import {RoleListComponent} from './role-list/role-list.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCalendar, faPencilAlt, faTrashAlt, faUser, faLock, faPlus, faSortDown, faSortUp, faSort} from '@fortawesome/free-solid-svg-icons';
import {SubscriptionComponent} from './subscription/subscription.component';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {ArchiveComponent} from './archive/archive.component';
import {ArchiveEditorComponent} from './archive-editor/archive-editor.component';

export function initializeApp(appConfig: AppConfigManager) {
  return () => appConfig.load();
}

library.add(faCalendar, faPencilAlt, faTrashAlt, faUser, faLock, faPlus, faSortDown, faSortUp, faSort);

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
    CredentialsComponent,
    RoleMemberEditorComponent,
    RoleMemberListComponent,
    RoleListComponent,
    ImpressumComponent,
    SubscriptionComponent,
    DeleteDialogComponent,
    ArchiveComponent,
    ArchiveEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [AppConfigManager,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigManager],
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, EventEditorComponent, InstrumentEditorComponent,
    RoleEditorComponent, MemberEditorComponent, LeaderRoleEditorComponent, LeaderEditorComponent,
    PreferencesComponent, CredentialsComponent, RoleMemberEditorComponent, SubscriptionComponent,
    DeleteDialogComponent, ArchiveEditorComponent]
})
export class AppModule {
}
