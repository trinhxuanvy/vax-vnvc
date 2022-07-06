import { TestBed } from '@angular/core/testing';

import { VcpackageService } from './vcpackage.service';

describe('VcpackageService', () => {
  let service: VcpackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcpackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
