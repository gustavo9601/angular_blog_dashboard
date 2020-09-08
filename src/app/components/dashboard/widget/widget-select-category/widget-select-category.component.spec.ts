import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSelectCategoryComponent } from './widget-select-category.component';

describe('WidgetSelectCategoryComponent', () => {
  let component: WidgetSelectCategoryComponent;
  let fixture: ComponentFixture<WidgetSelectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSelectCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
