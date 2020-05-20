import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Salesman2Page } from './salesman2.page';

describe('Salesman2Page', () => {
  let component: Salesman2Page;
  let fixture: ComponentFixture<Salesman2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salesman2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salesman2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
