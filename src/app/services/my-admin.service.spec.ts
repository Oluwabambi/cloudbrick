import { TestBed } from '@angular/core/testing';

import { MyAdminService } from './my-admin.service';

describe('MyAdminService', () => {
  let service: MyAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
