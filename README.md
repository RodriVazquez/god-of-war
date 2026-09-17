# God of War — sitio de fans

Sitio informativo sobre las dos sagas de God of War: la **griega** (2005–2013) y
la **nórdica** (2018–2023). Trabajo práctico de front-end.

Hecho con **HTML, CSS y JavaScript vanilla**. Sin frameworks, sin librerías, sin
bundlers y sin `npm`. La única dependencia externa son las tipografías de Google
Fonts; todo lo demás vive en el repositorio.

---

## Cómo abrirlo

Abrí `index.html` en cualquier navegador. **Funciona directamente desde el
archivo** (`file://`), sin servidor ni instalación.

Si lo abrís con la extensión *Live Server* de VS Code recarga sola al editar,
pero no hace falta para que funcione.

---

## Qué hay adentro

| | |
|---|---|
| Páginas | 12 |
| Personajes | 20 en el listado + 1 oculto |
| Lugares | 15 — 6 griegos y los 9 reinos nórdicos |
| Juegos | 9 — 6 griegos y 3 nórdicos |
| Valquirias | 9, con el consejo jugable |
| Piezas de galería | 19 |
| Fichas en total | 54 |
| Imágenes | 73, todas optimizadas por debajo de 100 KB |

Ninguna ficha quedó sin texto y ninguna ruta de imagen está rota.

---

## Las páginas

| Archivo | Qué es |
|---|---|
| `index.html` | Portada: anillo animado, sagas, destacados, cronología resumida |
| `personajes.html` | Listado de 21 tarjetas con filtro por saga y buscador |
| `personaje.html` | Ficha individual — recibe `?id=kratos` |
| `lugares.html` | Los 15 reinos y ciudades, con filtro |
| `lugar.html` | Ficha individual — recibe `?id=esparta` |
| `cronologia.html` | Los nueve juegos en línea de tiempo |
| `juego.html` | Ficha individual — recibe `?id=gow-2018` |
| `valquirias.html` | El consejo de las valquirias (la página interactiva) |
| `galeria.html` | Mosaico asimétrico con lightbox |
| `contacto.html` | Formulario con validación propia |
| `mapa.html` | Mapa del sitio: las 12 páginas y las 54 fichas |
| `404.html` | Página de error |

Hay **tres plantillas de ficha**, no un archivo por entidad: `personaje.html`,
`lugar.html` y `juego.html` leen el `?id=` de la URL y se arman solas desde los
datos. Mantener 54 archivos HTML sería inviable.

---

## Qué se puede hacer

### Cambiar de saga

El interruptor **Griega / Nórdica** de la cabecera reescribe la paleta entera
del sitio en el momento. No es un modo oscuro: son dos identidades cromáticas
opuestas —acero y escarcha contra ceniza y ocre— y el cambio alcanza a los
fondos, los acentos, las fotos de portada y los textos de varias secciones.

Está repetido en el pie, para no tener que volver arriba, y **se recuerda entre
páginas y entre visitas** (`localStorage`). En la página de contacto, además,
elegir tu bando en el formulario cambia el tema del sitio.

### Desplegar las secciones desde la navegación

Pasando el mouse por **Personajes, Lugares o Cronología** se abre un panel con
la lista completa de sus fichas, sin entrar a la sección. Las otras tres no lo
tienen porque son una página sola: la flechita marca cuáles llevan algo adentro.

También se abre con el teclado, y Escape lo cierra. En celular no aparece: ahí
la navegación entera vive detrás del botón hamburguesa.

### Filtrar y buscar

Los listados de personajes y lugares filtran por saga y tienen **buscador en
vivo** con contador de resultados. El buscador **ignora las tildes**: el sitio
está lleno de nombres como Mímir, Sigrún, Hércules, Perséfone o Jötunheim, y
nadie los escribe acentuados.

### Recorrer la cronología en dos órdenes

La línea de tiempo alterna entre **orden de lanzamiento** y **orden cronológico
de la historia**, que no coinciden: *Ascension* salió última de las griegas y sin
embargo abre la historia.

Cada juego conserva el color de **su** saga aunque el sitio esté en el tema
contrario, así se ve de un vistazo dónde termina una etapa y empieza la otra.

### Armar el consejo de las valquirias

La página interactiva. Hay nueve tronos y ocho valquirias corruptas: al recorrer
las ocho se **desbloquea Sigrún**, la reina, que hasta ese momento aparece con
candado. El progreso se guarda, así que se puede cerrar y seguir después, y hay
un botón para reiniciarlo.

Se juega con el mouse **o con el teclado**, y hay un enlace para ver las fichas
sin jugar: nadie queda afuera del contenido.

El bloqueo de Sigrún también se valida en su ficha, no solo en el juego. Escribir
`personaje.html?id=sigrun` a mano no saltea nada.

### Mirar la galería

