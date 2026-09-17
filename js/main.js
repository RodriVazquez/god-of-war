/* ===========================================================
   MAIN — lo que se ejecuta en todas las páginas
   =========================================================== */

/* ---------- 1. Interruptor de saga ---------- */

const CLAVE_SAGA = "gow-saga";

function aplicarSaga(saga) {
  document.documentElement.dataset.saga = saga;
  localStorage.setItem(CLAVE_SAGA, saga);

  document.querySelectorAll("[data-cambiar-saga]").forEach((boton) => {
    boton.setAttribute("aria-pressed", String(boton.dataset.cambiarSaga === saga));
  });

  // Aviso a las secciones que reaccionan al cambio de saga (portada, etc.).
  window.dispatchEvent(new CustomEvent("saga-cambiada", { detail: { saga } }));
}

function iniciarInterruptor() {
  /* tema.js ya aplicó la saga antes del primer pintado; esto vuelve a
     pasarla para que el aria-pressed de los botones y el evento de
     cambio queden en su lugar. Se valida con la misma función, o un
     valor editado a mano entraría por acá después de que tema.js lo
     rechazó. */
  const guardada = localStorage.getItem(CLAVE_SAGA);
  aplicarSaga(sagaValida(guardada) ? guardada : "nordica");

  document.querySelectorAll("[data-cambiar-saga]").forEach((boton) => {
    boton.addEventListener("click", () => aplicarSaga(boton.dataset.cambiarSaga));
  });
}

/* ---------- 1b. Progreso del consejo de las valquirias ----------
   Estado compartido entre valquirias.html (donde se destraba) y la
   ficha de personaje (donde se valida el bloqueo de Sigrún). Una
   sola fuente de verdad, guardada bajo la clave gow-valquirias. */

const CLAVE_VALQUIRIAS = "gow-valquirias";

function valquiriasVisitadas() {
  try {
    const guardado = localStorage.getItem(CLAVE_VALQUIRIAS);
    return guardado ? JSON.parse(guardado) : [];
  } catch {
    return [];
  }
}

function consejoCompleto() {
  const corruptas = VALQUIRIAS.filter((v) => !v.reina).map((v) => v.id);
  const visitadas = valquiriasVisitadas();
  return corruptas.every((id) => visitadas.includes(id));
}

/* Única función de bloqueo. Se usa en la ficha de personaje y en
   la página del consejo. Hoy solo aplica a Sigrún, pero está pensada
   para poder sumar otros ids ocultos sin tocar los llamados. */
function estaBloqueado(id) {
  if (id === "sigrun") return !consejoCompleto();
  return false;
}

function marcarVisitada(id) {
  const visitadas = valquiriasVisitadas();
  if (!visitadas.includes(id)) {
    visitadas.push(id);
    localStorage.setItem(CLAVE_VALQUIRIAS, JSON.stringify(visitadas));
  }
}

function desbloquearConsejo() {
  const ids = VALQUIRIAS.filter((v) => !v.reina).map((v) => v.id);
  localStorage.setItem(CLAVE_VALQUIRIAS, JSON.stringify(ids));
}

function reiniciarConsejo() {
  localStorage.removeItem(CLAVE_VALQUIRIAS);
}

/* ---------- 1c. Menú plegable de la cabecera ----------
   Abajo de 960px la navegación no entra en la fila, así que se
   guarda detrás de un botón. El CSS la esconde con display:none,
   que además la saca del recorrido del tabulador mientras está
   cerrada: no queremos foco en enlaces invisibles. */

function iniciarMenu() {
  const boton = document.querySelector("#btn-menu");
  const cabecera = document.querySelector(".cabecera");
  if (!boton || !cabecera) return;

  const estaAbierto = () => boton.getAttribute("aria-expanded") === "true";

  function cerrarMenu() {
    cabecera.dataset.menu = "cerrado";
    boton.setAttribute("aria-expanded", "false");
    boton.setAttribute("aria-label", "Abrir el menú");
  }

  function abrirMenu() {
    cabecera.dataset.menu = "abierto";
    boton.setAttribute("aria-expanded", "true");
    boton.setAttribute("aria-label", "Cerrar el menú");
  }

  boton.addEventListener("click", () => (estaAbierto() ? cerrarMenu() : abrirMenu()));

  // Escape cierra y devuelve el foco al botón, que si no queda perdido.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && estaAbierto()) {
      cerrarMenu();
      boton.focus();
    }
  });

  // Elegido el destino, el panel ya no tiene razón de seguir abierto.
  const navegacion = cabecera.querySelector(".navegacion");
  if (navegacion) {
    navegacion.addEventListener("click", (e) => {
      if (e.target.closest("a")) cerrarMenu();
    });
  }

  // Si la pantalla crece, el panel desaparece por CSS. Sin esto el
  // botón volvería marcado como abierto al achicar de nuevo.
  const anchoGrande = window.matchMedia("(min-width: 961px)");
  anchoGrande.addEventListener("change", (e) => { if (e.matches) cerrarMenu(); });

  cerrarMenu();
}

/* ---------- 2. Revelado al hacer scroll ---------- */

function iniciarRevelado() {
  const elementos = document.querySelectorAll(".revelar");
  if (!elementos.length) return;

  // Si la persona pidió menos movimiento, mostramos todo de una.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elementos.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: .15 });

  elementos.forEach((el) => observador.observe(el));
}

