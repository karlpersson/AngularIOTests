import { TestBed, inject } from '@angular/core/testing';

import { FakeHeroService } from './fake-hero.service';

describe('FakeHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeHeroService]
    });
  });

  it('should be created', inject([FakeHeroService], (service: FakeHeroService) => {
    expect(service).toBeTruthy();
  }));
});
