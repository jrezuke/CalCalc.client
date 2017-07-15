import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsEntryComponent } from './calculations-entry.component';

describe('CalculationsEntryComponent', () => {
  let component: CalculationsEntryComponent;
  let fixture: ComponentFixture<CalculationsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
