import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamhelplinePage } from './famhelpline.page';

describe('FamhelplinePage', () => {
  let component: FamhelplinePage;
  let fixture: ComponentFixture<FamhelplinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamhelplinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamhelplinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
