import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHomePage } from './customer-home.page';

describe('CustomerHomePage', () => {
  let component: CustomerHomePage;
  let fixture: ComponentFixture<CustomerHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
