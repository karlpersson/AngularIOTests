import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService }      from '../user.service';
let userService: UserService; // the TestBed injected service
import { DebugElement }                      from '@angular/core';
import { By }                                from '@angular/platform-browser';

let userServiceStub: {
  isLoggedIn: boolean;
  user: { name: string}
};

let de: DebugElement;  // the DebugElement with the welcome message
let el: HTMLElement; // the DOM element with the welcome message

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {
    // stub UserService for test purposes
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };
  
    TestBed.configureTestingModule({
       declarations: [ WelcomeComponent ],
       providers:    [ {provide: UserService, useValue: userServiceStub } ]
    });
  
    fixture = TestBed.createComponent(WelcomeComponent);
    component    = fixture.componentInstance;
  
    // UserService from the root injector
    userService = TestBed.get(UserService);
  
    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('stub object and injected UserService should not be the same', () => {
    expect(userServiceStub === userService).toBe(false);
  
    // Changing the stub object has no effect on the injected service
    userServiceStub.isLoggedIn = false;
    expect(userService.isLoggedIn).toBe(true);
  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome', '"Welcome ..."');
    expect(content).toContain('Test User', 'expected name');
  });
  
  it('should welcome "Bubba"', () => {
    userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
    fixture.detectChanges();
    expect(el.textContent).toContain('Bubba');
  });
  
  it('should request login if not logged in', () => {
    userService.isLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  });
});


