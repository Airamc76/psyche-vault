# Lectura en voz alta (texto-a-voz)

## Contexto

Segundo de tres subproyectos derivados del pedido de convertir psyche-vault en
una plataforma de aprendizaje propia (ver
`2026-07-01-reposicionar-contenido-design.md` para el primero). El usuario
eligió, entre las interpretaciones posibles de "dictado por voz", que el sitio
lea en voz alta el contenido de las páginas (texto-a-voz), sin dictado por
micrófono.

## Alcance

Agregar un control de reproducción de voz a cada página del sitio, sin backend
ni API key: usa la Web Speech API nativa del navegador (`window.speechSynthesis`),
disponible sin configuración en Chrome, Edge, Firefox y Safari modernos.

## Diseño

- **Botón**: ícono de altavoz en la barra superior de Material for MkDocs,
  junto al buscador. Estados: reproducir → pausar → detener.
- **Implementación**: un archivo JS (`assets/js/tts.js`) agregado vía
  `extra_javascript` en `mkdocs.yml`. Se aplica automáticamente a todas las
  páginas sin tocar ningún `.md`.
- **Extracción de texto**: el contenido del contenedor principal de Material
  (`.md-content__inner`), ignorando sidebar/nav/tabla de contenidos.
- **Idioma**: intenta seleccionar una voz en español disponible en
  `speechSynthesis.getVoices()` (prioridad `es-ES` > `es-MX` > cualquier `es-*`);
  si no hay ninguna, usa la voz por defecto del navegador.
- **Controles**: solo reproducir/pausar/detener en esta primera versión. Sin
  selector de voz ni control de velocidad (se puede agregar después si hace falta).

## Fuera de alcance

- Modo de repaso auditivo específico para tarjetas Anki (leer Q, pausar,
  revelar A) — es una extensión natural del mismo mecanismo pero no fue
  elegida en esta ronda.
- Dictado por micrófono (voz-a-texto) — no fue elegido.
- Selector de voz/velocidad — se agrega después si se necesita.

## Criterio de éxito

- El botón aparece en todas las páginas del sitio (barra superior).
- Al hacer clic, se escucha el contenido principal de la página en español
  (si el navegador tiene voz en español disponible).
- No agrega ninguna dependencia nueva a `requirements.txt` ni backend.
- `mkdocs build --strict` sigue pasando limpio.
