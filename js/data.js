/* ===========================================================
   DATOS
   Todo el contenido del sitio vive acá. Agregá objetos a estos
   arrays y las páginas se actualizan solas: no hace falta tocar
   el HTML nunca más.

   Para las imágenes: poné el archivo en /assets y escribí la ruta
   en "imagen". Si lo dejás vacío ("") se ve el marco rayado con el
   nombre del archivo que falta.
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
    texto: "Escribí acá la biografía larga. Tres o cuatro párrafos alcanzan."
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
    texto: "Biografía pendiente."
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
    texto: "Biografía pendiente."
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
    texto: "Biografía pendiente."
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
    texto: "Biografía pendiente."
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
    texto: "Biografía pendiente."
  }
];

const REINOS = [
  { id: "midgard",    nombre: "Midgard",     nota: "El reino de los hombres, centro del Árbol del Mundo." },
  { id: "alfheim",    nombre: "Alfheim",     nota: "Tierra de elfos de luz y oscuridad, en guerra permanente." },
  { id: "svartalfheim",nombre: "Svartalfheim",nota: "Las forjas de los enanos, donde nacen las mejores armas." },
  { id: "vanaheim",   nombre: "Vanaheim",    nota: "Selva de los vanir, sellada por Odín durante siglos." },
  { id: "asgard",     nombre: "Asgard",      nota: "El reino dorado de los æsir y de Odín." },
  { id: "jotunheim",  nombre: "Jötunheim",   nota: "Hogar de los gigantes, prácticamente extinguidos." },
  { id: "helheim",    nombre: "Helheim",     nota: "El reino de los muertos deshonrados. Frío absoluto." },
  { id: "muspelheim", nombre: "Muspelheim",  nota: "Fuego primordial. Solo pruebas de combate." },
  { id: "niflheim",   nombre: "Niflheim",    nota: "Niebla venenosa sobre las ruinas de Ivaldi." }
];

const JUEGOS = [
  { anio: 2005, titulo: "God of War",              saga: "griega",  nota: "PlayStation 2. La venganza contra Ares." },
  { anio: 2007, titulo: "God of War II",           saga: "griega",  nota: "PlayStation 2. Kratos contra el destino." },
  { anio: 2008, titulo: "Chains of Olympus",       saga: "griega",  nota: "PSP. Precuela del primer juego." },
  { anio: 2010, titulo: "God of War III",          saga: "griega",  nota: "PlayStation 3. La caída del Olimpo." },
  { anio: 2010, titulo: "Ghost of Sparta",         saga: "griega",  nota: "PSP. La historia de Deimos." },
  { anio: 2013, titulo: "Ascension",               saga: "griega",  nota: "PlayStation 3. El origen del pacto con Ares." },
  { anio: 2018, titulo: "God of War",              saga: "nordica", nota: "PlayStation 4. Reinicio en Midgard." },
  { anio: 2022, titulo: "God of War Ragnarök",     saga: "nordica", nota: "PS4 y PS5. El fin profetizado." },
  { anio: 2023, titulo: "Valhalla",                saga: "nordica", nota: "Expansión gratuita. Kratos frente a sí mismo." }
];
