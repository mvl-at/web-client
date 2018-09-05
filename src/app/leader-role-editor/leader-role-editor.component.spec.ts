import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderRoleEditorComponent } from './leader-role-editor.component';

describe('LeaderRoleEditorComponent', () => {
  let component: LeaderRoleEditorComponent;
  let fixture: ComponentFixture<LeaderRoleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderRoleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderRoleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
