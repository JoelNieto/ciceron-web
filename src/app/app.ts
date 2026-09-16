import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage, RouterOutlet],
  template: `<a class="skip-link" href="#main-content">Saltar al contenido</a>
    <header class="nav">
      <div class="nav-inner">
        <a class="brand" href="/#top" aria-label="Ciceron, página de inicio">
          <img ngSrc="/ciceron_imagotype.png" width="123" height="30" alt="Ciceron" priority />
        </a>
        <nav
          id="primary-navigation"
          class="links"
          aria-label="Navegación principal"
          [class.open]="menuOpen()"
        >
          <a href="/#platform" (click)="closeMenu()">Plataforma</a>
          <a href="/#use-cases" (click)="closeMenu()">Casos</a>
          <a href="/#panama" (click)="closeMenu()">Panamá</a>
          <a href="/seguridad" (click)="closeMenu()">Seguridad</a>
          <a class="mobile-only" href="/#pilot" (click)="closeMenu()">Evaluar un piloto</a>
        </nav>
        <a href="/#pilot" class="btn btn-primary nav-cta">Evaluar un piloto</a>
        <button
          class="nav-toggle"
          type="button"
          aria-controls="primary-navigation"
          [attr.aria-expanded]="menuOpen()"
          (click)="toggleMenu()"
        >
          {{ menuOpen() ? 'Cerrar' : 'Menú' }}
        </button>
      </div>
    </header>
    <main id="main-content">
      <router-outlet />
    </main>
    <footer>
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <img ngSrc="/ciceron_imagotype-white.png" width="123" height="30" alt="Ciceron" />
            <span class="quadratics-credit">por Quadratics</span>
          </div>
          <div class="footer-cols">
            <div class="footer-col">
              <h4>Plataforma</h4>
              <a href="/#redaccion">Redacción inteligente</a>
              <a href="/#busqueda">Búsqueda semántica</a>
              <a href="/#correo">Asistente de correo</a>
              <a href="/#use-cases">Casos de uso</a>
            </div>
            <div class="footer-col">
              <h4>Empresa</h4>
              <a href="/#panama">Enfoque en Panamá</a>
              <a href="/seguridad">Seguridad y confidencialidad</a>
              <a href="/#pilot">Evaluar un piloto</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Ciceron. Inteligencia artificial jurídica para firmas en Panamá.</span>
          <a class="contact" href="mailto:contacto@ciceron.io">contacto@ciceron.io</a>
        </div>
      </div>
    </footer>`,
})
export class App {
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
