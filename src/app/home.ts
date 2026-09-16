import { Component, inject, signal } from '@angular/core';
import { SeoService } from './seo';
import { ObserveVisibilityDirective } from './visibility';

@Component({
  selector: 'app-home',
  imports: [ObserveVisibilityDirective],
  template: `<section class="hero" id="top">
      <div class="hero-inner">
        <div>
          <div class="eyebrow">Inteligencia artificial jurídica privada para firmas panameñas</div>
          <h1>Investigue y redacte en Word con sus precedentes y <em>fuentes verificables.</em></h1>
          <p class="lede">
            Ciceron ayuda a su equipo a encontrar criterios, preparar primeros borradores y revisar
            documentos desde Word y Outlook, utilizando el corpus autorizado por su firma. Cuando
            existe una fuente pertinente, la respuesta incluye su referencia para facilitar la
            revisión del abogado.
          </p>
          <div class="hero-ctas">
            <a href="#pilot" class="btn btn-accent">Evaluar un piloto</a>
            <a href="/seguridad" class="btn btn-ghost hero-security-button"
              >Ver seguridad y datos</a
            >
          </div>
          <div class="hero-note">
            Diseñado para responder con referencias al documento fuente y revisión profesional.
          </div>
        </div>
        <div class="hero-visual">
          <svg
            id="facetSVG"
            viewBox="0 0 85 99"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <!-- exact facet geometry from the Ciceron mark, recolored to the site palette -->
            <g id="facetGroup">
              <path
                class="facet"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9997 24.5371V44.2874H60.5371V38.6618L84.9997 24.5371Z"
                fill="#2ECC99"
              />
              <path
                class="facet"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9943 24.5373L60.5317 38.662L42.4939 28.2495V0L84.9943 24.5373Z"
                fill="#2ECC99"
                opacity="0.9"
              />
              <path
                class="facet"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.4998 0V28.2495L24.4675 38.662L0.00488281 24.5373L42.4998 0Z"
                fill="#2ECC99"
                opacity="0.8"
              />
              <path
                class="facet"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.4627 38.6618V59.4859L0 73.6094V24.5371L24.4627 38.6618Z"
                fill="#2ECC99"
                opacity="0.7"
              />
              <path
                class="facet"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.4948 69.8981V98.1473L0 73.6089L24.4627 59.4854L42.4948 69.8981Z"
                fill="#2ECC99"
                opacity="0.6"
              />
              <path
                class="facet"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9943 73.6089L42.4939 98.1473V69.8981L60.5317 59.4854L84.9943 73.6089Z"
                fill="#2ECC99"
                opacity="0.5"
              />
              <path
                class="facet"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9997 53.8623V73.6114L60.5371 59.4879V53.8623H84.9997Z"
                fill="#2ECC99"
                opacity="0.4"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>

    <aside class="proof-strip" aria-label="Principios del producto">
      <div class="wrap">
        <ul>
          <li>
            <strong>Corpus autorizado</strong>
            <span>La firma define qué documentos participan.</span>
          </li>
          <li>
            <strong>Referencias revisables</strong>
            <span>La fuente se identifica cuando existe respaldo pertinente.</span>
          </li>
          <li>
            <strong>Control profesional</strong>
            <span>El abogado revisa, aprueba y decide.</span>
          </li>
          <li>
            <strong>Alcance por escrito</strong>
            <span>Datos, integraciones y criterios se acuerdan antes del piloto.</span>
          </li>
        </ul>
      </div>
    </aside>

    <section class="pillars" id="platform">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow">Por qué las firmas cambian</div>
          <h2>Cuatro cosas que una plataforma de IA legal le debe a una firma</h2>
          <p>
            Cada afirmación a continuación es una decisión de diseño, no una frase de mercadeo: cada
            una responde a algo concreto en cómo está construido Ciceron.
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
            <h3>Vive donde usted redacta</h3>
            <p>
              Los complementos de Word y Outlook llevan la redacción y la investigación a los
              documentos y correos donde ya trabajan los abogados, sin una aplicación aparte que
              recordar abrir.
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
                x="8"
                y="14"
                width="18"
                height="14"
                rx="1"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.6"
              />
              <path
                d="M12 14 V9 a5 5 0 0 1 10 0 v5"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.6"
              />
            </svg>
            <h3>Sus documentos siguen siendo suyos</h3>
            <p>
              Las opciones de despliegue local y privado mantienen los expedientes de los clientes
              fuera de infraestructura compartida: custodia de datos que la firma controla, no una
              que deba confiarle a un proveedor.
            </p>
          </div>
          <div
            class="pillar reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'pillar-1')"
            [class.in]="visibleElementsMap().get('pillar-1')"
          >
            <svg class="facet-icon" viewBox="0 0 34 34" aria-hidden="true" focusable="false">
              <circle cx="17" cy="17" r="13" fill="none" stroke="#2ECC99" stroke-width="1.6" />
              <path
                d="M17 9 V17 L23 21"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
            <h3>Tiempo recuperado, de forma medible</h3>
            <p>
              El piloto mide cuánto tiempo requieren la búsqueda, los primeros borradores y la
              clasificación del correo antes y después de incorporar Ciceron, con criterios
              acordados junto a su firma.
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
            <h3>Una factura que se puede predecir</h3>
            <p>
              El alcance, la infraestructura y el precio se acuerdan antes del despliegue. El modelo
              comercial no depende de una factura abierta por cada token utilizado.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="tools" id="tools">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow">La plataforma</div>
          <h2>Capacidades para el trabajo diario, con respaldo verificable</h2>
          <p>
            Las consultas pueden partir de documentos, expedientes y fuentes autorizadas por su
            firma. Ciceron está diseñado para incluir referencias al documento pertinente cuando el
            corpus contiene respaldo suficiente, de modo que el abogado pueda revisar, confirmar y
            decidir.
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
            <svg class="facet-mini" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
              <polygon
                points="11,1 20,6 20,16 11,21 2,16 2,6"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.4"
              />
            </svg>
            <div class="tag">Complemento de Word</div>
            <h3>Redacción Inteligente</h3>
            <p>
              Elabore primeros borradores, propuestas de cláusulas y documentos jurídicos utilizando
              el estilo, precedentes y mejores prácticas propias de su firma, apoyado en documentos
              previamente aprobados, contratos, escritos y modelos internos para producir contenido
              coherente con la práctica jurídica de su equipo.
            </p>
          </div>
          <div
            id="busqueda"
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-0')"
            [class.in]="visibleElementsMap().get('tool-card-0')"
          >
            <svg class="facet-mini" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
              <polygon
                points="11,1 20,6 20,16 11,21 2,16 2,6"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.4"
              />
            </svg>
            <div class="tag">Búsqueda</div>
            <h3>Búsqueda Semántica Interna</h3>
            <p>
              Encuentre rápidamente un expediente, una cláusula, un precedente o un documento
              relevante dentro de los archivos de la firma, comprendiendo el significado, el
              contexto y la intención de la consulta. Cada resultado incorpora la referencia al
              documento fuente para facilitar su verificación.
            </p>
          </div>
          <div
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-1')"
            [class.in]="visibleElementsMap().get('tool-card-1')"
          >
            <svg class="facet-mini" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
              <polygon
                points="11,1 20,6 20,16 11,21 2,16 2,6"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.4"
              />
            </svg>
            <div class="tag">Espacio de trabajo</div>
            <h3>Chat jurídico en la web</h3>
            <p>
              Un espacio centralizado para consultas de investigación, análisis y redacción que no
              necesariamente parten de un documento específico. Formule preguntas, compare
              criterios, solicite resúmenes o prepare borradores, siempre con una regla fundamental:
              las respuestas deben apoyarse en fuentes identificables y citadas cuando exista
              documentación interna relevante.
            </p>
          </div>
          <div
            id="correo"
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-2')"
            [class.in]="visibleElementsMap().get('tool-card-2')"
          >
            <svg class="facet-mini" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
              <polygon
                points="11,1 20,6 20,16 11,21 2,16 2,6"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.4"
              />
            </svg>
            <div class="tag">Complemento de Outlook</div>
            <h3>Asistente de Correo</h3>
            <p>
              Redacte respuestas, prepare mensajes de seguimiento y resuma hilos extensos de correo
              electrónico para revisión del abogado responsable. La plataforma no envía
              comunicaciones de forma autónoma. Todo correo debe ser revisado, aprobado y enviado
              por una persona autorizada. Esta validación permanece visible dentro de la interfaz;
              nunca se presume.
            </p>
          </div>
          <div
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-3')"
            [class.in]="visibleElementsMap().get('tool-card-3')"
          >
            <svg class="facet-mini" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
              <polygon
                points="11,1 20,6 20,16 11,21 2,16 2,6"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.4"
              />
            </svg>
            <div class="tag phase2">Fase 2</div>
            <h3>Automatización de Flujos de Trabajo</h3>
            <p>
              Flujos de trabajo de varios pasos y documentos generados como resultado, desarrollados
              una vez que la plataforma central haya demostrado su valor en el uso diario.
            </p>
          </div>
          <div
            class="tool-card roadmap-card"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-4')"
            [class.in]="visibleElementsMap().get('tool-card-4')"
          >
            <div class="tag roadmap-tag">Desarrollo conjunto</div>
            <h3 class="roadmap-title">
              Construida junto a una firma aliada, para firmas como la suya
            </h3>
            <p>
              Las prioridades del producto se contrastan con abogados panameños en ejercicio para
              responder a flujos de trabajo y criterios de revisión reales.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="use-cases" id="use-cases">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow">Casos de uso para el piloto</div>
          <h2>Empiece por un trabajo concreto, no por toda la firma.</h2>
          <p>
            El primer piloto debe concentrarse en tareas frecuentes, un corpus autorizado y
            resultados que su equipo pueda revisar. Estos son ejemplos de alcance, no capacidades
            que se presumen disponibles sin validación.
          </p>
        </div>
        <div class="case-grid">
          <article class="case-card">
            <div class="case-label">Contratos y transacciones</div>
            <h3>Recupere el lenguaje que su firma ya aprobó.</h3>
            <p>
              Evalúe si Ciceron puede encontrar modelos y cláusulas pertinentes, comparar
              alternativas y preparar un primer borrador basado en documentos seleccionados.
            </p>
            <ul>
              <li>Localización de cláusulas y modelos internos</li>
              <li>Comparación de versiones y criterios</li>
              <li>Primer borrador sujeto a revisión profesional</li>
            </ul>
          </article>
          <article class="case-card">
            <div class="case-label">Litigios y expedientes</div>
            <h3>Consulte un expediente sin perder la trazabilidad.</h3>
            <p>
              Pruebe búsquedas sobre actuaciones, escritos y documentos del caso para preparar
              cronologías, resúmenes y materiales de trabajo con referencias revisables.
            </p>
            <ul>
              <li>Búsqueda semántica dentro del expediente</li>
              <li>Cronologías y resúmenes para revisión</li>
              <li>Recuperación de argumentos y escritos anteriores</li>
            </ul>
          </article>
          <article class="case-card">
            <div class="case-label">Investigación y conocimiento</div>
            <h3>Convierta el archivo interno en una fuente consultable.</h3>
            <p>
              Valide consultas sobre memorandos, opiniones, políticas, modelos y fuentes normativas
              que la firma haya autorizado para el piloto.
            </p>
            <ul>
              <li>Consultas por significado y contexto</li>
              <li>Respuesta condicionada al corpus disponible</li>
              <li>Referencia al documento utilizado</li>
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
              Las plataformas internacionales de inteligencia artificial jurídica suelen diseñarse
              para sistemas de derecho anglosajón (common law), grandes mercados angloparlantes y
              tareas genéricas de revisión documental. No siempre reflejan la realidad operativa del
              ejercicio legal en Panamá: sus instituciones, trámites, lenguaje jurídico y prácticas
              profesionales.
            </p>
            <p class="moat-copy">
              Ciceron se desarrolla desde el primer día junto con abogados panameños en ejercicio,
              para responder a la manera en que realmente trabajan las firmas locales.
            </p>
            <p class="moat-copy">
              No es una plataforma extranjera traducida al español. Es una solución construida para
              integrar la investigación, la redacción, la consulta documental y la gestión diaria de
              la práctica jurídica panameña.
            </p>
            <ul class="moat-list">
              <li>
                <span class="dot" aria-hidden="true"></span> Integraciones locales evaluadas según
                la disponibilidad técnica, los permisos y el alcance acordado para cada piloto.
              </li>
              <li>
                <span class="dot" aria-hidden="true"></span> Posibilidad de incorporar información
                del expediente judicial electrónico cuando exista un mecanismo de acceso autorizado.
              </li>
              <li>
                <span class="dot" aria-hidden="true"></span> Redacción diseñada primero en español,
                con lenguaje jurídico formal y adaptable al estilo de cada firma.
              </li>
              <li>
                <span class="dot" aria-hidden="true"></span> Búsqueda y análisis basados en los
                propios modelos, escritos, contratos y expedientes de la firma.
              </li>
              <li>
                <span class="dot" aria-hidden="true"></span> Referencias al documento fuente para
                facilitar la revisión y validación profesional cuando el corpus contiene una
                respuesta pertinente.
              </li>
            </ul>
          </div>
          <div
            class="moat-panel reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'moat')"
            [class.in]="visibleElementsMap().get('moat')"
          >
            <div class="eyebrow">Integraciones locales en evaluación</div>
            <div class="moat-row">
              <span>DIGERPI · marcas y propiedad intelectual</span
              ><span class="reg">Por validar</span>
            </div>
            <div class="moat-row">
              <span>Registro Público · propiedad y sociedades</span
              ><span class="reg">Por validar</span>
            </div>
            <div class="moat-row">
              <span>Expediente judicial electrónico</span><span class="reg">Acceso autorizado</span>
            </div>
            <div class="moat-row">
              <span>Gestión de la práctica</span><span class="reg">Hoja de ruta</span>
            </div>
            <div class="moat-row">
              <span>Firma electrónica</span><span class="reg">Hoja de ruta</span>
            </div>
            <div class="moat-row">
              <span>Facturación y contabilidad</span><span class="reg">Hoja de ruta</span>
            </div>
            <p class="integration-note">
              Ninguna integración se presume disponible. Su viabilidad se confirma por escrito antes
              de incluirla en el alcance del piloto.
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
            La duración y dedicación se definen después de revisar el corpus y el caso de uso. El
            piloto comienza únicamente cuando alcance, responsables y criterios de éxito están
            acordados.
          </p>
        </div>
        <ol class="pilot-steps">
          <li>
            <span class="step-number" aria-hidden="true">01</span>
            <h3>Definir</h3>
            <p>Elegir una práctica, tareas concretas, responsables y exclusiones.</p>
          </li>
          <li>
            <span class="step-number" aria-hidden="true">02</span>
            <h3>Autorizar</h3>
            <p>Seleccionar el corpus y documentar acceso, tratamiento y salida de datos.</p>
          </li>
          <li>
            <span class="step-number" aria-hidden="true">03</span>
            <h3>Validar</h3>
            <p>Probar búsquedas y borradores con revisión de fuentes por abogados de la firma.</p>
          </li>
          <li>
            <span class="step-number" aria-hidden="true">04</span>
            <h3>Medir</h3>
            <p>Comparar calidad, referencias, tiempo por tarea y adopción contra la línea base.</p>
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
        <div class="pilot-card">
          <div>
            <div class="eyebrow pilot-eyebrow">Comience con sus propios expedientes</div>
            <h2>Compruébelo primero con documentos reales de su firma.</h2>
            <p>
              El piloto se ejecuta sobre una única área de práctica y un conjunto controlado de
              documentos reales de su firma. El objetivo es que pueda comprobar resultados en las
              dos capacidades centrales de la plataforma: Búsqueda Semántica Interna y Redacción
              Inteligente.
            </p>
            <p>
              No requiere iniciar con un proyecto largo de integración antes de ver valor. Primero
              se configura un entorno controlado, se seleccionan los documentos autorizados y se
              valida el desempeño con su propio trabajo jurídico.
            </p>
          </div>
          <div class="pilot-actions">
            <div class="eyebrow">Próximos pasos</div>
            <a
              href="mailto:contacto@ciceron.io?subject=Evaluaci%C3%B3n%20de%20piloto%20Ciceron&body=Nombre%3A%0AFirma%3A%0ACargo%3A%0A%C3%81rea%20de%20pr%C3%A1ctica%3A%0AObjetivo%20principal%3A"
              class="btn btn-accent pilot-button"
              >Solicitar evaluación del piloto</a
            >
            <p class="pilot-action-note">
              Conozca los requisitos de documentación, seguridad, alcance, tiempos y criterios de
              evaluación.
            </p>
            <a
              href="mailto:contacto@ciceron.io?subject=Conversaci%C3%B3n%20inicial%20sobre%20Ciceron"
              class="btn btn-ghost pilot-button pilot-button-secondary"
              >Coordinar una conversación</a
            >
            <p class="pilot-action-note">
              Coordine una conversación inicial para definir el área de práctica, el tipo de
              documentos y los objetivos que desea validar con Ciceron.
            </p>
          </div>
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
        'Ciceron integra búsqueda y redacción jurídica en Word y Outlook para firmas en Panamá, con fuentes verificables, control profesional y pilotos acotados.',
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
