import { TestBed, inject } from '@angular/core/testing';

import { HeroDetailService } from './hero-detail.service';

import { HeroService } from './hero.service';

describe('HeroDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailService, HeroService]
    });
  });

  it('should be created', inject([HeroDetailService], (service: HeroDetailService) => {
    expect(service).toBeTruthy();
  }));
});
