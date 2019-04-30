import { TestBed } from '@angular/core/testing';

import { OdefService } from './odef.service';

describe('OdefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OdefService = TestBed.get(OdefService);
    expect(service).toBeTruthy();
  });
});
