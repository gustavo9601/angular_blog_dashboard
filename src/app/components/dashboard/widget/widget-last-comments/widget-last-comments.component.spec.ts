import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLastCommentsComponent } from './widget-last-comments.component';

describe('WidgetLastCommentsComponent', () => {
  let component: WidgetLastCommentsComponent;
  let fixture: ComponentFixture<WidgetLastCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetLastCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLastCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
