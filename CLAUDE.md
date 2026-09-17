# God of War — sitio de fans

Trabajo práctico de front-end para la facultad. Sitio informativo sobre las dos
sagas de God of War: la griega (2005–2013) y la nórdica (2018–2023).

Este archivo es el contexto del proyecto. Leelo antes de tocar código.

---

## Restricciones no negociables

- **HTML, CSS y JavaScript vanilla.** Sin React, sin Vue, sin Tailwind, sin
  Bootstrap, sin bundlers, sin npm. La cátedra no lo permite.
- **Sin módulos ES.** Usar `<script src>` clásico con variables globales. El
  sitio tiene que funcionar abriendo `index.html` directamente desde `file://`,
  sin servidor.
- **Sin dependencias externas de código**, salvo las tipografías de Google
  Fonts. La única fuente alojada en el repo es la del titular, en
  `assets/fonts/`, porque no existe en ningún servicio. Para las imágenes se admite un CDN externo (Cloudinary u otro):
  si el sitio se abre sin internet, el marco rayado del placeholder cubre
  el caso. El deploy final va a GitHub Pages.
- **Sin `localStorage` para contenido**, solo para preferencias y progreso del
  juego.
- Todo el código, los nombres de variables y los mensajes de commit van **en
  español** (ver convenciones más abajo).

---

## Estructura de archivos

```
index.html          Portada
personajes.html     Listado de personajes con filtros y buscador
personaje.html      Ficha individual (recibe ?id=kratos)
lugares.html        Listado de reinos y ciudades
lugar.html          Ficha individual (recibe ?id=esparta)
cronologia.html     Línea de tiempo de los nueve juegos
juego.html          Ficha individual (recibe ?id=gow-2018)
valquirias.html     Página especial con el juego del consejo
galeria.html        Mosaico con lightbox
contacto.html       Formulario de contacto (valida en el navegador, no envía)
mapa.html           Mapa del sitio: todas las páginas y las 53 fichas
404.html

css/variables.css   Tokens: paleta, tipografías, escalas. Incluye el swap de temas.
css/base.css        Reset, tipografía global, cabecera, pie, accesibilidad
css/main.css        Secciones, tarjetas, cronología, anillo, controles
css/juego.css       Estilos exclusivos de la página de valquirias

js/data-personajes.js
js/data-lugares.js
js/data-juegos.js
js/data-valquirias.js
js/render.js        Funciones que devuelven HTML como string
js/main.js          Arranque, interruptor de saga, filtros, buscador, fichas
js/juego.js         Lógica del consejo de las valquirias

assets/             Imágenes
```

**Regla clave:** hay tres plantillas de ficha (`personaje.html`, `lugar.html`,
`juego.html`), no un archivo por cada entidad. Son 45 fichas en total y
mantener 45 HTML sería inviable.

---

## Sistema de diseño

### Temas

El atributo `data-saga` en `<html>` vale `"nordica"` o `"griega"` y reescribe la
paleta entera vía custom properties. Es el elemento firma del sitio: las dos
sagas tienen identidades cromáticas opuestas y eso es información, no adorno.

- Nórdica: acero frío, bronce, escarcha
- Griega: ceniza cálida, ocre, sangre

La preferencia se guarda en `localStorage` bajo la clave `gow-saga`.

**Nunca escribir colores literales en el CSS.** Todo sale de las variables de
`variables.css`, o el cambio de tema se rompe.

### Tipografías

- Titular: **GodOfWar** — **solo** el `h1` de la portada. Ver la advertencia
  de abajo antes de usarla en ningún otro lado.
- Display: **Eczar** (600, 800) — títulos
- Cuerpo: **Spectral** (400, 600, italic) — texto largo
- Utilidad: **Barlow Condensed** (400, 600) — rótulos, años, datos, botones.
  Siempre en mayúsculas con `letter-spacing` amplio.

**La fuente del titular es una recreación de fans**, en `assets/fonts/`. Sony
nunca distribuyó la oficial: no está en Google Fonts ni se compra en ningún
lado. Esta trae A-Z, a-z y números, pero **ni un acento**, y le faltan `·`
`—` `«` `»` `¿`.

Por eso está acotada al titular de la portada, que dice "God of War" y no tiene
ninguno de esos caracteres. Si se aplicara a un título como "Cronología" o
"Jötunheim", el navegador completaría esa sola letra con otra fuente y el salto
se ve. **No extenderla a otros títulos**: para eso está Eczar, que tiene el
juego completo.

### La marca

La marca de la cabecera y del pie es `assets/img/logo.png`, el logotipo oficial
con fondo transparente. No es texto: es un `<img>` dentro del enlace, con
`alt="God of War"` para que el enlace tenga nombre accesible.

