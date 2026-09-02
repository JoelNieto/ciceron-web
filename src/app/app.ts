import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<header class="nav">
      <div class="nav-inner">
        <a class="brand" href="#top">
          <img src="/ciceron_imagotype.png" alt="Ícono de Ciceron" />
        </a>
        <nav class="links">
          <a href="#platform">Plataforma</a>
          <a href="#tools">Herramientas</a>
          <a href="#panama">Panamá</a>
          <a href="#pilot">Piloto</a>
        </nav>
        <a href="#pilot" class="btn btn-primary">Iniciar un piloto</a>
      </div>
    </header>
    <router-outlet />
    <footer>
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <img src="/ciceron_imagotype-white.png" alt="Ícono de Ciceron" />
            <span
              style="font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.05em; color:rgba(255,255,255,0.35); margin-left:4px; padding-left:10px; border-left:1px solid rgba(255,255,255,0.18);"
              >por Quadratics</span
            >
          </div>
          <div class="footer-cols">
            <div class="footer-col">
              <h4>Plataforma</h4>
              <a href="#tools">Redacción Inteligente</a>
              <a href="#tools">Búsqueda Interna</a>
              <a href="#tools">Asistente de Correo</a>
            </div>
            <div class="footer-col">
              <h4>Empresa</h4>
              <a href="#panama">Enfoque en Panamá</a>
              <a href="#pilot">Iniciar un piloto</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Ciceron. Hecha para firmas de abogados en Panamá y Centroamérica.</span>
          <span class="contact">[nombre] · [correo] · [teléfono]</span>
        </div>
      </div>
    </footer>`,
})
export class App {
  protected readonly title = signal('Ciceron Web');
}
