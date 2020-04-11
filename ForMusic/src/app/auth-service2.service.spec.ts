import { TestBed } from '@angular/core/testing';

import { AuthService2Service } from './auth-service2.service';

describe('AuthService2Service', () => {
  let service: AuthService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
