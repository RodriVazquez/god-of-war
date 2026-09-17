/* ===========================================================
   GALERÍA — mosaico asimétrico con lightbox.

   Campos:
     titulo      — texto que aparece en el lightbox y como alt.
     saga        — "griega" | "nordica"
     formato     — "ancha" (16:9) | "alta" (4:5) | "cuadrada" (1:1).
                   Define cuánto ocupa la pieza en el mosaico: es lo
                   único que lo hace asimétrico. Para acomodar una foto
                   se cambia el formato acá, nunca el CSS.
     imagen      — ruta al archivo, o "" si todavía no está.
     juego       — de qué entrega es la escena. Va como rótulo del pie.
     descripcion — una o dos líneas de contexto, abajo del título.

   El archivo tiene que venir en la proporción de su formato o va a
   salir recortado. Las medidas están en assets/img/LEEME-galeria.txt.
   =========================================================== */

const GALERIA = [
  {
    id: "kratos-portada",
    titulo: "Kratos en Midgard",
    saga: "nordica",
    formato: "alta",
    imagen: "assets/img/kratos.jpg",
    juego: "God of War (2018)",
    descripcion: "El arranque del viaje al norte: Kratos en los bosques de Midgard, con el hacha Leviatán y un pasado que todavía no le contó a su hijo."
  },
  {
    id: "olimpo-nubes",
    titulo: "Monte Olimpo entre las nubes",
    saga: "griega",
    formato: "alta",
    imagen: "assets/img/monte-olimpo.jpg",
    juego: "God of War III (2010)",
    descripcion: "La casa de los dioses griegos y la estructura que sostiene el mundo. Kratos la sube tres veces a lo largo de la saga."
  },
  {
    id: "lago-de-los-nueve",
    titulo: "El Lago de los Nueve",
    saga: "nordica",
    formato: "ancha",
    imagen: "",
    juego: "God of War (2018)",
    descripcion: "La masa de agua con nueve puntas que ordena todo Midgard. En el centro está el templo de Týr, la sala de viaje entre los reinos."
  },
  {
    id: "caja-de-pandora",
    titulo: "La Caja de Pandora",
    saga: "griega",
    formato: "cuadrada",
    imagen: "",
    juego: "God of War (2005)",
    descripcion: "Donde los dioses encerraron los males del mundo. Lo que no contaron es que también guardaron adentro la Esperanza."
  },
  {
    id: "atreus-arco",
    titulo: "Atreus con el arco Talón de Alba",
    saga: "nordica",
    formato: "alta",
    imagen: "assets/img/atreus.jpg",
    juego: "God of War (2018)",
    descripcion: "El arco es lo primero que Faye le dejó a Atreus, y durante buena parte del viaje su única forma de pelear."
  },
  {
    id: "hermanas-del-destino",
    titulo: "Las Hermanas del Destino",
    saga: "griega",
    formato: "ancha",
    imagen: "",
    juego: "God of War II (2007)",
    descripcion: "Láquesis, Átropos y Cloto tejen el hilo de todo lo que existe. Ni Zeus puede contradecirlas, y por eso Kratos va a buscarlas."
  },
  {
    id: "yggdrasil",
    titulo: "El Árbol del Mundo",
    saga: "nordica",
    formato: "alta",
    imagen: "",
    juego: "God of War (2018)",
    descripcion: "El fresno que sostiene los Nueve Reinos. Desde el templo de Týr, en el centro del Lago de los Nueve, se viaja por sus ramas."
  },
  {
    id: "atenea-sabiduria",
    titulo: "Atenea, patrona de la ciudad",
    saga: "griega",
    formato: "alta",
    imagen: "assets/img/atenea.jpg",
    juego: "God of War (2005)",
    descripcion: "Diosa de la sabiduría y de la guerra estratégica, patrona de Atenas. Fue ella quien le prometió a Kratos el fin de sus pesadillas."
  },
  {
    id: "forja-enanos",
    titulo: "La forja de Sindri y Brok",
    saga: "nordica",
    formato: "cuadrada",
    imagen: "",
    juego: "God of War (2018)",
    descripcion: "De ahí salieron el hacha Leviatán y el martillo Mjölnir. Los dos hermanos cargan con haber forjado las dos cosas."
  },
  {
    id: "coloso-rodas",
    titulo: "El Coloso de Rodas",
    saga: "griega",
    formato: "alta",
    imagen: "assets/img/rodas.jpg",
    juego: "God of War II (2007)",
    descripcion: "La estatua de bronce que Zeus animó para pelear contra Kratos. Abre el segundo juego y termina con Kratos sin poderes."
  },
  {
    id: "murales-jotunheim",
    titulo: "Los murales de Jötunheim",
    saga: "nordica",
    formato: "ancha",
    imagen: "",
    juego: "God of War (2018)",
    descripcion: "Los gigantes no dejaron ejércitos: dejaron paredes pintadas con todo lo que iba a pasar, incluido el viaje de Kratos y Atreus."
  },
  {
    id: "hades-inframundo",
    titulo: "El descenso al Inframundo",
    saga: "griega",
    formato: "cuadrada",
    imagen: "assets/img/inframundo.jpg",
    juego: "God of War III (2010)",
    descripcion: "El reino de Hades, adonde va todo lo que muere en el mundo griego. Kratos cayó ahí más de una vez y siempre volvió trepando."
  },
  {
    id: "freya-vanaheim",
    titulo: "Freya en el bosque de Vanaheim",
    saga: "nordica",
    formato: "alta",
    imagen: "assets/img/freya.jpg",
    juego: "God of War Ragnarök (2022)",
    descripcion: "Reina de los vanir, desterrada a Midgard por Odín. Vanaheim es el reino del que salió y al que termina volviendo."
  },
  {
    id: "kratos-blades",
    titulo: "Kratos y las Espadas del Caos",
    saga: "griega",
    formato: "ancha",
    imagen: "",
    juego: "God of War (2005)",
    descripcion: "Las armas que le dio Ares, encadenadas a los antebrazos. Kratos las escondió en el fondo de su casa en Midgard y tuvo que volver a buscarlas."
  },
  {
    id: "odin-cuervos",
    titulo: "Odín y sus cuervos",
    saga: "nordica",
    formato: "alta",
    imagen: "",
    juego: "God of War Ragnarök (2022)",
    descripcion: "El Padre de Todos gobierna con información antes que a los gritos. Huginn y Muninn son cómo se la consigue."
  },
  {
    id: "esparta-ejercito",
    titulo: "El ejército espartano",
    saga: "griega",
    formato: "ancha",
    imagen: "",
    juego: "God of War: Ascension (2013)",
    descripcion: "La ciudad que crió a Kratos y lo hizo general. En Esparta los chicos entraban al entrenamiento a los siete años."
  },
  {
    id: "thor-mjolnir",
    titulo: "Thor y Mjölnir",
    saga: "nordica",
    formato: "alta",
    imagen: "assets/img/thor.jpg",
    juego: "God of War Ragnarök (2022)",
    descripcion: "El hijo mayor de Odín con el martillo que forjaron Sindri y Brok: el arma con la que Asgard vació Jötunheim."
  },
  {
    id: "elysium-caliope",
    titulo: "Elysium",
    saga: "griega",
    formato: "cuadrada",
    imagen: "",
    juego: "Chains of Olympus (2008)",
    descripcion: "El campo de los muertos que merecieron descanso. Ahí está Calíope, y ahí Kratos tiene que elegir entre su hija y el mundo."
  },
  {
    id: "surtr-muspelheim",
    titulo: "Surtr en Muspelheim",
    saga: "nordica",
    formato: "ancha",
    imagen: "",
    juego: "God of War Ragnarök (2022)",
    descripcion: "El gigante de fuego del reino de la lava. La profecía dice que va a arder y que su fuego va a terminar con Asgard."
  },
  {
    id: "zeus-rayo",
    titulo: "Zeus y el rayo",
    saga: "griega",
    formato: "alta",
    imagen: "",
    juego: "God of War III (2010)",
    descripcion: "Rey del Olimpo y padre de Kratos. Llegó al trono matando a Cronos y pasó el reinado con miedo a que le hicieran lo mismo."
  }
];
