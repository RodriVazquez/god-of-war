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
- **Sin dependencias externas** salvo las tipografías de Google Fonts.
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

- Display: **Eczar** (600, 800) — títulos
- Cuerpo: **Spectral** (400, 600, italic) — texto largo
- Utilidad: **Barlow Condensed** (400, 600) — rótulos, años, datos, botones.
  Siempre en mayúsculas con `letter-spacing` amplio.

### Detalles

- `--radio: 2px`. Bordes casi rectos: piedra tallada, no botón de app.
- Escala tipográfica fluida con `clamp()`.
- Rejillas con `auto-fill` / `auto-fit`, sin media queries salvo donde haga falta.

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

---

## Las páginas

### Inicio
Portada con el anillo SVG animado (círculos concéntricos que giran, sin
imágenes), interruptor de saga, bloque destacado de las valquirias, cronología
resumida y accesos a las cuatro secciones.

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
lanzamiento y orden cronológico de la historia (no coinciden: *Chains of
Olympus* salió tercero pero ocurre primero). Color según la saga.

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
Mosaico con lightbox, filtro por saga, pie de foto con la fuente de cada imagen.

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

Ya existe una base funcionando con: `index.html`, `personajes.html`,
`detalle.html`, los tres CSS, y `data.js` / `render.js` / `main.js` con seis
personajes de ejemplo, los nueve reinos y los nueve juegos.

Lo que falta:

- [ ] Renombrar `detalle.html` a `personaje.html` y partir `data.js` por colección
- [ ] Completar los 20 personajes y escribir las biografías
- [ ] Sección de lugares: listado y ficha
- [ ] Sección de cronología: listado y ficha, con las dos vistas de orden
- [ ] Página de valquirias con el juego
- [ ] Galería con lightbox
- [ ] Migas de pan en las fichas (`Inicio › Personajes › Kratos`)
- [ ] Página 404
- [ ] Conseguir y optimizar las imágenes (600×800, JPG, menos de 200 KB)

---

## Qué no hacer

- No instalar dependencias ni proponer frameworks.
- No crear un archivo HTML por entidad.
- No escribir colores literales fuera de `variables.css`.
- No inventar contenido de la saga: si un dato no se sabe con certeza, dejar un
  marcador `[completar]` en lugar de rellenar con algo verosímil pero falso.
- No refactorizar la base que ya funciona sin que se lo pidan.
