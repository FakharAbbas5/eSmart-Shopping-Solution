import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventory1Page } from './inventory1.page';

describe('Inventory1Page', () => {
  let component: Inventory1Page;
  let fixture: ComponentFixture<Inventory1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inventory1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inventory1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
