# CHANGELOG — psyche-vault

## 2026-07-01 (2)

### [fix] — CI/CD roto y hallazgo de cadena de suministro en dependencia de MkDocs

- `requirements.txt`: `mkdocs-same-dir>=1.0` era una version imposible de satisfacer (el paquete solo llega a 0.1.5), rompía `pip install` en CI y bloqueaba el deploy a Pages
- Fijado a `==0.1.3`: las versiones 0.1.4/0.1.5 agregan una dependencia obligatoria a `properdocs`, un paquete no relacionado que imprime un aviso atribuyendo falsamente al equipo de Material for MkDocs una recomendación que no coincide con su posición real (recomiendan "Zensical", no "properdocs")
- `.github/workflows/deploy-docs.yml`: agrega `enablement: true` a `configure-pages@v5` (Pages nunca había sido habilitado en el repo)
- GitHub Pages en línea por primera vez: https://airamc76.github.io/psyche-vault/

### [fix] — Nav de Anki incompleto, README desactualizado, sidebar sobrecargado

- `mkdocs.yml`: agrega los 12 mazos Anki nuevos al nav (estaban invisibles en el sitio y fuera del índice de búsqueda pese a estar construidos), agrega `CHANGELOG.md` al nav
- Quita `navigation.sections` (causa real del sidebar con los 22 módulos expandidos simultáneamente — `navigation.expand` no era la causa, se corrigió en un segundo intento tras verificar visualmente)
- `README.md`: árbol de directorios actualizado (llegaba solo al módulo 10), sección "Estado del proyecto" ya no es un dead-end a `progreso.md` vacío

### [feat] — Reposicionar el repo: quitar DeepTutor como método central

- `README.md`, módulo 00 (README/conceptos/lecturas), módulo 01 lecturas.md: toda mención a DeepTutor reemplazada por el flujo propio del repo (lecturas → conceptos → preguntas → respuestas → Anki → notas)
- `recursos/herramientas.md`: elimina 5 secciones completamente duplicadas (DeepTutor, Podcasts, YouTube, Bases de datos, Otras herramientas) sin perder recursos únicos de ninguna copia
- Corrige referencia rota a `lectura-obligatoria.md` (archivo inexistente) en conceptos.md del módulo 00
- Specs de diseño en `docs/superpowers/specs/`

### [feat] — Lectura en voz alta y chat con Groq

- `static/js/tts.js`: botón de altavoz en la barra superior, lee el contenido de la página con la Web Speech API nativa del navegador (sin backend, sin API key)
- `static/js/chat.js`: widget de chat flotante con contexto automático de la página actual, usando la API de Groq. Arquitectura 100% client-side: la API key del usuario se guarda solo en `localStorage` de su navegador, nunca en el repo. Verificado que `api.groq.com` permite `fetch()` directo sin bloqueo CORS
- Por qué: pedido explícito de convertir el repo en una plataforma de estudio propia, no solo una guía de texto

## 2026-07-01

### [feat] — Completar mazos Anki para los 12 módulos que faltaban

- Creados `anki/03-conductismo-cognitivismo.md`, `04-humanismo-existencial.md`, `06-psicologia-social.md`, `07-desarrollo-humano.md`, `09-evaluacion-y-diagnostico.md`, `10-temas-propios.md`, `15-etica-profesional.md`, `18-psicofarmacologia.md`, `19-psicologia-educacional.md`, `20-psicologia-salud.md`, `21-neuropsicologia-clinica.md`, `22-psicologia-organizacional.md`
- Cada mazo extraído directamente de `conceptos.md`/`respuestas.md` del módulo correspondiente (no contenido inventado), 36-45 tarjetas por mazo salvo el módulo 10 (25 tarjetas, es un marco metodológico, no contenido factual)
- Cobertura de Anki pasa de 10/22 a 22/22 módulos
- `anki/README.md`: tabla de mazos actualizada con los 12 nuevos archivos y nota de cobertura completa
- Por qué: al revisar qué quedó sin implementar de la sesión del 2026-06-30, se detectó que el "polish" de esa fecha solo corrigió la tabla de mazos existente pero no generó los mazos faltantes para 12 de los 22 módulos

