import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAndOrder2Page } from './billing-and-order2.page';

describe('BillingAndOrder2Page', () => {
  let component: BillingAndOrder2Page;
  let fixture: ComponentFixture<BillingAndOrder2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAndOrder2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAndOrder2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
