import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberpayPage } from './memberpay.page';

describe('MemberpayPage', () => {
  let component: MemberpayPage;
  let fixture: ComponentFixture<MemberpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberpayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
