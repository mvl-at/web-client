import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderEditorComponent } from './leader-editor.component';

describe('LeaderEditorComponent', () => {
  let component: LeaderEditorComponent;
  let fixture: ComponentFixture<LeaderEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