El logo ocupa 693x146 dentro de un lienzo de 725x189 —sobra sobre todo abajo,
donde está el ®—, así que la caja toma la proporción del dibujo y
`object-fit: cover` descarta el margen. **Si se reemplaza el PNG por
uno recortado, hay que volver a medirlo y ajustar el `aspect-ratio` y el
`object-position` de `.marca__img`.**

El ancho baja de 180px a 132px abajo de 900px y a 104px abajo de 380px, para que
en la misma fila entren también el interruptor de saga y el botón del menú.

### El pie

Cuatro columnas —marca, dos bloques de enlaces y el interruptor de saga— y
abajo una franja con tres cosas: el **aviso de spoilers**, la línea legal y el
enlace al mapa del sitio.

El aviso va encuadrado y no como una línea más de letra chica: es lo único de
esa franja que alguien necesita leer **antes** de entrar a una ficha, no
después. Las biografías cuentan los nueve juegos enteros, finales incluidos.

El mapa del sitio vive solo en esa franja, que es donde se lo busca por
convención. No repetirlo en la columna "Más": es el mismo pie y quedaría dos
veces.

### El favicon

`assets/img/favicon.ico`: el Omega rojo sobre círculo negro. Cuatro tamaños
—16, 32, 48 y 64— con PNG embebido, 9 KB en total. El navegador elige el que le
sirve en vez de reescalar uno de 256.

Está fuera de la raíz a propósito. La costumbre de poner el favicon en la raíz
existe porque el navegador pide `/favicon.ico` por su cuenta, pero este sitio
va a GitHub Pages como proyecto: ese pedido apunta a la raíz del dominio, no al
subdirectorio del repo, así que nunca lo encontraría esté donde esté. Lo que lo
hace funcionar es el `<link rel="icon">` de cada página, y ese anda desde
cualquier ruta.

### Detalles

- `--radio: 2px`. Bordes casi rectos: piedra tallada, no botón de app.
- Escala tipográfica fluida con `clamp()`.
- Rejillas con `auto-fill` / `auto-fit`, sin media queries salvo donde haga falta.

### Responsive

- **900px** es el corte de la cabecera: abajo de ahí la navegación se guarda
  detrás del botón `#btn-menu` y la fila queda en `--alto-cabecera` (68px).
  Con seis secciones ya no entra en una fila de celular.
- El panel cuelga **fuera del flujo** (`position: absolute` debajo de la
  cabecera) y se despliega sobre el contenido. Como segundo renglón del flex se
  repartía el alto con la barra, la descentraba, y al abrirse la empujaba hacia
  arriba. La barra tiene que quedar quieta: solo se despliega el panel.
- Se pliega con `max-height` + `opacity` + `visibility` en 300ms, no con
  `display`, que no se puede animar. `visibility: hidden` saca los enlaces del
  recorrido del tabulador igual que `display: none`, y sí admite transición.
- **820px** parte el contacto en una columna, **780px** el consejo de las
  valquirias, **700px** las fichas y el buscador, **560px** apila
  anterior/siguiente y las filas clave/valor y pasa la galería a dos columnas.
- **520px** apila y centra el pie.
- Los paneles pegajosos se cuelgan de `calc(var(--alto-cabecera) + var(--e-2))`,
  nunca de un número suelto: si cambia la cabecera, se corrigen solos.
- Nada interactivo por debajo de **44px** de alto en táctil. La regla vive en un
  bloque `@media (pointer: coarse), (max-width: 900px)` para no engordar la
  interfaz de escritorio con mouse.
- La imagen de las fichas es `sticky` mientras haya dos columnas: con
  biografías de cuatro párrafos, la columna de texto es mucho más alta que la
  foto y quedaba un hueco largo al costado. Apilada vuelve a `static`, porque
  ahí taparía el texto en vez de acompañarlo.
- La rejilla de personajes queda en **una columna** en celular a propósito: con
  dos, el resumen cae a renglones de dieciocho caracteres.

---

## Modelo de datos

Todo el contenido vive en los archivos `js/data-*.js` como arrays de objetos.
Agregar una entidad nunca debe requerir tocar HTML.

