# psyche-vault

Un repositorio personal de psicología autodidacta. No es un curso, no busca título.
Es un archivo vivo de conocimiento construido por curiosidad, al ritmo del dueño,
siguiendo el hilo de lo que realmente interesa.

## Filosofía

El conocimiento se construye como código:
- Cada módulo es como un feature branch: tiene un scope claro y entregables
- Los `conceptos.md` son como la documentación de una API: qué hace, por qué importa
- Las `preguntas.md` son como los tests: verifican que entendiste realmente
- `progreso.md` es el changelog personal
- Las `notas/` son commits de pensamiento: personales, imperfectas, honestas

## Cómo navegar

1. Arrancá por `curriculum.md` para ver el mapa completo
2. Leé el `README.md` de cada módulo antes de entrar
3. `lecturas.md` → leé la fuente primaria
4. `conceptos.md` → consolidá el conocimiento con tus palabras
5. `preguntas.md` → respondé sin mirar respuestas
6. `respuestas.md` → revisá honestamente
7. `notas/` → volcá todo lo que quedó dando vueltas

## Cómo usar con DeepTutor

[DeepTutor](https://github.com/HKUDS/DeepTutor) es la herramienta de estudio principal:

1. Descargá el PDF del libro del módulo actual
2. Cargalo en DeepTutor (modo RAG)
3. Pedile que genere un quiz sobre los conceptos del `conceptos.md`
4. Usá "Deep Research" para ampliar cualquier concepto que no quedó claro
5. Las respuestas del quiz las anotás en `notas/`

El flujo detallado está en `recursos/herramientas.md`.

## Estructura

```
psyche-vault/
├── README.md               ← estás aquí
├── curriculum.md           ← mapa completo de módulos
├── progreso.md             ← tu log personal de avance
├── CHANGELOG.md            ← historial real de cambios del repo
├── recursos/
│   ├── biblioteca.md       ← todos los libros anotados
│   ├── herramientas.md     ← DeepTutor, podcasts, canales
│   └── glosario.md         ← términos clave con definición propia
├── modulos/
│   ├── 00-orientacion/
│   ├── 01-historia-y-escuelas/
│   ├── 02-psicoanalisis/
│   ├── 03-conductismo-cognitivismo/
│   ├── 04-humanismo-existencial/
│   ├── 05-neurociencias/
│   ├── 06-psicologia-social/
│   ├── 07-desarrollo-humano/
│   ├── 08-psicopatologia/
│   ├── 09-evaluacion-y-diagnostico/
│   ├── 10-temas-propios/
│   ├── 11-metodologia-estadistica/
│   ├── 12-procesos-basicos/
│   ├── 13-psicologia-cognitiva/
│   ├── 14-personalidad/
│   ├── 15-etica-profesional/
│   ├── 16-psicologia-clinica/
│   ├── 17-psicobiologia/
│   ├── 18-psicofarmacologia/
│   ├── 19-psicologia-educacional/
│   ├── 20-psicologia-salud/
│   ├── 21-neuropsicologia-clinica/
│   └── 22-psicologia-organizacional/     (cada módulo: README, lecturas, conceptos, preguntas, respuestas)
├── anki/                   ← 22 mazos de flashcards, uno por módulo
├── examenes/               ← 4 parciales + final integrador + rúbrica
├── casos-clinicos/         ← 9 casos clínicos + guía de formulación
├── sintesis/               ← comparativas, línea de tiempo, mapa de módulos
└── investigacion/          ← cómo leer papers, guía APA 7, bases de datos
```

## Estado del proyecto

22/22 módulos completos, 22/22 mazos Anki. Ver `CHANGELOG.md` para el historial real de cambios,
y `progreso.md` para tu propio log personal de avance (lo llenás vos, a tu ritmo).

---
*Construido con curiosidad genuina, sin burocracia académica.*
