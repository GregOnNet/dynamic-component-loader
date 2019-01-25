import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveRolesGuard } from './resolve-roles.guard';

describe('ResolveRolesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveRolesGuard]
    });
  });

  it('should ...', inject([ResolveRolesGuard], (guard: ResolveRolesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
