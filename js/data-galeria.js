/* ===========================================================
   GALERÍA — mosaico con lightbox.

   Cuando estén las imágenes reales, reemplazá "imagen" por la
   URL de Cloudinary (o la ruta a assets/). Mientras tanto, el
   marco rayado del placeholder cubre la falta.

   Campos:
     titulo      — texto que aparece en el lightbox y como alt.
     saga        — "griega" | "nordica"
     juego       — de qué entrega es la escena. Va como rótulo del pie.
     descripcion — una o dos líneas de contexto, abajo del título.
   =========================================================== */

const GALERIA = [
  {
    id: "kratos-portada",
    titulo: "Kratos en Midgard",
    saga: "nordica",
    imagen: "assets/img/kratos.jpg",
    juego: "God of War (2018)",
    descripcion: "El arranque del viaje al norte: Kratos en los bosques de Midgard, con el hacha Leviatán y un pasado que todavía no le contó a su hijo."
  },
  {
    id: "atreus-arco",
    titulo: "Atreus con el arco Talón de Alba",
    saga: "nordica",
    imagen: "assets/img/atreus.jpg",
    juego: "God of War (2018)",
    descripcion: "El arco es lo primero que Faye le dejó a Atreus, y durante buena parte del viaje su única forma de pelear."
  },
  {
    id: "freya-vanaheim",
    titulo: "Freya en el bosque de Vanaheim",
    saga: "nordica",
    imagen: "assets/img/freya.jpg",
    juego: "God of War Ragnarök (2022)",
    descripcion: "Reina de los vanir, desterrada a Midgard por Odín. Vanaheim es el reino del que salió y al que termina volviendo."
  },
  {
    id: "thor-mjolnir",
    titulo: "Thor y Mjölnir",
    saga: "nordica",
    imagen: "assets/img/thor.jpg",
    juego: "God of War Ragnarök (2022)",
    descripcion: "El hijo mayor de Odín con el martillo que forjaron Sindri y Brok: el arma con la que Asgard vació Jötunheim."
  },
  {
    id: "yggdrasil",
    titulo: "El Árbol del Mundo",
    saga: "nordica",
    imagen: "",
    juego: "God of War (2018)",
    descripcion: "El fresno que sostiene los Nueve Reinos. Desde el templo de Týr, en el centro del Lago de los Nueve, se viaja por sus ramas."
  },
  {
    id: "olimpo-nubes",
    titulo: "Monte Olimpo entre las nubes",
    saga: "griega",
    imagen: "assets/img/monte-olimpo.jpg",
    juego: "God of War III (2010)",
    descripcion: "La casa de los dioses griegos y la estructura que sostiene el mundo. Kratos la sube tres veces a lo largo de la saga."
  },
  {
    id: "kratos-blades",
    titulo: "Kratos y las Espadas del Caos",
    saga: "griega",
    imagen: "",
    juego: "God of War (2005)",
    descripcion: "Las armas que le dio Ares, encadenadas a los antebrazos. Kratos las escondió en el fondo de su casa en Midgard y tuvo que volver a buscarlas."
  },
  {
    id: "atenea-sabiduria",
    titulo: "Atenea, patrona de la ciudad",
    saga: "griega",
    imagen: "assets/img/atenea.jpg",
    juego: "God of War (2005)",
    descripcion: "Diosa de la sabiduría y de la guerra estratégica, patrona de Atenas. Fue ella quien le prometió a Kratos el fin de sus pesadillas."
  },
  {
    id: "coloso-rodas",
    titulo: "El Coloso de Rodas",
    saga: "griega",
    imagen: "assets/img/rodas.jpg",
    juego: "God of War II (2007)",
    descripcion: "La estatua de bronce que Zeus animó para pelear contra Kratos. Abre el segundo juego y termina con Kratos sin poderes."
  },
  {
    id: "hades-inframundo",
    titulo: "El descenso al Inframundo",
    saga: "griega",
    imagen: "assets/img/inframundo.jpg",
    juego: "God of War III (2010)",
    descripcion: "El reino de Hades, adonde va todo lo que muere en el mundo griego. Kratos cayó ahí más de una vez y siempre volvió trepando."
  }
];
