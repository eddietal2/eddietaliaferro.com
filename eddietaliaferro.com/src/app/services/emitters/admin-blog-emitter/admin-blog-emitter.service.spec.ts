import { TestBed } from '@angular/core/testing';

import { AdminBlogEmitterService } from './admin-blog-emitter.service';

describe('AdminBlogEmitterService', () => {
  let service: AdminBlogEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBlogEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
