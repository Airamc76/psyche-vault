# Chat con Groq para consultar/afinar contenido

## Contexto

Tercer y último subproyecto derivado del pedido de convertir psyche-vault en
una plataforma de aprendizaje propia (ver los specs de
`reposicionar-contenido` y `lectura-en-voz-alta`). El sitio es estático
(GitHub Pages, MkDocs Material, sin backend). Se verificó empíricamente que
la API de Groq (`api.groq.com`) permite llamadas `fetch()` directas desde el
navegador sin bloqueo CORS (una key inválida devolvió `401` en JSON, no un
error de CORS), lo que hace viable una arquitectura 100% client-side.

## Decisión de arquitectura (aprobada por el usuario)

**Client-side con key propia del usuario**, no proxy serverless:
- La API key de Groq **nunca vive en el código del repo ni en git**.
- El usuario la pega una vez en un panel de configuración del propio sitio.
- Se guarda únicamente en el `localStorage` del navegador del usuario.
- El navegador llama directo a `api.groq.com` usando esa key.

**Trade-off aceptado explícitamente:** cualquiera con acceso al navegador
(perfil logueado, devtools) podría leer la key de `localStorage`. Es un riesgo
razonable para una herramienta de estudio personal de un solo usuario; no lo
es para un producto multiusuario. Si el uso cambia en el futuro, migrar a un
proxy serverless es la vía más segura.

## Diseño

**Widget flotante**: botón circular fijo en la esquina inferior derecha,
visible en todas las páginas (mismo mecanismo que `static/js/tts.js`: un
archivo JS registrado vía `extra_javascript`, sin tocar ningún `.md`). Al
hacer clic, abre un panel de chat.

**Panel de configuración**: si no hay key guardada, el panel muestra un campo
para pegarla (con un link a `console.groq.com/keys` y una nota de que se
guarda solo en este navegador) y un campo de texto para el nombre del modelo
Groq a usar (con un valor por defecto razonable, editable por si Groq cambia
su catálogo de modelos).

**Contexto automático de la página**: al abrir el chat, se extrae el texto de
`.md-content__inner` (mismo selector que usa `tts.js`) y se envía como primer
mensaje de sistema: "El usuario está leyendo esta página de un repositorio de
estudio de psicología. Título: X. Contenido: Y. Ayudalo a entender el
material, responder sus preguntas o afinar su comprensión." El contenido se
trunca a un máximo de ~12.000 caracteres (los mazos Anki más largos pueden
superar esto; se envía solo el inicio, aceptado como límite conocido).

**Conversación**: lista de mensajes simple (usuario / asistente) + input de
texto + botón enviar. Sin persistencia entre recargas de página — cada sesión
de chat empieza de cero (mantiene la implementación simple; se puede agregar
persistencia en `localStorage` después si hace falta).

**Manejo de errores**: si la llamada a Groq falla (key inválida, rate limit,
red), se muestra el mensaje de error crudo de la API en el panel de chat, sin
reintentos automáticos ni lógica adicional.

## Fuera de alcance

- Proxy serverless / backend propio.
- Persistencia de historial de chat entre sesiones.
- Selección de modelo por UI avanzada (dropdown) — un campo de texto simple
  alcanza.
- Rate limiting o control de costos del lado del sitio (responsabilidad del
  usuario en su cuenta de Groq).

## Criterio de éxito

- Sin la key configurada, el panel pide pegarla y no rompe nada más del sitio.
- Con una key válida, se puede preguntar algo sobre la página actual y
  recibir una respuesta coherente con ese contenido.
- La key nunca aparece en ningún archivo del repo ni se commitea.
- `mkdocs build --strict` sigue pasando limpio.
- No se agrega ninguna dependencia Python nueva a `requirements.txt`.
