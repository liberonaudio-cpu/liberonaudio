const SITE_DATA = {
    "business": {
        "name": "LiberonAudio",
        "tagline": "Restauración de Audio Vintage de Alta Gama",
        "description": "Devolvemos la vida a las obras maestras del sonido. Cada equipo tiene una historia que merece ser escuchada.",
        "established": "2025"
    },
    "contact": {
        "email": "liberonaudio@gmail.com",
        "phone": "+34 600 000 000",
        "address": "Madrid, España",
        "hours": "Lunes a Viernes — 10:00 a 19:00",
        "appointment": "Cita previa imprescindible"
    },
    "hero": {
        "mode": "single",
        "images": [],
        "interval": 5
    },
    "badge": {
        "enabled": false,
        "type": "journal",
        "entryId": "",
        "color": "#CCFF00",
        "text": "Nueva entrada",
        "fontColor": "#000000"
    },
    "brands": [
        { "name": "Marantz", "country": "Japón / EE.UU.", "logo": "marantz.png" },
        { "name": "McIntosh", "country": "EE.UU.", "logo": "mcintosh.png" },
        { "name": "Revox", "country": "Suiza", "logo": "revox.png" },
        { "name": "Pioneer", "country": "Japón", "logo": "pioneer.png" },
        { "name": "Sansui", "country": "Japón", "logo": "sansui.png" },
        { "name": "Technics", "country": "Japón", "logo": "technics.png" },
        { "name": "Quad", "country": "Reino Unido", "logo": "quad.png" },
        { "name": "Naim", "country": "Reino Unido", "logo": "naim.png" },
        { "name": "Linn", "country": "Escocia", "logo": "linn.png" },
        { "name": "Accuphase", "country": "Japón", "logo": "accuphase.png" },
        { "name": "Luxman", "country": "Japón", "logo": "luxman.png" },
        { "name": "Tandberg", "country": "Noruega", "logo": "tandberg.png" }
    ],
    "categories": ["Amplificador", "Receiver", "Giradiscos", "Magnetófono", "Altavoces", "Sintonizador", "Preamplificador", "Reproductor CD", "Otro"],
    "postCategories": ["restauración", "opinión", "guía", "historia", "técnica"],
    "services": [
        { "number": "01", "title": "Restauración Integral", "description": "Desmontaje completo, revisión de cada componente, sustitución de piezas degradadas por originales o equivalentes NOS. El equipo vuelve a sonar como el día que salió de fábrica." },
        { "number": "02", "title": "Reparación Técnica", "description": "Diagnóstico y reparación de averías específicas. Desde fallos de canal hasta problemas de alimentación, distorsión o ruido. Instrumentación profesional de laboratorio." },
        { "number": "03", "title": "Puesta a Punto", "description": "Calibración, ajuste de bias, alineación de cabezales, limpieza de contactos. Para equipos que funcionan pero merecen recuperar su rendimiento óptimo." }
    ],
    "stats": [
        { "number": "20+", "label": "Años de experiencia" },
        { "number": "500+", "label": "Equipos restaurados" },
        { "number": "100%", "label": "Piezas originales" }
    ],
    "products": [
        {
            "id": "marantz-2270",
            "name": "Marantz 2270 Receiver",
            "brand": "Marantz",
            "category": "Receiver",
            "price": 1200,
            "currency": "€",
            "status": "disponible",
            "shortDescription": "Receiver estéreo restaurado. 70W por canal. Año 1971.",
            "longDescription": "El Marantz 2270 es uno de los receivers más buscados de la edad dorada del audio. Esta unidad ha sido sometida a una restauración integral: todos los condensadores electrolíticos reemplazados, potenciómetros limpiados, lámparas sustituidas y calibración completa de ambos canales. Suena absolutamente espectacular. Incluye certificado de restauración.",
            "images": ["marantz-2270-01.jpg", "marantz-2270-02.jpg"],
            "tags": ["receiver", "restaurado", "vintage 70s"],
            "date": "2025-01-15"
        },
        {
            "id": "mcintosh-mc275",
            "name": "McIntosh MC275 Amplificador",
            "brand": "McIntosh",
            "category": "Amplificador",
            "price": 4500,
            "currency": "€",
            "status": "disponible",
            "shortDescription": "Amplificador a válvulas legendario. 75W por canal.",
            "longDescription": "El MC275 es posiblemente el amplificador a válvulas más famoso jamás fabricado. Esta unidad Mark IV ha sido revisada completamente: válvulas testadas y emparejadas, transformadores verificados, condensadores de acoplamiento nuevos. Estado cosmético excelente. Un icono del audio.",
            "images": ["mcintosh-mc275-01.jpg"],
            "tags": ["amplificador", "válvulas", "premium"],
            "date": "2025-01-20"
        },
        {
            "id": "revox-b77",
            "name": "Revox B77 Magnetófono",
            "brand": "Revox",
            "category": "Magnetófono",
            "price": 950,
            "currency": "€",
            "status": "disponible",
            "shortDescription": "Magnetófono de bobina abierta. Velocidades 9.5/19 cm/s.",
            "longDescription": "El Revox B77 es el magnetófono semi-profesional por excelencia. Revisado completamente: cabezales en buen estado, motores calibrados, electrónica repasada. Incluye un par de bobinas de aluminio. Funcionamiento perfecto.",
            "images": ["revox-b77-01.jpg"],
            "tags": ["magnetófono", "bobina abierta", "analógico"],
            "date": "2025-01-10"
        },
        {
            "id": "pioneer-sx-1250",
            "name": "Pioneer SX-1250 Receiver",
            "brand": "Pioneer",
            "category": "Receiver",
            "price": 1800,
            "currency": "€",
            "status": "vendido",
            "shortDescription": "El buque insignia de Pioneer. 160W por canal.",
            "longDescription": "El SX-1250 es el mayor receiver que Pioneer fabricó jamás. 160 vatios por canal de pura potencia. Restaurado a fondo con componentes de la más alta calidad. Los medidores VU iluminados son hipnóticos.",
            "images": ["pioneer-sx1250-01.jpg"],
            "tags": ["receiver", "restaurado", "vintage 70s", "premium"],
            "date": "2025-01-05"
        },
        {
            "id": "sansui-au-717",
            "name": "Sansui AU-717",
            "brand": "Sansui",
            "category": "Amplificador",
            "price": 650,
            "currency": "€",
            "status": "disponible",
            "shortDescription": "Amplificador integrado DC. 85W por canal.",
            "longDescription": "El Sansui AU-717 es uno de los amplificadores integrados más apreciados de finales de los 70. Diseño DC servo para una respuesta impecable. Restaurado con condensadores nuevos de calidad audiófila.",
            "images": ["sansui-au717-01.jpg"],
            "tags": ["amplificador", "restaurado", "vintage 70s"],
            "date": "2025-02-01"
        },
        {
            "id": "technics-sl1200",
            "name": "Technics SL-1200 MK2",
            "brand": "Technics",
            "category": "Giradiscos",
            "price": 750,
            "currency": "€",
            "status": "disponible",
            "shortDescription": "El giradiscos más icónico. Tracción directa.",
            "longDescription": "No necesita presentación. El Technics SL-1200 MK2 es el estándar mundial del giradiscos de tracción directa. Motor revisado, pitch calibrado, todos los controles perfectos. Incluye cápsula Ortofon nueva.",
            "images": ["technics-sl1200-01.jpg"],
            "tags": ["giradiscos", "tracción directa", "icónico"],
            "date": "2025-02-05"
        }
    ],
    "posts": [
        {
            "id": "post-001",
            "title": "Restauración completa de un Marantz 2270",
            "excerpt": "Documentamos paso a paso el proceso de restauración de este mítico receiver de 1971.",
            "content": "<p>El Marantz 2270 llegó a nuestro taller en un estado aparentemente bueno, pero con los años los componentes electrónicos se degradan inevitablemente.</p><h3>Diagnóstico inicial</h3><p>Condensadores fuera de tolerancia, potenciómetros con ruido y lámparas agotadas.</p><h3>El proceso</h3><p>Reemplazamos todos los condensadores electrolíticos por Nichicon y Elna Silmic. Potenciómetros limpiados con DeoxIT. LEDs cálidos para el dial.</p><h3>Resultado</h3><p>El 2270 volvió a medir dentro de especificaciones. Sonido amplio, cálido y con presencia.</p>",
            "image": "marantz-2270-restauracion.jpg",
            "images": ["marantz-2270-restauracion.jpg"],
            "video": "",
            "videoType": "youtube",
            "tags": ["restauración", "Marantz", "receiver"],
            "date": "2025-01-25",
            "author": "LiberonAudio"
        },
        {
            "id": "post-002",
            "title": "¿Por qué suenan mejor los amplificadores vintage?",
            "excerpt": "Desmontamos el mito y la realidad detrás del sonido vintage.",
            "content": "<p>¿Realmente suenan mejor los equipos antiguos? La respuesta tiene matices.</p><h3>La construcción</h3><p>Transformadores sobredimensionados, chasis de aluminio macizo, disipadores enormes.</p><h3>La realidad</h3><p>Un equipo vintage restaurado tiene un carácter y musicalidad difíciles de encontrar hoy. No es nostalgia: es ingeniería con alma.</p>",
            "image": "amplificadores-vintage.jpg",
            "images": ["amplificadores-vintage.jpg"],
            "video": "",
            "videoType": "youtube",
            "tags": ["opinión", "técnica", "amplificador"],
            "date": "2025-02-10",
            "author": "LiberonAudio"
        },
        {
            "id": "post-003",
            "title": "Cómo cuidar tu giradiscos vintage",
            "excerpt": "Guía práctica de mantenimiento para que tu giradiscos siga sonando perfecto.",
            "content": "<p>Un giradiscos bien mantenido puede durar toda una vida.</p><h3>La aguja</h3><p>Revísala cada 500-1000 horas. Una aguja desgastada daña tus vinilos.</p><h3>Limpieza</h3><p>Cepillo antiestático antes de cada reproducción.</p><h3>Nivel</h3><p>Giradiscos perfectamente nivelado = desgaste uniforme.</p>",
            "image": "giradiscos-cuidados.jpg",
            "images": ["giradiscos-cuidados.jpg"],
            "video": "",
            "videoType": "youtube",
            "tags": ["guía", "giradiscos", "mantenimiento"],
            "date": "2025-02-20",
            "author": "LiberonAudio"
        },
        {
            "id": "post-004",
            "title": "Revox B77: el magnetófono que no pasa de moda",
            "excerpt": "Historia del mejor magnetófono semi-profesional jamás fabricado.",
            "content": "<p>El Revox B77 se presentó en 1977 y sigue siendo extraordinario.</p><h3>Construcción suiza</h3><p>Tres motores, cabezales de ferrita, electrónica sofisticada.</p><h3>El sonido de la cinta</h3><p>Compresión natural, calidez, sensación orgánica. El B77 a 19 cm/s es una experiencia única.</p>",
            "image": "revox-b77-historia.jpg",
            "images": ["revox-b77-historia.jpg"],
            "video": "",
            "videoType": "youtube",
            "tags": ["historia", "Revox", "magnetófono"],
            "date": "2025-03-01",
            "author": "LiberonAudio"
        }
    ]
};
