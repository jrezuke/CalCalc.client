import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenteralComponent } from './parenteral.component';

describe('ParenteralComponent', () => {
  let component: ParenteralComponent;
  let fixture: ComponentFixture<ParenteralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenteralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenteralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
