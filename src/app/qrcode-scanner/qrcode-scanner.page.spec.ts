import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeScannerPage } from './qrcode-scanner.page';

describe('QrcodeScannerPage', () => {
  let component: QrcodeScannerPage;
  let fixture: ComponentFixture<QrcodeScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodeScannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
