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
    imagen: "assets/img/gunnr.jpg",
    resumen: "La primera del consejo con la que uno se cruza. La más accesible del grupo.",
    texto: `El consejo de las valquirias no era un ejército: era un tribunal. Nueve mujeres decidían quién de los muertos merecía Valhalla y quién no, y ese juicio era lo único que Odín no podía torcer a voluntad. Gunnr ocupaba el primer trono.

Cuando Odín decidió que necesitaba controlar también esa decisión, corrompió a las nueve. Las encerró dentro de su propia forma bestial: el cuerpo sigue peleando por su cuenta mientras la valquiria de adentro mira sin poder hacer nada.

Gunnr es la primera con la que se cruza Kratos, en las montañas de Midgard, y funciona como presentación del resto. Todo lo que hacen las otras ocho está acá en versión más simple: el vuelo, las alas como escudo, la caída en picada.

Liberarla no es una victoria contra ella. Es sacarle de encima algo que le pusieron.`
  },
  {
    id: "kara",
    nombre: "Kara",
    reino: "Midgard",
    trono: 2,
    dificultad: 2,
    imagen: "assets/img/kara.jpg",
    resumen: "Se la encuentra en River Pass. Rápida y esquiva.",
    texto: `Valquiria del segundo trono. Se la encuentra en el Paso del Río, en Midgard, encerrada en una cámara escondida detrás de una de las primeras zonas del viaje.

De las nueve es la más nerviosa: no se queda quieta en ningún momento y castiga a quien intente leerla parada. El combate es una lección de paciencia antes que de fuerza.

Como el resto del consejo, no eligió nada de esto. La bestia que ataca en esa cámara es la cáscara que Odín le dejó, y la propia Kara es la prisionera de adentro.

Es también la segunda pieza de un rompecabezas que en el juego original nadie te explica: el consejo se descubre de a poco, sin que nadie diga que hay nueve.`
  },
  {
    id: "geirdriful",
    nombre: "Geirdriful",
    reino: "Alfheim",
    trono: 3,
    dificultad: 3,
    imagen: "assets/img/geirdriful.jpg",
    resumen: "Valquiria de los elfos. Sus proyectiles son casi imposibles de bloquear.",
    texto: `Tercer trono, y la primera fuera de Midgard: su cámara está en Alfheim, el reino de los elfos, entre la luz que los dos bandos se disputan.

Pelea a distancia. Sus proyectiles llegan antes de que se los vea salir y son casi imposibles de bloquear, lo que obliga a cambiar por completo la forma de moverse en la arena.

Su nombre viene de una de las valquirias de los poemas antiguos, como el de las otras ocho. El juego no las inventó: las sacó de los textos nórdicos y las convirtió en jefes opcionales.

Es el punto donde el consejo deja de ser una curiosidad y empieza a sentirse como un desafío paralelo al juego principal.`
  },
  {
    id: "eir",
    nombre: "Eir",
    reino: "Midgard",
    trono: 4,
    dificultad: 3,
    imagen: "assets/img/eir.jpg",
    resumen: "En las minas de Volunder. Combina ataques cuerpo a cuerpo con embestidas a distancia.",
    texto: `Cuarto trono, en las minas de Volunder, en Midgard. Su cámara está escondida dentro de una zona secundaria que muchos jugadores nunca abren.

En los mitos nórdicos, Eir es una figura asociada a la curación. La valquiria del juego no cura nada: combina el cuerpo a cuerpo con embestidas a distancia y no deja respirar entre una cosa y la otra.

La distancia es el problema del combate. Se la puede pelear de cerca o de lejos, pero nunca de las dos formas a la vez, y elegir mal cuesta caro.

Con ella se cierra la mitad del consejo, y a partir de acá las peleas dejan de tener margen de error.`
  },
  {
    id: "olrun",
    nombre: "Olrun",
    reino: "Alfheim",
    trono: 5,
    dificultad: 4,
    imagen: "assets/img/olrun.jpg",
    resumen: "Ágil y agresiva. Encadena ataques que castigan cualquier error de lectura.",
    texto: `Quinto trono, en Alfheim. Es el punto de quiebre del consejo: la primera que exige un conocimiento real del sistema de combate y no solo reflejos.

Encadena ataques sin pausa. Donde las anteriores dejaban un hueco después de cada movimiento, Olrun enlaza uno con otro y convierte cualquier error de lectura en una cadena de golpes.

El consejo entero está construido con la misma lógica: cada valquiria repite movimientos de las anteriores y agrega uno propio. Para cuando se llega a Olrun, ya no alcanza con reaccionar; hay que anticipar.

Es la que más suele frenar a quien intenta hacer las nueve de corrido.`
  },
  {
    id: "gondul",
    nombre: "Gondul",
    reino: "Muspelheim",
    trono: 6,
    dificultad: 4,
    imagen: "assets/img/gondul.jpg",
    resumen: "Valquiria del reino del fuego. Su arena arde y sus ataques prenden fuego a Kratos.",
    texto: `Sexto trono, en Muspelheim, el reino del fuego. Su arena arde y el terreno mismo es parte del combate.

Sus ataques prenden fuego a Kratos, lo que agrega un daño que sigue corriendo después de esquivar. Es la única del consejo donde el reino donde está pesa tanto como la valquiria.

Llegar hasta ella ya es un logro aparte: Muspelheim no se abre solo, hay que juntar lo necesario para entrar y después atravesar sus propias pruebas.

En los poemas antiguos, Gondul aparece entre las valquirias que eligen a los caídos. Acá está encerrada en un reino donde no cae nadie.`
  },
  {
    id: "rota",
    nombre: "Rota",
    reino: "Helheim",
    trono: 7,
    dificultad: 4,
    imagen: "assets/img/rota.jpg",
    resumen: "Rápida y agresiva. Prepara el terreno para las dos más difíciles.",
    texto: `Séptimo trono, en Helheim, el reino de los muertos sin honor. El frío de ese reino es parte del problema: llegar a su cámara ya exige protección contra algo que mata solo por estar ahí.

Es rápida y agresiva, y funciona como preparación para las dos últimas. Todo lo que hace lo hacen mejor Hildr y Sigrún, así que se la suele usar como ensayo.

Hay algo que cierra bien en que una valquiria esté presa justamente en Helheim. Su trabajo era decidir quién no terminaba ahí, y Odín la dejó encerrada en ese mismo lugar.

Con ella quedan dos, y las dos son de otra categoría.`
  },
  {
    id: "hildr",
    nombre: "Hildr",
    reino: "Niflheim",
    trono: 8,
    dificultad: 5,
    imagen: "assets/img/hildr.jpg",
    resumen: "En el corazón de la niebla venenosa de Niflheim. Una de las peleas más largas y castigadas del juego.",
    texto: `Octavo trono, en el corazón de la niebla venenosa de Niflheim. Es la más difícil de las ocho corruptas y, para mucha gente, más dura que varios jefes de la historia principal.

El reino juega en contra desde antes de empezar: en Niflheim corre un reloj y el aire envenena. La pelea es larga, castigada y sin lugar donde recuperarse.

Encadena prácticamente todo el repertorio del consejo. Las siete anteriores fueron, en los hechos, el entrenamiento para esta.

Derrotarla destraba el trono del medio. Es el último paso antes de que Sigrún aparezca.`
  },
  {
    id: "sigrun",
    nombre: "Sigrún",
    reino: "Midgard",
    trono: 9,
    dificultad: 5,
    imagen: "assets/img/sigrun.jpg",
    resumen: "La reina del consejo. Solo aparece en el trono central cuando se han derrotado a las otras ocho. Combate cumbre del juego original.",
    reina: true,
    texto: `Novena y última. Fue la reina del consejo, la que decidía en última instancia quién entraba a Valhalla, y la que más resistió cuando Odín vino a corromperlas. Por eso su prisión es la que más cuesta abrir.

No está en ningún reino escondido: aparece en el trono central del consejo, en Midgard, y recién cuando las otras ocho fueron liberadas. Hasta ese momento el asiento está vacío.

El combate es el más duro que ofrece el juego original, por encima de cualquier jefe de la historia. Pelea con los movimientos de las ocho anteriores encadenados, sin descanso entre uno y otro, y con un ataque propio que castiga quedarse quieto.

Liberarla cierra el consejo. Las nueve recuperan el cuerpo que Odín les había sacado, y el tribunal que decidía quién merecía Valhalla vuelve a existir.`
  }
];
