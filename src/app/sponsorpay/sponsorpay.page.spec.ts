import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorpayPage } from './sponsorpay.page';

describe('SponsorpayPage', () => {
  let component: SponsorpayPage;
  let fixture: ComponentFixture<SponsorpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorpayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