/* ---------- 3. Página de inicio ---------- */

function sagaActiva() {
  return document.documentElement.dataset.saga || "nordica";
}

/* Los destacados de la portada son una selección a mano y no los
   primeros del array: el orden dice algo y no coincide con el de
   data-personajes.js. Para cambiar quiénes salen alcanza con tocar
   esta lista. */
const DESTACADOS = {
  griega:  ["kratos", "atenea", "zeus", "ares"],
  nordica: ["kratos", "atreus", "mimir", "freya"]
};

function pintarPersonajesDePortada() {
  const saga = sagaActiva();
  const ids = DESTACADOS[saga] || DESTACADOS.nordica;

  // Si un id no existe todavía lo salteamos, igual que en los chips:
  // preferimos mostrar tres tarjetas antes que romper la portada.
  const elegidos = ids
    .map((id) => PERSONAJES.find((p) => p.id === id))
    .filter(Boolean);

  pintar("#destacados", elegidos, tarjetaPersonaje, "Cargá personajes en js/data-personajes.js");

  const bajada = document.querySelector("#destacados-bajada");
  if (!bajada) return;

  bajada.textContent = saga === "griega"
    ? "El espartano y los tres olímpicos que le arruinaron la vida: la que lo usó, el que lo engendró y el que lo hizo lo que es."
    : "Un padre, un hijo, una cabeza que habla y una bruja desterrada. Los cuatro que sostienen el viaje por los Nueve Reinos.";
}

function pintarLugaresDePortada() {
  const saga = sagaActiva();
  const lugares = LUGARES.filter((l) => l.region === saga);
  pintar("#reinos", lugares, resumenLugar, "Cargá lugares en js/data-lugares.js");

  const encabezado = document.querySelector("#reinos-seccion .seccion__encabezado");
  if (!encabezado) return;

  const [rotulo, titulo, bajada] = encabezado.children;
  if (saga === "griega") {
    rotulo.textContent = "Geografía";
    titulo.textContent = "El mundo griego";
    bajada.textContent = "Ciudades, islas y montes por donde Kratos empuja su primera venganza.";
  } else {
    rotulo.textContent = "Geografía";
    titulo.textContent = "Los Nueve Reinos";
    bajada.textContent = "Ramas del Árbol del Mundo, conectadas por la sala de viaje del templo de Tyr.";
  }
}

function iniciarPortada() {
  if (!document.querySelector("#destacados")) return;

  pintarPersonajesDePortada();
  pintarLugaresDePortada();
  pintar("#cronologia", JUEGOS.slice().sort((a, b) => a.anio - b.anio), hitoJuego, "Cargá juegos en js/data-juegos.js");

  window.addEventListener("saga-cambiada", pintarPersonajesDePortada);
  window.addEventListener("saga-cambiada", pintarLugaresDePortada);
}

/* ---------- 4. Página de personajes: filtros + buscador ---------- */

/* Compara sin acentos. Nadie escribe "Mímir" con tilde en un buscador,
   y el sitio está lleno de nombres así: Sigrún, Hércules, Perséfone,
   Calíope, Jötunheim, Odín. Antes, buscar "mimir" no devolvía nada. */