```js
// data-personajes.js
{
  id: "kratos",              // sin espacios ni acentos, va en la URL
  nombre: "Kratos",
  epiteto: "El Fantasma de Esparta",
  saga: ["griega", "nordica"],
  imagen: "assets/kratos.jpg",   // "" si todavía no existe
  resumen: "Una o dos líneas para la tarjeta.",
  datos: { "Origen": "Esparta", "Arma principal": "Hacha Leviatán" },
  lugares: ["esparta", "midgard"],   // ids de lugares ligados
  texto: "Biografía larga, varios párrafos."
}

// data-lugares.js
{
  id: "esparta",
  nombre: "Esparta",
  region: "griega",          // "griega" | "nordica"
  tipo: "Ciudad",            // "Ciudad" | "Reino" | "Monte" | "Isla"
  imagen: "",
  resumen: "...",
  datos: { ... },
  personajes: ["kratos", "deimos"],  // ids de personajes ligados
  texto: "..."
}

// data-juegos.js
{
  id: "gow-2018",
  titulo: "God of War",
  anio: 2018,
  ordenHistoria: 7,          // para alternar entre orden de salida e historia
  saga: "nordica",
  plataforma: "PlayStation 4",
  imagen: "",
  resumen: "...",
  texto: "..."
}

// data-valquirias.js
{
  id: "gunnr",
  nombre: "Gunnr",
  reino: "Midgard",
  trono: 1,                  // 1 a 9, posición en el consejo
  dificultad: 2,             // 1 a 5
  imagen: "",
  texto: "Seis u ocho líneas. No hace falta más."
}
```

Si `imagen` está vacío, el marco muestra un patrón rayado con el nombre del
archivo que falta. Es a propósito: sirve de lista de pendientes.

El campo `texto` es una plantilla literal con renglones en blanco entre párrafo
y párrafo. `parrafos()` en `render.js` corta por ahí y devuelve un `<p>` por
cada uno; escribirlo todo seguido lo deja como un ladrillo.

En `data-galeria.js` cada pieza lleva `juego` (de qué entrega es la escena, va
como rótulo del pie del lightbox) y `descripcion` (una o dos líneas de
contexto). Reemplazaron al viejo campo `fuente`, que pedía una atribución que
este sitio no tiene forma de dar.

En `data-valquirias.js`, `texto` es la biografía y `resumen` es consejo de
combate: se pinta al final de la ficha con el rótulo "Tip". La palabra la pone
el marcado, no el dato.

---

## Las páginas

### Inicio
Portada con el anillo SVG animado (círculos concéntricos que giran, sin
imágenes), interruptor de saga, bloque destacado de las valquirias, cronología
resumida y accesos a las cuatro secciones.

Al pie del hero va el **sello**: un enlace circular a la primera sección que
repite el motivo del anillo y lleva la Omega, el símbolo de la saga desde 2005.
Es la misma en las dos sagas; lo que cambia con el tema es el color, que sale de
`--acento`. El glifo es un `<path>` dibujado a mano y no un carácter, así no
depende de que la tipografía lo tenga.

Las secciones llevan `scroll-margin-top` del alto de la cabecera. Sin eso,
cualquier salto a un ancla deja el título tapado abajo de la barra fija.

La portada lleva una **imagen de fondo contextual** al tema, en el token
`--fondo-portada`: el Árbol del Mundo para la nórdica y Kratos con las Espadas
del Caos para la griega. Las dos son 16:9, que es lo que pide el `cover` de la
portada.

La griega es el mismo archivo que la pieza `kratos-blades` de la galería. Se
repite a propósito: es la única apaisada de la saga griega y al 22% de opacidad
no se lee como una foto sino como una silueta, así que no compite.

Ojo con los dos Yggdrasil: `yggdrasil-home.jpg` es apaisado y va acá;
`yggdrasil.jpg` es vertical y es la pieza de la galería. No son
intercambiables. Va como `::before` y no como fondo de `.portada` para poder
darle opacidad propia sin arrastrar al contenido, con un degradado encima que
apaga los bordes contra la cabecera y la sección siguiente.

Si el archivo no existe, no se ve nada raro: queda el fondo liso. Lo único es
un 404 en la consola hasta que se sume la imagen.

### Personajes
Rejilla de 21 tarjetas: 20 personajes más una tarjeta especial "Las Valquirias"
que lleva a `valquirias.html`. Filtro por saga, buscador en vivo, contador de
resultados. La tarjeta de la colección debe verse distinta de las individuales
(rótulo "Colección" en vez de la saga), o el usuario espera una biografía.

### Lugares
15 fichas: seis griegas (Esparta, Atenas, Monte Olimpo, Inframundo, Islas del
Destino, Rodas) y los nueve reinos nórdicos. Filtro por saga. Cada ficha enlaza
a los personajes ligados y viceversa.

### Cronología
Los nueve juegos en línea de tiempo vertical. Botón para alternar entre orden de
lanzamiento y orden cronológico de la historia (no coinciden: *Ascension* salió
última de las griegas y sin embargo abre la historia).

