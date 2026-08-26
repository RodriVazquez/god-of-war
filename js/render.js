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

/* Marco de imagen: la foto real, o el aviso de qué archivo falta. */
function marcoImagen(ruta, nombre) {
  if (ruta) {
    return `<div class="marco"><img src="${escapar(ruta)}" alt="${escapar(nombre)}" loading="lazy"></div>`;
  }
  const archivo = nombre.toLowerCase().replace(/\s+/g, "-");
  return `<div class="marco"><p class="marco__nota">Falta assets/${escapar(archivo)}.jpg</p></div>`;
}

function tarjetaPersonaje(p) {
  return `
    <li>
      <a class="tarjeta" href="detalle.html?id=${escapar(p.id)}">
        ${marcoImagen(p.imagen, p.nombre)}
        <div class="tarjeta__cuerpo">
          <p class="rotulo">${p.saga.includes("griega") ? "Saga griega" : "Saga nórdica"}</p>
          <h3>${escapar(p.nombre)}</h3>
          <p>${escapar(p.resumen)}</p>
        </div>
      </a>
    </li>`;
}

function tarjetaReino(r) {
  return `
    <li class="tarjeta">
      <div class="tarjeta__cuerpo">
        <h3>${escapar(r.nombre)}</h3>
        <p>${escapar(r.nota)}</p>
      </div>
    </li>`;
}

function hitoJuego(j) {
  return `
    <li class="hito">
      <p class="hito__anio">${j.anio}</p>
      <h3>${escapar(j.titulo)}</h3>
      <p>${escapar(j.nota)}</p>
    </li>`;
}

/* Pinta una lista de elementos dentro de un contenedor.
   Si no hay nada, muestra un estado vacío con instrucciones. */
function pintar(selector, elementos, plantilla, mensajeVacio) {
  const destino = document.querySelector(selector);
  if (!destino) return;

  if (!elementos.length) {
    destino.innerHTML = `<li class="vacio">${escapar(mensajeVacio)}</li>`;
    return;
  }
  destino.innerHTML = elementos.map(plantilla).join("");
}
