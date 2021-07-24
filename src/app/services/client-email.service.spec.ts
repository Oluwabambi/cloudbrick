import { TestBed } from '@angular/core/testing';

import { ClientEmailService } from './client-email.service';

describe('ClientEmailService', () => {
  let service: ClientEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
