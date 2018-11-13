import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelWindowComponent } from './excel-window.component';

describe('ExcelWindowComponent', () => {
  let component: ExcelWindowComponent;
  let fixture: ComponentFixture<ExcelWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
