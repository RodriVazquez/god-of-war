/* ===========================================================
   JUEGO — lógica del consejo de las valquirias.

   La página muestra dos columnas: una lista lateral con las nueve
   integrantes y una ficha activa al costado. Cada click en una
   corrupta la marca como visitada (guardado en localStorage vía
   las funciones expuestas por main.js). Cuando las ocho están
   visitadas, Sigrún se destraba automáticamente.
   =========================================================== */

(function () {
  const listaEl = document.querySelector("#consejo-tronos");
  if (!listaEl) return;  // No estamos en valquirias.html

  const fichaEl = document.querySelector("#consejo-ficha");
  const progresoEl = document.querySelector("#consejo-progreso");
  const btnDesbloquear = document.querySelector("#btn-desbloquear");
  const btnReiniciar = document.querySelector("#btn-reiniciar");

  let activaId = null;

  /* ---------- Render de la lista lateral ---------- */

  function pintarLista() {
    const visitadas = valquiriasVisitadas();

    const items = VALQUIRIAS.map((v) => {
      const clases = ["consejo__valquiria"];
      if (v.reina) clases.push("consejo__valquiria--reina");
      const bloqueada = v.reina && !consejoCompleto();
      if (bloqueada) clases.push("consejo__valquiria--bloqueada");
      const visitada = visitadas.includes(v.id);
      if (visitada) clases.push("consejo__valquiria--visitada");

      const marca = bloqueada ? "🔒" : (visitada ? "◆" : "◇");
      const nota = v.reina ? "REINA" : v.reino.toUpperCase();
      const aria = v.id === activaId ? ` aria-current="true"` : "";
      const disabled = bloqueada ? " disabled" : "";

      return `
        <li>
          <button type="button" class="${clases.join(" ")}" data-id="${escapar(v.id)}"${aria}${disabled}>
            <span class="consejo__marca" aria-hidden="true">${marca}</span>
            <span class="consejo__valquiria__nombre">${escapar(v.nombre)}</span>
            <span class="consejo__valquiria__nota">${nota}</span>
          </button>
        </li>`;
    }).join("");

    listaEl.innerHTML = items;

    // Progreso: solo cuenta las corruptas.
    const corruptas = VALQUIRIAS.filter((v) => !v.reina);
    const visitadasCorruptas = corruptas.filter((v) => visitadas.includes(v.id));
    progresoEl.textContent = `${visitadasCorruptas.length} de ${corruptas.length} recorridas`;
  }

  /* ---------- Render de la ficha activa ---------- */

  function estadoVacio() {
    return `
      <div class="consejo__ficha__vacio">
        <p class="rotulo">Elegí una valquiria</p>
        <p>Cliqueá cualquiera de las ocho corruptas de la lista para ver su ficha. Cuando las hayas recorrido a todas, Sigrún se destraba.</p>
      </div>`;
  }

  function barraDificultad(nivel) {
    let html = '<span class="dificultad" aria-label="Dificultad ' + nivel + ' de 5">';
    for (let i = 1; i <= 5; i++) {
      const clase = i <= nivel ? "dificultad__marca dificultad__marca--activa" : "dificultad__marca";
      html += `<span class="${clase}"></span>`;
    }
    html += "</span>";
    return html;
  }

  function pintarFicha(id, mostrarLogro) {
    const v = VALQUIRIAS.find((x) => x.id === id);
    if (!v) { fichaEl.innerHTML = estadoVacio(); return; }

    const logro = mostrarLogro
      ? `<div class="consejo__logro">
           <p class="rotulo">Consejo completo</p>
           <p>Recorriste a las ocho corruptas. Sigrún ya se puede ver acá y en su ficha personal.</p>
         </div>`
      : "";

    fichaEl.innerHTML = `
      ${logro}
      <article class="consejo__ficha__cuerpo">
        ${marcoImagen(v.imagen, v.nombre)}
        <div>
          <h1>${escapar(v.nombre)}</h1>
          <p class="rotulo">${v.reina ? "Reina del consejo" : "Valquiria del consejo"}</p>
          <div class="consejo__ficha__meta">
            <span>Reino: ${escapar(v.reino)}</span>
            <span>Trono ${v.trono}</span>
            <span>Dificultad ${barraDificultad(v.dificultad)}</span>
          </div>
          <p>${escapar(v.texto)}</p>
          <p style="margin-top: var(--e-2); color: var(--texto-suave); font-size: var(--t-sm)">${escapar(v.resumen)}</p>
        </div>
      </article>`;
  }

  /* ---------- Interacción ---------- */

  function activar(id) {
    const v = VALQUIRIAS.find((x) => x.id === id);
    if (!v) return;
    if (v.reina && !consejoCompleto()) return;  // Sigrún bloqueada, no se abre

    const yaEstabaCompleto = consejoCompleto();
    if (!v.reina) marcarVisitada(id);
    const seCompletoAhora = !yaEstabaCompleto && consejoCompleto();

    activaId = id;
    pintarLista();
    pintarFicha(id, seCompletoAhora);
  }

  listaEl.addEventListener("click", (e) => {
    const boton = e.target.closest("[data-id]");
    if (!boton || boton.disabled) return;
    activar(boton.dataset.id);
  });

  btnDesbloquear.addEventListener("click", () => {
    desbloquearConsejo();
    activaId = "sigrun";
    pintarLista();
    pintarFicha("sigrun", true);
  });

  btnReiniciar.addEventListener("click", () => {
    reiniciarConsejo();
    activaId = null;
    pintarLista();
    fichaEl.innerHTML = estadoVacio();
  });

  /* ---------- Arranque ---------- */

  pintarLista();
  fichaEl.innerHTML = estadoVacio();
})();
