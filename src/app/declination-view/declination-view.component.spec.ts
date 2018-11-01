import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinationViewComponent } from './declination-view.component';

describe('DeclinationViewComponent', () => {
  let component: DeclinationViewComponent;
  let fixture: ComponentFixture<DeclinationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclinationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclinationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
