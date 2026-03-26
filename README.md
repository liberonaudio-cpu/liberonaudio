# LiberonAudio — Web

## Estructura de archivos

```
liberonaudio/
├── index.html              ← Página principal (landing)
├── boutique.html           ← Tienda (próximamente)
├── journal.html            ← Blog/Vlog (próximamente)
├── sitemap.xml             ← Mapa del sitio para Google
├── robots.txt              ← Instrucciones para buscadores
├── css/
│   └── style.css           ← ESTILOS GLOBALES (cambiar aquí = cambia todo)
├── js/
│   ├── data.js             ← DATOS DEL NEGOCIO (marcas, contacto, servicios)
│   └── main.js             ← Funcionalidad (animaciones, renderizado)
├── data/
│   ├── products.json       ← Productos de la boutique (futuro)
│   └── posts.json          ← Posts del journal (futuro)
└── img/
    ├── logo.png            ← Logo de LiberonAudio (formato horizontal)
    ├── favicon.png         ← Favicon (icono pestaña navegador)
    ├── og-image.jpg        ← Imagen para compartir en redes (1200x630px)
    ├── brands/             ← Logos de marcas (PNG, fondo transparente)
    │   ├── marantz.png
    │   ├── mcintosh.png
    │   ├── revox.png
    │   ├── pioneer.png
    │   ├── sansui.png
    │   ├── technics.png
    │   ├── quad.png
    │   ├── naim.png
    │   ├── linn.png
    │   ├── accuphase.png
    │   ├── luxman.png
    │   └── tandberg.png
    ├── products/           ← Fotos de productos (futuro)
    └── posts/              ← Imágenes de posts (futuro)
```

## Cómo añadir tu logo

1. Coloca tu archivo de logo en `img/logo.png`
2. En `index.html`, busca las líneas comentadas con `<!-- LOGO:` y:
   - **Descomenta** la línea `<img src="img/logo.png"...>`
   - **Comenta o borra** la línea de texto fallback debajo

Hay dos sitios: el logo del nav (arriba) y el logo del hero (centro).

## Cómo añadir logos de marcas

1. Consigue los logos en PNG con **fondo transparente**
2. Ponlos en `img/brands/` con el nombre exacto que aparece en `js/data.js`
   - Ejemplo: para Marantz → `img/brands/marantz.png`
3. Si no tienes el logo de alguna marca, no pasa nada: se mostrará solo el nombre en texto

## Cómo añadir/quitar marcas

Abre `js/data.js` y edita el array `brands`:

```javascript
// Para AÑADIR una marca:
{ name: "Bang & Olufsen", country: "Dinamarca", logo: "bang-olufsen.png" },

// Para QUITAR una marca:
// Borra la línea correspondiente

// Si no tienes logo:
{ name: "NuevaMarca", country: "País", logo: "" },
```

## Cómo cambiar datos de contacto

Abre `js/data.js` y edita el objeto `contact`:

```javascript
contact: {
    email: "liberonaudio@gmail.com",
    phone: "+34 612 345 678",
    address: "Calle Example 42, Madrid",
    hours: "Lunes a Viernes — 10:00 a 19:00",
    appointment: "Cita previa imprescindible"
},
```

## Cómo cambiar colores/fuentes de TODA la web

Abre `css/style.css` y edita las variables al principio del archivo:

```css
:root {
    --color-bg: #0A0A0A;          /* Fondo principal */
    --color-text-primary: #F0EDED; /* Texto principal */
    --color-accent: #C0C0C0;       /* Color de acento (plata) */
    --font-display: 'Cormorant Garamond', serif;  /* Títulos */
    --font-body: 'Outfit', sans-serif;             /* Texto normal */
}
```

Cambiar aquí afecta a TODAS las páginas automáticamente.

---

## SEO — Cómo aparecer en Google

### Lo que ya está hecho:
- ✅ Meta tags de título y descripción optimizados
- ✅ Open Graph (para compartir en redes sociales)
- ✅ Twitter Cards
- ✅ Schema.org LocalBusiness (Google entiende que es un negocio en Madrid)
- ✅ sitemap.xml
- ✅ robots.txt
- ✅ HTML semántico (h1, h2, section, nav, etc.)
- ✅ Keywords relevantes en el contenido

### Lo que hay que hacer tú:

#### 1. Google Search Console (GRATIS — imprescindible)
1. Ve a https://search.google.com/search-console
2. Inicia sesión con la cuenta de Google de liberonaudio@gmail.com
3. Añade la propiedad (tu dominio o URL de GitHub Pages)
4. Verifica la propiedad (Google te da instrucciones)
5. Una vez verificado, envía el sitemap: escribe `sitemap.xml` en la sección Sitemaps
6. Google empezará a indexar la web en días/semanas

#### 2. Google Business Profile (GRATIS — muy importante para Madrid)
1. Ve a https://business.google.com
2. Crea un perfil de negocio para LiberonAudio
3. Pon la dirección de Madrid, teléfono, email, horarios
4. Añade fotos del taller y de equipos
5. Pide a clientes satisfechos que dejen reseñas
6. Esto hace que aparezca en Google Maps y en búsquedas locales

#### 3. Dominio propio (recomendado)
- Compra `liberonaudio.com` o `.es` (desde ~10€/año en Namecheap, GoDaddy, etc.)
- Configúralo para apuntar a GitHub Pages
- Un dominio propio mejora mucho el SEO frente a `tuusuario.github.io`

#### 4. Contenido continuo
- Publicar posts en el Journal regularmente (cada 1-2 semanas)
- Cada post con fotos de equipos restaurados, explicaciones técnicas
- Google premia el contenido fresco y original
- Usar palabras clave naturales: "restauración Marantz 2270", "reparación amplificador vintage Madrid"

---

## Subir a GitHub Pages

1. Crea un repositorio en GitHub (ej: `liberonaudio`)
2. Sube todos los archivos de esta carpeta
3. Ve a Settings → Pages → Source: `main` branch, carpeta `/ (root)`
4. Tu web estará en `https://tuusuario.github.io/liberonaudio/`

---

## Próximos pasos
- [ ] Añadir logo real
- [ ] Añadir logos de marcas en img/brands/
- [ ] Crear Boutique (página de productos)
- [ ] Crear Journal (blog/vlog)
- [ ] Programa .exe para gestionar productos y posts
- [ ] Crear redes sociales y añadir links
- [ ] Registrar dominio propio
- [ ] Google Search Console + Google Business Profile
