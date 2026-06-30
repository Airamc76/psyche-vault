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
├── recursos/
│   ├── biblioteca.md       ← todos los libros anotados
│   ├── herramientas.md     ← DeepTutor, podcasts, canales
│   └── glosario.md         ← términos clave con definición propia
└── modulos/
    ├── 00-orientacion/
    ├── 01-historia-y-escuelas/
    ├── 02-psicoanalisis/
    ├── 03-conductismo-cognitivismo/
    ├── 04-humanismo-existencial/
    ├── 05-neurociencias/
    ├── 06-psicologia-social/
    ├── 07-desarrollo-humano/
    ├── 08-psicopatologia/
    ├── 09-evaluacion-y-diagnostico/
    └── 10-temas-propios/
```

## Estado del proyecto

Ver `progreso.md` para el avance actual.

---
*Construido con curiosidad genuina, sin burocracia académica.*
