# Bases de datos y acceso a literatura cientifica

El acceso a papers no requiere ser estudiante universitario con suscripcion institucional. Esta guia cubre como encontrar literatura de forma gratuita y legal, como buscar eficientemente y como organizar lo que encontras.

---

## 1. Acceso gratuito legal

### PubMed y PubMed Central (PMC)

**PubMed** (pubmed.ncbi.nlm.nih.gov) es el indice bibliografico de referencia en ciencias de la salud y psicologia clinica. Indexa mas de 35 millones de articulos. La busqueda es gratuita para todos.

**PMC** (ncbi.nlm.nih.gov/pmc) es el repositorio de texto completo. Muchos articulos de PubMed tienen una version gratuita en PMC, especialmente estudios financiados por el NIH (politica de acceso abierto).

**Como usarlo:**
1. Buscar en PubMed
2. Si el articulo tiene acceso abierto, aparece el boton "Free PMC Article" o "Free full text"
3. Si no aparece, copiar el DOI y usar Unpaywall o Open Access Button (ver abajo)

---

### Google Scholar

**scholar.google.com** — Indice bibliografico multidisciplinario. No es tan preciso como PubMed para medicina, pero es mas amplio y a menudo tiene links directos a PDFs.

**Que hacer cuando aparece un resultado:**
1. Click en el titulo: va al abstract en la pagina de la revista (puede requerir suscripcion)
2. Click en los links a la derecha del resultado (suelen ser PDFs en repositorios institucionales o ResearchGate)
3. Buscar la version en PDF: muchos autores suben preprints o postprints de sus articulos

---

### SSRN — Social Science Research Network

**ssrn.com** — Repositorio de preprints y working papers en ciencias sociales, psicologia, economia, derecho. Muchos papers aparecen aqui antes de ser publicados en revista. Acceso gratuito.

---

### ResearchGate

**researchgate.net** — Red social academica donde los investigadores comparten sus publicaciones. Requiere registro (gratuito). Muchos autores suben el PDF completo de sus articulos. Si el PDF no esta disponible, podes hacer click en "Request full-text" y el autor recibe una notificacion.

---

### Open Access Button y Unpaywall

**Open Access Button** (openaccessbutton.org) y **Unpaywall** (unpaywall.org) son herramientas que buscan automaticamente versiones legales y gratuitas de cualquier articulo dado su DOI o URL.

**Unpaywall como extension del navegador:** Cuando visitas la pagina de un articulo en una revista, Unpaywall detecta automaticamente si hay una version gratuita disponible y muestra un boton verde o gris. Verde = hay version gratuita. Altamente recomendado instalar.

**Open Access Button:** Pega el DOI o el titulo del articulo y te da la version mas accessible legalmente disponible.

---

### PsycINFO

Base de datos especializada en psicologia de la APA. Suele requerir acceso institucional, pero muchas bibliotecas publicas lo ofrecen con tarjeta de biblioteca. Vale la pena verificar si tu biblioteca local tiene acceso.

**Alternativa gratuita con cobertura similar:** PubMed + Google Scholar cubre la mayoria de lo que ofrece PsycINFO para estudiantes autodidactas.

---

## 2. Como buscar eficientemente en PubMed

### Busqueda basica

Entrar terminos en la barra de busqueda. PubMed sugiere terminos MeSH automaticamente.

### Operadores booleanos

| Operador | Uso | Ejemplo |
|----------|-----|---------|
| AND | Todos los terminos deben estar | depression AND cognitive therapy |
| OR | Al menos uno de los terminos | anxiety OR fear |
| NOT | Excluir terminos | therapy NOT medication |

Los operadores van en MAYUSCULAS.

### MeSH Terms — Medical Subject Headings

MeSH es el vocabulario controlado de PubMed. Cada concepto tiene un termino MeSH oficial independientemente de como los autores lo llamen en el paper.

**Por que usarlos:** Si buscas "depression", podes perderte articulos que usan "major depressive disorder", "depressive symptoms" o "affective disorder". El termino MeSH "Depression" captura todos.

**Como usarlos:**
1. Ir a: pubmed.ncbi.nlm.nih.gov/mesh/
2. Buscar tu concepto
3. Hacer click en el termino MeSH y luego en "Add to search builder"
4. Copiar el termino formateado: "Depression"[MeSH Terms]

**Ejemplo de busqueda avanzada:**
```
"Cognitive Behavioral Therapy"[MeSH Terms] AND "Depression"[MeSH Terms] AND "Randomized Controlled Trial"[Publication Type]
```

### Filtros utiles en PubMed

En el panel izquierdo, despues de buscar:
- **Article type:** Randomized Controlled Trial, Systematic Review, Meta-Analysis
- **Publication date:** Ultimos 5, 10 anos
- **Full text:** Solo articulos con texto completo gratuito (Free full text)
- **Species:** Human (para excluir estudios en animales)
- **Age:** Para filtrar por rango de edad de la muestra

### Busqueda avanzada en PubMed

Ir a pubmed.ncbi.nlm.nih.gov/advanced/ permite construir busquedas complejas con interfaz grafica y luego ver la query generada.

---

## 3. Como buscar eficientemente en Google Scholar

### Operadores utiles

| Operador | Ejemplo | Efecto |
|----------|---------|--------|
| Comillas | "cognitive behavioral therapy" | Busca la frase exacta |
| author: | author:Seligman | Filtra por autor |
| intitle: | intitle:mindfulness | El termino debe estar en el titulo |
| site: | site:nih.gov | Buscar solo en un dominio |
| OR | depression OR anxiety | Al menos uno |
| - | therapy -medication | Excluir termino |

