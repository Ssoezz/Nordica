# Nórdica Construcciones — Landing Page (DEMO / Portfolio)

Proyecto conceptual. Todos los datos (empresa, proyectos, testimonios, números, dirección, teléfonos) son **ficticios**.

## Estructura

Todo en una sola carpeta, sin subcarpetas:

```
├── index.html
├── styles.css
├── script.js
├── hero.jpg
├── equipo.jpg
├── casa-magnolia-exterior.jpg
├── casa-magnolia-living.jpg
├── casa-magnolia-cocina.jpg
├── casa-olmo.jpg
├── estudio-norte.jpg
├── casa-terraza-antes.jpg
├── casa-terraza-despues.jpg
└── cta.jpg
```

## Cómo verla

1. Descomprimí el ZIP por completo (clic derecho → "Extraer todo" en Windows, o doble clic en Mac) para que quede una carpeta real en tu disco.
2. Abrí esa carpeta y hacé doble clic en `index.html`.

También podés abrir la carpeta en VSCode y usar la extensión **Live Server** (clic derecho sobre `index.html` → "Open with Live Server") para que el scroll suave y las fuentes de Google carguen sin problemas.

## Sobre las imágenes

No tuve acceso a internet para descargar fotografías reales de stock (Unsplash/Pexels), así que generé **placeholders de marca** con la paleta y tipografía del proyecto, cada uno con un rótulo indicando qué foto va ahí. Para producción, reemplazá cada archivo (por ej. `hero.jpg`) por una fotografía real **con el mismo nombre** — no hace falta tocar el CSS.

Sugerencia de bancos gratuitos: [unsplash.com](https://unsplash.com) y [pexels.com](https://pexels.com), buscando "modern concrete house", "argentina architecture", "construction team blueprints", etc.

## WhatsApp

El número y el mensaje precargado se arman en `js/script.js` (constantes `WA_NUMBER` y `WA_MESSAGE`). Cambiá el número ahí para que todos los botones (header, hero, flotante, CTA, contacto) se actualicen automáticamente.

## Formulario de contacto

Valida en el frontend y muestra un mensaje de confirmación demo — no envía datos a ningún servidor. Para producción, conectalo a tu backend o a un servicio como Formspree/EmailJS.
