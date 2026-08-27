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
  },

  /* --- Lugares griegos --- */
  {
    id: "esparta",
    nombre: "Esparta",
    region: "griega",
    tipo: "Ciudad",
    imagen: "",
    resumen: "Ciudad-estado guerrera. Cuna de Kratos y de su hermano Deimos.",
    datos: {
      "Ubicación": "Península del Peloponeso",
      "Régimen": "Militarista"
    },
    personajes: ["kratos"],
    texto: "[completar]"
  },
  {
    id: "atenas",
    nombre: "Atenas",
    region: "griega",
    tipo: "Ciudad",
    imagen: "",
    resumen: "Ciudad de la diosa Atenea. Devastada por Ares al comienzo del primer God of War.",
    datos: {
      "Patrona": "Atenea",
      "Enemigo mítico": "Ares"
    },
    personajes: ["ares"],
    texto: "[completar]"
  },
  {
    id: "olimpo",
    nombre: "Monte Olimpo",
    region: "griega",
    tipo: "Monte",
    imagen: "",
    resumen: "Cumbre y trono del panteón olímpico. Escenario de la caída final en God of War III.",
    datos: {
      "Rol": "Sede de los dioses"
    },
    personajes: ["zeus", "ares"],
    texto: "[completar]"
  },
  {
    id: "inframundo",
    nombre: "Inframundo",
    region: "griega",
    tipo: "Reino",
    imagen: "",
    resumen: "Dominio de Hades. Almas de los muertos, ríos de fuego y el juicio final de las Moiras.",
    datos: {
      "Regente": "Hades"
    },
    personajes: [],
    texto: "[completar]"
  },
  {
    id: "islas-del-destino",
    nombre: "Islas del Destino",
    region: "griega",
    tipo: "Isla",
    imagen: "",
    resumen: "Templo flotante de las Moiras, hilanderas del destino. Escenario clave de God of War II.",
    datos: {
      "Habitantes": "Las Moiras (Cloto, Láquesis y Átropos)"
    },
    personajes: [],
    texto: "[completar]"
  },
  {
    id: "rodas",
    nombre: "Rodas",
    region: "griega",
    tipo: "Isla",
    imagen: "",
    resumen: "Isla del coloso. Donde Kratos pierde sus poderes al inicio de God of War II.",
    datos: {
      "Monumento": "Coloso de Rodas"
    },
    personajes: [],
    texto: "[completar]"
  }
];
