import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetUploadThumbnailComponent } from './widget-upload-thumbnail.component';

describe('WidgetUploadThumbnailComponent', () => {
  let component: WidgetUploadThumbnailComponent;
  let fixture: ComponentFixture<WidgetUploadThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetUploadThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetUploadThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
