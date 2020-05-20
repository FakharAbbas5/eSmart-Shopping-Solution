import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanHomePage } from './salesman-home.page';

describe('SalesmanHomePage', () => {
  let component: SalesmanHomePage;
  let fixture: ComponentFixture<SalesmanHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesmanHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
