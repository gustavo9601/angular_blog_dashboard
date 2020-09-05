import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStadisticsComponent } from './widget-stadistics.component';

describe('WidgetStadisticsComponent', () => {
  let component: WidgetStadisticsComponent;
  let fixture: ComponentFixture<WidgetStadisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetStadisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStadisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
