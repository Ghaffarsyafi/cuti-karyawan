import { TestBed, inject } from '@angular/core/testing';

import { KryService } from './kry.service';

describe('KryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KryService]
    });
  });

  it('should ...', inject([KryService], (service: KryService) => {
    expect(service).toBeTruthy();
  }));
});
