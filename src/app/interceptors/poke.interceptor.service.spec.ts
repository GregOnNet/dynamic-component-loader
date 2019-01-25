import { TestBed } from '@angular/core/testing';

import { Poke.InterceptorService } from './poke.interceptor.service';

describe('Poke.InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Poke.InterceptorService = TestBed.get(Poke.InterceptorService);
    expect(service).toBeTruthy();
  });
});
