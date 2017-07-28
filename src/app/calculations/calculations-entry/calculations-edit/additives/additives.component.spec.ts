import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditivesComponent } from './additives.component';

describe('AdditivesComponent', () => {
  let component: AdditivesComponent;
  let fixture: ComponentFixture<AdditivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
