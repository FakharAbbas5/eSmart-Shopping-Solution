import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComplaintPage } from './show-complaint.page';

describe('ShowComplaintPage', () => {
  let component: ShowComplaintPage;
  let fixture: ComponentFixture<ShowComplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