function sinAcentos(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

let filtroPersonajes = "todos";
let busquedaPersonajes = "";

/* Los personajes marcados como oculta:true (hoy solo Sigrún) no
   aparecen nunca en el listado ni cuentan en el contador: se acceden
   solo por URL directa y con validación de bloqueo aparte. */
function personajesReales() {
  return PERSONAJES.filter((p) => !p.oculta);
}

function personajesVisibles() {
  return personajesReales().filter((p) => {
    const pasaFiltro = filtroPersonajes === "todos" || p.saga.includes(filtroPersonajes);
    const texto = sinAcentos(p.nombre + " " + p.epiteto + " " + p.resumen);
    return pasaFiltro && texto.includes(sinAcentos(busquedaPersonajes));
  });
}

/* La colección de valquirias aparece como tarjeta 21 al final del
   listado. Participa del filtro (es nórdica) y del buscador. */
function coleccionValquiriasEncaja() {
  const pasaFiltro = filtroPersonajes === "todos" || filtroPersonajes === "nordica";
  const texto = sinAcentos("las valquirias consejo colección nórdica");
  return pasaFiltro && texto.includes(sinAcentos(busquedaPersonajes));
}

function actualizarListadoPersonajes() {
  const visibles = personajesVisibles();
  const conColeccion = coleccionValquiriasEncaja();

  const partes = visibles.map(tarjetaPersonaje);
  if (conColeccion) {
    partes.push(tarjetaColeccion(
      "valquirias.html",
      "Las Valquirias",
      "Las nueve integrantes del consejo. Recorrelas de a una para desbloquear a Sigrún.",
      "assets/img/valquirias.jpg"
    ));
  }

  const destino = document.querySelector("#listado");
  if (destino) {
    destino.innerHTML = partes.length
      ? partes.join("")
      : `<li class="vacio">No hay personajes con esos criterios. Probá otro filtro.</li>`;
  }

  const total = personajesReales().length + 1;      // +1 por la colección
  const cantidad = visibles.length + (conColeccion ? 1 : 0);

  const contador = document.querySelector("#contador");
  if (contador) {
    contador.textContent = `${cantidad} de ${total}`;
  }
}

function iniciarPersonajes() {
  if (!document.querySelector("#listado")) return;

  document.querySelectorAll("[data-filtro]").forEach((boton) => {
    boton.addEventListener("click", () => {
      filtroPersonajes = boton.dataset.filtro;
      document.querySelectorAll("[data-filtro]").forEach((b) => {
        b.setAttribute("aria-pressed", String(b === boton));
      });
      actualizarListadoPersonajes();
    });
  });

  const buscador = document.querySelector("#buscador");
  if (buscador) {
    buscador.addEventListener("input", (e) => {
      busquedaPersonajes = e.target.value.trim().toLowerCase();
      actualizarListadoPersonajes();
    });
  }

  actualizarListadoPersonajes();
}

/* ---------- 5. Página de lugares: filtros + buscador ---------- */

let filtroLugares = "todos";
let busquedaLugares = "";

function lugaresVisibles() {
  return LUGARES.filter((l) => {
    const pasaFiltro = filtroLugares === "todos" || l.region === filtroLugares;
    const texto = sinAcentos(l.nombre + " " + l.tipo + " " + l.resumen);
    return pasaFiltro && texto.includes(sinAcentos(busquedaLugares));
  });
}

function actualizarListadoLugares() {
  const visibles = lugaresVisibles();
  pintar("#listado-lugares", visibles, tarjetaLugar, "No hay lugares con esos criterios. Probá otro filtro.");

  const contador = document.querySelector("#contador-lugares");
  if (contador) {
    contador.textContent = `${visibles.length} de ${LUGARES.length}`;
  }
}

function iniciarLugares() {
  if (!document.querySelector("#listado-lugares")) return;

  document.querySelectorAll("[data-filtro-lugares]").forEach((boton) => {
    boton.addEventListener("click", () => {
      filtroLugares = boton.dataset.filtroLugares;
      document.querySelectorAll("[data-filtro-lugares]").forEach((b) => {
        b.setAttribute("aria-pressed", String(b === boton));
      });
      actualizarListadoLugares();
    });
  });

  const buscador = document.querySelector("#buscador-lugares");
  if (buscador) {
    buscador.addEventListener("input", (e) => {
      busquedaLugares = e.target.value.trim().toLowerCase();
      actualizarListadoLugares();
    });
  }

  actualizarListadoLugares();
}

/* ---------- 6. Página de cronología: toggle de orden ---------- */

let ordenCronologia = "salida";  // "salida" | "historia"

function juegosOrdenados() {
  const copia = JUEGOS.slice();
  if (ordenCronologia === "historia") {
    return copia.sort((a, b) => a.ordenHistoria - b.ordenHistoria);
  }
  return copia.sort((a, b) => a.anio - b.anio);
}

function actualizarCronologia() {
  pintar("#cronologia-completa", juegosOrdenados(), hitoJuego, "Cargá juegos en js/data-juegos.js");

  const contador = document.querySelector("#contador-juegos");
  if (contador) contador.textContent = `${JUEGOS.length} juegos`;

  const rotulo = document.querySelector("#cronologia-rotulo");
  const bajada = document.querySelector("#cronologia-bajada");
  if (ordenCronologia === "historia") {
    if (rotulo) rotulo.textContent = "Orden de la historia";
    if (bajada) bajada.textContent = "La misma vida, puesta en orden. Así se ve de dónde venía Kratos cuando le juró su vida a Ares, y cuánto le costó llegar a poder contarle la verdad a su hijo.";
  } else {
    if (rotulo) rotulo.textContent = "Orden de salida";
    if (bajada) bajada.textContent = "Dieciocho años de una sola historia contada en desorden. La saga saltó de consola en consola, se fue para atrás cuando quiso y cambió de mitología a mitad de camino, pero nunca cambió de protagonista.";
  }
}

function iniciarCronologia() {
  if (!document.querySelector("#cronologia-completa")) return;

  document.querySelectorAll("[data-orden]").forEach((boton) => {
    boton.addEventListener("click", () => {
      ordenCronologia = boton.dataset.orden;
      document.querySelectorAll("[data-orden]").forEach((b) => {
        b.setAttribute("aria-pressed", String(b === boton));
      });
      actualizarCronologia();
    });
  });

  actualizarCronologia();
}

/* ---------- 7. Ficha de personaje ---------- */

/* Convierte los ids de lugares vinculados a chips clicables.
   Si el id no matchea (todavía no está en data-lugares), lo
   omite en silencio: no queremos enlaces rotos. */
function chipsLugares(ids) {
  if (!ids || !ids.length) return "";
  const chips = ids
    .map((id) => LUGARES.find((l) => l.id === id))
    .filter(Boolean)
    .map((l) => `<a class="chip" href="lugar.html?id=${escapar(l.id)}">${escapar(l.nombre)}</a>`)
    .join("");

  if (!chips) return "";
  return `
    <div class="ficha__vinculos">
      <p class="rotulo">Lugares vinculados</p>
      <div class="chips">${chips}</div>
    </div>`;
}

/* Espejo del anterior: los personajes ligados a un lugar. */
function chipsPersonajes(ids) {
  if (!ids || !ids.length) return "";
  const chips = ids
    .map((id) => PERSONAJES.find((p) => p.id === id))
    .filter(Boolean)
    .map((p) => `<a class="chip" href="personaje.html?id=${escapar(p.id)}">${escapar(p.nombre)}</a>`)
    .join("");

  if (!chips) return "";
  return `
    <div class="ficha__vinculos">
      <p class="rotulo">Personajes vinculados</p>
      <div class="chips">${chips}</div>
    </div>`;
}

function iniciarFichaPersonaje() {
  const contenedor = document.querySelector("#ficha-personaje");
  if (!contenedor) return;

  const id = new URLSearchParams(location.search).get("id");
  const p = PERSONAJES.find((x) => x.id === id);

  if (!p) {
    contenedor.innerHTML = `
      <div class="vacio">
        <p>Ese personaje no existe todavía.</p>
        <p><a class="volver" href="personajes.html">Ver todos los personajes</a></p>
      </div>`;
    return;
  }

  /* Bloqueo: Sigrún (o cualquier futuro personaje oculto) no se
     puede ver hasta cumplir su condición de desbloqueo. La misma
     función estaBloqueado() se usa en valquirias.html. */
  if (estaBloqueado(p.id)) {
    document.title = `Ficha bloqueada — God of War`;
    contenedor.innerHTML = `
      ${migasDePan("Personajes", "personajes.html", "Ficha bloqueada")}
      <div class="vacio">
        <p class="rotulo">Ficha bloqueada</p>
        <p>Esta valquiria aparece solo cuando se cierra el consejo. Recorré a las otras ocho en la página de las valquirias y volvé después.</p>
        <p style="margin-top: var(--e-2)"><a class="volver" href="valquirias.html">→ Ir al consejo de las valquirias</a></p>
      </div>`;
    return;
  }

  document.title = `${p.nombre} — God of War`;

  const filas = Object.entries(p.datos)
    .map(([clave, valor]) => `<li><span class="clave">${escapar(clave)}</span><span>${escapar(valor)}</span></li>`)
    .join("");

  contenedor.innerHTML = `
    ${migasDePan("Personajes", "personajes.html", p.nombre)}
    <div class="ficha__cuerpo">
      ${marcoImagen(p.imagen, p.nombre)}
      <div>
        <h1>${escapar(p.nombre)}</h1>
        <p class="rotulo">${escapar(p.epiteto)}</p>
        <div class="ficha__texto">${parrafos(p.texto)}</div>
        <ul class="ficha__datos">${filas}</ul>
        ${chipsLugares(p.lugares)}
      </div>
    </div>`;
}

/* ---------- 7. Ficha de lugar ---------- */

function iniciarFichaLugar() {
  const contenedor = document.querySelector("#ficha-lugar");
  if (!contenedor) return;

  const id = new URLSearchParams(location.search).get("id");
  const l = LUGARES.find((x) => x.id === id);

  if (!l) {
    contenedor.innerHTML = `
      <div class="vacio">
        <p>Ese lugar no existe todavía.</p>
        <p><a class="volver" href="lugares.html">Ver todos los lugares</a></p>
      </div>`;
    return;
  }

  document.title = `${l.nombre} — God of War`;

  const filas = Object.entries(l.datos)
    .map(([clave, valor]) => `<li><span class="clave">${escapar(clave)}</span><span>${escapar(valor)}</span></li>`)
    .join("");

  const region = l.region === "griega" ? "Saga griega" : "Saga nórdica";

  contenedor.innerHTML = `
    ${migasDePan("Lugares", "lugares.html", l.nombre)}
    <div class="ficha__cuerpo">
      ${marcoImagen(l.imagen, l.nombre)}
      <div>
        <h1>${escapar(l.nombre)}</h1>
        <p class="rotulo">${region} · ${escapar(l.tipo)}</p>
        <div class="ficha__texto">${parrafos(l.texto)}</div>
        <ul class="ficha__datos">${filas}</ul>
        ${chipsPersonajes(l.personajes)}
      </div>
    </div>`;
}

/* ---------- 8b. Galería con lightbox ---------- */

let filtroGaleria = "todos";
let galeriaVisiblesCache = [];
let galeriaIndiceActivo = -1;
let galeriaOrigenFoco = null;   // botón que abrió el lightbox, para devolver el foco al cerrar

function galeriaVisibles() {
  if (typeof GALERIA === "undefined") return [];
  return GALERIA.filter((g) => filtroGaleria === "todos" || g.saga === filtroGaleria);
}

function actualizarListadoGaleria() {
  galeriaVisiblesCache = galeriaVisibles();

  const destino = document.querySelector("#galeria-listado");
  if (!destino) return;

  if (!galeriaVisiblesCache.length) {
    destino.innerHTML = `<li class="vacio">No hay imágenes con ese filtro todavía.</li>`;
  } else {
    destino.innerHTML = galeriaVisiblesCache.map((g, i) => itemGaleria(g, i)).join("");
  }

  const contador = document.querySelector("#contador-galeria");
  if (contador) contador.textContent = `${galeriaVisiblesCache.length} imágenes`;
}

function pintarLightbox() {
  const g = galeriaVisiblesCache[galeriaIndiceActivo];
  if (!g) return;

  const marco = document.querySelector("#lightbox-marco");

  // Sin esto, una foto 16:9 se mostraba dentro de un marco vertical.
  const proporciones = { ancha: "16 / 9", alta: "4 / 5", cuadrada: "1 / 1" };
  marco.style.setProperty("--proporcion", proporciones[g.formato] || "4 / 5");

  marco.innerHTML = g.imagen
    ? `<img src="${escapar(g.imagen)}" alt="${escapar(g.titulo)}">`
    : `<p class="lightbox__marco__falta">Falta la imagen ${escapar(g.id)}</p>`;

  document.querySelector("#lightbox-titulo").textContent = g.titulo;
  document.querySelector("#lightbox-juego").textContent = g.juego;
  document.querySelector("#lightbox-descripcion").textContent = g.descripcion;

  document.querySelector("#lightbox-anterior").disabled = galeriaIndiceActivo === 0;
  document.querySelector("#lightbox-siguiente").disabled = galeriaIndiceActivo === galeriaVisiblesCache.length - 1;
}

function abrirLightbox(indice, botonOrigen) {
  galeriaIndiceActivo = indice;
  galeriaOrigenFoco = botonOrigen;

  const lightbox = document.querySelector("#lightbox");
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";

  pintarLightbox();

  // Foco al botón cerrar para no tener foco perdido.
  document.querySelector("#lightbox-cerrar").focus();
}

function cerrarLightbox() {
  const lightbox = document.querySelector("#lightbox");
  lightbox.hidden = true;
  document.body.style.overflow = "";
  galeriaIndiceActivo = -1;

  if (galeriaOrigenFoco) galeriaOrigenFoco.focus();
  galeriaOrigenFoco = null;
}

function moverLightbox(delta) {
  const nuevo = galeriaIndiceActivo + delta;
  if (nuevo < 0 || nuevo >= galeriaVisiblesCache.length) return;
  galeriaIndiceActivo = nuevo;
  pintarLightbox();
}

/* Atrapamos el foco dentro del modal mientras está abierto. */
function atraparFoco(e) {
  if (galeriaIndiceActivo < 0) return;
  if (e.key !== "Tab") return;
  const lightbox = document.querySelector("#lightbox");
  const focusables = lightbox.querySelectorAll("button:not([disabled])");
  if (!focusables.length) return;
  const primero = focusables[0];
  const ultimo = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === primero) {
    e.preventDefault();
    ultimo.focus();
  } else if (!e.shiftKey && document.activeElement === ultimo) {
    e.preventDefault();
    primero.focus();
  }
}

