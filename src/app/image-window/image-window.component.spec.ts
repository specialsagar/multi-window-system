import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWindowComponent } from './image-window.component';

describe('ImageWindowComponent', () => {
  let component: ImageWindowComponent;
  let fixture: ComponentFixture<ImageWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
