import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SidebarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the brand and the four page links', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Budgetly');
    const links = Array.prototype.map.call(el.querySelectorAll('a.sidebar-link'), (a: HTMLElement) => a.textContent.trim());
    expect(links.join(',')).toContain('Overview');
    expect(links.join(',')).toContain('Reports');
  });
});
