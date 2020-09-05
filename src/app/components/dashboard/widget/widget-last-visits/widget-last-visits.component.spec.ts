import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLastVisitsComponent } from './widget-last-visits.component';

describe('WidgetLastVisitsComponent', () => {
  let component: WidgetLastVisitsComponent;
  let fixture: ComponentFixture<WidgetLastVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetLastVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLastVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
