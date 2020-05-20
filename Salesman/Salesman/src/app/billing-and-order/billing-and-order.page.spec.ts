import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAndOrderPage } from './billing-and-order.page';

describe('BillingAndOrderPage', () => {
  let component: BillingAndOrderPage;
  let fixture: ComponentFixture<BillingAndOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAndOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAndOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
