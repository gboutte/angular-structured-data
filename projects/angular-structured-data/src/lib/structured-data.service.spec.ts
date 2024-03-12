import { TestBed } from '@angular/core/testing';

import { StructuredDataService } from './structured-data.service';

describe('StructuredDataService', () => {
  let service: StructuredDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StructuredDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
