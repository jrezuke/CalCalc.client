import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsTestComponent } from './subjects-test.component';

describe('SubjectsTestComponent', () => {
  let component: SubjectsTestComponent;
  let fixture: ComponentFixture<SubjectsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
