/* ===========================================================
   PERSONAJES
   Agregar objetos a este array pinta una tarjeta nueva en el
   listado, sin tocar HTML. El id va en la URL, así que va sin
   espacios ni acentos.

   Campos:
     saga     — array: ["griega"], ["nordica"] o ambas.
     imagen   — ruta a assets/… o "" mientras no la tengas.
     lugares  — ids de data-lugares.js con los que se cruza.
     texto    — biografía larga, uno o dos párrafos.
   =========================================================== */

const PERSONAJES = [
  {
    id: "kratos",
    nombre: "Kratos",
    epiteto: "El Fantasma de Esparta",
    saga: ["griega", "nordica"],
    imagen: "",
    resumen: "Semidiós espartano que derrocó al panteón olímpico y huyó al norte buscando una vida distinta.",
    datos: {
      "Origen": "Esparta",
      "Arma principal": "Hacha Leviatán / Espadas del Caos",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["esparta", "olimpo", "midgard"],
    texto: "[completar]"
  },
  {
    id: "atreus",
    nombre: "Atreus",
    epiteto: "Loki",
    saga: ["nordica"],
    imagen: "",
    resumen: "Hijo de Kratos y de la giganta Faye. Arquero, rastreador y traductor de las lenguas antiguas.",
    datos: {
      "Origen": "Midgard",
      "Arma principal": "Arco Talón de Alba",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["midgard", "jotunheim"],
    texto: "[completar]"
  },
  {
    id: "mimir",
    nombre: "Mímir",
    epiteto: "El hombre más listo del mundo",
    saga: ["nordica"],
    imagen: "",
    resumen: "Antiguo consejero de Odín, condenado a colgar de un árbol hasta que Kratos lo liberó.",
    datos: {
      "Origen": "Desconocido",
      "Rol": "Consejero",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["asgard"],
    texto: "[completar]"
  },
  {
    id: "freya",
    nombre: "Freya",
    epiteto: "Reina de las Valquirias",
    saga: ["nordica"],
    imagen: "",
    resumen: "Diosa vanir, antigua esposa de Odín, atada a Midgard por una maldición que ella misma aceptó.",
    datos: {
      "Origen": "Vanaheim",
      "Rol": "Diosa vanir",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["vanaheim", "midgard"],
    texto: "[completar]"
  },
  {
    id: "zeus",
    nombre: "Zeus",
    epiteto: "Rey del Olimpo",
    saga: ["griega"],
    imagen: "",
    resumen: "Padre de Kratos y último obstáculo de la saga griega. Su miedo a ser destronado provocó justo eso.",
    datos: {
      "Origen": "Monte Olimpo",
      "Dominio": "El rayo",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["olimpo"],
    texto: "[completar]"
  },
  {
    id: "ares",
    nombre: "Ares",
    epiteto: "Dios de la Guerra",
    saga: ["griega"],
    imagen: "",
    resumen: "El dios al que Kratos sirvió y después mató, heredando su trono y su título.",
    datos: {
      "Origen": "Monte Olimpo",
      "Dominio": "La guerra",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["olimpo", "atenas"],
    texto: "[completar]"
  }
];