## 2026-06-30

### [feat] — Completar a nivel universitario completo (todas las fases)

- **Módulos nuevos creados** (5 archivos c/u: README, lecturas, conceptos, preguntas, respuestas):
  - `17-psicobiologia` — SNA, eje HPA, estrés, psiconeuroendocrinología, genética de la conducta, epigenética, sueño, psicología evolutiva
  - `18-psicofarmacologia` — farmacocinética/dinámica, ISRS/IRSN/ADT/IMAO, benzodiacepinas, antipsicóticos típicos y atípicos, estabilizadores del ánimo, psicofármacos vs psicoterapia
  - `19-psicologia-educacional` — ZDP de Vygotsky, mito VAK, motivación académica, mentalidad de crecimiento (Dweck), autoeficacia (Bandura), meta-análisis de Hattie
  - `20-psicologia-salud` — modelo biopsicosocial (Engel), conductas de salud, psiconeuroinmunología, afrontamiento (Lazarus), dolor crónico, MBSR
  - `21-neuropsicologia-clinica` — funciones ejecutivas, síndromes frontales, afasia, amnesia (caso H.M.), agnosias, heminegligencia, TCE, ACV, demencias
  - `22-psicologia-organizacional` — motivación laboral, liderazgo transformacional, satisfacción laboral, burnout (Maslach), clima/cultura, selección de personal
- **Módulos reparados**:
  - `08-psicopatologia/conceptos.md` — reescrito completo (estaba vacío): 11 conceptos académicos sobre trastorno mental, modelos explicativos, DSM vs CIE, depresión, ansiedad, TOC, TEPT, psicosis, trastornos de personalidad, críticas al diagnóstico, psicopatología del desarrollo
  - `09-evaluacion-y-diagnostico/conceptos.md` — escrito completo: evaluación psicológica, TCT, TRI, tipos de tests, MMPI, Wechsler, entrevista clínica, informe psicológico, evaluación neuropsicológica
- **Módulos upgrades**:
  - `03-conductismo-cognitivismo` — papers seminales (Watson, Skinner, Bandura 1977, Beck, Tversky & Kahneman, Seligman) + 5 preguntas críticas
  - `04-humanismo-existencial` — papers (Maslow 1943, Rogers 1957, Frankl, Deci & Ryan, Seligman, Yalom) + 5 preguntas críticas
  - `11-metodologia-estadistica` — sección nueva: investigación cualitativa (análisis temático, grounded theory, IPA, rigor cualitativo) + estadística avanzada (regresión múltiple, logística, análisis factorial, AFC, SEM, meta-análisis) + 8 preguntas nuevas
- **Glosario**: expandido de 35 → 101 términos en 7 áreas (metodología, neurociencia, procesos cognitivos, psicopatología/clínica, psicofarmacología, psicología social/organizacional)
- Archivos modificados: 39 archivos, +4460 líneas

---

## 2026-06-30 (2)

### [docs] — Mapa transversal de conexiones entre los 22 modulos

- Creado `sintesis/mapa-modulos.md` con:
  - Diagrama ASCII de dependencias y flujos entre todos los modulos
  - Conexiones por concepto transversal (apego, regulacion emocional, naturaleza-crianza, evidencia empirica)
  - Tabla de prerequisitos recomendados para modulos avanzados
  - Tabla de pares de modulos complementarios
  - Tabla de 20 autores canonicos con modulo central y apariciones secundarias
- Archivos creados: `sintesis/mapa-modulos.md`

---

## 2026-06-29

### [feat] — Upgrade a nivel universitario — 6 módulos académicos nuevos

- Módulos 11-16 creados completos: metodología/estadística, procesos básicos, psicología cognitiva, personalidad, ética profesional, psicología clínica
- Módulos 02, 05, 06, 07 con papers seminales y preguntas críticas añadidas
- Archivos: 42 archivos, +4120 líneas

### [feat] — Estructura base del repositorio

- Estructura inicial: README, curriculum (16 módulos), progreso, .gitignore
- recursos/: biblioteca, glosario (35 términos), herramientas
- Módulos 00-10: estructura completa con contenido académico
