import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteralComponent } from './enteral.component';

describe('EnteralComponent', () => {
  let component: EnteralComponent;
  let fixture: ComponentFixture<EnteralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
