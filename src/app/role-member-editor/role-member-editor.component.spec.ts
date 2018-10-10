import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMemberEditorComponent } from './role-member-editor.component';

describe('RoleMemberEditorComponent', () => {
  let component: RoleMemberEditorComponent;
  let fixture: ComponentFixture<RoleMemberEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleMemberEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMemberEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
