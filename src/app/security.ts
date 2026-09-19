import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SeoService } from './seo';

@Component({
  selector: 'app-security',
  imports: [NgOptimizedImage],
  template: `<section class="trust-hero">
      <div class="wrap trust-hero-inner">
        <div class="eyebrow">Seguridad y confidencialidad</div>
        <h1>Las condiciones de uso de sus documentos deben quedar claras antes del piloto.</h1>
        <p>
          Una firma de abogados no debería incorporar expedientes a una plataforma de inteligencia
          artificial basándose únicamente en una promesa de privacidad. Ciceron propone documentar
          el alcance, los accesos, el tratamiento de datos y los criterios de salida antes de
          iniciar cada evaluación.
        </p>
        <div class="trust-actions">
          <a
            class="btn btn-accent"
            href="mailto:contacto@ciceron.io?subject=Consulta%20sobre%20seguridad%20y%20datos%20en%20Ciceron"
            >Consultar sobre seguridad</a
          >
          <a class="btn btn-ghost trust-back" href="/#pilot">Ver el piloto</a>
        </div>
      </div>
    </section>

    <section class="trust-section" aria-labelledby="principles-title">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow">Principios de evaluación</div>
          <h2 id="principles-title">Controles que deben acordarse, verificarse y documentarse</h2>
          <p>
            Estos puntos describen el marco de evaluación del piloto. No constituyen una
            certificación ni implican que una integración o modalidad de despliegue esté disponible
            sin confirmación escrita.
          </p>
        </div>
        <div class="trust-grid">
          <article class="trust-item">
            <span class="trust-number" aria-hidden="true">01</span>
            <h3>Corpus autorizado</h3>
            <p>
              Definir qué documentos entran al piloto, quién autoriza su uso y qué información debe
              excluirse o anonimizarse.
            </p>
          </article>
          <article class="trust-item">
            <span class="trust-number" aria-hidden="true">02</span>
            <h3>Acceso y responsabilidades</h3>
            <p>
              Identificar usuarios, roles, responsables de revisión y el procedimiento para conceder
              o retirar acceso.
            </p>
          </article>
          <article class="trust-item">
            <span class="trust-number" aria-hidden="true">03</span>
            <h3>Tratamiento de datos</h3>
            <p>
              Precisar ubicación, proveedores involucrados, retención, respaldos, cifrado,
              subprocesadores y uso —o no uso— para entrenamiento.
            </p>
          </article>
          <article class="trust-item">
            <span class="trust-number" aria-hidden="true">04</span>
            <h3>Salida controlada</h3>
            <p>
              Acordar devolución o eliminación de datos, evidencia del proceso y continuidad
              operativa si la firma decide no avanzar.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="trust-section trust-section-alt" aria-labelledby="checklist-title">
      <div class="wrap trust-columns">
        <div>
          <div class="eyebrow">Antes de cargar un expediente</div>
          <h2 id="checklist-title">Lista mínima para la conversación técnica</h2>
          <p class="trust-intro">
            La respuesta concreta puede variar según la modalidad evaluada. La propuesta del piloto
            debe resolver por escrito, como mínimo, estas preguntas.
          </p>
        </div>
        <ul class="trust-checklist">
          <li>¿Dónde se almacenan y procesan los documentos?</li>
          <li>¿Qué proveedores o modelos intervienen y bajo qué condiciones?</li>
          <li>¿Los datos se utilizan para entrenar modelos propios o de terceros?</li>
          <li>¿Cómo se cifran los datos en tránsito y en reposo?</li>
          <li>¿Qué controles de acceso, registros y revisiones están disponibles?</li>
          <li>¿Cuánto tiempo se conserva la información y cómo se elimina?</li>
          <li>¿Cómo se notifican y gestionan incidentes de seguridad?</li>
          <li>¿Qué ocurre con los datos y configuraciones al terminar el piloto?</li>
        </ul>
      </div>
    </section>

    <section class="trust-section" aria-labelledby="professional-title">
      <div class="wrap trust-product">
        <div>
          <div class="eyebrow">Control profesional</div>
          <h2 id="professional-title">Ciceron asiste; el abogado revisa y decide.</h2>
          <div class="trust-prose">
            <p>
              Los borradores, resúmenes y referencias producidos por inteligencia artificial
              requieren revisión profesional. Ciceron no sustituye el análisis jurídico, no
              garantiza resultados y no debe enviar comunicaciones ni ejecutar decisiones de forma
              autónoma.
            </p>
            <p>
              Cuando el expediente incluye datos personales u otra información sensible, el entorno
              puede orientar sobre el marco de la consulta sin reproducir cédulas, cuentas ni
              montos. Para firmas panameñas, la evaluación también debe considerar el secreto
              profesional y las obligaciones aplicables al tratamiento de datos personales, incluida
              la Ley 81 de 2019 y su reglamentación. La aplicación concreta de esas normas
              corresponde a cada firma y a sus asesores.
            </p>
          </div>
        </div>
        <figure class="product-shot">
          <div class="product-frame">
            <img
              ngSrc="/product/datos-sensibles.png"
              width="1024"
              height="640"
              alt="Aviso de Ciceron indicando que no reproducirá cédulas, cuentas ni montos individuales porque el expediente incluye datos personales."
              sizes="(min-width: 981px) 48vw, 92vw"
            />
          </div>
          <figcaption>
            El entorno advierte cuando hay datos personales y no reproduce cédulas, cuentas ni
            montos. Entorno de demostración.
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="trust-cta">
      <div class="wrap">
        <div class="trust-cta-inner">
          <div>
            <div class="eyebrow">Siguiente paso</div>
            <h2>Revise primero las condiciones del piloto.</h2>
            <p>
              Escríbanos para definir el área de práctica, el corpus autorizado y las preguntas
              técnicas que su firma necesita resolver.
            </p>
          </div>
          <a
            class="btn btn-accent"
            href="mailto:contacto@ciceron.io?subject=Evaluaci%C3%B3n%20de%20seguridad%20para%20piloto%20Ciceron"
            >contacto@ciceron.io</a
          >
        </div>
      </div>
    </section>`,
})
export default class Security {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.updatePage({
      title: 'Seguridad y confidencialidad | Ciceron',
      description:
        'Conozca el marco de evaluación de seguridad, confidencialidad y tratamiento de datos para un piloto de Ciceron con firmas de abogados en Panamá.',
      path: '/seguridad',
    });
  }
}
