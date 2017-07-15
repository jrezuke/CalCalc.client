import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsEditComponent } from './calculations-edit.component';

describe('CalculationsEditComponent', () => {
  let component: CalculationsEditComponent;
  let fixture: ComponentFixture<CalculationsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
