# Portfolio — Renata Gatica

Sitio estático hecho con **HTML + CSS + JS**. Incluye selector **ES/EN**, timeline de **Educación**, tarjetas de **Experiencia**, **Habilidades** con barras y un **embed de Instagram** (SnapWidget).

## Estructura
```
/
├─ portfolio.html   # marcado principal
├─ portfolio.css    # estilos
└─ portfolio.js     # comportamiento (menú, header sticky, i18n ES/EN)
```

## Uso local
- Opción rápida: abre `portfolio.html` con doble clic.
- Servidor local (opcional):
  ```bash
  python -m http.server 8000
  # luego visitar: http://localhost:8000/portfolio.html
  ```

## Publicar en GitHub Pages
Este repositorio es de tipo **User Page** (`renatagatica/renatagatica.github.io`), por lo que Pages sirve directamente desde la rama `main` y la carpeta raíz.

1. Confirma que `portfolio.html`, `portfolio.css` y `portfolio.js` estén en `main`.
2. En **Settings → Pages** verifica:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` / **root`
3. Espera ~1 min y abre: **https://renatagatica.github.io**

> Si mantienes el archivo como `portfolio.html`, tu URL directa será  
> `https://renatagatica.github.io/portfolio.html`.  
> Si quieres que cargue al entrar a la raíz `/`, renómbralo a **`index.html`** o agrega un `index.html` de redirección mínima:
> ```html
> <!doctype html><meta http-equiv="refresh" content="0; url=./portfolio.html">
> ```

## Editar contenido
- **Textos ES/EN:** en `portfolio.js` dentro de los objetos `t.es` y `t.en`.
- **CVs, imágenes y enlaces:** en `portfolio.html` (HERO, Experiencia y Contacto).
- **Estilos/colores:** en `portfolio.css` (variables CSS al inicio).
- **Instagram:** cambia el `src` del `<iframe>` de SnapWidget si actualizas el widget.
- Para “romper caché” al cambiar CSS/JS, incrementa el número de versión en las URLs, por ejemplo `portfolio.css?v=22` o `portfolio.js?v=10`.

## Notas
- En Contacto, el enlace de WhatsApp usa el formato `https://wa.me/549...` (ajústalo si cambia el número).
- Accesibilidad: los botones y enlaces tienen *focus states* y se respeta `prefers-reduced-motion`.

---

© 2025 Renata Gatica
