import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the accessible application shell', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('main#main-content')).toBeTruthy();
    expect(compiled.querySelector('nav[aria-label="Navegación principal"]')).toBeTruthy();
    expect(compiled.querySelector('.skip-link')?.textContent).toContain('Saltar al contenido');
    expect(compiled.querySelector('a[href="mailto:contacto@ciceron.io"]')).toBeTruthy();
  });

  it('should expose an accessible mobile navigation toggle', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const toggle = fixture.nativeElement.querySelector('.nav-toggle') as HTMLButtonElement;

    expect(toggle.getAttribute('aria-controls')).toBe('primary-navigation');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
  });
});
