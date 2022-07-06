import { TestBed } from '@angular/core/testing';

import { VcsignupService } from './vcsignup.service';

describe('VcsignupService', () => {
  let service: VcsignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcsignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
