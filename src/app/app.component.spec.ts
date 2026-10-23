import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, SidebarComponent],
      // <app-alert> and the routed pages are not needed for these checks.
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  });

  it(`should have as title 'budgetly'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.componentInstance.title).toEqual('budgetly');
  });

  it('should render the sidebar brand', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-sidebar').textContent).toContain('Budgetly');
  });
});
