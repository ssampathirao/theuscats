import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CremhelplinePage } from './cremhelpline.page';

describe('CremhelplinePage', () => {
  let component: CremhelplinePage;
  let fixture: ComponentFixture<CremhelplinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CremhelplinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CremhelplinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
