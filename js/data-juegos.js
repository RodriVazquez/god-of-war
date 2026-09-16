/* ===========================================================
   JUEGOS — los nueve títulos de la saga.

   Campos:
     anio          — año de lanzamiento (para orden por salida).
     ordenHistoria — 1..9, orden cronológico interno de la trama.
     saga          — "griega" | "nordica"
     plataforma    — consola original de lanzamiento.
   =========================================================== */

const JUEGOS = [
  {
    id: "gow-1",
    titulo: "God of War",
    anio: 2005,
    ordenHistoria: 3,
    saga: "griega",
    plataforma: "PlayStation 2",
    imagen: "assets/img/god-of-war.jpg",
    resumen: "La venganza contra Ares.",
    texto: `El que empieza todo. Kratos lleva diez años sirviendo a los dioses del Olimpo con una condición: que al terminar le borren los recuerdos de lo que hizo. El último encargo es matar a Ares, que está destruyendo Atenas, y para eso necesita la Caja de Pandora.

La estructura es la de un juego de acción de su época —combos, plataformas y acertijos— pero lo que lo separó del resto fue el tono. No hay héroe: hay un tipo furioso que trata mal a todo el mundo y al que el juego no le pide disculpas en ningún momento.

La historia se cuenta hacia atrás. Entre nivel y nivel aparecen los recuerdos de lo que pasó en el templo, y recién sobre el final se entiende por qué tiene las cenizas pegadas al cuerpo y por qué quiere olvidarse.

Mata a Ares, ocupa su trono y descubre que el trato no incluía la parte que a él le importaba. Los dioses le quitaron el castigo, no la memoria.`
  },
  {
    id: "gow-2",
    titulo: "God of War II",
    anio: 2007,
    ordenHistoria: 5,
    saga: "griega",
    plataforma: "PlayStation 2",
    imagen: "assets/img/god-of-war-ii.jpg",
    resumen: "Kratos contra el destino, con las Moiras de por medio.",
    texto: `Kratos es dios de la guerra y lo ejerce como Ares: arrasando ciudades griegas con el ejército espartano. El juego abre con la destrucción de Rodas y con Zeus quitándole los poderes y matándolo con la Espada del Olimpo.

Lo que sigue es una fuga del inframundo y una idea nueva en la saga: si el destino se puede tocar, entonces la muerte se puede deshacer. Kratos va hasta las Islas del Destino a buscar a las Hermanas para volver al momento en que Zeus lo mató.

Es el más grande y el más variado de la etapa de PlayStation 2, y el que sumó a los titanes como aliados. También el que dejó la saga abierta: termina con Kratos y los titanes escalando el Olimpo, sin resolución.

Para mucha gente sigue siendo el mejor de los seis griegos. Es difícil discutirlo.`
  },
  {
    id: "gow-chains-of-olympus",
    titulo: "Chains of Olympus",
    anio: 2008,
    ordenHistoria: 2,
    saga: "griega",
    plataforma: "PSP",
    imagen: "assets/img/chains-of-olympus.jpg",
    resumen: "Precuela del primer juego. Kratos aún al servicio de los dioses.",
    texto: `Salió tercero pero ocurre primero: es la historia más temprana de la saga, durante los diez años en que Kratos servía a los dioses sin saber para qué.

El sol desaparece del cielo y el mundo empieza a congelarse. Kratos baja a buscar a Helios y termina en el inframundo, donde Perséfone le ofrece el único trato que podía tentarlo: quedarse con Calíope para siempre.

El corazón del juego es esa escena. Padre e hija se reencuentran en Elysium y para quedarse ahí Kratos tiene que entregar su fuerza, y sin su fuerza no puede impedir que Perséfone destruya el mundo. Tiene que soltarla él mismo.

Que semejante momento haya salido en una consola portátil, en 2008, dice bastante de lo poco que la saga separaba lo principal de lo secundario.`
  },
  {
    id: "gow-3",
    titulo: "God of War III",
    anio: 2010,
    ordenHistoria: 6,
    saga: "griega",
    plataforma: "PlayStation 3",
    imagen: "assets/img/god-of-war-iii.jpg",
    resumen: "La caída del Olimpo. Cierre de la saga griega.",
    texto: `El cierre de la saga griega. Arranca exactamente donde terminó el anterior, con Kratos trepando el Olimpo a lomos de Gaia, y desde ahí no baja el ritmo durante todo el juego.

Es el más brutal de los seis y el más consciente de serlo. Cada dios que Kratos mata desencadena un desastre en el mundo de los hombres: al morir Poseidón se inundan las costas, al morir Helios se apaga el sol, al morir Hades se sueltan las almas. El juego te deja verlo y no lo comenta.

El final le da vuelta el sentido a toda la saga. Kratos llega hasta Zeus, lo mata a golpes, y descubre que lo que los dioses habían guardado en la Caja de Pandora no era solo el mal: también estaba la Esperanza, y estuvo dentro suyo todo el tiempo.

Cuando Atenea se la reclama, Kratos se clava la espada y la suelta sobre el mundo en vez de entregársela. Es la primera decisión suya en seis juegos que no es una venganza.`
  },
  {
    id: "gow-ghost-of-sparta",
    titulo: "Ghost of Sparta",
    anio: 2010,
    ordenHistoria: 4,
    saga: "griega",
    plataforma: "PSP",
    imagen: "assets/img/ghost-of-sparta.jpg",
    resumen: "La historia de Deimos, el hermano perdido de Kratos.",
    texto: `La segunda salida en portátil, y la que explica la marca roja de la cara de Kratos. Ocurre después del primer juego: ya es dios de la guerra, ya tiene el trono, y sigue sin poder dormir.

Se entera de que su hermano Deimos podría estar vivo y va a buscarlo a Atlántida primero y al Dominio de la Muerte después. El juego es una historia familiar antes que una campaña contra el Olimpo.

Deimos no lo recibe bien, y tiene razones: se lo llevaron delante de Kratos cuando los dos eran chicos, y Kratos no fue a buscarlo durante décadas. Lo primero que hacen al reencontrarse es pelearse entre ellos.

Deimos muere cubriéndolo frente a Tánatos. Es la única muerte de la saga griega que a Kratos lo hace llorar, y la razón por la que se pinta el cuerpo con ese rojo.`
  },
  {
    id: "gow-ascension",
    titulo: "Ascension",
    anio: 2013,
    ordenHistoria: 1,
    saga: "griega",
    plataforma: "PlayStation 3",
    imagen: "assets/img/ascension.jpg",
    resumen: "El origen: Kratos intentando romper su pacto con Ares.",
    texto: `La precuela más temprana de todas en orden de salida, y la más cercana al origen en la historia: Kratos acaba de romper el juramento de sangre con Ares y las Furias vienen a cobrárselo.

Es un juego sobre las consecuencias inmediatas de la primera decisión, cuando todavía no era el Fantasma de Esparta sino un hombre recién salido del peor día de su vida. Todavía tiene la piel de su color.

Rehizo el sistema de combate con armas que cambian de elemento y sumó un modo multijugador, la única vez que la saga lo intentó.

Fue el último juego griego. Después de Ascension la serie estuvo cinco años sin salir, y cuando volvió lo hizo en otro continente, con otra cámara y con otro Kratos.`
  },
  {
    id: "gow-2018",
    titulo: "God of War",
    anio: 2018,
    ordenHistoria: 7,
    saga: "nordica",
    plataforma: "PlayStation 4",
    imagen: "assets/img/god-of-war-2018.jpg",
    resumen: "Reinicio en Midgard. Un padre, un hijo y unas cenizas que llevar al pico más alto.",
    texto: `El reinicio. Misma persona, otro juego: cámara al hombro sin cortes, un hacha en vez de las Espadas del Caos, y un hijo al lado que hay que cuidar y aguantar al mismo tiempo.

Kratos vive escondido en Midgard. Faye, su mujer, acaba de morir y dejó un último pedido: que esparzan sus cenizas desde el pico más alto de los Nueve Reinos. El viaje para cumplirlo es todo el juego.

La pelea real no es contra Baldur ni contra los hijos de Thor: es contra la posibilidad de que Atreus termine siendo lo que Kratos fue. Todo lo que el personaje aprendió a hacer durante seis juegos es exactamente lo que acá tiene que evitar enseñar.

Se llama igual que el de 2005 a propósito. Y la última línea del juego, en Jötunheim, reordena todo lo anterior.`
  },
  {
    id: "gow-ragnarok",
    titulo: "God of War Ragnarök",
    anio: 2022,
    ordenHistoria: 8,
    saga: "nordica",
    plataforma: "PlayStation 4 y 5",
    imagen: "assets/img/god-of-war-ragnarok.jpg",
    resumen: "El fin profetizado. Nueve reinos en guerra abierta contra Asgard.",
    texto: `La segunda mitad de la historia nórdica y el cierre de la saga en el norte. El Fimbulwinter ya empezó, Asgard sabe quiénes son y Odín se presenta en persona a ofrecer un trato.

Es más grande en todo sentido: se recorren los nueve reinos, hay secciones jugables con Atreus solo, y el elenco se amplía a Freyr, Thrúd, Angrboda, Sif y un Týr que no es quien dice ser.

El tema es la profecía y hasta dónde obliga. Kratos pasó dos mitologías creyendo que el destino estaba escrito, y acá tiene que decidir si eso es una excusa. Atreus hace el camino inverso: cree que puede torcerlo solo y se equivoca feo antes de entender cómo.

Termina con Asgard caído, con Odín muerto y con padre e hijo separándose por primera vez de común acuerdo. En los murales de Jötunheim, Kratos no aparece destruyendo nada.`
  },
  {
    id: "gow-valhalla",
    titulo: "Valhalla",
    anio: 2023,
    ordenHistoria: 9,
    saga: "nordica",
    plataforma: "PlayStation 4 y 5",
    imagen: "assets/img/valhalla.jpg",
    resumen: "Expansión gratuita. Kratos frente a sí mismo, en formato roguelite.",
    texto: `Una expansión gratuita que salió un año después de Ragnarök, y que no se parece a nada de lo anterior: es un roguelite. Se entra a Valhalla, se pelea por salas que cambian cada vez, se muere y se vuelve a empezar.

El formato no es un capricho. Cada vuelta al principio devuelve a Kratos a los mismos lugares de su pasado griego, y cada repetición le saca una capa más. Es una terapia con forma de mazmorra.

Kratos frente a Kratos: el juego lo obliga a repasar Esparta, el Olimpo y lo que hizo ahí, hasta que puede decirlo en voz alta en vez de esquivarlo.

Cierra la pregunta que quedaba abierta desde 2018: si un dios de la guerra puede ser otra cosa. La respuesta llega recién acá, y es la razón por la que Valhalla no es contenido extra sino el epílogo real.`
  }
];
