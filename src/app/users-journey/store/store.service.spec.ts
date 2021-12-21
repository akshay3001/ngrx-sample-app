import { TestBed } from '@angular/core/testing';

import { UsersStoreService } from './store.service';

describe('StoreService', () => {
  let service: UsersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
