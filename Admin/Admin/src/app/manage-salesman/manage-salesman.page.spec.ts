import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSalesmanPage } from './manage-salesman.page';

describe('ManageSalesmanPage', () => {
  let component: ManageSalesmanPage;
  let fixture: ComponentFixture<ManageSalesmanPage>;

  beforeEach(async(() => {
    TestBed .configureTestingModule({
      declarations: [ ManageSalesmanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSalesmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
