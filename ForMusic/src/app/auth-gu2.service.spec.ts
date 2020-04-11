import { TestBed } from '@angular/core/testing';

import { AuthGu2Service } from './auth-gu2.service';

describe('AuthGu2Service', () => {
  let service: AuthGu2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGu2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
