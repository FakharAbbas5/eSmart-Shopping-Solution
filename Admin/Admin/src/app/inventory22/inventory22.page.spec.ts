import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventory22Page } from './inventory22.page';

describe('Inventory22Page', () => {
  let component: Inventory22Page;
  let fixture: ComponentFixture<Inventory22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inventory22Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inventory22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
