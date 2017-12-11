import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInlineComponent } from './banner-inline.component';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ComponentFixtureAutoDetect } from '@angular/core/testing';


describe('BannerInlineComponent detect changes', () => {
  let component: BannerInlineComponent;
  let fixture: ComponentFixture<BannerInlineComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerInlineComponent ],
      providers: [{
          provide: ComponentFixtureAutoDetect, useValue: true
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInlineComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should display original title', () => {
    // Hooray! No `fixture.detectChanges()` needed
    expect(el.textContent).toContain(component.title);
  });
  
  it('should still see original title after comp.title change', () => {
    const oldTitle = component.title;
    component.title = 'Test Title';
    // Displayed title is old because Angular didn't hear the change :(
    expect(el.textContent).toContain(oldTitle);
  });
  
  it('should display updated title after detectChanges', () => {
    component.title = 'Test Title';
    fixture.detectChanges(); // detect changes explicitly
    expect(el.textContent).toContain(component.title);
  });

});
