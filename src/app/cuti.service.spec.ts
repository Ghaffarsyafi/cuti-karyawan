import { TestBed, inject } from '@angular/core/testing';

import { CutiService } from './cuti.service';

describe('CutiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CutiService]
    });
  });

  it('should ...', inject([CutiService], (service: CutiService) => {
    expect(service).toBeTruthy();
  }));
});
