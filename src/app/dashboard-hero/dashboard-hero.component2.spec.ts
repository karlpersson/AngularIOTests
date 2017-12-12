import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeroComponent } from './dashboard-hero.component';

import { By }           from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { Hero } from '../hero';

import { click } from '../index';

@Component({
    template: `
      <dashboard-hero  [hero]="hero"  (selected)="onSelected($event)"></dashboard-hero>`
  })
  class TestHostComponent {
    hero = new Hero(42, 'Test Name');
    selectedHero: Hero;
    onSelected(hero: Hero) { this.selectedHero = hero; }
  }

describe('DashboardHeroComponent host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let heroEl: DebugElement;
  let expectedHero: Hero;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost    = fixture.componentInstance;
    heroEl  = fixture.debugElement.query(By.css('.hero')); // find hero element
    // pretend that it was wired to something that supplied a hero
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should display hero name', () => {
    const expectedPipedName = testHost.hero.name.toUpperCase();
    expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
  });
  
  it('should raise selected event when clicked', () => {
    click(heroEl);
    // selected hero should be the same data bound hero
    expect(testHost.selectedHero).toBe(testHost.hero);
  });
  
});
