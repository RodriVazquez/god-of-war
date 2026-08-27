/* ===========================================================
   LUGARES — reinos, ciudades y montes de las dos sagas.

   Campos:
     region     — "griega" | "nordica"
     tipo       — "Reino" | "Ciudad" | "Monte" | "Isla"
     personajes — ids de data-personajes.js vinculados a este sitio.
   =========================================================== */

const LUGARES = [
  /* --- Los Nueve Reinos (saga nórdica) --- */
  {
    id: "midgard",
    nombre: "Midgard",
    region: "nordica",
    tipo: "Reino",
    imagen: "",
    resumen: "El reino de los hombres, centro del Árbol del Mundo.",
    datos: { "Rama del Yggdrasil": "Central" },
    personajes: ["kratos", "atreus", "freya"],
    texto: "[completar]"
  },
  {
    id: "alfheim",
    nombre: "Alfheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "",
    resumen: "Tierra de elfos de luz y oscuridad, en guerra permanente.",
    datos: {},
    personajes: [],
    texto: "[completar]"
  },
  {
    id: "svartalfheim",
    nombre: "Svartalfheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "",
    resumen: "Las forjas de los enanos, donde nacen las mejores armas.",
    datos: {},
    personajes: [],
    texto: "[completar]"
  },
  {
    id: "vanaheim",
    nombre: "Vanaheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "",
    resumen: "Selva de los vanir, sellada por Odín durante siglos.",
    datos: {},
    personajes: ["freya"],
    texto: "[completar]"
  },
  {
    id: "asgard",
    nombre: "Asgard",
    region: "nordica",
    tipo: "Reino",
    imagen: "",
    resumen: "El reino dorado de los æsir y de Odín.",
    datos: {},
    personajes: ["mimir"],
    texto: "[completar]"
  },
  {
    id: "jotunheim",
    nombre: "Jötunheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "",
    resumen: "Hogar de los gigantes, prácticamente extinguidos.",
    datos: {},
    personajes: ["atreus"],
    texto: "[completar]"
  },
  {
    id: "helheim",
    nombre: "Helheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "",
    resumen: "El reino de los muertos deshonrados. Frío absoluto.",
    datos: {},
    personajes: [],
    texto: "[completar]"
  },
  {
    id: "muspelheim",
    nombre: "Muspelheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "",
    resumen: "Fuego primordial. Solo pruebas de combate.",
    datos: {},
    personajes: [],
    texto: "[completar]"
  },
  {
    id: "niflheim",
    nombre: "Niflheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "",
    resumen: "Niebla venenosa sobre las ruinas de Ivaldi.",
    datos: {},
    personajes: [],
    texto: "[completar]"
  }

  /* --- Lugares griegos —
     Esparta, Atenas, Monte Olimpo, Inframundo, Islas del Destino
     y Rodas se agregan en la próxima tanda. --- */
];
