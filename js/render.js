/* ===========================================================
   RENDER — funciones que convierten datos en HTML.
   Ninguna toca la pantalla directamente: devuelven texto.
   Así las podés reutilizar en cualquier página.
   =========================================================== */

/* Escapa texto para que un dato con < o & no rompa el HTML. */
function escapar(texto) {
  return String(texto).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[c]);
}

/* Marco de imagen: la foto real, o el aviso de qué archivo falta.
   Cuando no hay ruta, muestra el nombre del jpg pendiente. Sirve
   de lista de pendientes visible mientras se arma el sitio. */
function marcoImagen(ruta, nombre) {
  if (ruta) {
    return `<div class="marco"><img src="${escapar(ruta)}" alt="${escapar(nombre)}" loading="lazy"></div>`;
  }
  const archivo = nombre.toLowerCase().replace(/\s+/g, "-");
  return `<div class="marco"><p class="marco__nota">Falta assets/${escapar(archivo)}.jpg</p></div>`;
}

/* Migas de pan: Inicio › Sección › Nombre.
   El separador va marcado como aria-hidden para que el lector
   de pantalla no lo lea como "mayor que". */
function migasDePan(seccion, hrefSeccion, nombreActual) {
  return `
    <nav class="migas" aria-label="Ubicación">
      <a href="index.html">Inicio</a>
      <span aria-hidden="true">›</span>
      <a href="${escapar(hrefSeccion)}">${escapar(seccion)}</a>
      <span aria-hidden="true">›</span>
      <span aria-current="page">${escapar(nombreActual)}</span>
    </nav>`;
}

/* ---------- Tarjetas ---------- */

function tarjetaPersonaje(p) {
  const rotulo = p.saga.length === 2
    ? "Ambas sagas"
    : p.saga.includes("griega") ? "Saga griega" : "Saga nórdica";

  return `
    <li>
      <a class="tarjeta" href="personaje.html?id=${escapar(p.id)}">
        ${marcoImagen(p.imagen, p.nombre)}
        <div class="tarjeta__cuerpo">
          <p class="rotulo">${rotulo}</p>
          <h3>${escapar(p.nombre)}</h3>
          <p>${escapar(p.resumen)}</p>
        </div>
      </a>
    </li>`;
}

/* Tarjeta especial de "colección": vive dentro del listado de
   personajes pero se ve distinta (rótulo "Colección" en vez de saga)
   y no lleva a personaje.html sino a la página que agrupa a las
   integrantes. Hoy solo se usa para el consejo de las valquirias. */
function tarjetaColeccion(destino, nombre, resumen) {
  return `
    <li>
      <a class="tarjeta tarjeta--coleccion" href="${escapar(destino)}">
        ${marcoImagen("", nombre)}
        <div class="tarjeta__cuerpo">
          <p class="rotulo">Colección</p>
          <h3>${escapar(nombre)}</h3>
          <p>${escapar(resumen)}</p>
        </div>
      </a>
    </li>`;
}

function tarjetaLugar(l) {
  const rotulo = l.region === "griega" ? "Saga griega" : "Saga nórdica";
  return `
    <li>
      <a class="tarjeta" href="lugar.html?id=${escapar(l.id)}">
        ${marcoImagen(l.imagen, l.nombre)}
        <div class="tarjeta__cuerpo">
          <p class="rotulo">${rotulo} · ${escapar(l.tipo)}</p>
          <h3>${escapar(l.nombre)}</h3>
          <p>${escapar(l.resumen)}</p>
        </div>
      </a>
    </li>`;
}

/* Versión compacta para la portada, sin marco ni link: solo texto.
   El home muestra los reinos como un vistazo, el listado completo
   vive en lugares.html. */
function resumenLugar(l) {
  return `
    <li class="tarjeta">
      <div class="tarjeta__cuerpo">
        <h3>${escapar(l.nombre)}</h3>
        <p>${escapar(l.resumen)}</p>
      </div>
    </li>`;
}

/* Cada hito lleva data-saga para que el rombo tome el color de su
   saga (aunque el resto de la página esté en el tema opuesto). */
/* Item del mosaico de la galería. Botón porque es interactivo:
   el click lo abre en el lightbox. No es <img> sola porque el
   contenedor mantiene el aspect-ratio aunque no haya foto todavía. */
function itemGaleria(g, indice) {
  const rotulo = g.saga === "griega" ? "Griega" : "Nórdica";
  const cuerpo = g.imagen
    ? `<img src="${escapar(g.imagen)}" alt="${escapar(g.titulo)}" loading="lazy">`
    : `<p class="galeria__item__falta">Falta imagen<br>${escapar(g.titulo)}</p>`;

  return `
    <li>
      <button type="button" class="galeria__item" data-galeria-indice="${indice}" aria-label="${escapar(g.titulo)}">
        ${cuerpo}
        <span class="galeria__item__saga">${rotulo}</span>
      </button>
    </li>`;
}

function hitoJuego(j) {
  return `
    <li class="hito" data-saga="${escapar(j.saga)}">
      <a class="hito__enlace" href="juego.html?id=${escapar(j.id)}">
        <p class="hito__anio">${j.anio}</p>
        <h3>${escapar(j.titulo)}</h3>
        <p>${escapar(j.resumen)}</p>
      </a>
    </li>`;
}

/* ---------- Utilidad de pintado ---------- */

/* Pinta una lista de elementos dentro de un contenedor.
   Si no hay nada, muestra un estado vacío con instrucciones
   útiles: nunca un mensaje seco. */
function pintar(selector, elementos, plantilla, mensajeVacio) {
  const destino = document.querySelector(selector);
  if (!destino) return;

  if (!elementos.length) {
    destino.innerHTML = `<li class="vacio">${escapar(mensajeVacio)}</li>`;
    return;
  }
  destino.innerHTML = elementos.map(plantilla).join("");
}
