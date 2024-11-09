import { TestBed } from '@angular/core/testing';

import { PlaceholderServiceService } from './placeholder-service.service';

describe('PlaceholderServiceService', () => {
  let service: PlaceholderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceholderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