function iniciarGaleria() {
  if (!document.querySelector("#galeria-listado")) return;

  document.querySelectorAll("[data-filtro-galeria]").forEach((boton) => {
    boton.addEventListener("click", () => {
      filtroGaleria = boton.dataset.filtroGaleria;
      document.querySelectorAll("[data-filtro-galeria]").forEach((b) => {
        b.setAttribute("aria-pressed", String(b === boton));
      });
      actualizarListadoGaleria();
    });
  });

  document.querySelector("#galeria-listado").addEventListener("click", (e) => {
    const boton = e.target.closest("[data-galeria-indice]");
    if (!boton) return;
    abrirLightbox(Number(boton.dataset.galeriaIndice), boton);
  });

  document.querySelector("#lightbox-cerrar").addEventListener("click", cerrarLightbox);
  document.querySelector("#lightbox-anterior").addEventListener("click", () => moverLightbox(-1));
  document.querySelector("#lightbox-siguiente").addEventListener("click", () => moverLightbox(1));

  document.querySelector("#lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") cerrarLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (galeriaIndiceActivo < 0) return;
    if (e.key === "Escape") cerrarLightbox();
    else if (e.key === "ArrowLeft") moverLightbox(-1);
    else if (e.key === "ArrowRight") moverLightbox(1);
    else atraparFoco(e);
  });

  actualizarListadoGaleria();
}

