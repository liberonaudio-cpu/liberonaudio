/* ============================================
   LIBERONAUDIO — DATA LAYER
   ============================================
   Este archivo contiene TODOS los datos dinámicos.
   El futuro .exe solo modificará este archivo
   (o los JSON en /data/).
   
   INSTRUCCIONES:
   - Para AÑADIR UN PRODUCTO: copia un bloque del array products y cambia los datos.
   - Para AÑADIR UN POST: copia un bloque del array posts y cambia los datos.
   - Para AÑADIR UNA MARCA: copia una línea del array brands.
   - Para CAMBIAR DATOS DE CONTACTO: edita el objeto contact.
   ============================================ */

const SITE_DATA = {

    /* ---------- INFO DEL NEGOCIO ---------- */
    business: {
        name: "LiberonAudio",
        tagline: "Restauración de Audio Vintage de Alta Gama",
        description: "Devolvemos la vida a las obras maestras del sonido. Cada equipo tiene una historia que merece ser escuchada.",
        established: "2025"
    },

    /* ---------- CONTACTO ---------- */
    contact: {
        email: "liberonaudio@gmail.com",
        phone: "+34 600 000 000",
        address: "Madrid, España",
        hours: "Lunes a Viernes — 10:00 a 19:00",
        appointment: "Cita previa imprescindible"
    },

    /* ---------- MARCAS ---------- */
    brands: [
        { name: "Marantz",       country: "Japón / EE.UU.",  logo: "marantz.png" },
        { name: "McIntosh",      country: "EE.UU.",          logo: "mcintosh.png" },
        { name: "Revox",         country: "Suiza",           logo: "revox.png" },
        { name: "Pioneer",       country: "Japón",           logo: "pioneer.png" },
        { name: "Sansui",        country: "Japón",           logo: "sansui.png" },
        { name: "Technics",      country: "Japón",           logo: "technics.png" },
        { name: "Quad",          country: "Reino Unido",     logo: "quad.png" },
        { name: "Naim",          country: "Reino Unido",     logo: "naim.png" },
        { name: "Linn",          country: "Escocia",         logo: "linn.png" },
        { name: "Accuphase",     country: "Japón",           logo: "accuphase.png" },
        { name: "Luxman",        country: "Japón",           logo: "luxman.png" },
        { name: "Tandberg",      country: "Noruega",         logo: "tandberg.png" },
    ],

    /* ---------- SERVICIOS ---------- */
    services: [
        {
            number: "01",
            title: "Restauración Integral",
            description: "Desmontaje completo, revisión de cada componente, sustitución de piezas degradadas por originales o equivalentes NOS. El equipo vuelve a sonar como el día que salió de fábrica."
        },
        {
            number: "02",
            title: "Reparación Técnica",
            description: "Diagnóstico y reparación de averías específicas. Desde fallos de canal hasta problemas de alimentación, distorsión o ruido. Instrumentación profesional de laboratorio."
        },
        {
            number: "03",
            title: "Puesta a Punto",
            description: "Calibración, ajuste de bias, alineación de cabezales, limpieza de contactos. Para equipos que funcionan pero merecen recuperar su rendimiento óptimo."
        }
    ],

    /* ---------- ESTADÍSTICAS ---------- */
    stats: [
        { number: "20+", label: "Años de experiencia" },
        { number: "500+", label: "Equipos restaurados" },
        { number: "100%", label: "Piezas originales" }
    ],

    /* ============================================
       PRODUCTOS — BOUTIQUE
       ============================================
       Cada producto necesita:
       - id:               identificador único (no repetir)
       - name:             nombre del equipo
       - brand:            marca (coincide con lista de marcas para el filtro)
       - price:            precio en número
       - currency:         "€"
       - status:           "disponible" o "vendido"
       - shortDescription: texto corto para la tarjeta
       - longDescription:  texto largo para el detalle (puede usar HTML)
       - images:           array de nombres de archivos en img/products/
       - tags:             array de etiquetas
       - date:             fecha "YYYY-MM-DD"
    */
    products: [
        {
            id: "marantz-2270",
            name: "Marantz 2270 Receiver",
            brand: "Marantz",
            price: 1200,
            currency: "€",
            status: "disponible",
            shortDescription: "Receiver estéreo restaurado. 70W por canal. Año 1971.",
            longDescription: "El Marantz 2270 es uno de los receivers más buscados de la edad dorada del audio. Esta unidad ha sido sometida a una restauración integral: todos los condensadores electrolíticos reemplazados, potenciómetros limpiados, lámparas sustituidas y calibración completa de ambos canales. Suena absolutamente espectacular. Incluye certificado de restauración.",
            images: ["marantz-2270-01.jpg", "marantz-2270-02.jpg"],
            tags: ["receiver", "restaurado", "vintage 70s"],
            date: "2025-01-15"
        },
        {
            id: "mcintosh-mc275",
            name: "McIntosh MC275 Amplificador",
            brand: "McIntosh",
            price: 4500,
            currency: "€",
            status: "disponible",
            shortDescription: "Amplificador a válvulas legendario. 75W por canal.",
            longDescription: "El MC275 es posiblemente el amplificador a válvulas más famoso jamás fabricado. Esta unidad Mark IV ha sido revisada completamente: válvulas testadas y emparejadas, transformadores verificados, condensadores de acoplamiento nuevos. Estado cosmético excelente. Un icono del audio.",
            images: ["mcintosh-mc275-01.jpg"],
            tags: ["amplificador", "válvulas", "premium"],
            date: "2025-01-20"
        },
        {
            id: "revox-b77",
            name: "Revox B77 Magnetófono",
            brand: "Revox",
            price: 950,
            currency: "€",
            status: "disponible",
            shortDescription: "Magnetófono de bobina abierta. Velocidades 9.5/19 cm/s.",
            longDescription: "El Revox B77 es el magnetófono semi-profesional por excelencia. Revisado completamente: cabezales en buen estado, motores calibrados, electrónica repasada. Incluye un par de bobinas de aluminio. Funcionamiento perfecto.",
            images: ["revox-b77-01.jpg"],
            tags: ["magnetófono", "bobina abierta", "analógico"],
            date: "2025-01-10"
        },
        {
            id: "pioneer-sx-1250",
            name: "Pioneer SX-1250 Receiver",
            brand: "Pioneer",
            price: 1800,
            currency: "€",
            status: "vendido",
            shortDescription: "El buque insignia de Pioneer. 160W por canal.",
            longDescription: "El SX-1250 es el mayor receiver que Pioneer fabricó jamás. 160 vatios por canal de pura potencia. Restaurado a fondo con componentes de la más alta calidad. Los medidores VU iluminados son hipnóticos.",
            images: ["pioneer-sx1250-01.jpg"],
            tags: ["receiver", "restaurado", "vintage 70s", "premium"],
            date: "2025-01-05"
        },
        {
            id: "sansui-au-717",
            name: "Sansui AU-717",
            brand: "Sansui",
            price: 650,
            currency: "€",
            status: "disponible",
            shortDescription: "Amplificador integrado DC. 85W por canal.",
            longDescription: "El Sansui AU-717 es uno de los amplificadores integrados más apreciados de finales de los 70. Diseño DC servo para una respuesta impecable. Restaurado con condensadores nuevos de calidad audiófila.",
            images: ["sansui-au717-01.jpg"],
            tags: ["amplificador", "restaurado", "vintage 70s"],
            date: "2025-02-01"
        },
        {
            id: "technics-sl1200",
            name: "Technics SL-1200 MK2",
            brand: "Technics",
            price: 750,
            currency: "€",
            status: "disponible",
            shortDescription: "El giradiscos más icónico. Tracción directa.",
            longDescription: "No necesita presentación. El Technics SL-1200 MK2 es el estándar mundial del giradiscos de tracción directa. Motor revisado, pitch calibrado, todos los controles perfectos. Incluye cápsula Ortofon nueva.",
            images: ["technics-sl1200-01.jpg"],
            tags: ["giradiscos", "tracción directa", "icónico"],
            date: "2025-02-05"
        },
    ],

    /* ============================================
       POSTS — JOURNAL
       ============================================
       Cada post necesita:
       - id:      identificador único
       - title:   título del post
       - excerpt: resumen corto (para la tarjeta)
       - content: contenido completo (puede ser HTML)
       - image:   nombre del archivo en img/posts/
       - video:   URL de YouTube (dejar "" si no hay vídeo)
       - tags:    array de etiquetas (puedes crear las que quieras)
       - date:    fecha "YYYY-MM-DD"
       - author:  nombre del autor
    */
    posts: [
        {
            id: "post-001",
            title: "Restauración completa de un Marantz 2270",
            excerpt: "Documentamos paso a paso el proceso de restauración de este mítico receiver de 1971. Desde el desmontaje hasta las pruebas finales.",
            content: "<p>El Marantz 2270 llegó a nuestro taller en un estado aparentemente bueno, pero con los años los componentes electrónicos se degradan inevitablemente. El propietario nos pidió una restauración integral para devolver el equipo a sus especificaciones originales.</p><h3>Diagnóstico inicial</h3><p>Tras una inspección visual y las primeras mediciones, encontramos lo esperado en un equipo de más de 50 años: condensadores electrolíticos con valores fuera de tolerancia, potenciómetros con ruido y las lámparas del dial prácticamente agotadas.</p><h3>El proceso</h3><p>Reemplazamos todos los condensadores electrolíticos por equivalentes modernos de alta calidad (Nichicon, Elna Silmic). Los potenciómetros fueron desmontados, limpiados con DeoxIT y verificados uno a uno. Las lámparas del dial se sustituyeron por LEDs cálidos que replican el tono original.</p><h3>Resultado</h3><p>Tras la calibración final, el 2270 volvió a medir dentro de las especificaciones originales de Marantz. El sonido es amplio, cálido y con una presencia que los equipos modernos rara vez igualan. Otro clásico rescatado.</p>",
            image: "marantz-2270-restauracion.jpg",
            video: "",
            tags: ["restauración", "Marantz", "receiver"],
            date: "2025-01-25",
            author: "LiberonAudio"
        },
        {
            id: "post-002",
            title: "¿Por qué suenan mejor los amplificadores vintage?",
            excerpt: "Desmontamos el mito y la realidad detrás del sonido vintage. ¿Nostalgia o hay razones técnicas reales?",
            content: "<p>Es una de las preguntas más frecuentes que nos hacen: ¿realmente suenan mejor los equipos antiguos? La respuesta, como siempre en audio, tiene matices.</p><h3>La construcción</h3><p>Los amplificadores de los años 60 y 70 se fabricaban con una generosidad de materiales impensable hoy. Transformadores sobredimensionados, chasis de aluminio macizo, disipadores enormes. Todo esto tiene un impacto real en el sonido.</p><h3>La filosofía de diseño</h3><p>Los ingenieros de aquella época diseñaban para que el equipo sonara bien, no solo para que midiera bien en un laboratorio. Había una atención al carácter sonoro que muchos fabricantes modernos han perdido.</p><h3>La realidad</h3><p>Un equipo vintage sin restaurar probablemente suene peor que uno moderno. Pero un equipo vintage correctamente restaurado tiene un carácter, una calidez y una musicalidad que son muy difíciles de encontrar hoy. No es nostalgia: es ingeniería con alma.</p>",
            image: "amplificadores-vintage.jpg",
            video: "",
            tags: ["opinión", "técnica", "amplificador"],
            date: "2025-02-10",
            author: "LiberonAudio"
        },
        {
            id: "post-003",
            title: "Cómo cuidar tu giradiscos vintage",
            excerpt: "Guía práctica de mantenimiento para que tu giradiscos siga sonando perfecto durante décadas.",
            content: "<p>Un giradiscos bien mantenido puede durar literalmente toda una vida. Aquí van nuestros consejos básicos de mantenimiento.</p><h3>La aguja</h3><p>Revisa la aguja cada 500-1000 horas de uso. Una aguja desgastada no solo suena mal: daña tus vinilos de forma irreversible.</p><h3>La correa</h3><p>Si tu giradiscos es de tracción por correa, revísala periódicamente. Con el tiempo pierden elasticidad y empiezan a patinar.</p><h3>Limpieza</h3><p>Mantén el plato y el brazo libres de polvo. Usa un cepillo antiestático antes de cada reproducción.</p><h3>Nivel</h3><p>Asegúrate de que el giradiscos está perfectamente nivelado. Un plato desnivelado causa desgaste irregular de la aguja.</p>",
            image: "giradiscos-cuidados.jpg",
            video: "",
            tags: ["guía", "giradiscos", "mantenimiento"],
            date: "2025-02-20",
            author: "LiberonAudio"
        },
        {
            id: "post-004",
            title: "Revox B77: el magnetófono que no pasa de moda",
            excerpt: "Historia y revisión del que probablemente sea el mejor magnetófono semi-profesional jamás fabricado.",
            content: "<p>El Revox B77 se presentó en 1977 y rápidamente se convirtió en el magnetófono de referencia para audiófilos y estudios pequeños. Casi 50 años después, sigue siendo extraordinario.</p><h3>Construcción suiza</h3><p>Fabricado en Regensdorf, Suiza, el B77 destila calidad. Tres motores, cabezales de ferrita de larga duración y una electrónica sofisticada para su época.</p><h3>El sonido de la cinta</h3><p>Hay algo en el sonido de la cinta que el digital no ha conseguido replicar del todo. Esa compresión natural, esa calidez, esa sensación orgánica. El B77 a 19 cm/s con una buena cinta es una experiencia única.</p>",
            image: "revox-b77-historia.jpg",
            video: "",
            tags: ["historia", "Revox", "magnetófono"],
            date: "2025-03-01",
            author: "LiberonAudio"
        },
    ],
};
