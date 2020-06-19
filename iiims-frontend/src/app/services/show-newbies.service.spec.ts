import { TestBed } from '@angular/core/testing';

import { ShowNewbiesService } from './show-newbies.service';

describe('ShowNewbiesService', () => {
  let service: ShowNewbiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowNewbiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
