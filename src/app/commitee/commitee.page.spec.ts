import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteePage } from './commitee.page';

describe('CommiteePage', () => {
  let component: CommiteePage;
  let fixture: ComponentFixture<CommiteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommiteePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommiteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