/* ---------- 9. Ficha de juego ---------- */

/* Navegación anterior/siguiente en la ficha: usa el orden de salida
   como referencia (es el más intuitivo y el default de la cronología). */
function vecinosDeJuego(id) {
  const orden = JUEGOS.slice().sort((a, b) => a.anio - b.anio);
  const i = orden.findIndex((j) => j.id === id);
  return {
    anterior: i > 0 ? orden[i - 1] : null,
    siguiente: i >= 0 && i < orden.length - 1 ? orden[i + 1] : null
  };
}

function bloqueNavegacionJuegos(id) {
  const { anterior, siguiente } = vecinosDeJuego(id);
  const izq = anterior
    ? `<a class="nav-juegos__enlace" href="juego.html?id=${escapar(anterior.id)}">
         <span class="rotulo">← Anterior</span>
         <span>${escapar(anterior.titulo)} (${anterior.anio})</span>
       </a>`
    : `<span></span>`;
  const der = siguiente
    ? `<a class="nav-juegos__enlace nav-juegos__enlace--der" href="juego.html?id=${escapar(siguiente.id)}">
         <span class="rotulo">Siguiente →</span>
         <span>${escapar(siguiente.titulo)} (${siguiente.anio})</span>
       </a>`
    : `<span></span>`;

  return `<nav class="nav-juegos" aria-label="Anterior y siguiente juego">${izq}${der}</nav>`;
}

