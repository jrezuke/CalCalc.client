import { TestBed, async, inject } from '@angular/core/testing';

import { CalculationsGuard } from './calculations.guard';

describe('CalculationsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationsGuard]
    });
  });

  it('should ...', inject([CalculationsGuard], (guard: CalculationsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
