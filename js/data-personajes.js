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
  },

  /* --- Saga nórdica (continuación) --- */
  {
    id: "baldur",
    nombre: "Baldur",
    epiteto: "El dios inmortal",
    saga: ["nordica"],
    imagen: "",
    resumen: "Hijo de Odín y Freya. Cazador enviado tras Kratos y Atreus, invulnerable salvo por una única grieta.",
    datos: {
      "Origen": "Asgard",
      "Vínculo": "Hijo de Freya",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["asgard", "midgard"],
    texto: "[completar]"
  },
  {
    id: "thor",
    nombre: "Thor",
    epiteto: "Dios del Trueno",
    saga: ["nordica"],
    imagen: "",
    resumen: "El primogénito de Odín. Ejecutor brutal, matador de gigantes. Antagonista central de Ragnarök.",
    datos: {
      "Origen": "Asgard",
      "Arma": "Mjölnir",
      "Primera aparición": "God of War Ragnarök (2022)"
    },
    lugares: ["asgard", "midgard"],
    texto: "[completar]"
  },
  {
    id: "odin",
    nombre: "Odín",
    epiteto: "Padre de todo",
    saga: ["nordica"],
    imagen: "",
    resumen: "Rey de los æsir. Manipulador obsesionado con conocer todos los secretos del Yggdrasil, propios y ajenos.",
    datos: {
      "Origen": "Asgard",
      "Dominio": "Sabiduría y guerra",
      "Primera aparición": "God of War Ragnarök (2022)"
    },
    lugares: ["asgard"],
    texto: "[completar]"
  },
  {
    id: "hermanos-huldra",
    nombre: "Sindri y Brok",
    epiteto: "Los enanos forjadores",
    saga: ["nordica"],
    imagen: "",
    resumen: "Hermanos herreros de Svartalfheim. Forjaron el Mjölnir y las Hachas Leviatán. Sindri es perfeccionista y ansioso; Brok es bruto y azul.",
    datos: {
      "Origen": "Svartalfheim",
      "Oficio": "Herreros",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["svartalfheim", "midgard"],
    texto: "[completar]"
  },
  {
    id: "tyr",
    nombre: "Tyr",
    epiteto: "El dios ausente",
    saga: ["nordica"],
    imagen: "",
    resumen: "Dios æsir de la guerra justa, encarcelado por Odín siglos atrás. Puente entre los reinos cuando los caminos se abren.",
    datos: {
      "Origen": "Asgard",
      "Rol": "Diplomático de los reinos",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["asgard", "midgard"],
    texto: "[completar]"
  },
  {
    id: "angrboda",
    nombre: "Angrboda",
    epiteto: "La última giganta",
    saga: ["nordica"],
    imagen: "",
    resumen: "Giganta joven que vive escondida en Jötunheim. Guardiana de la memoria de su pueblo, guía a Atreus por sus propios recuerdos.",
    datos: {
      "Origen": "Jötunheim",
      "Rol": "Guardiana de recuerdos",
      "Primera aparición": "God of War Ragnarök (2022)"
    },
    lugares: ["jotunheim"],
    texto: "[completar]"
  },
  {
    id: "heimdall",
    nombre: "Heimdall",
    epiteto: "Vigía del Bifrost",
    saga: ["nordica"],
    imagen: "",
    resumen: "El æsir que ve y oye todo. Arrogante lugarteniente de Odín, duelo memorable a mitad de Ragnarök.",
    datos: {
      "Origen": "Asgard",
      "Rol": "Vigía del puente",
      "Primera aparición": "God of War Ragnarök (2022)"
    },
    lugares: ["asgard"],
    texto: "[completar]"
  },

  /* --- Saga griega (continuación) --- */
  {
    id: "atenea",
    nombre: "Atenea",
    epiteto: "Diosa de la sabiduría",
    saga: ["griega"],
    imagen: "",
    resumen: "Aliada de Kratos contra Ares y patrona de Atenas. Termina interponiéndose entre él y Zeus, con costo mortal.",
    datos: {
      "Origen": "Monte Olimpo",
      "Dominio": "Sabiduría y estrategia",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["olimpo", "atenas"],
    texto: "[completar]"
  },
  {
    id: "hades",
    nombre: "Hades",
    epiteto: "Señor del Inframundo",
    saga: ["griega"],
    imagen: "",
    resumen: "Dios de los muertos. Uno de los hijos de Cronos que Kratos derrota en God of War III.",
    datos: {
      "Origen": "Inframundo",
      "Dominio": "Los muertos",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["inframundo", "olimpo"],
    texto: "[completar]"
  },
  {
    id: "hercules",
    nombre: "Hércules",
    epiteto: "Hijo predilecto de Zeus",
    saga: ["griega"],
    imagen: "",
    resumen: "Medio hermano de Kratos. Envidioso de su título de Dios de la Guerra. Se enfrentan en God of War III.",
    datos: {
      "Origen": "Grecia",
      "Vínculo": "Medio hermano de Kratos",
      "Primera aparición": "God of War III (2010)"
    },
    lugares: ["olimpo"],
    texto: "[completar]"
  },
  {
    id: "pandora",
    nombre: "Pandora",
    epiteto: "La niña de la Llama",
    saga: ["griega"],
    imagen: "",
    resumen: "Creación de Hefesto, guardiana de la Llama del Olimpo. Su sacrificio permite abrir la caja de Pandora.",
    datos: {
      "Creador": "Hefesto",
      "Rol": "Guardiana de la Llama",
      "Primera aparición": "God of War III (2010)"
    },
    lugares: ["olimpo"],
    texto: "[completar]"
  },
  {
    id: "persefone",
    nombre: "Perséfone",
    epiteto: "Reina del Inframundo",
    saga: ["griega"],
    imagen: "",
    resumen: "Esposa de Hades, resentida con los dioses por su encierro. Villana principal de Chains of Olympus.",
    datos: {
      "Origen": "Inframundo",
      "Consorte": "Hades",
      "Primera aparición": "Chains of Olympus (2008)"
    },
    lugares: ["inframundo"],
    texto: "[completar]"
  },
  {
    id: "deimos",
    nombre: "Deimos",
    epiteto: "El hermano perdido",
    saga: ["griega"],
    imagen: "",
    resumen: "Hermano menor de Kratos, secuestrado de niño por los dioses por miedo a una profecía. Eje de Ghost of Sparta.",
    datos: {
      "Origen": "Esparta",
      "Vínculo": "Hermano de Kratos",
      "Primera aparición": "Ghost of Sparta (2010)"
    },
    lugares: ["esparta"],
    texto: "[completar]"
  },
  {
    id: "caliope",
    nombre: "Calíope",
    epiteto: "La hija de Kratos",
    saga: ["griega"],
    imagen: "",
    resumen: "Hija de Kratos y Lisandra, asesinada por Kratos mismo bajo el hechizo de Ares. La sombra que atraviesa toda la saga griega.",
    datos: {
      "Origen": "Esparta",
      "Vínculo": "Hija de Kratos",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["esparta"],
    texto: "[completar]"
  }
];
