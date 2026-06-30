# Herramientas

Las herramientas de estudio que funcionan con este repo. El foco es cómo usarlas,
no solo listarlas.

---

## DeepTutor

[DeepTutor](https://github.com/HKUDS/DeepTutor) es un sistema de estudio basado en
RAG (Retrieval-Augmented Generation) que permite hacer preguntas sobre PDFs con
respuestas fundamentadas en el texto cargado.

### Flujo de trabajo con psyche-vault

1. **Conseguí el PDF del libro del módulo actual** (las fuentes primarias de cada
   `lecturas.md`). Los PDF van en `modulos/XX-nombre/pdfs/` (carpeta ignorada por git).

2. **Cargá el PDF en DeepTutor.** En el panel de fuentes, subí el archivo. DeepTutor
   lo indexa y ya podés hacer preguntas.

3. **Antes de leer, generá un mapa.** Prompt sugerido:
   > "Resumí los capítulos [X-Y] en una lista de los 10 conceptos más importantes,
   > con una oración de explicación cada uno."

4. **Mientras leés, preguntá sobre lo que no queda claro.** Ejemplos:
   > "¿Cuál es la diferencia entre el modelo topográfico y el modelo estructural en Freud?"
   > "Dame un ejemplo concreto del condicionamiento operante de Skinner."
   > "Explicame la teoría del apego de Bowlby como si tuviera 15 años."

5. **Al terminar un capítulo, generá un quiz.** Prompt:
   > "Generá 10 preguntas de comprensión sobre lo que acabamos de leer.
   > Las preguntas deben requerir comprensión real, no solo memorización."

6. **Respondé el quiz sin mirar el PDF.** Anotá tus respuestas en `notas/`.

7. **Revisá con Deep Research.** Para los conceptos donde tu respuesta fue vaga:
   > "Explicame en profundidad [concepto]. Usá el texto como base pero podés
   > complementar con lo que sabés."

8. **Comparalos con las preguntas de `preguntas.md`.** Si respondiste bien el quiz
   de DeepTutor, las preguntas del módulo deberían fluir.

### Prompts útiles para psicología

```
"¿En qué contexto histórico surgió esta idea? ¿Qué problema venía a resolver?"
"¿Cuál es la evidencia empírica que respalda esta afirmación?"
"¿Cómo se aplica este concepto en la práctica clínica?"
"¿Cuáles son las críticas principales a esta teoría?"
"Compará [concepto A] con [concepto B] en una tabla."
"Dame 3 ejemplos de la vida cotidiana donde se vea este fenómeno."
```

---

## Podcasts

### Hidden Brain (en inglés)
Shankar Vedantam — NPR. Explora la psicología detrás de decisiones cotidianas.
Episodios de 30-45 min, bien producidos, basados en investigación real.
Ideal para el módulo de psicología social y cognitivismo.

### Mente y Cerebro — El Español (en español)
Basado en la revista Mente y Cerebro. Episodios sobre neurociencia, psicología
clínica y divulgación. Nivel intermedio, muy buena calidad para hispanohablantes.

### The Psychology Podcast — Scott Barry Kaufman (en inglés)
Kaufman es psicólogo de la creatividad y la autorrealización. Entrevistas largas
con investigadores. Útil para los módulos de humanismo y creatividad.

### Psicología al Desnudo — Psi Violeta (en español)
Divulgación psicológica en español, enfocada en psicología clínica y conceptos
de salud mental. Accesible, rigurosa y sin sensacionalismo.

### Freakonomics Radio (en inglés)
No es psicología pura, pero aplica rigor empírico a preguntas de conducta humana.
Complementa bien el módulo de psicología social y sesgos cognitivos.

---

## YouTube y video

### Crash Course Psychology (en inglés)
Playlist de 40 episodios de 10-15 minutos cada uno. Cubre toda la psicología
introductoria con animaciones. Ideal como primera vista antes de entrar a un módulo.

### Kurzgesagt (en inglés, subtítulos en español disponibles)
No es psicología pura, pero los episodios sobre neurociencia, depresión y
motivación son de los mejores de divulgación científica en YouTube.

### Canal Encuentro (en español)
Canal cultural argentino con documentales sobre psicoanálisis, psicología y
ciencias sociales. Gratuito en YouTube.

### TED Talks — Psychology
Buscar "TED psychology" en YouTube. Las charlas de Daniel Kahneman, Paul Bloom,
Philip Zimbardo y Lisa Feldman Barrett son especialmente relevantes para este repo.

### Psiquiatría TV (en español)
Canal de psiquiatría clínica con explicaciones de trastornos, neurobiología y
farmacología básica. Útil para el módulo de psicopatología.

---

## Bases de datos y papers

### PubMed
Base de datos gratuita de artículos de ciencias de la salud y psicología.
pubmed.ncbi.nlm.nih.gov — Buscar por término + "review" para artículos de síntesis.

### Redalyc
Red de revistas científicas latinoamericanas en acceso abierto.
redalyc.org — excelente para psicología en español.

### PsyArXiv
Preprints de psicología con acceso gratuito antes de la revisión por pares.
psyarxiv.com

---

## Otras herramientas

### Anki
Flashcards con repetición espaciada. El complemento perfecto para el glosario:
una carta por término de `glosario.md`, repasar 10 minutos por día.
Gratuito. apps.ankiweb.net

Estructura sugerida para las cartas:
- Frente: el término
- Dorso: la definición en tus palabras + el módulo donde aplica

### Obsidian
Si querés usar este repo como segundo cerebro, Obsidian lee Markdown nativo y
permite crear links entre notas (`[[links]]`). Abrí la carpeta `psyche-vault`
como vault y los módulos se conectan automáticamente.

### Readwise
Para subrayar y anotar en PDFs/ebooks y que esos subrayados lleguen a tus notas.
Se integra con Obsidian. Útil si leerás los libros en formato digital.

---

## DeepTutor

**Qué es:** Plataforma de tutoría con IA que permite cargar PDFs y conversar con ellos,
generar quizzes automáticos, hacer búsqueda profunda sobre el contenido y obtener
explicaciones adaptadas al nivel del estudiante. URL: https://deeptutor.ai

### Flujo de trabajo con este repo

**1. Preparar el material**

Antes de abrir DeepTutor, localiza el PDF que quieres trabajar dentro de este repo.
Los PDFs están organizados por unidades en `curriculum/`. Por ejemplo:
- `curriculum/01-psicologia-general/pdfs/introduccion-psicologia.pdf`

Si el PDF está protegido o escaneado, usa Adobe Acrobat (OCR) o smallpdf.com para
hacerlo texto-seleccionable antes de subirlo.

**2. Cargar el documento**

1. Inicia sesión en deeptutor.ai (cuenta gratuita: hasta 3 PDFs activos)
2. Clic en "Upload Document" — arrastra el PDF directamente
3. Espera el procesamiento (30–60 seg para PDFs de 200 páginas)
4. El documento aparece en tu biblioteca con un chat asociado

**3. Sesión de estudio — primer pase**

Cuando abres un documento por primera vez, usa este prompt de arranque:

```
Resume los conceptos principales de este documento en 10 bullets ordenados
por importancia. Luego dime qué 3 conceptos son los más contraintuitivos
o difíciles de entender para un estudiante de primer año.
```

Esto te da un mapa mental del material antes de leerlo entero.

**4. Generar quiz**

DeepTutor tiene botón nativo de quiz. Para psicología, ajusta así:
- Tipo: "Multiple choice" + "True/False" mezclados
- Dificultad: Media-alta (el modo "Easy" es inútil para examen)
- Foco: "Key concepts only" en vez de detalles de ejemplos

Prompt alternativo si el quiz automático es demasiado superficial:

```
Genera 10 preguntas de examen tipo test sobre [tema específico] de este documento.
Para cada pregunta: 4 opciones, una correcta, y después de las opciones escribe
la justificación de por qué la respuesta correcta es correcta y por qué las otras
tres son incorrectas.
```

**5. Deep Research — para ir más allá del PDF**

La función "Deep Research" de DeepTutor busca en internet fuentes externas
relacionadas con el documento cargado. Útil para:

- Contrastar teorías del libro con investigación reciente
- Encontrar estudios empíricos que respalden (o contradigan) lo que dice el autor
- Buscar metaanálisis sobre temas clínicos

Prompt útil para Deep Research en psicología:

```
Busca investigación publicada después de 2018 sobre [concepto del PDF].
¿Qué han encontrado los estudios recientes? ¿Algún hallazgo contradice
lo que afirma el autor de este documento?
```

**6. Modo socrático — para preparar examen oral**

```
Hazme preguntas sobre [tema] como si fuera un examen oral universitario.
No me des la respuesta. Cuando yo responda, corrígeme y profundiza.
Sé exigente: si mi respuesta es vaga o incompleta, señálalo.
```

**7. Sincronizar con el repo**

Después de cada sesión en DeepTutor:
1. Copia las preguntas del quiz generado → pégalas en el archivo
   `curriculum/[unidad]/quizzes/[tema].md` de este repo
2. Si encontraste algo interesante en Deep Research → anótalo en
   `notas/[tema]-referencias.md`
3. Actualiza `progreso.md` con la fecha y el porcentaje completado

**Limitaciones a tener en cuenta:**
- La versión gratuita no guarda el historial de chat después de 7 días
- PDFs de más de 300 páginas a veces se procesan mal: divide en partes
- No reemplaza leer el texto; úsalo para consolidar después de leer

---

## Podcasts

### 1. Entiende Tu Mente
- **Idioma:** Español
- **Plataformas:** Spotify, Apple Podcasts, iVoox
- **Descripción:** Conducido por tres psicólogos españoles (Molo Cebrián, Luis Muiño
  y Mónica González). Cada episodio toma un concepto de psicología — autoestima,
  procrastinación, apego, duelo — y lo analiza desde la teoría y la práctica clínica.
  El nivel es divulgativo pero con rigor: citan estudios sin perder la accesibilidad.
- **Para qué sirve:** Excelente para asentar conceptos de psicología social y clínica
  que aparecen en los primeros años de carrera. Los episodios de 20-30 min encajan
  perfectamente en trayectos o gym.

### 2. The Psychology Podcast (con Scott Barry Kaufman)
- **Idioma:** Inglés
- **Plataformas:** Spotify, Apple Podcasts, web propia
- **Descripción:** Kaufman (psicólogo de UPenn, experto en creatividad e inteligencia)
  entrevista a investigadores y clínicos de primer nivel: Adam Grant, Martin Seligman,
  Lisa Feldman Barrett, Robert Sapolsky. Las conversaciones son densas y académicas,
  no divulgación básica.
- **Para qué sirve:** Ideal para psicología positiva, neurociencia cognitiva y
  personalidad. Si tienes un examen sobre Maslow o jerarquía de necesidades, el
  episodio con Kaufman sobre la pirámide actualizada es referencia directa.

### 3. Hidden Brain (NPR)
- **Idioma:** Inglés
- **Plataformas:** Spotify, NPR, Apple Podcasts
- **Descripción:** Shankar Vedantam explora los procesos inconscientes que guían
  el comportamiento humano. Cada episodio parte de una investigación publicada en
  revistas como Science o PNAS y la traduce a narrativa. Producción de primera.
- **Para qué sirve:** Psicología social, sesgos cognitivos, toma de decisiones.
  Los episodios sobre efecto halo, disonancia cognitiva y comportamiento de grupos
  complementan directamente Cialdini y Kahneman en los primeros cursos.

### 4. Psicología Al Desnudo (Psi)
- **Idioma:** Español
- **Plataformas:** Spotify, iVoox, YouTube
- **Descripción:** La psicóloga Mª Ángeles Mora (conocida como Psi en redes) habla
  de salud mental, relaciones y autoconocimiento desde una perspectiva clínica
  honesta. No es un podcast académico, pero toca temas que se estudian en
  psicopatología (ansiedad, depresión, narcisismo) desde el punto de vista de
  alguien que los trabaja en consulta.
- **Para qué sirve:** Conectar la teoría del aula con la práctica real. Útil para
  entender cómo se manifiestan los trastornos fuera del DSM.

### 5. Huberman Lab
- **Idioma:** Inglés
- **Plataformas:** Spotify, YouTube, Apple Podcasts
- **Descripción:** Andrew Huberman (neurocientífico de Stanford) hace episodios de
  2-3 horas sobre neurociencia aplicada: sueño, estrés, dopamina, plasticidad
  neuronal, psicodélicos. Cita papers directamente y los explica. El formato largo
  es denso pero la información es sólida.
- **Para qué sirve:** Fundamentos de neurociencia que aparecen en bases biológicas
  del comportamiento. Los episodios sobre cortisol, amígdala y ciclos circadianos
  son material de examen en asignaturas de psicobiología.

### 6. Ser Humano (Castilla del Pino)
- **Idioma:** Español
- **Plataformas:** iVoox, RTVE A la Carta (archivos)
- **Descripción:** Archivo de conferencias y entrevistas de Carlos Castilla del Pino,
  psiquiatra y ensayista español. Material histórico pero vigente para entender
  psicopatología desde la tradición europea y la fenomenología.
- **Para qué sirve:** Contexto histórico de la psiquiatría española y fundamentos
  fenomenológicos que aparecen en historia de la psicología.

---

## YouTube y video

### 1. Kurzgesagt – In a Nutshell
- **URL:** youtube.com/@kurzgesagt
- **Idioma:** Inglés (subtítulos en español disponibles)
- **Enfoque:** Neurociencia, comportamiento, evolución humana, bienestar mental.
  Animaciones de alta calidad que explican dopamina, soledad, adicción y
  evolución del cerebro. Cada video cita su bibliografía en la descripción.
- **Cuándo usarlo:** Para tener una imagen mental clara de procesos biológicos
  complejos antes de leer el capítulo del manual.

### 2. CrashCourse Psychology
- **URL:** youtube.com/@crashcourse (playlist Psychology)
- **Idioma:** Inglés (subtítulos en español)
- **Enfoque:** Serie de 40 episodios de 10-12 min que cubre todo el temario de
  introducción a la psicología: historia, métodos, neurociencia, percepción,
  memoria, aprendizaje, personalidad, trastornos, terapias.
- **Cuándo usarlo:** Repaso rápido antes de examen o para tener el concepto claro
  antes de leer en profundidad. Es el equivalente a un libro de texto en vídeo.

### 3. Canal de Neuropedagogía (Universidad de Navarra)
- **URL:** youtube.com/@unav (buscar playlist Neuropedagogía)
- **Idioma:** Español
- **Enfoque:** Neurociencia educativa, plasticidad cerebral, aprendizaje y memoria
  desde la perspectiva académica española. Los profesores son investigadores activos.
- **Cuándo usarlo:** Asignaturas de psicología del aprendizaje y neuropsicología.

### 4. TED-Ed — Psychology & Mental Health
- **URL:** youtube.com/@TEDEd (filtrar por Psychology)
- **Idioma:** Inglés (subtítulos en 40 idiomas)
- **Enfoque:** Animaciones cortas (5-8 min) sobre conceptos específicos: experimento
  de Milgram, efecto placebo, teoría del apego, por qué soñamos, cómo funciona
  la memoria. Alta densidad de información por minuto.
- **Cuándo usarlo:** Cuando necesitas entender un concepto puntual rápido, no un
  tema completo.

### 5. Psiquiatria.com — Canal oficial
- **URL:** youtube.com/@psiquiatriacom
- **Idioma:** Español
- **Enfoque:** Conferencias y ponencias de psiquiatras y psicólogos clínicos
  hispanohablantes sobre psicopatología, diagnóstico y tratamiento. Contenido
  técnico dirigido a estudiantes y profesionales.
- **Cuándo usarlo:** Psicopatología, diagnóstico clínico, farmacología psiquiátrica.
  Complementa el DSM-5 y el CIE-11 con casos y discusiones clínicas reales.

### 6. Dr. K (HealthyGamerGG)
- **URL:** youtube.com/@HealthyGamerGG
- **Idioma:** Inglés
- **Enfoque:** Psiquiatra de Harvard (Dr. Alok Kanojia) que explica psicología
  clínica, mecanismos de defensa, trauma y salud mental desde un enfoque que
  combina psicología occidental con filosofía oriental. Sus videos de "Deep Dive"
  duran 30-60 min y son académicamente sólidos.
- **Cuándo usarlo:** Psicología clínica, psicopatología, mecanismos de defensa.
  Sus explicaciones de la teoría del apego y el trauma son especialmente claras.

---

## Bases de datos y papers

### PubMed / PubMed Central
- **URL:** pubmed.ncbi.nlm.nih.gov
- **Qué es:** Base de datos gratuita del NIH con más de 36 millones de artículos
  de ciencias biomédicas y psicología. Los artículos en PMC son de acceso libre.
- **Cómo usarla:**
  1. Busca por términos MeSH para resultados precisos (ej: `depression[MeSH] AND CBT[MeSH]`)
  2. Filtra por "Free full text" en el panel izquierdo para ver solo accesibles
  3. Usa el filtro "Publication date: last 5 years" para investigación reciente
  4. Exporta la cita en formato APA directamente desde el botón "Cite"

### PsycINFO (vía APA)
- **URL:** Acceso a través de la biblioteca universitaria (credenciales de la UX/UV/UB etc.)
- **Qué es:** La base de datos de referencia en psicología. 5+ millones de registros
  de artículos, libros y tesis. Incluye resúmenes estructurados y clasificación por
  población, metodología y variables.
- **Cómo acceder sin institución:** Usa EZProxy si tu universidad lo tiene, o
  accede desde la biblioteca física. Alternativa: Google Scholar encuentra muchos
  de los mismos artículos gratis.

### Google Scholar
- **URL:** scholar.google.com
- **Cómo usarlo bien:**
  - Operadores útiles: `"apego seguro" author:Bowlby` o `intitle:metacognición`
  - Haz clic en "Cited by X" para encontrar artículos que citan un paper clave
    — así localizas investigación más reciente sobre el mismo tema
  - Activa las alertas: busca un tema → "Create alert" → recibe papers nuevos por email
  - El botón "All X versions" a veces tiene PDF libre cuando el enlace principal
    está detrás de paywall

### Redalyc
- **URL:** redalyc.org
- **Qué es:** Red de revistas científicas de América Latina y España, todas en
  acceso abierto. Más de 800 revistas de psicología en español.
- **Cuándo usarla:** Cuando necesitas bibliografía en español para trabajos, o
  cuando el enfoque latinoamericano de un tema es relevante (psicología comunitaria,
  modelos de salud mental en contextos hispanohablantes).

### Dialnet
- **URL:** dialnet.unirioja.es
- **Qué es:** Portal de revistas y tesis doctorales españolas. Gratuito con registro.
  Especialmente útil para encontrar TFGs y TFMs de psicología de universidades
  españolas — ver cómo se estructura un trabajo de investigación de tu nivel.
- **Cómo usarlo:** Regístrate gratis → activa "Alertas" por revista o palabra clave
  → recibe sumarios cada vez que se publica un número nuevo.

### Unpaywall (extensión de navegador)
- **URL:** unpaywall.org
- **Qué es:** Extensión para Chrome/Firefox que busca automáticamente versiones
  legales y gratuitas de cualquier artículo científico. Funciona en PubMed,
  Google Scholar y páginas de editores.
- **Cómo instalarlo:** unpaywall.org → "Get the extension" → se instala en 30 seg.
  Después, cada vez que estés en la página de un artículo, aparece un candado verde
  si hay versión libre disponible.

---

## Otras herramientas

### Anki — flashcards con repetición espaciada
- **Descarga:** apps.ankiweb.net (escritorio, gratuito) / AnkiMobile (iOS, de pago)
  / AnkiDroid (Android, gratuito)
- **Cómo usarlo con este repo:**
  1. Cada vez que estudias un tema, crea un mazo nuevo en Anki con el nombre
     de la unidad (ej: `01 - Psicología General`)
  2. Una tarjeta = un concepto. Frente: definición o pregunta. Reverso: explicación.
  3. Buenas tarjetas para psicología: "¿Qué distingue el condicionamiento operante
     del clásico?" → respuesta al dorso con ejemplo
  4. Descarga el mazo compartido "Psychology - Noba Project" en AnkiWeb (ankiweb.net/shared/decks/)
     — 2000+ tarjetas de psicología en inglés ya hechas
  5. Repasa 15-20 min/día. El algoritmo gestiona qué tarjetas necesitas repasar.

### Obsidian — notas enlazadas
- **Descarga:** obsidian.md (gratuito para uso personal)
- **Cómo usarlo:**
  1. Abre la carpeta de este repo como vault en Obsidian: File → Open folder as vault
  2. Cada archivo `.md` del repo es una nota. Obsidian renderiza los links entre
     archivos y genera un grafo de relaciones
  3. Para crear un link: escribe `[[nombre-del-archivo]]` — Obsidian autocompleta
  4. El grafo (Ctrl+G) muestra visualmente cómo se conectan los temas: útil para
     ver qué conceptos aparecen en múltiples asignaturas
  5. Plugin recomendado: "Dataview" — permite hacer queries sobre tus notas
     (ej: mostrar todos los archivos con tag `#pendiente`)

### Zotero — gestor de referencias
- **Descarga:** zotero.org (gratuito)
- **Para qué sirve:** Guarda artículos, libros y webs con su cita completa. Cuando
  escribes un trabajo, inserta las citas en APA/APA 7ª/Vancouver con un clic.
- **Flujo básico:**
  1. Instala Zotero + el conector de navegador (zotero.org/download/connectors)
  2. Cuando encuentres un paper en PubMed o Scholar, haz clic en el icono del
     conector → se guarda automáticamente con todos sus metadatos
  3. En Word o Google Docs: usa el plugin de Zotero para insertar citas mientras
     escribes → genera la bibliografía automáticamente al final

### Notion (o alternativa: este repo en Markdown)
- **URL:** notion.so
- **Para qué sirve:** Base de datos de seguimiento de lecturas, tracker de
  asignaturas, calendario de exámenes. Si prefieres no depender de un servicio
  externo, el sistema de archivos Markdown de este repo cumple la misma función
  con Obsidian.
- **Plantilla útil:** Crea una tabla con columnas: Tema | Estado | Fecha revisión |
  Vinculado a examen | Notas. Úsala como dashboard de estudio.

### Hemingway App — redacción académica
- **URL:** hemingwayapp.com (gratuito en web)
- **Para qué sirve:** Analiza la legibilidad de tus textos académicos. Señala
  frases demasiado largas, voz pasiva excesiva y palabras complicadas. Útil para
  revisar TFGs, ensayos y prácticas escritas antes de entregarlos.

### Connected Papers
- **URL:** connectedpapers.com (5 grafos gratis/mes)
- **Para qué sirve:** Dado un paper seminal, genera un grafo visual de todos los
  artículos relacionados por co-citación. Ideal para encontrar toda la literatura
  clave de un tema a partir de un solo artículo de referencia.
- **Cómo usarlo:** Busca un paper importante (ej: el artículo original de Bandura
  sobre autoeficacia) → Connected Papers muestra la constelación de investigación
  alrededor de él.
