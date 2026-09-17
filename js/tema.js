/* ===========================================================
   TEMA — se aplica la saga guardada antes del primer pintado.

   Este archivo existe por un solo motivo, y es que tiene que
   correr ANTES que nada. El resto del JS se carga al final del
   body: para cuando main.js lee localStorage, la página ya se
   pintó entera con la saga que dice el marcado, y el cambio se
   veía como un parpadeo de nórdica a griega en cada clic.

   Por eso va en el <head>, sin defer y sin async, y antes de las
   hojas de estilo. Es un archivo aparte y no una función de
   main.js porque main.js es grande y bloquear el pintado con él
   sería peor que el parpadeo.

   No toca nada más: el interruptor, el aria-pressed y el evento
   de cambio siguen siendo cosa de iniciarInterruptor().
   =========================================================== */

/* Única definición de qué es una saga válida. La usa este archivo y
   también main.js, que se carga después. Vivir en dos lados era tener
   dos verdades: si una es más permisiva que la otra, data-saga puede
   terminar en un valor que ningún tema define y el sitio queda con la
   paleta por defecto y los dos botones del interruptor sin marcar. */
function sagaValida(valor) {
  return valor === "griega" || valor === "nordica";
}

(function () {
  try {
    const guardada = localStorage.getItem("gow-saga");

    /* Cualquier otra cosa se ignora y queda la del marcado, que
       siempre es una saga real. */
    if (sagaValida(guardada)) {
      document.documentElement.setAttribute("data-saga", guardada);
    }
  } catch (error) {
    /* Navegación privada o almacenamiento bloqueado. No hay nada
       que recuperar y el marcado ya trae una saga por defecto. */
  }
})();
