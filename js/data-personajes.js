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
    imagen: "assets/img/kratos.jpg",
    resumen: "Semidiós espartano que derrocó al panteón olímpico y huyó al norte buscando una vida distinta.",
    datos: {
      "Origen": "Esparta",
      "Arma principal": "Hacha Leviatán / Espadas del Caos",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["esparta", "olimpo", "midgard"],
    texto: `Antes de ser un dios fue un general espartano, y antes de eso un chico al que Esparta le enseñó que la piedad era una debilidad. Perdiendo una batalla contra los bárbaros le ofreció su vida a Ares a cambio de la victoria. Ares aceptó y cobró el precio sin avisar: bajo un hechizo, Kratos mató a su esposa Lisandra y a su hija Calíope dentro de un templo. El oráculo del pueblo le pegó las cenizas de las dos a la piel para que las llevara puestas el resto de su vida. De ahí salió el nombre con el que lo conocieron después: el Fantasma de Esparta.

Diez años sirvió a los dioses del Olimpo esperando que le sacaran los recuerdos. Cuando entendió que no iban a hacerlo, mató a Ares y ocupó su trono. El trono no le alcanzó. Descubrió que Zeus era su padre, que lo había traicionado igual que Ares, y se propuso terminar con el panteón entero. Lo consiguió: cuando dejó el Olimpo no quedaba nadie a quien matar, y el mundo de los hombres había quedado arrasado de paso.

Cruzó al norte y probó a empezar de nuevo. Se casó con Faye, tuvo un hijo, aprendió a usar un hacha en vez de las Espadas del Caos y escondió su pasado hasta que ya no pudo. El viaje para esparcir las cenizas de Faye lo obligó a contarlo. Lo que había repetido durante seis juegos —que la venganza es la única respuesta— fue lo que tuvo que desaprender para que su hijo no terminara siendo él.

En las murallas de Jötunheim, los gigantes habían pintado su historia mucho antes de que llegara. En una de esas paredes no aparece destruyendo nada: aparece encabezando una marcha. Kratos tardó dos mitologías en llegar a ese mural.`
  },
  {
    id: "atreus",
    nombre: "Atreus",
    epiteto: "Loki",
    saga: ["nordica"],
    imagen: "assets/img/atreus.jpg",
    resumen: "Hijo de Kratos y de la giganta Faye. Arquero, rastreador y traductor de las lenguas antiguas.",
    datos: {
      "Origen": "Midgard",
      "Arma principal": "Arco Talón de Alba",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["midgard", "jotunheim"],
    texto: `Hijo de Kratos y de Faye. Creció en el bosque sin saber quiénes eran sus padres realmente: que el hombre callado que le enseñaba a cazar había derribado un panteón, y que su madre no era una mujer de Midgard sino una gigante de Jötunheim. Se enteró de las dos cosas en el mismo viaje.

Es arquero, rastreador y traductor: lee las lenguas antiguas que su padre no entiende, y esa es su función real en el viaje. Donde Kratos rompe una puerta, Atreus lee lo que dice. Es también el que insiste en hablar con la gente antes de pelearla, una costumbre que su padre mira con desconfianza y que termina salvándolos más de una vez.

Su nombre entre los gigantes es Loki, y descubrirlo lo pone en el centro de una profecía que no eligió. Buena parte de Ragnarök es Atreus intentando resolverla por su cuenta, a espaldas de Kratos, incluso aceptando la ayuda de quien no debía. Se equivoca, paga el error y sigue.

Al final del viaje se va solo, a buscar lo que quede de los gigantes. Es la primera vez que padre e hijo se separan por decisión de los dos y no por una pelea.`
  },
  {
    id: "mimir",
    nombre: "Mímir",
    epiteto: "El hombre más listo del mundo",
    saga: ["nordica"],
    imagen: "assets/img/mimir.jpg",
    resumen: "Antiguo consejero de Odín, condenado a colgar de un árbol hasta que Kratos lo liberó.",
    datos: {
      "Origen": "Desconocido",
      "Rol": "Consejero",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["asgard"],
    texto: `Se presenta como el hombre más listo del mundo y no está exagerando del todo. Consejero de Odín durante siglos, embajador, negociador, el que conseguía que dos reinos firmaran una tregua antes de que se mataran. También el que, cuando dejó de servirle, terminó clavado a un árbol durante ciento nueve años.

Kratos lo baja de ahí de la única manera posible: cortándole la cabeza. Freya la revive con magia vanir, y de ahí en adelante Mímir viaja colgado del cinturón de Kratos, hablando. Cuenta historias del norte, traduce lo que Atreus no sabe, explica quién es quién y por qué conviene evitarlo.

Su utilidad no es solo informativa. Mímir es el único personaje que conoció a Odín de cerca y sobrevivió para contarlo, y la única voz que le discute a Kratos sin miedo. Que sea una cabeza sin cuerpo no lo vuelve menos peligroso para el Padre de Todos: sabe demasiado.

Arrastra su propia culpa. Fue él quien ayudó a Odín a hacer varias de las cosas que después hubo que deshacer, y lo admite sin adornarlo.`
  },
  {
    id: "freya",
    nombre: "Freya",
    epiteto: "Reina de las Valquirias",
    saga: ["nordica"],
    imagen: "assets/img/freya.jpg",
    resumen: "Diosa vanir, antigua esposa de Odín, atada a Midgard por una maldición que ella misma aceptó.",
    datos: {
      "Origen": "Vanaheim",
      "Rol": "Diosa vanir",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["vanaheim", "midgard"],
    texto: `Reina de los vanir, hermana de Freyr, entregada en matrimonio a Odín para sellar la paz entre los dos panteones después de la guerra. El trato funcionó como funcionan esos tratos: frenó la guerra y la dejó a ella atrapada del otro lado.

Cuando entendió cómo eran los ásir, se separó de Odín. Él respondió desterrándola a Midgard con un hechizo que le impedía irse y otro que le impedía pelear. Vivió años en una cabaña del bosque haciendo de bruja para quien pasara, sin poder levantar un arma.

Lo que la define es su hijo. Para protegerlo de una premonición de muerte, le echó un hechizo de invulnerabilidad sin pedirle permiso: Baldur no podía ser herido, pero tampoco podía sentir nada. Ni frío, ni dolor, ni el abrazo de su madre. Cuando Kratos lo mata, Freya jura vengarse.

Persigue esa venganza durante todo el viaje siguiente, hasta que la propia venganza le muestra a dónde lleva. Terminan peleando del mismo lado. Freya rompe el hechizo que la ataba, recupera lo que Odín le había sacado y vuelve a ser lo que era antes del trato: una reina, y no la prisionera de nadie.`
  },
  {
    id: "zeus",
    nombre: "Zeus",
    epiteto: "Rey del Olimpo",
    saga: ["griega"],
    imagen: "assets/img/zeus.jpg",
    resumen: "Padre de Kratos y último obstáculo de la saga griega. Su miedo a ser destronado provocó justo eso.",
    datos: {
      "Origen": "Monte Olimpo",
      "Dominio": "El rayo",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["olimpo"],
    texto: `Rey del Olimpo, señor del rayo y padre de Kratos, aunque este tardó bastante en enterarse. Llegó al trono matando a su propio padre, Cronos, y pasó el resto de su reinado con miedo a que le hicieran lo mismo. Ese miedo explica casi todo lo que hace.

Cuando las Hermanas del Destino anunciaron que un guerrero marcado terminaría con el Olimpo, Zeus no esperó a saber quién era. Mandó buscar a los niños con marcas de nacimiento, se llevó a Deimos y dejó vivo a Kratos por error. Años después le quitó los poderes y lo mató con la Espada del Olimpo.

Kratos volvió. Volvió del inframundo dos veces, atravesó a los dioses uno por uno y llegó hasta él. Zeus intentó negociar, intentó huir y terminó a golpes de puño en el barro, que es más o menos la única forma en que podía terminar.

La ironía es que la profecía se cumplió por culpa de la reacción a la profecía. Si Zeus no hubiera intentado evitarla, no habría habido guerrero marcado.`
  },
  {
    id: "ares",
    nombre: "Ares",
    epiteto: "Dios de la Guerra",
    saga: ["griega"],
    imagen: "assets/img/ares.jpg",
    resumen: "El dios al que Kratos sirvió y después mató, heredando su trono y su título.",
    datos: {
      "Origen": "Monte Olimpo",
      "Dominio": "La guerra",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["olimpo", "atenas"],
    texto: `Dios de la guerra antes que Kratos, e hijo de Zeus y Hera. No era el dios de la estrategia ni del honor en la batalla: era el de la carnicería, y disfrutaba de la parte que a los demás olímpicos les daba pudor.

Quería un campeón capaz de derrotar al Olimpo entero, y creyó que podía fabricarlo. Le salvó la vida a Kratos en la batalla contra los bárbaros, lo ató con un juramento y después le puso las Espadas del Caos. El último paso de la receta fue hacer que matara a su familia: un guerrero sin nada que perder pelea sin freno.

Le salió al revés. Kratos no se volvió un arma obediente, se volvió un arma sin dueño. Diez años después lo mató en las ruinas de Atenas con la Espada de los Dioses, delante de la ciudad que Ares estaba arrasando.

Kratos ocupó su trono y su título, y arrastró su ejemplo mucho más de lo que hubiera querido admitir.`
  },

  /* --- Saga nórdica (continuación) --- */
  {
    id: "baldur",
    nombre: "Baldur",
    epiteto: "El dios inmortal",
    saga: ["nordica"],
    imagen: "assets/img/baldur.jpg",
    resumen: "Hijo de Odín y Freya. Cazador enviado tras Kratos y Atreus, invulnerable salvo por una única grieta.",
    datos: {
      "Origen": "Asgard",
      "Vínculo": "Hijo de Freya",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["asgard", "midgard"],
    texto: `Hijo de Odín y de Freya. Su madre lo hizo invulnerable para salvarlo de una muerte anunciada, y el hechizo funcionó demasiado bien: nada podía herirlo, pero tampoco podía sentir nada. Pasó más de un siglo sin percibir el calor, el sabor, el tacto ni el dolor. Buscó a propósito situaciones que deberían haberlo lastimado, solo para comprobar que seguía sin sentir.

Odín lo usó como sabueso. Lo mandó a Midgard a buscar a Faye, y cuando Faye ya no estaba, a buscar a su marido y a su hijo. Esa es la razón por la que aparece en la puerta de Kratos en la primera escena.

El muérdago era la única cosa del mundo que el hechizo no cubría. Cuando una flecha de muérdago le roza la piel, Baldur recupera la sensibilidad y, con ella, cien años de rabia acumulada contra su madre.

Muere a manos de Kratos mientras intenta estrangular a Freya. Es la primera vez que Kratos elige no matar y tiene que hacerlo igual, y la escena entera está construida para que padre e hijo vean qué pasa cuando un padre y un hijo se rompen.`
  },
  {
    id: "thor",
    nombre: "Thor",
    epiteto: "Dios del Trueno",
    saga: ["nordica"],
    imagen: "assets/img/thor.jpg",
    resumen: "El primogénito de Odín. Ejecutor brutal, matador de gigantes. Antagonista central de Ragnarök.",
    datos: {
      "Origen": "Asgard",
      "Arma": "Mjölnir",
      "Primera aparición": "God of War Ragnarök (2022)"
    },
    lugares: ["asgard", "midgard"],
    texto: `El hijo mayor de Odín y el arma con la que Asgard hizo casi todo su trabajo sucio. Se le atribuye la matanza de los gigantes: reinos enteros vaciados a martillazos por orden de su padre. Mjölnir, el martillo que los dwarves Sindri y Brok forjaron, fue la herramienta de esa campaña, y los dos hermanos cargan con haberla hecho.

No es el bruto simpático de las historias. Es un hombre enorme, callado y borracho, que sabe exactamente qué hizo y lo tapa con hidromiel. Su mujer Sif se lo aguanta, su hija Thrúd lo admira sin saber todo, y sus hijos Magni y Modi crecieron intentando parecérsele.

Se cruza dos veces con Kratos, y las dos son peleas entre dos versiones del mismo hombre: el ejecutor de un panteón que empieza a preguntarse si puede dejar de serlo. La diferencia es que Kratos llegó a esa pregunta a tiempo.

Cuando por fin decide dejar de obedecer, Odín lo mata en el acto. No hay último combate glorioso: hay un padre sacándose de encima a un hijo que dejó de servirle.`
  },
  {
    id: "odin",
    nombre: "Odín",
    epiteto: "Padre de todo",
    saga: ["nordica"],
    imagen: "assets/img/odin.jpg",
    resumen: "Rey de los æsir. Manipulador obsesionado con conocer todos los secretos del Yggdrasil, propios y ajenos.",
    datos: {
      "Origen": "Asgard",
      "Dominio": "Sabiduría y guerra",
      "Primera aparición": "God of War Ragnarök (2022)"
    },
    lugares: ["asgard"],
    texto: `El Padre de Todos, rey de Asgard, y el mejor mentiroso de los Nueve Reinos. No gobierna a los gritos: gobierna con favores, con tratos que parecen convenientes y con información que administra de a pedazos. Casi todos los personajes del norte le deben algo o le temen algo, y casi siempre las dos cosas.

Su obsesión es una grieta que encontró y que, según él, contiene la respuesta a qué hay después de la muerte. Por esa respuesta arrancó ojos, encerró dioses, arrasó Jötunheim y sacrificó a su propia familia. Todo lo demás —la guerra, la profecía, Ragnarök— es ruido alrededor de esa pregunta.

Trabaja disfrazado. Se hace pasar por otros, se presenta como aliado, ofrece ayuda justo cuando alguien la necesita. A Atreus lo capta así: no con amenazas, sino ofreciéndole lo que más quería.

Cae en Asgard, en medio de la guerra que él mismo armó. Y la última palabra no la tiene Kratos: la tiene Sindri, que hace con el alma de Odín lo que Odín le hizo a su hermano.`
  },
  {
    id: "hermanos-huldra",
    nombre: "Sindri y Brok",
    epiteto: "Los enanos forjadores",
    saga: ["nordica"],
    imagen: "assets/img/sindri-y-brok.jpg",
    resumen: "Hermanos herreros de Svartalfheim. Forjaron el Mjölnir y las Hachas Leviatán. Sindri es perfeccionista y ansioso; Brok es bruto y azul.",
    datos: {
      "Origen": "Svartalfheim",
      "Oficio": "Herreros",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["svartalfheim", "midgard"],
    texto: `Sindri y Brok son los mejores herreros que quedan, y la razón por la que Kratos y Atreus sobreviven al viaje. Forjaron el hacha Leviatán por encargo de Faye, forjaron Mjölnir para Odín —cosa de la que se arrepienten— y mejoran cada arma y cada armadura que pasa por sus manos.

Son opuestos en todo. Brok es azul, grita, putea y no se lava. Sindri es obsesivo con la limpieza, alérgico a todo y aterrado de que algo salga mal. Pelean sin parar, se separaron durante años por una discusión sobre Mjölnir y no saben funcionar el uno sin el otro.

Brok es azul por una razón que tarda en contarse: ya murió una vez, y Sindri lo trajo de vuelta. En el proceso se perdió un pedazo de su alma, y por eso las valquirias nunca pudieron llevárselo.

El final los rompe. Odín mata a Brok, y Sindri —el que se desinfectaba las manos antes de tocar una herramienta— sale de esa pérdida convertido en otra cosa. Es la muerte que más pesa de todas las que hay en el norte.`
  },
  {
    id: "tyr",
    nombre: "Tyr",
    epiteto: "El dios ausente",
    saga: ["nordica"],
    imagen: "assets/img/tyr.jpg",
    resumen: "Dios æsir de la guerra justa, encarcelado por Odín siglos atrás. Puente entre los reinos cuando los caminos se abren.",
    datos: {
      "Origen": "Asgard",
      "Rol": "Diplomático de los reinos",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["asgard", "midgard"],
    texto: `Dios de la guerra de los nórdicos, y sin embargo lo más parecido a un pacifista que produjo Asgard. Viajó a otros panteones, aprendió sus idiomas, trajo objetos de Egipto, de Grecia y de las islas del este, y armó un templo en el centro de Midgard que funcionaba como sala de viaje entre los Nueve Reinos.

Fue el que mantuvo la paz entre ásir, vanir y gigantes mientras pudo. Por eso mismo Odín lo sacó del medio: lo encerró y dejó correr la versión de que estaba muerto.

Buena parte del viaje siguiente consiste en sacarlo de esa prisión para que encabece la resistencia contra Asgard. El problema es que el hombre que liberan no es él. Odín se hace pasar por Týr durante meses, metido en el mismo grupo que planea derrocarlo, escuchando todo.

El verdadero Týr aparece recién sobre el final, y no es el general que esperaban: es alguien al que encerraron tanto tiempo que ya no quiere pelear con nadie. Eso también es una respuesta.`
  },
  {
    id: "angrboda",
    nombre: "Angrboda",
    epiteto: "La última giganta",
    saga: ["nordica"],
    imagen: "assets/img/angrboda.jpg",
    resumen: "Giganta joven que vive escondida en Jötunheim. Guardiana de la memoria de su pueblo, guía a Atreus por sus propios recuerdos.",
    datos: {
      "Origen": "Jötunheim",
      "Rol": "Guardiana de recuerdos",
      "Primera aparición": "God of War Ragnarök (2022)"
    },
    lugares: ["jotunheim"],
    texto: `Una de las últimas gigantes vivas. Creció en el Bosque de Hierro con su abuela, rodeada de los recuerdos de un pueblo que ya no existe, aprendiendo a guardarlos porque no quedaba nadie más para hacerlo.

Su trabajo es ese: conservar las almas y las memorias de los gigantes en frascos, y pintar las profecías en las paredes. Los murales que Kratos y Atreus encuentran en Jötunheim salieron de manos como las suyas. Los gigantes no dejaron un ejército, dejaron un archivo.

Es la primera persona de su edad con la que Atreus habla en su vida, y eso cambia bastante las cosas para los dos. Le muestra quién es entre los suyos, cómo lo llamaban, qué se esperaba de él, y también le deja claro que una profecía pintada no es una orden.

No pelea. Su aporte al final de la guerra es de otro tipo, y el sitio no sería honesto si lo midiera con la misma vara que a los demás.`
  },
  {
    id: "heimdall",
    nombre: "Heimdall",
    epiteto: "Vigía del Bifrost",
    saga: ["nordica"],
    imagen: "assets/img/heimdall.jpg",
    resumen: "El æsir que ve y oye todo. Arrogante lugarteniente de Odín, duelo memorable a mitad de Ragnarök.",
    datos: {
      "Origen": "Asgard",
      "Rol": "Vigía del puente",
      "Primera aparición": "God of War Ragnarök (2022)"
    },
    lugares: ["asgard"],
    texto: `Hijo de Odín, guardián de Asgard y, según él mismo, el ser más perfecto de los Nueve Reinos. Puede oír los pensamientos de cualquiera antes de que los digan y ver los movimientos antes de que ocurran, lo que lo vuelve imposible de golpear y absolutamente insoportable de escuchar.

Usa ese don como un arma social. Se mete en la cabeza de la gente, encuentra lo que más le duele y se lo dice en voz alta delante de los demás. Con Atreus lo hace desde el primer minuto y con Kratos lo intenta todo el tiempo.

La pelea contra él es un problema de diseño antes que de fuerza: no se le puede pegar mientras escuche la intención del golpe. Kratos lo resuelve con la lanza Draupnir, que puede aparecer donde Heimdall no está mirando.

Muere sin entender del todo qué pasó, que es la muerte que le corresponde a alguien convencido de que ya sabía todo.`
  },

  /* --- Saga griega (continuación) --- */
  {
    id: "atenea",
    nombre: "Atenea",
    epiteto: "Diosa de la sabiduría",
    saga: ["griega"],
    imagen: "assets/img/atenea.jpg",
    resumen: "Aliada de Kratos contra Ares y patrona de Atenas. Termina interponiéndose entre él y Zeus, con costo mortal.",
    datos: {
      "Origen": "Monte Olimpo",
      "Dominio": "Sabiduría y estrategia",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["olimpo", "atenas"],
    texto: `Diosa de la sabiduría y de la guerra estratégica, hija de Zeus y patrona de Atenas. Fue la que le prometió a Kratos que si servía al Olimpo diez años le iban a borrar los recuerdos, y la que lo sostuvo durante esa década.

Su relación con él es la más larga y la más torcida del panteón. Lo usa, lo protege, lo traiciona y lo vuelve a usar, siempre con el argumento de que el Olimpo está primero. Cuando Kratos por fin llega a Zeus, es Atenea la que se mete en el medio y recibe la estocada.

Vuelve como espíritu, y vuelve peor. Convencida de que el mundo viejo tiene que arder para que empiece uno nuevo, empuja a Kratos a destruir todo lo que quedaba en pie, sabiendo que él no iba a poder parar.

Cuando Kratos descubre para qué la quería y decide no entregársela, Atenea se va. Es la única del Olimpo con la que la cuenta queda abierta.`
  },
  {
    id: "hades",
    nombre: "Hades",
    epiteto: "Señor del Inframundo",
    saga: ["griega"],
    imagen: "assets/img/hades.jpg",
    resumen: "Dios de los muertos. Uno de los hijos de Cronos que Kratos derrota en God of War III.",
    datos: {
      "Origen": "Inframundo",
      "Dominio": "Los muertos",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["inframundo", "olimpo"],
    texto: `Hermano de Zeus y de Poseidón, y señor del inframundo. Le tocó el reino de los muertos en el reparto que hicieron los tres después de derrotar a los titanes, y se lo tomó como una condena antes que como un premio.

Administra las almas con burocracia y con rencor. Todo lo que muere en el mundo griego pasa por sus manos, y Kratos pasó por ahí más veces que nadie: cada vez que lo mataron, volvió trepando desde el dominio de Hades.

Lo que lo pone del otro lado no es la política olímpica sino algo personal: Kratos le mató a su mujer, Perséfone. Cuando se cruzan por última vez, Hades no pelea por Zeus, pelea por eso.

Kratos lo mata con sus propias Garras y se queda con ellas. Al morir Hades, las almas del inframundo se sueltan sobre el mundo de los vivos: es la primera de varias catástrofes que Kratos provoca sin medirlas.`
  },
  {
    id: "hercules",
    nombre: "Hércules",
    epiteto: "Hijo predilecto de Zeus",
    saga: ["griega"],
    imagen: "assets/img/hercules.jpg",
    resumen: "Medio hermano de Kratos. Envidioso de su título de Dios de la Guerra. Se enfrentan en God of War III.",
    datos: {
      "Origen": "Grecia",
      "Vínculo": "Medio hermano de Kratos",
      "Primera aparición": "God of War III (2010)"
    },
    lugares: ["olimpo"],
    texto: `Hijo de Zeus, medio hermano de Kratos y el héroe más famoso de Grecia. Hizo los doce trabajos, se ganó el favor del Olimpo y nunca le alcanzó, porque el título que quería —dios de la guerra— se lo habían dado a un espartano al que consideraba inferior.

Su resentimiento es el de alguien que hizo todo bien y vio cómo el premio iba a parar a otro lado. Zeus le prometió el puesto a cambio de la cabeza de Kratos, y Hércules aceptó sin pensarlo mucho.

Pelea con los Cestos de Nemea y con el orgullo de quien nunca perdió una. La escena es una de las más brutales de la saga griega, y no por el tamaño de los golpes sino por lo que se dicen mientras se pegan: dos hijos del mismo padre discutiendo cuál de los dos fue más usado.

Pierde. Kratos se queda con los Cestos, como se queda con todo lo de los que mata.`
  },
  {
    id: "pandora",
    nombre: "Pandora",
    epiteto: "La niña de la Llama",
    saga: ["griega"],
    imagen: "assets/img/pandora.jpg",
    resumen: "Creación de Hefesto, guardiana de la Llama del Olimpo. Su sacrificio permite abrir la caja de Pandora.",
    datos: {
      "Creador": "Hefesto",
      "Rol": "Guardiana de la Llama",
      "Primera aparición": "God of War III (2010)"
    },
    lugares: ["olimpo"],
    texto: `No nació: fue construida. Hefesto la forjó a pedido de Zeus para que fuera la llave de la caja que los dioses habían usado para encerrar los males del mundo, y le dio forma de nena porque el mecanismo exigía una vida capaz de resistir la Llama del Olimpo.

Hefesto la crió como a una hija y después la escondió, sabiendo para qué la habían hecho. Pasó años encerrada en el Laberinto, esperando a alguien que viniera a buscar la caja.

Kratos la encuentra y, por primera vez en tres juegos, duda. Pandora tiene la edad que tendría Calíope, y él lo sabe, y la trata con una torpeza que no le vimos con nadie más. Intenta impedirle que se sacrifique.

Ella entra igual a la Llama. Es la única muerte de la saga griega que Kratos no causó y no pudo evitar, y probablemente por eso es la que más lo cambia.`
  },
  {
    id: "persefone",
    nombre: "Perséfone",
    epiteto: "Reina del Inframundo",
    saga: ["griega"],
    imagen: "assets/img/persefone.jpg",
    resumen: "Esposa de Hades, resentida con los dioses por su encierro. Villana principal de Chains of Olympus.",
    datos: {
      "Origen": "Inframundo",
      "Consorte": "Hades",
      "Primera aparición": "Chains of Olympus (2008)"
    },
    lugares: ["inframundo"],
    texto: `Diosa de la primavera y reina del inframundo por matrimonio con Hades, un matrimonio que nunca eligió. Fue raptada y entregada, y pasó siglos partida entre el mundo de arriba y el de abajo por un trato que se cerró sin consultarla.

Kratos la conoce en Elysium, el campo de los muertos felices, donde ella se le presenta como una guía amable. Le ofrece exactamente lo que él más quiere: quedarse con Calíope, para siempre, si entrega sus poderes.

Es una trampa, pero no del tipo habitual. Perséfone no quiere el poder de Kratos para usarlo: quiere que el mundo entero deje de existir, y necesitaba sacarlo del camino para lograrlo. Su plan era destruir el pilar que sostiene el mundo y terminar con todos los reinos a la vez, incluido el suyo.

Kratos tiene que elegir entre su hija y todo lo demás, y elige todo lo demás. Es la escena más cara de la saga griega y casi nadie la recuerda, porque salió en una portátil.`
  },
  {
    id: "deimos",
    nombre: "Deimos",
    epiteto: "El hermano perdido",
    saga: ["griega"],
    imagen: "assets/img/deimos.jpg",
    resumen: "Hermano menor de Kratos, secuestrado de niño por los dioses por miedo a una profecía. Eje de Ghost of Sparta.",
    datos: {
      "Origen": "Esparta",
      "Vínculo": "Hermano de Kratos",
      "Primera aparición": "Ghost of Sparta (2010)"
    },
    lugares: ["esparta"],
    texto: `Hermano menor de Kratos. Nació con una marca de nacimiento en la cara, y esa marca fue toda su condena: cuando el oráculo anunció que un guerrero marcado destruiría el Olimpo, Ares y Atenea bajaron a Esparta a buscar al chico que coincidía con la descripción.

Se lo llevaron delante de Kratos, que era un chico y no pudo hacer nada. Lo encerraron en el Dominio de la Muerte, donde Tánatos lo torturó durante años mientras probaba si la profecía era cierta. Kratos se pintó el cuerpo del rojo de esa marca para no olvidarse, y así se quedó.

Cuando por fin lo encuentra, Deimos no lo recibe como a un hermano que vino a rescatarlo: lo recibe como al que no vino durante décadas. La primera cosa que hacen al reencontrarse es pelearse.

Muere poco después, cubriendo a Kratos frente a Tánatos. Es la única persona por la que Kratos lloró en toda la saga griega.`
  },
  {
    id: "caliope",
    nombre: "Calíope",
    epiteto: "La hija de Kratos",
    saga: ["griega"],
    imagen: "assets/img/caliope.jpg",
    resumen: "Hija de Kratos y Lisandra, asesinada por Kratos mismo bajo el hechizo de Ares. La sombra que atraviesa toda la saga griega.",
    datos: {
      "Origen": "Esparta",
      "Vínculo": "Hija de Kratos",
      "Primera aparición": "God of War (2005)"
    },
    lugares: ["esparta"],
    texto: `Hija de Kratos y de Lisandra. Tocaba la flauta y casi todo lo que se sabe de ella cabe en esa frase, porque murió a los pocos años y a manos de su padre, bajo el hechizo de Ares.

Sus cenizas y las de su madre son las que el oráculo le pegó a Kratos en la piel. La palidez que le da nombre no es una condición ni una maldición mágica: son literalmente los restos de su familia.

Kratos vuelve a verla una sola vez, en Elysium, cuando Perséfone se la ofrece a cambio de sus poderes. Padre e hija se reconocen y por un momento el juego deja de ser un juego de pelea. Para quedarse tiene que renunciar a su fuerza, y sin su fuerza no puede impedir que Perséfone destruya el mundo.

La suelta y sigue. Todo lo que Kratos hace después, en las dos mitologías, se entiende mejor a partir de ese momento.`
  },

  /* --- Ficha oculta: no aparece en el listado ni en el contador.
     La ficha se ve por personaje.html?id=sigrun, y arranca bloqueada
     hasta que se recorren las ocho valquirias en valquirias.html. --- */
  {
    id: "sigrun",
    nombre: "Sigrún",
    epiteto: "Última del consejo",
    saga: ["nordica"],
    imagen: "assets/img/sigrun.jpg",
    resumen: "Reemplazó a Freya como líder de las valquirias cuando Odín corrompió el consejo. La pelea final del God of War (2018).",
    datos: {
      "Origen": "Asgard",
      "Rol": "Líder del consejo de las valquirias",
      "Primera aparición": "God of War (2018)"
    },
    lugares: ["asgard", "midgard"],
    oculta: true,
    texto: `Fue la reina del consejo de las valquirias, y la que más resistió. Cuando Odín corrompió a las nueve encerrando a cada una en su forma bestial, Sigrún aguantó hasta el final antes de caer, y por eso su prisión es la más difícil de abrir.

Su trabajo, antes de todo esto, era llevar a los muertos dignos a Valhalla y decidir quién merecía ese viaje. El consejo era un tribunal, no un ejército. Odín lo convirtió en otra cosa.

Aparece en su trono recién cuando las otras ocho fueron liberadas. Es el último combate del consejo y el más duro que ofrece el norte: pelea con los movimientos de las ocho anteriores encadenados, sin descanso entre uno y otro.

Liberarla no es matarla. Es devolverle el cuerpo que Odín le sacó, y con eso, cerrar el consejo.`
  }
];