function iniciarFichaJuego() {
  const contenedor = document.querySelector("#ficha-juego");
  if (!contenedor) return;

  const id = new URLSearchParams(location.search).get("id");
  const j = JUEGOS.find((x) => x.id === id);

  if (!j) {
    contenedor.innerHTML = `
      <div class="vacio">
        <p>Ese juego no existe todavía.</p>
        <p><a class="volver" href="cronologia.html">Ver la cronología completa</a></p>
      </div>`;
    return;
  }

  document.title = `${j.titulo} (${j.anio}) — God of War`;

  const datos = {
    "Año de salida": j.anio,
    "Orden en la historia": `${j.ordenHistoria} de ${JUEGOS.length}`,
    "Saga": j.saga === "griega" ? "Griega" : "Nórdica",
    "Plataforma": j.plataforma
  };
  const filas = Object.entries(datos)
    .map(([clave, valor]) => `<li><span class="clave">${escapar(clave)}</span><span>${escapar(valor)}</span></li>`)
    .join("");

  const region = j.saga === "griega" ? "Saga griega" : "Saga nórdica";

  contenedor.innerHTML = `
    ${migasDePan("Cronología", "cronologia.html", `${j.titulo} (${j.anio})`)}
    <div class="ficha__cuerpo">
      ${marcoImagen(j.imagen, j.titulo)}
      <div>
        <h1>${escapar(j.titulo)}</h1>
        <p class="rotulo">${region} · ${j.anio}</p>
        <div class="ficha__texto">${parrafos(j.texto)}</div>
        <ul class="ficha__datos">${filas}</ul>
      </div>
    </div>
    ${bloqueNavegacionJuegos(j.id)}`;
}

/* ---------- 10. Página de contacto ----------
   Valida en español, marca los campos con aria-invalid y manda el foco
   al primero que falla. El envío está simulado: enviarMensaje() espera
   un rato y da la entrega por buena. Cuando haya un destino real (un
   correo, un servicio de formularios), se cambia solo esa función y el
   resto de la página queda igual. */

/* Cada campo declara su propia regla. Devolver "" significa que pasó.
   Tenerlas juntas evita el if gigante dentro del submit. */
const REGLAS_CONTACTO = [
  {
    id: "campo-nombre",
    revisar: (v) => v.trim() ? "" : "Hace falta un nombre, aunque sea inventado."
  },
  {
    id: "campo-correo",
    revisar: (v) => {
      if (!v.trim()) return "Sin correo el cuervo no sabe volver.";
      // Alcanza con algo@algo.algo: no queremos rechazar direcciones raras
      // pero válidas por culpa de una expresión demasiado estricta.
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
        ? ""
        : "Eso no parece un correo. Revisalo.";
    }
  },
  {
    id: "campo-motivo",
    revisar: (v) => v ? "" : "Elegí un motivo de la lista."
  },
  {
    id: "campo-mensaje",
    revisar: (v) => {
      if (!v.trim()) return "El mensaje está vacío.";
      return v.trim().length >= 10 ? "" : "Contanos un poco más: al menos diez caracteres.";
    }
  },
  {
    id: "campo-juramento",
    revisar: (_, campo) => campo.checked ? "" : "Hay que jurarlo: es la única forma de soltar el cuervo."
  }
];

function mostrarErrorContacto(campo, mensaje) {
  const destino = document.querySelector("#error-" + campo.id.replace("campo-", ""));
  if (destino) destino.textContent = mensaje;
  campo.setAttribute("aria-invalid", String(Boolean(mensaje)));
}

function limpiarErroresContacto() {
  REGLAS_CONTACTO.forEach(({ id }) => {
    const campo = document.querySelector("#" + id);
    if (campo) mostrarErrorContacto(campo, "");
  });
}

/* Devuelve el primer campo que falló, o null si está todo bien. */
function validarContacto() {
  let primerFallo = null;

  REGLAS_CONTACTO.forEach(({ id, revisar }) => {
    const campo = document.querySelector("#" + id);
    if (!campo) return;
    const error = revisar(campo.value, campo);
    mostrarErrorContacto(campo, error);
    if (error && !primerFallo) primerFallo = campo;
  });

  return primerFallo;
}

function bandoElegido() {
  const marcado = document.querySelector("input[name='bando']:checked");
  return marcado ? marcado.value : "nordica";
}

function componerMensaje() {
  const valor = (id) => document.querySelector("#" + id).value.trim();

  return {
    nombre: valor("campo-nombre"),
    correo: valor("campo-correo"),
    motivo: valor("campo-motivo"),
    bando: bandoElegido() === "griega" ? "Saga griega" : "Saga nórdica",
    mensaje: valor("campo-mensaje")
  };
}

/* El envío está simulado: espera un momento y resuelve siempre bien.
   Es el único punto del sitio que tocaría el mundo exterior, así que
   para conectar un destino real alcanza con cambiar esta función. */
function enviarMensaje(datos) {
  return new Promise((resolver) => setTimeout(() => resolver(datos), 900));
}

