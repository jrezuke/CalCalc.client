import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsNewComponent } from './calculations-new.component';

describe('CalculationsNewComponent', () => {
  let component: CalculationsNewComponent;
  let fixture: ComponentFixture<CalculationsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
