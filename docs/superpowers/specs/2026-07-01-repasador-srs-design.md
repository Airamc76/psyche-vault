# Repasador con repetición espaciada (reemplazo de Anki)

## Contexto

El usuario tiene 22 mazos en `anki/*.md` (900+ tarjetas) pensados para Anki,
pero nunca instaló la app y no quiere depender de nada externo al sitio.
AnkiWeb (la versión web oficial de Anki) requiere el cliente nativo al menos
una vez para sincronizar mazos — no cumple el requisito de "todo en la web,
nada externo". Se decidió construir un repasador propio dentro del sitio,
reusando el contenido ya escrito en `anki/*.md` como fuente de datos, sin
reescribirlo ni duplicarlo.

Primero de cuatro subproyectos en esta ronda (los otros: dashboard de
progreso, modo de práctica activa con corrección por chat, quiz on-demand).

## Decisiones aprobadas

- Todo en la web, sin apps externas.
- Algoritmo de repetición simple: doblar el intervalo en días si acertaste
  (1 → 2 → 4 → 8 → 16...), resetear a 1 día si fallaste. No se implementa
  SM-2 completo ni factores de facilidad por tarjeta.

## Diseño

**Página nueva**: `repaso.md` en la raíz, agregada al nav como "Repasar".
Contiene un contenedor vacío que `static/js/repaso.js` puebla dinámicamente
(mismo patrón que `tts.js`/`chat.js`: un script que se activa solo, sin
tocar el resto de los `.md`).

**Fuente de datos**: los mazos ya están construidos como páginas HTML en
`/anki/<slug>/`. El script hace `fetch()` de la página HTML del mazo elegido,
parsea los `<p>` dentro de `.md-content__inner` buscando el patrón
`Q: ... A: ...` (el mismo formato de texto plano usado en todos los mazos),
y separa cada tarjeta en pregunta/respuesta. No se duplica contenido: se lee
directamente de lo que ya existe.

**Identidad de tarjeta**: como las tarjetas no tienen ID explícito, se genera
uno estable con un hash simple del texto de la pregunta + slug del módulo.
Colisiones son estadísticamente irrelevantes para unos cientos de tarjetas.

**Flujo de repaso**:
1. Selector de los 22 módulos (lista estática, sin conteos en vivo para no
   tener que traer los 22 mazos de entrada).
2. Al elegir uno, se trae y parsea ese mazo, se filtran las tarjetas
   pendientes de repaso hoy (o todas si es la primera vez).
3. Por tarjeta: se muestra la pregunta, botón "Mostrar respuesta", luego
   dos botones — "No me acordé" (intervalo vuelve a 1 día) / "Sí, me
   acordé" (intervalo se duplica).
4. Estado persistido en `localStorage`: `{ intervalDays, dueDate }` por
   tarjeta.

## Fuera de alcance

- Algoritmo SM-2/FSRS completo.
- Sincronización entre dispositivos (mismo trade-off que la key de Groq:
  vive solo en el navegador usado).
- Conteos en vivo de tarjetas pendientes en el selector inicial (se agrega
  si hace falta después).
- Edición de tarjetas desde el repasador (las tarjetas se editan en los
  `.md` como siempre).

## Criterio de éxito

- Se puede elegir un módulo, ver una tarjeta real de ese mazo (no
  inventada), calificarla, y que la próxima vez que se repase ese módulo
  la tarjeta calificada como "sabida" no vuelva a aparecer hasta que pase
  el intervalo correspondiente.
- Sin dependencias nuevas, sin backend, sin tocar los archivos `anki/*.md`.
- `mkdocs build --strict` sigue pasando limpio.