Cada hito conserva el color de **su** saga aunque el tema global sea el
contrario: un juego nórdico se ve frío incluso con el sitio en griego. Lo
resuelve una variable local, `--color-hito`, que el hito define según su
`data-saga` y de la que salen el rombo, el año, el hover y el estado activo.

Nada de eso puede usar `--acento` ni `--superficie`: los dos cambian con el
tema. El fondo del hover en particular es un `color-mix` del propio
`--color-hito`; con `--superficie` el tema griego pintaba una banda marrón
cálida sobre cualquier juego y se comía el borde de 1px. Vale igual para la
cronología resumida de la portada, que usa el mismo marcado.

### Valquirias
La página interactiva. Nueve tronos vacíos y los cascos abajo; se arrastra cada
casco a su trono. Al acertar, el trono se ilumina y se abre un panel con la
ficha de esa valquiria. Al completar el consejo se desbloquea Sigrún.

Requisitos:
- **Alternativa por teclado obligatoria:** clic en un casco para seleccionarlo,
  clic en el trono para colocarlo. Arrastrar no funciona con teclado ni bien en
  celulares.
- **Enlace "ver la ficha sin jugar"**, discreto pero presente. Nadie debe quedar
  excluido del contenido, y el profesor puede no jugar.
- **Botón de reinicio** para volver a bloquear todo.
- Progreso en `localStorage` bajo `gow-valquirias`.
- La validación del bloqueo de Sigrún tiene que estar también en la ficha, no
  solo en el juego: escribir `personaje.html?id=sigrun` a mano no debe saltearlo.
  Una sola función `estaBloqueado(id)` usada en los dos lugares.

### Galería
Mosaico **asimétrico** de 19 piezas, con lightbox y filtro por saga. El pie de
cada foto dice de qué juego es la escena y la ubica en una o dos líneas.

Lo asimétrico sale del campo `formato` de cada pieza: `ancha` (16:9, ocupa dos
columnas), `alta` (4:5) o `cuadrada` (1:1). La rejilla usa `grid-auto-flow:
dense` para que las chicas rellenen los huecos que dejan las anchas.

**Para acomodar una foto se cambia el `formato` en los datos, nunca el CSS.**
Y el archivo tiene que venir en esa proporción o sale recortado: las medidas
están en `assets/img/LEEME-galeria.txt`.

El lightbox toma la proporción de la pieza desde el JS. Con un marco 3/4 fijo,
una foto apaisada quedaba con dos franjas negras a los costados.

**Los títulos y las descripciones cuentan lo que se ve en cada foto**, no el
tema en abstracto: varios nombran quién aparece en el encuadre. Si se reemplaza
una imagen hay que releer su texto. `assets/img/LEEME-galeria.txt` lista cuáles
están atadas a su archivo.

Las fotos de la galería llevan `object-position: center 35%`. Varios retratos
vienen más altos que el 4:5 del mosaico y hay que recortarlos: corriendo el
encuadre hacia arriba se conserva la cara en vez de los pies.

### Mapa del sitio

Las páginas van escritas a mano en el HTML —son estructura, no contenido, y así
la lista principal sigue estando aunque falle el script—. Las fichas se generan
desde los `data-*.js`, que es lo que evita que el mapa se desactualice cada vez
que se suma una entidad.

Cada entrada es nombre más una nota: el epíteto, el tipo o el año. Las dos van
adentro del enlace, así el área clicable es la línea entera. Nombre y nota son
inline normales, **nunca un flex con wrap**: así la nota se caía sola al renglón
de abajo en cuanto el nombre era largo.

El nombre va un escalón más grande (`--t-lg`) y la nota en cursiva apagada
(`--t-sm`). No usar la tipografía de rótulos para la nota: en mayúsculas y con
letter-spacing se lee antes que el nombre, que es lo que se viene a buscar.
El guión separador lo pone `.mapa__nota::before`, no el dato.

Las columnas arrancan en `20rem`. Con menos entran cuatro en pantalla grande y
las entradas más largas parten en dos.

Dos reglas propias:

- **Sigrún no aparece entre los personajes.** Está marcada como `oculta` y
  listarla ahí destaparía el secreto del consejo.
- **Sí aparece en el consejo**, porque `valquirias.html` ya la muestra con
  candado, pero sin enlace hasta que el consejo esté cerrado. El mapa consulta
  `consejoCompleto()` al pintar.