function mostrarAcuseContacto(datos) {
  const formulario = document.querySelector("#formulario-contacto");
  const acuse = document.querySelector("#acuse-contacto");

  document.querySelector("#acuse-texto").textContent =
    datos.nombre + ", tu mensaje sobre «" + datos.motivo + "» ya está en camino. " +
    "Si hace falta contestarte, la respuesta llegará a " + datos.correo + ".";

  formulario.hidden = true;
  acuse.hidden = false;
  acuse.focus();
}

function volverAlFormularioContacto() {
  const formulario = document.querySelector("#formulario-contacto");
  const acuse = document.querySelector("#acuse-contacto");

  acuse.hidden = true;
  formulario.hidden = false;
  formulario.reset();
  limpiarErroresContacto();
  sincronizarBandoContacto();
  document.querySelector("#campo-nombre").focus();
}

/* El bando y el interruptor de la cabecera miran el mismo dato.
   Si se cambia arriba, el radio tiene que acompañar. */
function sincronizarBandoContacto() {
  const radio = document.querySelector("input[name='bando'][value='" + sagaActiva() + "']");
  if (radio) radio.checked = true;
}

function iniciarContacto() {
  const formulario = document.querySelector("#formulario-contacto");
  if (!formulario) return;

  sincronizarBandoContacto();
  window.addEventListener("saga-cambiada", sincronizarBandoContacto);

  document.querySelectorAll("input[name='bando']").forEach((radio) => {
    radio.addEventListener("change", () => aplicarSaga(radio.value));
  });

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const primerFallo = validarContacto();
    if (primerFallo) {
      primerFallo.focus();
      return;
    }

    // Mientras el mensaje "viaja", el botón avisa y se bloquea. Sin eso
    // parece que el clic no hizo nada y la gente lo aprieta de nuevo.
    const boton = formulario.querySelector("button[type='submit']");
    const textoOriginal = boton.textContent;
    boton.disabled = true;
    boton.textContent = "Soltando el cuervo…";

    enviarMensaje(componerMensaje()).then((datos) => {
      boton.disabled = false;
      boton.textContent = textoOriginal;
      mostrarAcuseContacto(datos);
    });
  });

  // Reset borra los valores pero no los mensajes de error: los sacamos
  // a mano, después de que el navegador haya limpiado los campos.
  formulario.addEventListener("reset", () => {
    setTimeout(() => {
      limpiarErroresContacto();
      sincronizarBandoContacto();
    }, 0);
  });

  document.querySelector("#btn-otro-mensaje")
    .addEventListener("click", volverAlFormularioContacto);
}

/* ---------- 11. Mapa del sitio ----------
   Se arma desde los data-*.js para que no haya que tocarlo cada vez
   que se suma una ficha. Las páginas, en cambio, están escritas en el
   HTML: son estructura, no contenido, y así la lista principal sigue
   estando aunque el JavaScript no cargue. */

function pintarGrupoDelMapa(selector, selectorCuenta, entradas) {
  const destino = document.querySelector(selector);
  if (destino) destino.innerHTML = entradas.join("");

  const cuenta = document.querySelector(selectorCuenta);
  if (cuenta) cuenta.textContent = entradas.length;
}

function iniciarMapa() {
  if (!document.querySelector("#mapa-personajes")) return;

  // Sigrún no va: está marcada como oculta y listarla acá destaparía
  // el secreto del consejo antes de tiempo.
  pintarGrupoDelMapa("#mapa-personajes", "#cuenta-personajes",
    personajesReales().map((p) => entradaMapa("personaje.html?id=" + p.id, p.nombre, p.epiteto)));

  pintarGrupoDelMapa("#mapa-lugares", "#cuenta-lugares",
    LUGARES.map((l) => entradaMapa("lugar.html?id=" + l.id, l.nombre, l.tipo)));

  pintarGrupoDelMapa("#mapa-juegos", "#cuenta-juegos",
    JUEGOS.slice().sort((a, b) => a.anio - b.anio)
      .map((j) => entradaMapa("juego.html?id=" + j.id, j.titulo, String(j.anio))));

  /* Las valquirias no tienen ficha propia: viven en el panel de
     valquirias.html, que ahora acepta ?id=. Sigrún sí aparece en esta
     lista porque la página ya la muestra con candado, pero sin enlace
     hasta que el consejo esté cerrado. */
  pintarGrupoDelMapa("#mapa-valquirias", "#cuenta-valquirias",
    VALQUIRIAS.map((v) => {
      const bloqueada = v.reina && !consejoCompleto();
      return entradaMapa(
        bloqueada ? "" : "valquirias.html?id=" + v.id,
        v.nombre,
        bloqueada ? "bloqueada" : (v.reina ? "reina" : v.reino)
      );
    }));
}

/* ---------- 12. Menú desplegable de la navegación ----------

   Tres de las seis secciones tienen fichas adentro y abren un panel
   con la lista completa; galería y contacto son una página sola y no
   tienen nada que desplegar, e inicio es el punto de partida. Que la
   flechita aparezca en tres y no en seis es información, no una
   inconsistencia: marca cuáles tienen contenido abajo.

   Se arma desde acá y no en el HTML por lo mismo de siempre: son doce
   páginas con la misma cabecera, y sumar un personaje no puede obligar
   a editar doce archivos. */

