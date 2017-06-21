/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SitesListComponent } from './sites-list.component';

describe('SitesListComponent', () => {
  let component: SitesListComponent;
  let fixture: ComponentFixture<SitesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
