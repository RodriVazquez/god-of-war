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
  const guardada = localStorage.getItem(CLAVE_SAGA) || "nordica";
  aplicarSaga(guardada);

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

function pintarLugaresDePortada() {
  const saga = sagaActiva();
  const lugares = LUGARES.filter((l) => l.region === saga);
  pintar("#reinos", lugares, resumenLugar, "Cargá lugares en js/data-lugares.js");

  // Título y bajada acompañan al cambio de tema.
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

  pintar("#destacados", PERSONAJES.slice(0, 4), tarjetaPersonaje, "Cargá personajes en js/data-personajes.js");
  pintarLugaresDePortada();
  pintar("#cronologia", JUEGOS.slice().sort((a, b) => a.anio - b.anio), hitoJuego, "Cargá juegos en js/data-juegos.js");

  // Cuando se cambia la saga desde el interruptor, repintamos los lugares.
  window.addEventListener("saga-cambiada", pintarLugaresDePortada);
}

/* ---------- 4. Página de personajes: filtros + buscador ---------- */

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
    const texto = (p.nombre + " " + p.epiteto + " " + p.resumen).toLowerCase();
    return pasaFiltro && texto.includes(busquedaPersonajes);
  });
}

/* La colección de valquirias aparece como tarjeta 21 al final del
   listado. Participa del filtro (es nórdica) y del buscador. */
function coleccionValquiriasEncaja() {
  const pasaFiltro = filtroPersonajes === "todos" || filtroPersonajes === "nordica";
  const texto = "las valquirias consejo colección nórdica";
  return pasaFiltro && texto.includes(busquedaPersonajes);
}

function actualizarListadoPersonajes() {
  const visibles = personajesVisibles();
  const conColeccion = coleccionValquiriasEncaja();

  const partes = visibles.map(tarjetaPersonaje);
  if (conColeccion) {
    partes.push(tarjetaColeccion(
      "valquirias.html",
      "Las Valquirias",
      "Las nueve integrantes del consejo. Recorrelas de a una para desbloquear a Sigrún."
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
    const texto = (l.nombre + " " + l.tipo + " " + l.resumen).toLowerCase();
    return pasaFiltro && texto.includes(busquedaLugares);
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
    if (bajada) bajada.textContent = "Los mismos nueve juegos, ordenados por cuándo ocurren en la vida de Kratos. Ascension abre; Valhalla cierra.";
  } else {
    if (rotulo) rotulo.textContent = "Orden de salida";
    if (bajada) bajada.textContent = "De la PlayStation 2 a la PS5. El orden de salida no coincide con el orden en que ocurren los hechos.";
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
        <p style="margin-top: var(--e-2)">${escapar(p.texto)}</p>
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
        <p style="margin-top: var(--e-2)">${escapar(l.texto)}</p>
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
  marco.innerHTML = g.imagen
    ? `<img src="${escapar(g.imagen)}" alt="${escapar(g.titulo)}">`
    : `<p class="lightbox__marco__falta">Falta la imagen ${escapar(g.id)}</p>`;

  document.querySelector("#lightbox-titulo").textContent = g.titulo;
  document.querySelector("#lightbox-fuente").textContent = `Fuente: ${g.fuente}`;

  // Deshabilita las flechas en los extremos.
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

  // Devolvemos el foco al item que se había abierto.
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

  // Filtros
  document.querySelectorAll("[data-filtro-galeria]").forEach((boton) => {
    boton.addEventListener("click", () => {
      filtroGaleria = boton.dataset.filtroGaleria;
      document.querySelectorAll("[data-filtro-galeria]").forEach((b) => {
        b.setAttribute("aria-pressed", String(b === boton));
      });
      actualizarListadoGaleria();
    });
  });

  // Click en un item abre el lightbox.
  document.querySelector("#galeria-listado").addEventListener("click", (e) => {
    const boton = e.target.closest("[data-galeria-indice]");
    if (!boton) return;
    abrirLightbox(Number(boton.dataset.galeriaIndice), boton);
  });

  // Controles del lightbox
  document.querySelector("#lightbox-cerrar").addEventListener("click", cerrarLightbox);
  document.querySelector("#lightbox-anterior").addEventListener("click", () => moverLightbox(-1));
  document.querySelector("#lightbox-siguiente").addEventListener("click", () => moverLightbox(1));

  // Click fuera del contenido cierra
  document.querySelector("#lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") cerrarLightbox();
  });

  // Teclado global
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
        <p style="margin-top: var(--e-2)">${escapar(j.texto)}</p>
        <ul class="ficha__datos">${filas}</ul>
      </div>
    </div>
    ${bloqueNavegacionJuegos(j.id)}`;
}

/* ---------- Arranque ---------- */

document.addEventListener("DOMContentLoaded", () => {
  iniciarInterruptor();
  iniciarRevelado();
  iniciarPortada();
  iniciarPersonajes();
  iniciarLugares();
  iniciarCronologia();
  iniciarGaleria();
  iniciarFichaPersonaje();
  iniciarFichaLugar();
  iniciarFichaJuego();
});
