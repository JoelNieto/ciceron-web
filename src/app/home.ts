import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SeoService } from './seo';
import { ObserveVisibilityDirective } from './visibility';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, ObserveVisibilityDirective],
  template: `<section class="hero" id="top">
      <div class="hero-inner">
        <div class="hero-copy">
          <div class="eyebrow">Implementación de IA privada para firmas panameñas</div>
          <h1>Implementamos un <em>entorno de IA privado</em> para su firma.</h1>
          <p class="lede">
            Ciceron instala y pone en marcha un entorno de inteligencia artificial que pertenece a
            su firma —en su propia infraestructura o en una nube privada— y lo integra con los
            sistemas que ya usa. Word, Outlook, la búsqueda y el chat cubren el día a día; cada
            conexión adicional entra por alcance escrito.
          </p>
          <div class="hero-ctas">
            <a href="#pilot" class="btn btn-accent">Evaluar un piloto</a>
            <a href="/seguridad" class="btn btn-ghost hero-security-button"
              >Ver seguridad y datos</a
            >
          </div>
        </div>
        <figure class="product-shot product-shot-hero">
          <div class="product-frame">
            <img
              ngSrc="/product/chat-juridico.png"
              width="1024"
              height="640"
              alt="Chat jurídico de Ciceron comparando una cláusula de indemnización con el Código de Trabajo, con los documentos de origen citados."
              priority
              sizes="(min-width: 981px) 90vw, 92vw"
            />
          </div>
          <figcaption>Consulta con fuentes citadas. Entorno de demostración.</figcaption>
        </figure>
      </div>
    </section>

    <aside class="proof-strip" aria-label="Principios del producto">
      <div class="wrap">
        <ul>
          <li>
            <strong>Entorno privado</strong>
            <span>En la infraestructura de la firma o en una nube privada.</span>
          </li>
          <li>
            <strong>Integración conjunta</strong>
            <span>Reportes, dashboards e informes desde las plataformas que usted ya opera.</span>
          </li>
          <li>
            <strong>Acceso cotidiano</strong>
            <span>Word, Outlook, búsqueda y chat sobre ese mismo entorno.</span>
          </li>
          <li>
            <strong>Control profesional</strong>
            <span>El abogado revisa; el corpus y el alcance los define la firma.</span>
          </li>
        </ul>
      </div>
    </aside>

    <section class="pillars" id="platform">
      <div class="wrap">
        <div class="section-head">
          <h2>Qué se implementa: su entorno privado, nuestras herramientas y las suyas</h2>
          <p>
            Ciceron no es solo un complemento de Word. Lo que se implementa es un entorno de IA
            privado de la firma, y sobre él se articula el resto del trabajo.
          </p>
        </div>
        <ol class="arch-layers" aria-label="Capas de una implementación de Ciceron">
          <li>
            <span class="arch-step" aria-hidden="true">01</span>
            <strong>Entorno de IA privado</strong>
            <span>En su infraestructura o en una nube privada, bajo el alcance contratado.</span>
          </li>
          <li>
            <span class="arch-step" aria-hidden="true">02</span>
            <strong>Herramientas Ciceron</strong>
            <span>Word, Outlook, búsqueda y chat.</span>
          </li>
          <li>
            <span class="arch-step" aria-hidden="true">03</span>
            <strong>Sistemas de la firma</strong>
            <span>Reportes, dashboards e informes en sus propias plataformas.</span>
          </li>
        </ol>
        <div class="integration-promise">
          <p>
            La integración no obliga a abandonar las herramientas de la firma. Cuando el alcance lo
            incluye, el entorno alimenta reportes, dashboards e informes en las plataformas que el
            equipo ya utiliza —gestión, documentos u otras—, en lugar de un panel ajeno que deban
            aprender aparte.
          </p>
        </div>
        <div class="pillar-grid">
          <div
            class="pillar reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'pillar')"
            [class.in]="visibleElementsMap().get('pillar')"
          >
            <svg class="facet-icon" viewBox="0 0 34 34" aria-hidden="true" focusable="false">
              <polygon
                points="17,2 30,10 30,24 17,32 4,24 4,10"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.6"
              />
              <polygon points="17,2 17,32" stroke="#2ECC99" stroke-width="1" opacity="0.5" />
              <polygon points="4,10 30,10" stroke="#2ECC99" stroke-width="1" opacity="0.5" />
            </svg>
            <h3>El entorno corre donde la firma decida</h3>
            <p>
              Servidores propios o nube privada. No es un chatbot público: el modelo trabaja dentro
              del perímetro que su firma contrata.
            </p>
          </div>
          <div
            class="pillar reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'pillar-0')"
            [class.in]="visibleElementsMap().get('pillar-0')"
          >
            <svg class="facet-icon" viewBox="0 0 34 34" aria-hidden="true" focusable="false">
              <rect
                x="3"
                y="7"
                width="13"
                height="10"
                rx="1.5"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.6"
              />
              <rect
                x="18"
                y="17"
                width="13"
                height="10"
                rx="1.5"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.6"
              />
              <path
                d="M16 12 L18 22"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
            <h3>Lo integramos con lo que ya opera</h3>
            <p>
              Trabajamos con su equipo para conectar el entorno a los sistemas existentes. Eso abre
              la posibilidad de generar reportes, dashboards e informes desde esas mismas
              plataformas, con los permisos acordados por escrito.
            </p>
          </div>
          <div
            class="pillar reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'pillar-1')"
            [class.in]="visibleElementsMap().get('pillar-1')"
          >
            <svg class="facet-icon" viewBox="0 0 34 34" aria-hidden="true" focusable="false">
              <path
                d="M8 24 L10 16 L22 6 L26 10 L14 20 Z"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.6"
                stroke-linejoin="round"
              />
              <path d="M19 9 L23 13" stroke="#2ECC99" stroke-width="1.6" />
            </svg>
            <h3>Herramientas Ciceron sobre ese entorno</h3>
            <p>
              Las herramientas de Ciceron no son un producto aparte: consultan y redactan contra el
              mismo entorno privado que se integró a los sistemas de la firma.
            </p>
          </div>
          <div
            class="pillar reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'pillar-2')"
            [class.in]="visibleElementsMap().get('pillar-2')"
          >
            <svg class="facet-icon" viewBox="0 0 34 34" aria-hidden="true" focusable="false">
              <path
                d="M6 24 L12 12 L18 20 L23 8 L28 16"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3>Alcance, custodia y precio por escrito</h3>
            <p>
              Antes del piloto se fija dónde corre el entorno, qué se conecta y cuánto cuesta. No
              hay factura abierta por token.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="tools" id="tools">
      <div class="wrap">
        <div class="section-head">
          <h2>Las herramientas que Ciceron aporta sobre ese entorno</h2>
          <p>
            Estas cuatro cubren el trabajo diario. La integración con el resto de sus sistemas —
            incluida la generación de reportes, dashboards e informes en las plataformas de la firma
            — se define con su equipo; no se presume.
          </p>
        </div>
        <div class="tool-grid">
          <div
            id="redaccion"
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card')"
            [class.in]="visibleElementsMap().get('tool-card')"
          >
            <svg class="tool-icon" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
              <path
                d="M6 22 L8 16 L20 4 L24 8 L12 20 Z"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path d="M17 7 L21 11" stroke="#2ECC99" stroke-width="1.5" />
            </svg>
            <div class="tag">Complemento de Word</div>
            <h3>Redacción inteligente</h3>
            <p>
              Primeros borradores y cláusulas con el estilo y los modelos internos de la firma. El
              texto queda listo para que su equipo continúe el trabajo.
            </p>
          </div>
          <div
            id="busqueda"
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-0')"
            [class.in]="visibleElementsMap().get('tool-card-0')"
          >
            <svg class="tool-icon" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="7" fill="none" stroke="#2ECC99" stroke-width="1.5" />
              <path d="M17 17 L23 23" stroke="#2ECC99" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <div class="tag">Búsqueda</div>
            <h3>Búsqueda semántica interna</h3>
            <p>
              Localice expedientes, cláusulas y precedentes por significado, no solo por palabras.
              Cada resultado apunta al documento de origen.
            </p>
          </div>
          <div
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-1')"
            [class.in]="visibleElementsMap().get('tool-card-1')"
          >
            <svg class="tool-icon" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
              <rect
                x="4"
                y="6"
                width="16"
                height="12"
                rx="2"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.5"
              />
              <path
                d="M10 20 L12 18 L20 18 Q24 18 24 22 L24 23"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <div class="tag">Espacio de trabajo</div>
            <h3>Chat jurídico</h3>
            <p>
              Consultas de investigación y resumen que no parten de un archivo abierto. Responde con
              el corpus disponible; si no hay respaldo, lo indica.
            </p>
          </div>
          <div
            id="correo"
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-2')"
            [class.in]="visibleElementsMap().get('tool-card-2')"
          >
            <svg class="tool-icon" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
              <rect
                x="4"
                y="7"
                width="20"
                height="14"
                rx="1.5"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.5"
              />
              <path
                d="M5 9 L14 15 L23 9"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            <div class="tag">Complemento de Outlook</div>
            <h3>Asistente de correo</h3>
            <p>
              Borradores, seguimientos y resúmenes de hilos para el responsable del asunto. Ciceron
              no envía correos; el envío lo hace una persona autorizada.
            </p>
          </div>
        </div>
        <figure class="product-shot product-shot-on-dark">
          <div class="product-frame">
            <img
              ngSrc="/product/archivo-firma.png"
              width="1024"
              height="640"
              alt="Archivo de la firma en Ciceron, con contratos, reglamentos y extractos legales indexados por expediente de derecho laboral."
              sizes="(min-width: 981px) 90vw, 92vw"
            />
          </div>
          <figcaption>
            El archivo interno queda indexado por expediente y disponible para búsqueda y chat.
            Entorno de demostración.
          </figcaption>
        </figure>
        <p class="tools-footnote">
          La conexión a otros sistemas de la firma —incluidos reportes, dashboards e informes en sus
          plataformas actuales— se evalúa con su equipo. Las prioridades se contrastan con abogados
          panameños en ejercicio.
        </p>
      </div>
    </section>

    <section class="use-cases" id="use-cases">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow">Casos de uso para el piloto</div>
          <h2>Empiece por un trabajo concreto, no por toda la firma.</h2>
          <p>
            El piloto cubre tareas frecuentes, un corpus acotado y resultados que su equipo pueda
            revisar.
          </p>
        </div>
        <div class="case-grid">
          <article class="case-card">
            <div class="case-label">Contratos y transacciones</div>
            <h3>Recupere el lenguaje que su firma ya aprobó.</h3>
            <p>
              Modelos y cláusulas pertinentes, comparación de alternativas y un primer borrador a
              partir de documentos seleccionados.
            </p>
            <ul>
              <li>Cláusulas y modelos internos</li>
              <li>Comparación de versiones</li>
              <li>Primer borrador para el equipo</li>
            </ul>
          </article>
          <article class="case-card">
            <div class="case-label">Litigios y expedientes</div>
            <h3>Consulte un expediente sin perder la trazabilidad.</h3>
            <p>
              Actuaciones, escritos y cronologías con vínculo al documento usado, para preparar
              materiales de trabajo.
            </p>
            <ul>
              <li>Búsqueda dentro del expediente</li>
              <li>Cronologías y resúmenes</li>
              <li>Escritos y argumentos anteriores</li>
            </ul>
          </article>
          <article class="case-card">
            <div class="case-label">Investigación y conocimiento</div>
            <h3>Convierta el archivo interno en una fuente consultable.</h3>
            <p>
              Memorandos, opiniones, políticas y normas que la firma haya autorizado para el piloto.
            </p>
            <ul>
              <li>Consultas por significado</li>
              <li>Respuesta según el corpus disponible</li>
              <li>Documento de origen identificado</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="moat" id="panama">
      <div class="wrap">
        <div class="moat-grid">
          <div>
            <div class="eyebrow">La ventaja local</div>
            <h2 class="moat-title">Una IA jurídica diseñada desde Panamá y para Panamá.</h2>
            <p class="moat-copy">
              Ciceron se construye con abogados panameños en ejercicio, en español jurídico y sobre
              los documentos de cada firma. El entorno privado se integra a lo que ya existe; no
              sustituye de entrada los sistemas que la firma opera, y puede alimentar reportes,
              dashboards e informes en esas mismas plataformas.
            </p>
            <ul class="moat-list">
              <li>
                <span class="dot" aria-hidden="true"></span> Integraciones locales según
                disponibilidad técnica, permisos y alcance del piloto.
              </li>
              <li>
                <span class="dot" aria-hidden="true"></span> Expediente judicial electrónico solo
                con un mecanismo de acceso autorizado.
              </li>
              <li>
                <span class="dot" aria-hidden="true"></span> Redacción y búsqueda sobre modelos,
                escritos y expedientes de la firma.
              </li>
            </ul>
          </div>
          <div
            class="moat-panel reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'moat')"
            [class.in]="visibleElementsMap().get('moat')"
          >
            <div class="eyebrow">Qué permite cada integración</div>
            <div class="moat-row">
              <strong>DIGERPI · marcas y propiedad intelectual</strong>
              <span
                >Informe de antecedentes o vigilancia de marca, listo en la plataforma que la firma
                ya usa para el cliente.</span
              >
            </div>
            <div class="moat-row">
              <strong>Registro Público · propiedad y sociedades</strong>
              <span
                >Ficha societaria o de inmueble cruzada con el due diligence interno, en un reporte
                de la firma.</span
              >
            </div>
            <div class="moat-row">
              <strong>Expediente judicial electrónico</strong>
              <span
                >Cronología de actuaciones y plazos para el tablero de litigios, con un mecanismo de
                acceso autorizado.</span
              >
            </div>
            <div class="moat-row">
              <strong>Gestión de la práctica</strong>
              <span
                >Dashboards de asuntos, carga de trabajo y tiempos en el sistema de gestión que el
                equipo ya opera.</span
              >
            </div>
            <div class="moat-row">
              <strong>Firma electrónica</strong>
              <span
                >El borrador sale de Word y se firma en la herramienta de firma que la firma ya
                utiliza.</span
              >
            </div>
            <div class="moat-row">
              <strong>Facturación y contabilidad</strong>
              <span
                >Informes de honorarios, WIP o rentabilidad por práctica desde su sistema de
                facturación.</span
              >
            </div>
            <p class="integration-note">
              Son ejemplos de uso, no conectores dados por hechos. Cada integración se confirma por
              escrito antes de incluirla en el alcance del piloto.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="pilot" id="pilot">
      <div class="wrap">
        <div class="section-head pilot-section-head">
          <div class="eyebrow">Un proceso controlado</div>
          <h2>Así se convierte una promesa en una evaluación.</h2>
          <p>
            El piloto empieza cuando alcance, responsables y criterios de éxito están acordados.
          </p>
        </div>
        <ol class="pilot-steps">
          <li>
            <span class="step-number" aria-hidden="true">01</span>
            <h3>Definir</h3>
            <p>Práctica, tareas, sistemas a integrar, responsables y exclusiones.</p>
          </li>
          <li>
            <span class="step-number" aria-hidden="true">02</span>
            <h3>Autorizar</h3>
            <p>Corpus, acceso, tratamiento y salida de datos.</p>
          </li>
          <li>
            <span class="step-number" aria-hidden="true">03</span>
            <h3>Validar</h3>
            <p>Búsquedas y borradores con revisión de fuentes por la firma.</p>
          </li>
          <li>
            <span class="step-number" aria-hidden="true">04</span>
            <h3>Medir</h3>
            <p>Calidad, tiempo por tarea y adopción frente a la línea base.</p>
          </li>
        </ol>
        <div class="pilot-outcomes">
          <div>
            <span>Criterios sugeridos</span>
            <strong>Fuentes válidas · calidad revisada · tiempo por tarea · adopción</strong>
          </div>
          <div>
            <span>Resultado</span>
            <strong>Informe de evaluación y decisión de continuidad</strong>
          </div>
        </div>
        <div class="pilot-close">
          <h2>Evalúe un piloto con documentos reales de su firma.</h2>
          <a
            href="mailto:contacto@ciceron.io?subject=Evaluaci%C3%B3n%20de%20piloto%20Ciceron&body=Nombre%3A%0AFirma%3A%0ACargo%3A%0A%C3%81rea%20de%20pr%C3%A1ctica%3A%0ASistemas%20actuales%3A%0AObjetivo%20principal%3A"
            class="btn btn-accent"
            >Evaluar un piloto</a
          >
        </div>
      </div>
    </section>`,
})
export default class Home {
  private readonly seo = inject(SeoService);

  protected readonly visibleElementsMap = signal(new Map<string, boolean>());

  constructor() {
    this.seo.updatePage({
      title: 'Ciceron | Inteligencia artificial jurídica para firmas en Panamá',
      description:
        'Ciceron implementa un entorno de IA privado para su firma —en su propia infraestructura o en una nube privada—, lo integra con los sistemas que ya usa y aporta Word, Outlook, búsqueda y chat.',
      path: '/',
    });
  }

  protected onVisibilityChange(isVisible: boolean, elementId: string): void {
    this.visibleElementsMap.update((current) => {
      const newMap = new Map(current);
      newMap.set(elementId, isVisible);
      return newMap;
    });
  }
}
