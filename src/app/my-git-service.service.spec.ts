import { TestBed, inject } from '@angular/core/testing';

import { MyGitServiceService } from './my-git-service.service';

describe('MyGitServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGitServiceService]
    });
  });

  it('should be created', inject([MyGitServiceService], (service: MyGitServiceService) => {
    expect(service).toBeTruthy();
  }));
});