const MENUS_NAV = [
  {
    menu: "personajes",
    pagina: "personajes.html",
    verTodo: "Ver todos los personajes",
    /* Sigrún queda afuera, igual que en el mapa: listarla acá
       destaparía el secreto del consejo desde cualquier página. La
       tarjeta de la colección sí va, porque personajes.html la
       muestra como una más de la rejilla. */
    entradas: () => personajesReales()
      .map((p) => entradaMapa("personaje.html?id=" + p.id, p.nombre, p.epiteto))
      .concat(entradaMapa("valquirias.html", "Las Valquirias", "colección"))
  },
  {
    menu: "lugares",
    pagina: "lugares.html",
    verTodo: "Ver todos los lugares",
    entradas: () => LUGARES.map((l) => entradaMapa("lugar.html?id=" + l.id, l.nombre, l.tipo))
  },
  {
    menu: "cronologia",
    pagina: "cronologia.html",
    verTodo: "Ver la cronología completa",
    /* Por año de salida, que es el orden en que se abre la página. */
    entradas: () => JUEGOS.slice().sort((a, b) => a.anio - b.anio)
      .map((j) => entradaMapa("juego.html?id=" + j.id, j.titulo, String(j.anio)))
  }
];

function iniciarMenuNavegacion() {
  const nav = document.querySelector("#menu-principal");
  if (!nav) return;

  /* Abajo de 960px la navegación entera ya vive detrás del botón
     hamburguesa: un desplegable adentro de otro desplegable, en una
     pantalla de 360px, no ayuda a nadie. El CSS lo esconde y esto
     evita además que se abra por un toque mal interpretado.

     Se consulta al abrir y no al arrancar, así redimensionar la
     ventana no deja el menú en el estado equivocado. */
  const escritorio = window.matchMedia("(min-width: 961px) and (hover: hover)");

  let abierto = null;
  let temporizador = 0;

  function disparador(item) {
    return item.querySelector(".navegacion__disparador");
  }

  function abrir(item) {
    if (!escritorio.matches) return;
    clearTimeout(temporizador);
    if (abierto && abierto !== item) cerrar(abierto);
    item.dataset.abierto = "si";
    disparador(item).setAttribute("aria-expanded", "true");
    abierto = item;
  }

  function cerrar(item) {
    if (!item) return;
    delete item.dataset.abierto;
    disparador(item).setAttribute("aria-expanded", "false");
    if (abierto === item) abierto = null;
  }

  MENUS_NAV.forEach((def) => {
    /* Se busca por data-menu y no por el href: el atributo es lo que
       ya dibujó la flechita, así que si alguno no coincide se nota
       enseguida en vez de quedar una flecha sin panel. */
    const enlace = nav.querySelector('a[data-menu="' + def.menu + '"]');
    if (!enlace) return;

    const entradas = def.entradas();
    if (!entradas.length) return;

    const id = "menu-" + def.menu;

    /* El enlace pasa a vivir adentro de un contenedor junto al panel.
       Sigue siendo el mismo nodo, así que conserva su aria-current y
       todo lo que ya le puso el CSS. */
    const item = document.createElement("div");
    item.className = "navegacion__item";
    enlace.replaceWith(item);
    item.appendChild(enlace);

    enlace.classList.add("navegacion__disparador");
    enlace.setAttribute("aria-expanded", "false");
    enlace.setAttribute("aria-controls", id);

    item.insertAdjacentHTML("beforeend", panelMenu(id, entradas, def.pagina, def.verTodo));

    /* Entre el enlace y el panel hay un hueco —el panel cuelga del
       borde de la cabecera, no del enlace—, así que bajar el mouse
       dispara un mouseleave. La demora corta cubre ese tramo: sin
       ella el panel se cierra justo cuando lo vas a usar. */
    item.addEventListener("mouseenter", () => abrir(item));
    item.addEventListener("mouseleave", () => {
      clearTimeout(temporizador);
      temporizador = setTimeout(() => cerrar(item), 180);
    });

    /* Con teclado no hay hover: se abre al entrar el foco y se cierra
       recién cuando el foco se va del item entero, no de un enlace
       suelto de la lista. */
    item.addEventListener("focusin", () => abrir(item));
    item.addEventListener("focusout", (evento) => {
      if (!item.contains(evento.relatedTarget)) cerrar(item);
    });

    /* Escape cierra y devuelve el foco al disparador, o quedaría
       perdido en un panel que ya no se ve. */
    item.addEventListener("keydown", (evento) => {
      if (evento.key !== "Escape" || !item.dataset.abierto) return;
      cerrar(item);
      disparador(item).focus();
    });
  });

  /* Al achicar la ventana el panel abierto tiene que irse solo: el
     CSS lo esconde, pero el aria-expanded quedaría mintiendo. */
  escritorio.addEventListener("change", () => cerrar(abierto));
}

/* ---------- Arranque ---------- */

document.addEventListener("DOMContentLoaded", () => {
  iniciarInterruptor();
  iniciarMenu();
  iniciarMenuNavegacion();
  iniciarRevelado();
  iniciarPortada();
  iniciarPersonajes();
  iniciarLugares();
  iniciarCronologia();
  iniciarGaleria();
  iniciarFichaPersonaje();
  iniciarFichaLugar();
  iniciarFichaJuego();
  iniciarContacto();
  iniciarMapa();
});
