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
  return `<div class="marco"><p class="marco__nota">Falta assets/img/${escapar(archivo)}.jpg</p></div>`;
}

/* Convierte un texto largo en párrafos. Las biografías se guardan
   como una sola cadena con renglones en blanco entre párrafo y
   párrafo; acá se parte por esos renglones y se escapa cada uno.
   Antes todo caía dentro de un solo <p> y se leía como un ladrillo. */
function parrafos(texto) {
  return String(texto)
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${escapar(p)}</p>`)
    .join("");
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
function tarjetaColeccion(destino, nombre, resumen, imagen) {
  return `
    <li>
      <a class="tarjeta tarjeta--coleccion" href="${escapar(destino)}">
        ${marcoImagen(imagen || "", nombre)}
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

/* Versión compacta para la portada: sin marco, solo texto, pero
   enlazada a la ficha igual que las tarjetas del listado. Antes era
   un bloque muerto y la gente la cliqueaba lo mismo. */
function resumenLugar(l) {
  return `
    <li>
      <a class="tarjeta tarjeta--texto" href="lugar.html?id=${escapar(l.id)}">
        <div class="tarjeta__cuerpo">
          <p class="rotulo">${escapar(l.tipo)}</p>
          <h3>${escapar(l.nombre)}</h3>
          <p>${escapar(l.resumen)}</p>
        </div>
      </a>
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

  // El formato decide cuánto ocupa la pieza en el mosaico. Si falta
  // el dato cae en "alta", que es el que menos molesta.
  const formato = g.formato || "alta";

  return `
    <li class="galeria__celda galeria__celda--${escapar(formato)}">
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

/* ---------- Mapa del sitio ---------- */

/* Una entrada del mapa. Sin destino se pinta apagada y sin enlace:
   es lo que le toca a Sigrún mientras el consejo esté incompleto. */
function entradaMapa(destino, nombre, nota) {
  const cuerpo = `<span class="mapa__nombre">${escapar(nombre)}</span>` +
    (nota ? `<span class="mapa__nota">${escapar(nota)}</span>` : "");

  if (!destino) {
    return `<li><span class="mapa__bloqueada">${cuerpo}</span></li>`;
  }
  return `<li><a href="${escapar(destino)}">${cuerpo}</a></li>`;
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
