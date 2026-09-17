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
    imagen: "assets/img/midgard.jpg",
    resumen: "El reino de los hombres, centro del Árbol del Mundo.",
    datos: { "Rama del Yggdrasil": "Central" },
    personajes: ["kratos", "atreus", "freya", "baldur", "thor", "tyr", "hermanos-huldra"],
    texto: `El reino de los hombres y el centro del Árbol del Mundo: todos los demás cuelgan alrededor y casi todos se atraviesan pasando por acá. Es el único de los nueve donde vive gente común, y también el único que Kratos eligió como casa.

Su punto de referencia es el Lago de los Nueve, una masa de agua con nueve puntas que se corresponden con los nueve reinos. En el centro del lago está el templo de Týr, que funciona como sala de viaje: desde ahí se llega a cualquier otro lado.

El paisaje cambia solo durante el viaje. El lago baja, sube, se congela, y con cada cambio quedan a la vista lugares que antes estaban tapados. Es un mapa que se reescribe en vez de expandirse.

Acá empieza todo: la cabaña del bosque, la pira de Faye, y la primera visita de Baldur.`
  },
  {
    id: "alfheim",
    nombre: "Alfheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "assets/img/alfheim.jpg",
    resumen: "Tierra de elfos de luz y oscuridad, en guerra permanente.",
    datos: {},
    personajes: [],
    texto: `Reino de los elfos, partido en dos por una guerra que no termina. Los elfos de la luz y los elfos oscuros pelean por el control de la Luz de Alfheim, una fuente de energía que está en el centro del reino y que los dos bandos consideran suya por derecho.

Visualmente es el reino más raro de los nueve: blanco, dorado y violeta, con estructuras que parecen de cristal y una luz que no se apaga nunca. Es también el más incómodo de recorrer, porque la oscuridad de Alfheim mata literalmente a quien se quede adentro sin protección.

La guerra no tiene un lado bueno. Los dos pueblos se acusan mutuamente de haber empezado, los dos arrasaron lo que el otro construyó, y Mímir deja claro que no vale la pena tomar partido.

Kratos y Atreus llegan buscando la Luz, que necesitan para seguir viaje. Se van habiendo cambiado el equilibrio de la guerra sin proponérselo.`
  },
  {
    id: "svartalfheim",
    nombre: "Svartalfheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "assets/img/svartalfheim.jpg",
    resumen: "Las forjas de los enanos, donde nacen las mejores armas.",
    datos: {},
    personajes: ["hermanos-huldra"],
    texto: `El reino de los enanos, y el único lugar de los nueve donde se fabrica algo en serio. Acá están las forjas, las minas y los talleres de los que salieron el hacha Leviatán, el martillo Mjölnir y casi todo lo que se puede empuñar en el norte.

Nidavellir es su ciudad principal: un puerto de canales oscuros, humo y gente trabajando a toda hora. Debajo está el Corazón de Manzana, una mina agotada que Odín reconvirtió en prisión cuando dejó de dar mineral.

Los enanos que quedan viven bajo la presión de Asgard, que les encarga armas y no acepta un no. La relación entre lo que forjan y el uso que después se le da a lo forjado es una culpa que el reino entero arrastra.

Es también el reino de Sindri y Brok, y el lugar donde el viaje pasa de ser una travesía a ser una guerra organizada.`
  },
  {
    id: "vanaheim",
    nombre: "Vanaheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "assets/img/vanaheim.jpg",
    resumen: "Selva de los vanir, sellada por Odín durante siglos.",
    datos: {},
    personajes: ["freya"],
    texto: `Hogar de los vanir, el panteón que peleó contra los ásir hasta que la guerra terminó en tablas y se selló con un casamiento. Es una selva densa, verde y húmeda, el reino más vivo de los nueve y el más distinto de todo lo que rodea a Asgard.

Odín lo cerró después de la guerra. Durante años nadie pudo entrar ni salir, y adentro quedó un pueblo entero aislado con sus propios problemas: la magia vanir cambiando el terreno, criaturas sueltas y un reino que se volvió salvaje sin nadie que lo ordenara.

Freyr, hermano de Freya, monta ahí el campamento de la resistencia contra Asgard. Vanaheim pasa de ser una prisión a ser la base desde donde se prepara la guerra.

Es el reino de Freya y su historia explica buena parte de la de ella: por qué la entregaron, qué perdió en el trato y a qué vuelve cuando se libera.`
  },
  {
    id: "asgard",
    nombre: "Asgard",
    region: "nordica",
    tipo: "Reino",
    imagen: "assets/img/asgard.jpg",
    resumen: "El reino dorado de los æsir y de Odín.",
    datos: {},
    personajes: ["odin", "thor", "baldur", "tyr", "heimdall", "mimir"],
    texto: `La ciudad de los ásir y la capital de los Nueve Reinos, aunque nadie la haya votado. Dorada, ordenada, construida para que se note el poder desde lejos. Odín gobierna desde su palacio y desde ahí se decidió todo lo que les pasó a los otros ocho reinos.

El Bifröst la conecta con el resto, y Heimdall vigila esa puerta. Nadie entra sin que Odín lo sepa, que es exactamente el punto.

Debajo del brillo hay una ciudad con obreros, presos y gente que obedece porque no le queda otra. La versión que Asgard cuenta de sí misma y lo que se ve caminándola no coinciden, y el juego se encarga de que el jugador vea las dos.

Ragnarök termina acá. La guerra que Odín pasó siglos tratando de evitar le llega a la puerta de su propia casa.`
  },
  {
    id: "jotunheim",
    nombre: "Jötunheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "assets/img/jotunheim.jpg",
    resumen: "Hogar de los gigantes, prácticamente extinguidos.",
    datos: {},
    personajes: ["atreus", "angrboda"],
    texto: `El reino de los gigantes, y el más vacío de los nueve. Thor y los ásir lo arrasaron: mataron a casi todos sus habitantes y los pocos que quedaron se fueron o se escondieron. Lo que se recorre es un cementerio muy grande y muy hermoso.

Los gigantes no dejaron ejércitos ni fortalezas: dejaron paredes pintadas. Antes del final escribieron en murales todo lo que iba a pasar, incluido el viaje de Kratos y Atreus, incluido el final de ese viaje. Llegar y encontrarse retratado de antemano es el golpe más fuerte de la primera parte.

Faye era de acá. El pico más alto de todos los reinos, donde pidió que esparcieran sus cenizas, está en Jötunheim, y ese pedido es la excusa que pone en marcha la historia entera.

Queda claro al llegar que el destino de Faye no era solo el destino: era un plan. Ella sabía qué iban a encontrar en esas paredes.`
  },
  {
    id: "helheim",
    nombre: "Helheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "assets/img/helheim.jpg",
    resumen: "El reino de los muertos deshonrados. Frío absoluto.",
    datos: {},
    personajes: [],
    texto: `El reino de los muertos que no merecieron Valhalla: los que murieron de viejos, de enfermedad o sin honor. Es frío, gris y silencioso, y el frío no se puede combatir con nada que no sea magia.

El río de las almas lo cruza de punta a punta arrastrando a los que llegan. Hay un puente y un guardián que decide quién pasa, y una regla que vale para todos: las armas normales no sirven acá abajo.

Helheim le devuelve a cada uno sus propios recuerdos. Kratos escucha en ese reino las voces de lo que dejó en Grecia, y Atreus escucha cosas sobre su padre que todavía no le habían contado. El reino funciona como un interrogatorio.

Es, de todos los lugares del norte, el que más se parece al inframundo griego. Kratos lo nota.`
  },
  {
    id: "muspelheim",
    nombre: "Muspelheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "assets/img/muspelheim.jpg",
    resumen: "Fuego primordial. Solo pruebas de combate.",
    datos: {},
    personajes: [],
    texto: `El reino del fuego: roca negra, lava y un calor que no da tregua. No hay ciudades, no hay pueblo, no hay nada que recorrer salvo una torre y una serie de pruebas de combate cada vez más difíciles.

Su habitante es Surtr, el gigante de fuego. La profecía dice que va a arder y que su fuego va a terminar con Asgard, y toda la existencia de Muspelheim apunta a ese momento.

Como zona de juego es el desafío opcional más puro que ofrece la saga: nueve pruebas, sin historia y sin recompensa narrativa, solo para medirse.

Cuando la profecía se cumple, lo que sale de acá no es un ejército: es una sola cosa enorme y encendida, caminando hacia el norte.`
  },
  {
    id: "niflheim",
    nombre: "Niflheim",
    region: "nordica",
    tipo: "Reino",
    imagen: "assets/img/niflheim.jpg",
    resumen: "Niebla venenosa sobre las ruinas de Ivaldi.",
    datos: {},
    personajes: [],
    texto: `El reino de la niebla y del hielo, envenenado desde hace tanto que ya nadie recuerda cómo era antes. El aire mata: se entra con un reloj corriendo y se sale antes de que se acabe, o no se sale.

En el centro está el laberinto de Ivaldi, un enano que construyó un palacio para su hija y que terminó llenándolo de trampas cuando la perdió. La niebla venenosa salió de ahí y se comió el reino entero.

El laberinto se reordena cada vez que se entra, así que no hay forma de memorizarlo. Se entra, se junta lo que se pueda y se sale corriendo.

Es el reino más hostil de los nueve, y el único que castiga por quedarse quieto.`
  },

  /* --- Lugares griegos --- */
  {
    id: "esparta",
    nombre: "Esparta",
    region: "griega",
    tipo: "Ciudad",
    imagen: "assets/img/esparta.jpg",
    resumen: "Ciudad-estado guerrera. Cuna de Kratos y de su hermano Deimos.",
    datos: {
      "Ubicación": "Península del Peloponeso",
      "Régimen": "Militarista"
    },
    personajes: ["kratos", "deimos", "caliope"],
    texto: `La ciudad donde nació Kratos, y la que lo formó. En Esparta los chicos se criaban para pelear: a los siete años entraban al entrenamiento, y a los que no servían se los descartaba sin ceremonia. Kratos y Deimos pasaron por ahí.

Llegó a general de sus ejércitos y ganó todo lo que había para ganar hasta que se topó con los bárbaros del este. Esa derrota es la que lo empuja a jurarle su vida a Ares.

Fue también el escenario del peor momento de su vida: el templo donde mató a su familia estaba dentro de una aldea espartana, y fue el oráculo de esa aldea quien le pegó las cenizas al cuerpo.

Años después, Kratos vuelve como dios de la guerra y la ciudad lo adora. Zeus la arrasa igual, para castigarlo a él. Esparta paga dos veces por ser su lugar de origen.`
  },
  {
    id: "atenas",
    nombre: "Atenas",
    region: "griega",
    tipo: "Ciudad",
    imagen: "assets/img/atenas.jpg",
    resumen: "Ciudad de la diosa Atenea. Devastada por Ares al comienzo del primer God of War.",
    datos: {
      "Patrona": "Atenea",
      "Enemigo mítico": "Ares"
    },
    personajes: ["atenea", "ares"],
    texto: `La ciudad de Atenea, la más próspera de Grecia y el objetivo de Ares durante la guerra entre los dos dioses. Cuando empieza la saga, Atenas está siendo destruida: Ares la ataca con todo lo que tiene por despecho contra su hermana.

Es el escenario del primer juego y, en buena medida, su personaje principal. Se recorre mientras se cae a pedazos, entre civiles que huyen y edificios que arden.

Kratos llega a ella no por bondad sino por trato: Atenea le prometió el fin de sus pesadillas si mataba a Ares, y Ares estaba en Atenas.

Lo que queda al final no es una ciudad salvada. Es una ciudad en ruinas con un dios muerto en el medio, y un espartano parado ahí recibiendo un trono que no lo alivia.`
  },
  {
    id: "olimpo",
    nombre: "Monte Olimpo",
    region: "griega",
    tipo: "Monte",
    imagen: "assets/img/monte-olimpo.jpg",
    resumen: "Cumbre y trono del panteón olímpico. Escenario de la caída final en God of War III.",
    datos: {
      "Rol": "Sede de los dioses"
    },
    personajes: ["zeus", "atenea", "ares", "hades", "hercules", "pandora", "persefone"],
    texto: `El monte donde viven los dioses griegos, y el edificio central de toda la saga. Kratos lo sube tres veces a lo largo de los seis juegos, y cada vez está peor que la anterior.

Arriba está la sala del trono de Zeus y el Jardín de las Hespérides; abajo, colgando de las laderas, las forjas, los templos y los mecanismos que sostienen el mundo. El Olimpo no es solo una casa: es la estructura que mantiene todo en su lugar.

Por eso su caída no es una victoria limpia. Cada dios que Kratos mata desata la catástrofe que ese dios contenía: al morir Poseidón se inundan las costas, al morir Helios se apaga el sol, al morir Hades se sueltan las almas.

Cuando termina, no queda Olimpo. Queda un mundo sin dioses y sin nada que lo ordene, y un hombre que tiene que irse muy lejos para dejar de ser el responsable.`
  },
  {
    id: "inframundo",
    nombre: "Inframundo",
    region: "griega",
    tipo: "Reino",
    imagen: "assets/img/inframundo.jpg",
    resumen: "Dominio de Hades. Almas de los muertos, ríos de fuego y el juicio final de las Moiras.",
    datos: {
      "Regente": "Hades"
    },
    personajes: ["hades", "persefone"],
    texto: `El reino de Hades, adonde va todo lo que muere en el mundo griego. Se entra cruzando el río Estigia y se organiza en zonas: Elysium para los que merecieron descanso, Tártaro para los castigados, y una enorme extensión intermedia para el resto.

Kratos lo conoce mejor que nadie vivo. Cayó ahí más de una vez y siempre volvió trepando, que es una hazaña que nadie más de la saga logró ni una sola vez.

En Elysium está Calíope, y ese es el motivo por el que el inframundo es, para Kratos, algo más que un obstáculo. Lo recorre sabiendo que en algún lugar de ese reino está su hija.

Es también el lugar donde la saga griega guarda su sentido del humor más negro: un mundo entero dedicado a administrar muertos, con colas, trámites y funcionarios.`
  },
  {
    id: "islas-del-destino",
    nombre: "Islas del Destino",
    region: "griega",
    tipo: "Isla",
    imagen: "assets/img/islas-del-destino.jpg",
    resumen: "Templo flotante de las Moiras, hilanderas del destino. Escenario clave de God of War II.",
    datos: {
      "Habitantes": "Las Moiras (Cloto, Láquesis y Átropos)"
    },
    personajes: [],
    texto: `Un archipiélago que se mueve, sostenido por titanes encadenados y por el Coloso Cronos, que camina por el desierto con una isla entera encima. Es el lugar más extraño del mundo griego y también el más importante.

Acá viven las Hermanas del Destino: Láquesis, Átropos y Cloto, que tejen el hilo de todo lo que existe y deciden cuándo se corta. Ni Zeus puede contradecirlas, y esa es justamente la razón por la que Kratos va.

Su idea es simple y desmedida: si las Hermanas controlan el tiempo, entonces se puede volver al momento en que Zeus lo mató y cambiarlo. Nadie había intentado usar el destino como un arma.

Cuando las mata y toma el telar, la saga cambia de escala. A partir de ese punto ya no hay reglas que alguien pueda invocar para frenarlo.`
  },
  {
    id: "rodas",
    nombre: "Rodas",
    region: "griega",
    tipo: "Isla",
    imagen: "assets/img/rodas.jpg",
    resumen: "Isla del coloso. Donde Kratos pierde sus poderes al inicio de God of War II.",
    datos: {
      "Monumento": "Coloso de Rodas"
    },
    personajes: [],
    texto: `La ciudad griega que abre el segundo juego, y la que paga el precio de que Kratos sea dios de la guerra. Su monumento es el Coloso: una estatua de bronce enorme que Zeus anima para pelear contra él.

La escena inicial es la caída de Kratos en formato de ciudad. Baja del Olimpo convertido en dios, arrasa Rodas sin mirar a quién, y mientras pelea contra el Coloso va perdiendo poder sin entender por qué. Zeus se lo está sacando desde arriba.

Termina con Kratos derrotando al Coloso y siendo atravesado por la Espada del Olimpo en manos de su propio padre. Es el momento en que deja de ser un dios y vuelve a ser un hombre que quiere venganza.

De la ciudad no queda mucho. Rodas es, básicamente, el daño colateral de una pelea familiar entre dioses.`
  }
];