**Ejemplo:**
```
"self-compassion" depression meta-analysis 2015..2024
```
El rango de anos se escribe con dos puntos seguidos. Tambien se puede filtrar desde el panel lateral.

### Alertas en Google Scholar

Configura alertas para temas que te interesan:
1. Haz una busqueda
2. Scroll hasta el final → "Create alert"
3. Google te envia un email cuando hay nuevos resultados

Util para seguir literatura nueva en un tema especifico sin tener que buscar activamente.

### "Cited by" — lo mas poderoso de Google Scholar

Cuando encuentras un paper relevante, hacer click en "Cited by X" te muestra todos los papers que lo citan. Esto es la estrategia de bola de nieve hacia adelante.

---

## 4. Estrategia de bola de nieve

La bola de nieve es la forma mas eficiente de mapear la literatura de un tema. Tiene dos direcciones:

### Hacia atras (backward snowball)

A partir de un paper relevante, leer su lista de referencias para encontrar los articulos seminales y los mas citados del campo.

**Proceso:**
1. Encontrar un paper reciente y relevante (meta-analisis o revision son ideales)
2. Revisar su lista de referencias
3. Identificar los papers mas citados o los que parecen fundamentales
4. Leer esos papers, y repetir con sus referencias

**En cuantas iteraciones se llega al nucleo:** Normalmente en 2-3 rondas empezas a ver los mismos nombres y trabajos reaparecer. Eso indica que llegaste al nucleo del campo.

### Hacia adelante (forward snowball)

A partir de un paper seminal, buscar todos los que lo citan para ver como el campo se desarrollo despues.

**Con Google Scholar:** Hacer click en "Cited by" del paper seminal.
**Con Semantic Scholar** (semanticscholar.org): Muestra el grafo de citas con filtros por ano y relevancia. Gratuito y muy potente.

---

## 5. Como encontrar el paper seminal de un tema

El paper seminal es el trabajo que introdujo o definio un concepto, teoria o metodo. Citarlo correctamente muestra que conoces la fuente original, no solo los trabajos secundarios.

**Metodo 1: Bola de nieve hacia atras**
El paper mas citado al que convergen multiples fuentes al hacer varias rondas de bola de nieve suele ser el seminal.

**Metodo 2: Busqueda por numero de citas en Google Scholar**
Buscar el concepto + los autores clasicos del campo, ordenar por relevancia y ver cuales tienen mas citas en Google Scholar.

**Metodo 3: Revisar capitulos de manual (handbook)**
Los handbooks de un campo suelen tener capitulos historicos que identifican explicitamente los trabajos fundacionales.

**Metodo 4: Preguntar a un meta-analisis**
La introduccion de un buen meta-analisis reciente del tema suele mencionar los trabajos originales que iniciaron la linea de investigacion.

**Ejemplos de papers seminales en psicologia:**
- Autoeficacia: Bandura (1977) — *Psychological Review*
- Indefension aprendida: Seligman & Maier (1967) — *Journal of Experimental Psychology*
- Apego: Bowlby (1969) — *Attachment and Loss*
- Crisis de replicacion: Open Science Collaboration (2015) — *Science*
- Psicologia positiva: Seligman & Csikszentmihalyi (2000) — *American Psychologist*

---

## 6. Gestion de referencias: Zotero

**zotero.org** — Gratuito, open source, el estandar recomendado para investigacion autodidacta.

### Por que Zotero

- Importa referencias automaticamente desde PubMed, Google Scholar, DOI, ISBN
- Guarda el PDF adjunto
- Genera citas y listas de referencias en APA 7 (y 9000+ otros estilos) automaticamente
- Sincroniza entre dispositivos (300 MB gratis, ilimitado si guardas los PDFs externamente)
- Permite tomar notas dentro de cada referencia
- Funciona con Word, LibreOffice y tiene un plugin para Google Docs

### Configuracion basica recomendada

1. Instalar Zotero desktop desde zotero.org
2. Instalar la extension de navegador (Zotero Connector) — captura references directamente desde el browser
3. Crear carpetas por tema o por modulo de psyche-vault
4. Verificar que el estilo de cita este configurado en APA 7th Edition

### Flujo de trabajo con Zotero

```
Encontras un paper relevante en el browser
         ↓
Click en el boton de Zotero Connector
         ↓
Zotero importa automaticamente: titulo, autores, ano, DOI, revista
         ↓
Si hay PDF disponible, Zotero lo adjunta automaticamente
         ↓
Organizar en la carpeta del tema
         ↓
Tomar notas en la ficha de Zotero o en tu ficha-de-lectura.md
         ↓
Al escribir, citar con click-derecho → Copy Citation
```

### Alternativas a Zotero

| Herramienta | Ventaja | Desventaja |
|-------------|---------|------------|
| Mendeley | Interfaz visual, red social | Propiedad de Elsevier, privacidad cuestionable |
| EndNote | Muy potente | Caro, no gratuito |
| Paperpile | Excelente integracion Google Docs | De pago |
| Obsidian + Zotero | Control total del flujo | Requiere configuracion |

---

## Checklist de busqueda bibliografica

Antes de cerrar una busqueda como completa:

- [ ] Busque en PubMed con terminos MeSH
- [ ] Busque en Google Scholar
- [ ] Aplique bola de nieve hacia atras en al menos 2 papers relevantes
- [ ] Revise "Cited by" de los papers seminales identificados
- [ ] Configure alerta en Google Scholar para el tema
- [ ] Importe todas las referencias a Zotero con PDF adjunto
- [ ] Identifique el paper seminal del campo
- [ ] Identifique el meta-analisis mas reciente (si existe)
