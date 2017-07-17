import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidInfusionsComponent } from './fluid-infusions.component';

describe('FluidInfusionsComponent', () => {
  let component: FluidInfusionsComponent;
  let fixture: ComponentFixture<FluidInfusionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluidInfusionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidInfusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
