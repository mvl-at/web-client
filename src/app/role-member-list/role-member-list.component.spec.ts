import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMemberListComponent } from './role-member-list.component';

describe('RoleMemberListComponent', () => {
  let component: RoleMemberListComponent;
  let fixture: ComponentFixture<RoleMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleMemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
