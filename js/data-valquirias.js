/* ===========================================================
   VALQUIRIAS — el consejo de nueve.

   Ocho valquirias corruptas por Odín más la reina Sigrún. En la
   página valquirias.html se muestran en un panel lateral; Sigrún
   arranca bloqueada y se destraba cuando se hacen click las ocho
   corruptas (progreso guardado en localStorage bajo gow-valquirias).

   Campos:
     reino      — dónde se la encuentra en el juego original.
     trono      — 1..8 para las corruptas, 9 para Sigrún.
     dificultad — 1..5, del combate en el juego original.
     reina      — true solo para Sigrún.
   =========================================================== */

const VALQUIRIAS = [
  {
    id: "gunnr",
    nombre: "Gunnr",
    reino: "Midgard",
    trono: 1,
    dificultad: 1,
    imagen: "",
    resumen: "La primera del consejo con la que uno se cruza. La más accesible del grupo.",
    texto: "[completar]"
  },
  {
    id: "kara",
    nombre: "Kara",
    reino: "Midgard",
    trono: 2,
    dificultad: 2,
    imagen: "",
    resumen: "Se la encuentra en River Pass. Rápida y esquiva.",
    texto: "[completar]"
  },
  {
    id: "geirdriful",
    nombre: "Geirdriful",
    reino: "Alfheim",
    trono: 3,
    dificultad: 3,
    imagen: "",
    resumen: "Valquiria de los elfos. Sus proyectiles son casi imposibles de bloquear.",
    texto: "[completar]"
  },
  {
    id: "eir",
    nombre: "Eir",
    reino: "Midgard",
    trono: 4,
    dificultad: 3,
    imagen: "",
    resumen: "En las minas de Volunder. Combina ataques cuerpo a cuerpo con embestidas a distancia.",
    texto: "[completar]"
  },
  {
    id: "olrun",
    nombre: "Olrun",
    reino: "Alfheim",
    trono: 5,
    dificultad: 4,
    imagen: "",
    resumen: "Ágil y agresiva. Encadena ataques que castigan cualquier error de lectura.",
    texto: "[completar]"
  },
  {
    id: "gondul",
    nombre: "Gondul",
    reino: "Muspelheim",
    trono: 6,
    dificultad: 4,
    imagen: "",
    resumen: "Valquiria del reino del fuego. Su arena arde y sus ataques prenden fuego a Kratos.",
    texto: "[completar]"
  },
  {
    id: "rota",
    nombre: "Rota",
    reino: "Helheim",
    trono: 7,
    dificultad: 4,
    imagen: "",
    resumen: "Rápida y agresiva. Prepara el terreno para las dos más difíciles.",
    texto: "[completar]"
  },
  {
    id: "hildr",
    nombre: "Hildr",
    reino: "Niflheim",
    trono: 8,
    dificultad: 5,
    imagen: "",
    resumen: "En el corazón de la niebla venenosa de Niflheim. Una de las peleas más largas y castigadas del juego.",
    texto: "[completar]"
  },
  {
    id: "sigrun",
    nombre: "Sigrún",
    reino: "Midgard",
    trono: 9,
    dificultad: 5,
    imagen: "",
    resumen: "La reina del consejo. Solo aparece en el trono central cuando se han derrotado a las otras ocho. Combate cumbre del juego original.",
    reina: true,
    texto: "[completar]"
  }
];
