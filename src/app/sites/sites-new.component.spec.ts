/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SitesNewComponent } from './sites-new.component';

describe('SitesNewComponent', () => {
  let component: SitesNewComponent;
  let fixture: ComponentFixture<SitesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
