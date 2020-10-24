import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalPage } from './my-modal.page';

describe('MyModalPage', () => {
  let component: MyModalPage;
  let fixture: ComponentFixture<MyModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
