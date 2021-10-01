import { TestBed } from '@angular/core/testing';

import { AdminProjectEmitterService } from './admin-project-emitter.service';

describe('AdminProjectEmitterService', () => {
  let service: AdminProjectEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProjectEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
