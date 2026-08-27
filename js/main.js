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

function personajesVisibles() {
  return PERSONAJES.filter((p) => {
    const pasaFiltro = filtroPersonajes === "todos" || p.saga.includes(filtroPersonajes);
    const texto = (p.nombre + " " + p.epiteto + " " + p.resumen).toLowerCase();
    return pasaFiltro && texto.includes(busquedaPersonajes);
  });
}

function actualizarListadoPersonajes() {
  const visibles = personajesVisibles();
  pintar("#listado", visibles, tarjetaPersonaje, "No hay personajes con esos criterios. Probá otro filtro.");

  const contador = document.querySelector("#contador");
  if (contador) {
    contador.textContent = `${visibles.length} de ${PERSONAJES.length}`;
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

/* ---------- 6. Ficha de personaje ---------- */

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

/* ---------- Arranque ---------- */

document.addEventListener("DOMContentLoaded", () => {
  iniciarInterruptor();
  iniciarRevelado();
  iniciarPortada();
  iniciarPersonajes();
  iniciarLugares();
  iniciarFichaPersonaje();
  iniciarFichaLugar();
});
