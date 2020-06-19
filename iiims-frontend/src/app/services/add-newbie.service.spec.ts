import { TestBed } from '@angular/core/testing';

import { AddNewbieService } from './add-newbie.service';

describe('AddNewbieService', () => {
  let service: AddNewbieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewbieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
