# Jengibre — sitio web

Sitio estático (HTML, CSS y JS). Se sube tal cual a Hostinger: el contenido de esta carpeta va en `public_html`.

## Antes de publicar

1. **WhatsApp e Instagram**: completar `assets/js/config.js`.
   - `whatsapp`: número en formato internacional, solo dígitos (ej. `5492611234567`).
   - `whatsappTexto`: cómo se muestra en el footer (ej. `+54 9 261 123 4567`).
   - `instagram`: URL del perfil. Si queda vacío, el botón no aparece.
2. **Fotos y videos provisorios**: son de bancos libres y hay que reemplazarlos por los de la sesión en el local, con el mismo nombre de archivo.
   - Fotos (`assets/img/`): Unsplash, licencia libre. Cada foto tiene una versión de 1400 px y otra `-800`.
   - Videos (`assets/video/`): Mixkit, licencia libre. Cada video va en `.webm` y `.mp4`, sin audio, con una imagen fija del primer cuadro en `assets/img/`.
3. **Carta**: los platos y precios están en `assets/js/carta-data.js`.

## Cómo está armado

- `index.html`: home (preloader, hero con video, manifiesto, momentos del día, platos, eventos, playroom, footer).
- `carta.html`: carta con filtros.
- `assets/css/main.css`: estilos y paleta de la marca.
- `assets/js/comun.js`: scroll suave (Lenis), navegación, menú del celular, panel de reserva y dibujo de la rama.
- `assets/js/home.js` y `assets/js/carta.js`: animaciones de cada página (GSAP con ScrollTrigger y SplitText).
- `assets/js/rama-trazos.js`: los trazos de línea central de la rama del logo, usados como máscara para que se dibuje.
- GSAP 3.15 y Lenis 1.3 se cargan desde cdnjs y jsDelivr.

## Accesibilidad

Con *reducir movimiento* activado en el sistema se apagan el preloader, el scroll suave, el parallax y el scroll horizontal. El preloader se muestra una sola vez por sesión y se saltea con un clic o una tecla.
