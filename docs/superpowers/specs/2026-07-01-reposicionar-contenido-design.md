# Reposicionar contenido: quitar DeepTutor como método central

## Contexto

psyche-vault se presentaba, en varios archivos, como una guía para usar DeepTutor
(una herramienta de estudio con IA externa) más que como una plataforma de estudio
autosuficiente para la carrera de psicología del usuario. El objetivo de este
subproyecto es eliminar esa dependencia narrativa: el repo debe enseñar por sí
mismo, con el flujo que ya existe y funciona (lecturas → conceptos → preguntas →
respuestas → Anki → notas), sin requerir ninguna herramienta externa de IA.

Este es el primero de tres subproyectos derivados de un pedido más amplio
(reposicionamiento de contenido, voz, chat con Groq). Los otros dos se
diseñarán por separado.

## Alcance

Eliminar toda mención a DeepTutor como paso obligatorio del método de estudio,
reemplazándola por el flujo que el repo ya implementa. De paso, corregir un bug
de contenido no relacionado descubierto durante la exploración: `recursos/herramientas.md`
tiene 5 secciones completamente duplicadas con contenido distinto (y en el caso
de DeepTutor, contradictorio: una copia describe un proyecto open-source en
GitHub, la otra una web comercial con login).

## Archivos afectados

### `README.md` (raíz)
Reemplazar la sección `## Cómo usar con DeepTutor` por `## Cómo estudiar cada
módulo`, documentando el flujo propio: `lecturas.md` → `conceptos.md` →
`preguntas.md` (sin mirar respuestas) → `respuestas.md` (revisión honesta) →
mazo Anki del módulo → `notas/` (lo que quedó dando vueltas).

### `modulos/00-orientacion/README.md`
- Quitar "y a DeepTutor" de la línea sobre qué prepara el módulo cero.
- Reemplazar "Haber configurado DeepTutor para estudiar con PDFs" por un
  objetivo de aprendizaje equivalente centrado en el método propio (retrieval
  practice con preguntas.md/respuestas.md/Anki).

### `modulos/00-orientacion/conceptos.md`
- Reemplazar la sección `## Cómo usar DeepTutor con este repositorio` (líneas
  96-114) por una sección equivalente que describa el mismo ciclo de retrieval
  practice sin herramienta externa: leer → cerrar el libro → responder
  `preguntas.md` → revisar `respuestas.md` → anotar fallos en `notas/` → volver
  con variaciones.
- Corregir la referencia rota al final del archivo (`lectura-obligatoria.md`,
  archivo inexistente) — debe apuntar a `lecturas.md`.

### `modulos/00-orientacion/lecturas.md`
Reemplazar la línea "Cómo usarlo con DeepTutor" por una sugerencia de lectura
activa sin herramienta externa (ej. generar preguntas propias mientras se lee).

### `modulos/01-historia-y-escuelas/lecturas.md`
Quitar o reemplazar la línea "Con DeepTutor: cargá capítulos..." por una
sugerencia equivalente sin IA externa (ej. armar un timeline propio de los
eventos del capítulo).

### `recursos/herramientas.md`
Deduplicar las 5 secciones repetidas (DeepTutor, Podcasts, YouTube, Bases de
datos, Otras herramientas), conservando la versión más completa y precisa de
cada una (en general la segunda copia tiene más detalle: URLs directas, pasos
numerados, "cuándo usarlo"). Eliminar la sección DeepTutor por completo (ambas
copias). El resultado: un archivo sin duplicados, sin DeepTutor, con Podcasts/
YouTube/Bases de datos/Otras herramientas intactos como recursos opcionales.

## Fuera de alcance

- Subproyecto 2 (voz: lectura en voz alta / dictado) — spec separado.
- Subproyecto 3 (chat con Groq) — spec separado, requiere decisión de
  arquitectura sobre dónde vive la API key (el sitio es estático, sin backend).
- No se renombra el proyecto ni se cambia `site_name` en `mkdocs.yml`.
- No se reescribe el resto de `recursos/herramientas.md` más allá de deduplicar
  y quitar DeepTutor (Podcasts/YouTube/etc. quedan como están, solo sin repetir).

## Criterio de éxito

- `grep -ri "deeptutor" .` sobre el repo no devuelve resultados.
- `recursos/herramientas.md` no tiene encabezados `##` repetidos.
- `mkdocs build --strict` sigue pasando sin warnings de contenido roto.
- La referencia a `lectura-obligatoria.md` ya no existe.
