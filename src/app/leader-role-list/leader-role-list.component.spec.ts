import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderRoleListComponent } from './leader-role-list.component';

describe('LeaderRoleListComponent', () => {
  let component: LeaderRoleListComponent;
  let fixture: ComponentFixture<LeaderRoleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderRoleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
