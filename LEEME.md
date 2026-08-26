# God of War — sitio de fans

Trabajo práctico de front-end. HTML, CSS y JavaScript vanilla, sin frameworks
ni dependencias (salvo las fuentes de Google Fonts).

## Cómo abrirlo

Abrí `index.html` en el navegador. Anda directamente desde el archivo, pero
conviene usar la extensión **Live Server** de VS Code para que recargue solo.

## Estructura

```
index.html        Portada: sagas, personajes, reinos, cronología
personajes.html   Listado con filtros por saga y buscador en vivo
detalle.html      Ficha individual (recibe ?id=kratos en la URL)

css/variables.css Paleta, tipografías y escalas. Acá está el swap de temas.
css/base.css      Reset, tipografía global, cabecera y pie
css/main.css      Secciones, tarjetas, cronología, anillo

js/data.js        TODO EL CONTENIDO. Es el único archivo que vas a editar seguido.
js/render.js      Funciones que arman el HTML de cada tarjeta
js/main.js        Interruptor de saga, scroll, filtros, buscador, detalle

assets/           Acá van tus imágenes
```

## Cómo agregar un personaje

Abrí `js/data.js` y sumá un objeto al array `PERSONAJES`:

```js
{
  id: "thor",                    // sin espacios, va en la URL
  nombre: "Thor",
  epiteto: "Dios del Trueno",
  saga: ["nordica"],             // "griega", "nordica", o las dos
  imagen: "assets/thor.jpg",     // dejalo en "" si todavía no la tenés
  resumen: "Una o dos líneas para la tarjeta.",
  datos: { "Origen": "Asgard", "Arma": "Mjölnir" },
  texto: "El texto largo de la ficha."
}
```

Listo. Aparece en la portada, en el listado, en los filtros y en el buscador,
y tiene su página de detalle. No hace falta tocar el HTML.

## Imágenes

Si `imagen` está vacío, la tarjeta muestra un marco rayado con el nombre del
archivo que falta. Es a propósito: te dice exactamente qué guardar en `assets/`.

Recomendado: 600×800 px, JPG optimizado, menos de 200 KB cada una.

## Lo que ya cumple de una rúbrica típica

- HTML semántico (`header`, `main`, `section`, `article`, `nav`, `footer`)
- Responsive sin media queries innecesarias (grid auto-fill y `clamp()`)
- Foco visible por teclado y `prefers-reduced-motion` respetado
- `aria-pressed`, `aria-current` y `aria-live` en los controles
- CSS custom properties con cambio de tema en vivo
- `localStorage`, `IntersectionObserver`, `URLSearchParams`, `fetch`-ready
- Contenido separado de la presentación

## Lo que falta (tu parte)

- [ ] Escribir las biografías largas
- [ ] Conseguir y optimizar las imágenes
- [ ] Página de armas y otra de bestiario (copiá el patrón de personajes.html)
- [ ] Formulario de contacto con validación propia
- [ ] Página 404
