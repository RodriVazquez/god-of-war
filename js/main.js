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

function iniciarPortada() {
  if (!document.querySelector("#destacados")) return;

  pintar("#destacados", PERSONAJES.slice(0, 4), tarjetaPersonaje, "Cargá personajes en js/data.js");
  pintar("#reinos", REINOS.slice(0, 6), tarjetaReino, "Cargá reinos en js/data.js");
  pintar("#cronologia", JUEGOS, hitoJuego, "Cargá juegos en js/data.js");
}

/* ---------- 4. Página de personajes: filtros + buscador ---------- */

let filtroActivo = "todos";
let busqueda = "";

function personajesVisibles() {
  return PERSONAJES.filter((p) => {
    const pasaFiltro = filtroActivo === "todos" || p.saga.includes(filtroActivo);
    const texto = (p.nombre + " " + p.epiteto + " " + p.resumen).toLowerCase();
    return pasaFiltro && texto.includes(busqueda);
  });
}

function actualizarListado() {
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
      filtroActivo = boton.dataset.filtro;
      document.querySelectorAll("[data-filtro]").forEach((b) => {
        b.setAttribute("aria-pressed", String(b === boton));
      });
      actualizarListado();
    });
  });

  const buscador = document.querySelector("#buscador");
  if (buscador) {
    buscador.addEventListener("input", (e) => {
      busqueda = e.target.value.trim().toLowerCase();
      actualizarListado();
    });
  }

  actualizarListado();
}

/* ---------- 5. Página de detalle: lee ?id= de la URL ---------- */

function iniciarDetalle() {
  const contenedor = document.querySelector("#ficha");
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
    ${marcoImagen(p.imagen, p.nombre)}
    <div>
      <a class="volver" href="personajes.html">← Personajes</a>
      <h1>${escapar(p.nombre)}</h1>
      <p class="rotulo">${escapar(p.epiteto)}</p>
      <p style="margin-top: var(--e-2)">${escapar(p.texto)}</p>
      <ul class="ficha__datos">${filas}</ul>
    </div>`;
}

/* ---------- Arranque ---------- */

document.addEventListener("DOMContentLoaded", () => {
  iniciarInterruptor();
  iniciarRevelado();
  iniciarPortada();
  iniciarPersonajes();
  iniciarDetalle();
});