Mosaico **asimétrico** de 19 piezas: cada una declara si es ancha, alta o
cuadrada, y las chicas rellenan los huecos que dejan las grandes. Al hacer click
se abre un lightbox que toma la proporción de esa foto —una apaisada no queda con
franjas negras al costado— y se recorre con las flechas del teclado.

### Escribir por el formulario

Valida en español, marca los campos con error y manda el foco al primero que
falla. **El envío está simulado**: espera un momento y muestra un acuse. Es el
único punto del sitio que tocaría el mundo exterior.

### Llegar a cualquier lado

El **mapa del sitio** lista las 12 páginas y las 54 fichas, y se actualiza solo
cuando se agrega una entidad. Todas las fichas son enlazables por URL directa,
incluidas las valquirias (`valquirias.html?id=gunnr`).

---

## Estructura

```
index.html  personajes.html  personaje.html  lugares.html  lugar.html
cronologia.html  juego.html  valquirias.html  galeria.html
contacto.html  mapa.html  404.html

css/variables.css   Paleta, tipografías y escalas. Acá vive el cambio de tema.
css/base.css        Reset, tipografía global, cabecera, pie, accesibilidad
css/main.css        Secciones, tarjetas, cronología, galería, anillo
css/juego.css       Estilos exclusivos del consejo de las valquirias

js/tema.js          Aplica la saga guardada antes del primer pintado
js/data-personajes.js
js/data-lugares.js
js/data-juegos.js
js/data-valquirias.js
js/data-galeria.js
js/render.js        Funciones que devuelven HTML como texto
js/main.js          Arranque, interruptor, filtros, buscador, fichas, menú
js/juego.js         Lógica del consejo de las valquirias

assets/fonts/       La tipografía del titular
assets/img/         Las 73 imágenes y el favicon
```

---

## Cómo agregar contenido

Todo el contenido vive en los `js/data-*.js` como arrays de objetos.
**Agregar una entidad nunca requiere tocar HTML.**

```js
// js/data-personajes.js
{
  id: "thor",                      // sin espacios ni acentos: va en la URL
  nombre: "Thor",
  epiteto: "Dios del Trueno",
  saga: ["nordica"],               // "griega", "nordica", o las dos
  imagen: "assets/img/thor.jpg",
  resumen: "Una o dos líneas para la tarjeta.",
  datos: { "Origen": "Asgard", "Arma": "Mjölnir" },
  lugares: ["asgard", "midgard"],  // ids de data-lugares.js
  texto: `Primer párrafo.

          Segundo párrafo.`
}
```

Con eso aparece en el listado, en los filtros, en el buscador, en el mapa del
sitio, en el panel desplegable de la navegación y tiene su ficha propia. Los
lugares que menciones lo van a enlazar de vuelta.

Si dejás `imagen` en `""`, la tarjeta muestra un marco rayado con el nombre del
archivo que falta, en vez de un hueco en blanco.

---

## Accesibilidad

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`
- Todo lo que se hace con el mouse se puede hacer con el teclado, el consejo de
  las valquirias incluido
- Foco visible en todo lo interactivo
- `aria-pressed` en los botones de estado, `aria-current="page"` en la
  navegación, `aria-live` en los contadores de resultados
- Contraste AA en los dos temas
- Nada táctil por debajo de 44 px de alto
- `prefers-reduced-motion` respetado: sin animaciones si el sistema lo pide

---

## Detalles técnicos

**Temas.** El atributo `data-saga` en `<html>` reescribe todas las custom
properties. No hay un solo color literal fuera de `variables.css`.

**Sin parpadeo.** `js/tema.js` se carga en el `<head>`, antes de las hojas de
estilo, y aplica la saga guardada antes de que el navegador pinte. Sin eso, cada
página se pintaba en nórdica y saltaba a griega al terminar de cargar.

**Responsive.** El corte de la cabecera está en **960 px**: abajo de ahí la
navegación se guarda detrás del botón hamburguesa. Después hay cortes en 820,
780, 700, 560 y 520 px para el contacto, el consejo, las fichas, la galería y el
pie. Las rejillas usan `auto-fill` y la tipografía `clamp()`, así que la mayor
parte del sitio se adapta sin media queries.

**La tipografía del titular** (`assets/fonts/`) es una recreación de fans: Sony
nunca distribuyó la oficial. Trae A–Z y números pero ningún acento, por eso se
usa **solo** en el titular de la portada, que dice "God of War". El resto va en
Eczar, que tiene el juego completo.

**Almacenamiento.** Solo dos claves, y ninguna guarda contenido: `gow-saga`
para el tema y `gow-valquirias` para el progreso del consejo.

**Probado** en las 12 páginas, en los dos temas, entre 320 y 1920 px de ancho.

---

## Aviso

Sitio de fans, sin fines comerciales. God of War es propiedad de Sony
Interactive Entertainment y Santa Monica Studio. Las imágenes pertenecen a sus
autores y se usan con fines ilustrativos.

**Contiene spoilers de los nueve juegos**, finales incluidos.
