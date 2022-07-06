import { TestBed } from '@angular/core/testing';

import { VccenterService } from './vccenter.service';

describe('VccenterService', () => {
  let service: VccenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VccenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