Para que las valquirias fueran enlazables hubo que darle **enlace profundo** a
`valquirias.html`: acepta `?id=gunnr` y abre esa ficha directo. No hace falta
validar el bloqueo ahí porque `activar()` ya rechaza a Sigrún con el consejo
abierto, así que escribir la URL a mano no saltea nada. Al elegir una valquiria
la URL se actualiza con `replaceState` para poder compartirla; desde `file://`
el navegador no lo permite, y por eso va dentro de un `try`.

### Contacto
Formulario con nombre, correo, motivo, bando y mensaje. Valida en español, marca
los campos con `aria-invalid` y manda el foco al primero que falla. El selector
de bando cambia el tema del sitio en el momento y queda sincronizado con el
interruptor de la cabecera.

El envío está **simulado**: `enviarMensaje()` en `main.js` espera un momento y
resuelve siempre bien. Es el único punto que toca el mundo exterior, así que
cuando haya un destino real (un correo o un servicio de formularios) se cambia
esa función sola y el resto queda igual. Hasta entonces, el acuse habla como si
el mensaje hubiera salido.

---

## Accesibilidad

No es opcional, es parte de la nota.

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`.
- `:focus-visible` con contorno claro en todo lo interactivo.
- `aria-pressed` en filtros y botones de estado, `aria-current="page"` en la
  navegación, `aria-live="polite"` en el contador de resultados.
- `prefers-reduced-motion` respetado: sin animaciones si el sistema lo pide.
- Todo lo que se hace con el mouse tiene que poder hacerse con el teclado.
- Contraste mínimo AA en ambos temas.

---

## Convenciones de código

- Funciones de `render.js` devuelven strings de HTML, no tocan el DOM.
- Escapar siempre el contenido dinámico con la función `escapar()`.
- Los buscadores comparan con `sinAcentos()`. Nadie escribe "Mímir" con tilde,
  y el sitio está lleno de nombres así: Sigrún, Hércules, Perséfone, Calíope,
  Jötunheim, Odín. Sin eso, buscar "mimir" no devolvía nada.
- Estados vacíos con instrucciones útiles, nunca un mensaje seco.
- Comentarios en español, explicando el porqué y no el qué.
- Nada de `!important` salvo en el bloque de `prefers-reduced-motion`.

---

## Convenciones de commits

Conventional Commits, en español, con el verbo en infinitivo:

```
feat: agregar listado de lugares con filtro por saga
fix: evitar que la ficha se rompa con un id inexistente
style: ajustar el espaciado de las tarjetas en mobile
refactor: partir data.js en un archivo por colección
docs: documentar el estado del juego de valquirias en el readme
chore: agregar .gitignore
```

Tipos: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`, `test`.

Un commit por unidad de trabajo terminada, no uno por sesión.

---

## Estado actual

El sitio está **terminado y probado**. Las doce páginas funcionan, las 54 fichas
tienen texto, y no queda ningún `[completar]` en los datos.

**Todas las imágenes están cargadas.** Las 73 rutas de los `data-*.js` apuntan
a un archivo que existe: ningún campo `imagen` quedó vacío y ninguna ruta está
rota.

No queda nada pendiente: los dos fondos de portada también están puestos.

Un detalle anotado por si algún día molesta: `ejercito-espartano.jpg` es por
dentro un WebP con extensión `.jpg`. Funciona porque los navegadores detectan
el formato por el contenido, no por el nombre.

Mientras un campo `imagen` esté vacío, el marco rayado muestra qué archivo
falta. Es a propósito: sirve de lista de pendientes visible.

### Cómo se probó

Con iframes a distintos anchos, midiendo valores computados en vez de mirar
capturas. Cubre 320, 375, 414, 540, 768, 900, 1024, 1280, 1440 y 1920, en los
dos temas: desborde horizontal, alto de la cabecera, restos de `[completar]` o
`undefined`, logos, favicon y pie.

Aparte, lo funcional: filtros y buscador, el toggle de la cronología, el ciclo
completo del consejo de las valquirias con el desbloqueo de Sigrún, la
validación del formulario, el lightbox y los enlaces profundos con ids
inválidos.

**Al medir, esperar a que la página esté lista en vez de usar un `setTimeout`
fijo.** Con veinte iframes compitiendo, una espera de medio segundo da falsos
negativos. Y al probar el consejo hay que volver a consultar el DOM en cada
clic: `pintarLista()` reemplaza los botones y las referencias viejas quedan
muertas.

---

## Qué no hacer

- No instalar dependencias ni proponer frameworks.
- No crear un archivo HTML por entidad.
- No escribir colores literales fuera de `variables.css`.
- No inventar contenido de la saga: si un dato no se sabe con certeza, dejar un
  marcador `[completar]` en lugar de rellenar con algo verosímil pero falso.
- No refactorizar la base que ya funciona sin que se lo pidan.
