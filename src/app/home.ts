import { Component, signal } from '@angular/core';
import { ObserveVisibilityDirective } from './visibility';

@Component({
  selector: 'app-home',
  imports: [ObserveVisibilityDirective],
  template: `<section class="hero" id="top">
      <div class="hero-inner">
        <div>
          <div class="eyebrow">Inteligencia artificial legal personalizada localmente</div>
          <h1>
            Construida dentro de los documentos que su firma ya usa, <em>no alrededor de ellos.</em>
          </h1>
          <p class="lede">
            Ciceron redacta, busca y responde desde dentro de Word y Outlook, con base en los
            propios expedientes de su firma y/o legislación local y actualizada, en los términos que
            usted defina y con un costo que nunca la sorprende a fin de mes.
          </p>
          <div class="hero-ctas">
            <a href="#pilot" class="btn btn-accent">Solicitar la lista del piloto</a>
            <a
              href="#platform"
              class="btn btn-ghost"
              style="border-color:rgba(255,255,255,0.28); color:#fff;"
              >Ver cómo funciona</a
            >
          </div>
          <div class="hero-note">SIN CITA, SIN RESPUESTA — regla aplicada en cada respuesta</div>
        </div>
        <div class="hero-visual">
          <svg id="facetSVG" viewBox="0 0 85 99" xmlns="http://www.w3.org/2000/svg">
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
            <svg class="facet-icon" viewBox="0 0 34 34">
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
            <svg class="facet-icon" viewBox="0 0 34 34">
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
            <svg class="facet-icon" viewBox="0 0 34 34">
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
              La búsqueda, los primeros borradores y la clasificación del correo pasan de horas a
              minutos, medidos con una métrica real y defendible de tiempo ahorrado, no una
              estimación del proveedor.
            </p>
          </div>
          <div
            class="pillar reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'pillar-2')"
            [class.in]="visibleElementsMap().get('pillar-2')"
          >
            <svg class="facet-icon" viewBox="0 0 34 34">
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
              Infraestructura fija en lugar de facturación en la nube sin límite por token: ninguna
              factura sorpresa después de un mes intenso de redacción y revisión documental.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="tools" id="tools">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow">La plataforma</div>
          <h2>Cinco herramientas. Un solo sistema con respaldo verificable</h2>
          <p>
            Cada respuesta parte de los documentos, expedientes y registros propios de su firma. La
            inteligencia artificial analiza, redacta y resume sobre una base documental validable,
            identificando y citando la fuente correspondiente para que el abogado pueda revisar,
            confirmar y decidir con confianza.
          </p>
        </div>
        <div class="tool-grid">
          <div
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card')"
            [class.in]="visibleElementsMap().get('tool-card')"
          >
            <svg class="facet-mini" viewBox="0 0 22 22">
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
              el estilo, precedentes y mejores prácticas propias de su firma, apoydo en documentos
              previamente aprobados, contratos, escritos y modelos internos para producir contenido
              coherente con la práctica jurídica de su equipo
            </p>
          </div>
          <div
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-0')"
            [class.in]="visibleElementsMap().get('tool-card-0')"
          >
            <svg class="facet-mini" viewBox="0 0 22 22">
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
            <svg class="facet-mini" viewBox="0 0 22 22">
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
            class="tool-card reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-2')"
            [class.in]="visibleElementsMap().get('tool-card-2')"
          >
            <svg class="facet-mini" viewBox="0 0 22 22">
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
            <svg class="facet-mini" viewBox="0 0 22 22">
              <polygon
                points="11,1 20,6 20,16 11,21 2,16 2,6"
                fill="none"
                stroke="#2ECC99"
                stroke-width="1.4"
              />
            </svg>
            <div class="tag tag phase2">Fase 2</div>
            <h3>Automatización de Flujos de Trabajo</h3>
            <p>
              Flujos de trabajo de varios pasos y documentos generados como resultado, desarrollados
              una vez que la plataforma central haya demostrado su valor en el uso diario.
            </p>
          </div>
          <div
            class="tool-card"
            style="display:flex; flex-direction:column; justify-content:center; background:transparent; border-style:dashed;"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'tool-card-4')"
            [class.in]="visibleElementsMap().get('tool-card-4')"
          >
            <div class="tag" style="opacity:0.7;">Hoja de ruta</div>
            <h3 style="font-size:17px;">
              Construida junto a una firma aliada, para firmas como la suya
            </h3>
            <p>
              Cada herramienta anterior se define por una alianza activa con abogados panameños en
              ejercicio, no se construye de forma aislada para luego venderse.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="moat" id="panama">
      <div class="wrap">
        <div class="moat-grid">
          <div>
            <div class="eyebrow">La ventaja local</div>
            <h2
              style="font-size:clamp(26px,3vw,34px); font-weight:600; color:var(--dark-teal); margin:14px 0 0; line-height:1.18;"
            >
              Las plataformas globales se detienen en la frontera. Ciceron comienza allí.
            </h2>
            <p
              style="font-size:15.5px; color:rgba(19,25,27,0.66); line-height:1.6; margin-top:16px;"
            >
              Las plataformas internacionales de inteligencia artificial jurídica suelen diseñarse
              para sistemas de common law, grandes mercados angloparlantes y tareas genéricas de
              revisión documental. Por ello, no siempre comprenden la realidad operativa del
              ejercicio legal en Panamá: sus registros, instituciones, trámites, lenguaje jurídico y
              prácticas profesionales.
            </p>
            <p
              style="font-size:15.5px; color:rgba(19,25,27,0.66); line-height:1.6; margin-top:16px;"
            >
              Ciceron se desarrolla desde el primer día junto con abogados panameños en ejercicio,
              para responder a la manera en que realmente trabajan las firmas locales.
            </p>
            <p
              style="font-size:15.5px; color:rgba(19,25,27,0.66); line-height:1.6; margin-top:16px;"
            >
              No es una plataforma extranjera traducida al español. Es una solución construida para
              integrar la investigación, la redacción, la consulta documental y la gestión diaria de
              la práctica jurídica panameña.
            </p>
            <ul class="moat-list">
              <li>
                <span class="dot"></span> Consultas directas a registros e información relevante de
                Panamá, sin depender de procesos diseñados para sistemas jurídicos extranjeros.
              </li>
              <li>
                <span class="dot"></span> Consulta del estado de expedientes judiciales electrónicos
                desde el mismo entorno en el que el abogado investiga, redacta y revisa documentos.
              </li>
              <li>
                <span class="dot"></span> Redacción diseñada primero en español, con lenguaje
                jurídico formal y adaptable al estilo de cada firma.
              </li>
              <li>
                <span class="dot"></span> Búsqueda y análisis basados en los propios documentos,
                precedentes, contratos y expedientes de la firma.
              </li>
              <li>
                <span class="dot"></span> Respuestas respaldadas con referencias claras a los
                documentos fuente, para facilitar la revisión y validación profesional.
              </li>
            </ul>
          </div>
          <div
            class="moat-panel reveal"
            appObserveVisibility
            (visible)="onVisibilityChange($event, 'moat')"
            [class.in]="visibleElementsMap().get('moat')"
            [class.reveal]="visibleElementsMap().get('moat')"
          >
            <div class="eyebrow">Integraciones con registros y tribunales</div>
            <div class="moat-row">
              <span>Registro de marcas y propiedad intelectual</span
              ><span class="reg">DIGERPI</span>
            </div>
            <div class="moat-row">
              <span>Registros de propiedad y sociedades</span
              ><span class="reg">Registro Público</span>
            </div>
            <div class="moat-row">
              <span>Estado de expedientes</span
              ><span class="reg">Expediente judicial electrónico</span>
            </div>
            <div class="moat-row">
              <span>Gestión de la práctica</span><span class="reg">Sincronización</span>
            </div>
            <div class="moat-row"><span>Firma</span><span class="reg">DocuSign</span></div>
            <div class="moat-row">
              <span>Facturación y contabilidad</span><span class="reg">Conector</span>
            </div>
            <p style="font-size: 12px; opacity: 50%; font-style: italic">
              Las integraciones estarán sujetas a disponibilidad técnica, permisos de acceso,
              autorización de las instituciones correspondientes y requisitos de seguridad,
              confidencialidad y cumplimiento aplicables.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="pilot" id="pilot">
      <div class="wrap">
        <div class="pilot-card">
          <div>
            <div class="eyebrow" style="color:var(--sage-pale);">
              Comience con sus propios expedientes
            </div>
            <h2>Compruébelo primero con documentos reales de su firma.</h2>
            <p>
              El piloto se ejecuta sobre una única área de práctica y un conjunto controlado de
              documentos reales de su firma. El objetivo es que pueda comprobar resultados en las
              dos capacidades centrales de la plataforma (Búsqueda interna y Redacción Asistida)
            </p>
            <br />
            <p>
              No requiere iniciar con un proyecto largo de integración antes de ver valor. Primero
              se configura un entorno controlado, se seleccionan los documentos autorizados y se
              valida el desempeño con su propio trabajo jurídico.
            </p>
          </div>
          <div class="pilot-actions">
            <div class="eyebrow">Próximos pasos</div>
            <a href="#" class="btn btn-accent" style="justify-content:center;"
              >Solicitar la lista del piloto</a
            >
            <p style="font-size: 12px; style: italic">
              Conozca los requisitos de documentación, seguridad, alcance, tiempos y criterios de
              evaluación.
            </p>
            <a
              href="#"
              class="btn btn-ghost"
              style="justify-content:center; border-color:rgba(255,255,255,0.28); color:#fff;"
              >Hablemos primero</a
            >
            <p style="font-size: 12px; style: italic">
              Coordine una conversación inicial para definir el área de práctica, el tipo de
              documentos y los objetivos que desea validar con Ciceron.
            </p>
          </div>
        </div>
      </div>
    </section>`,
})
export default class Home {
  visibleElementsMap = signal(new Map<string, boolean>([]));

  onVisibilityChange(isVisible: boolean, elementId: string): void {
    this.visibleElementsMap.update((current) => {
      const newMap = new Map(current);
      newMap.set(elementId, isVisible);
      return newMap;
    });
  }
}
