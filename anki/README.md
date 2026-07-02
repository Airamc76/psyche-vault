# Mazos Anki — Psyche Vault

## Formato de las tarjetas

Cada tarjeta es un bloque colapsable (`pymdownx.details`, tipo `question`):

```
??? question "Pregunta concreta, una sola idea"
    Respuesta directa, 1-3 oraciones máximo.
```

En el sitio se ve como una tarjeta clickeable: la pregunta está siempre visible,
la respuesta se revela al hacer clic — igual que estudiar con flashcards reales,
pero sin salir del navegador.

Una tarjeta por bloque, separadas por línea en blanco.

---

## Cómo repasarlas

Estos mazos ya no están pensados para importarse a la app de Anki: el
repositorio tiene su propio repasador con repetición espaciada en
[**Repasar**](../repaso.md), que lee las tarjetas directamente de estos
archivos. Solo hace falta abrir esa página y elegir el módulo — no requiere
instalar nada.

Si igual preferís usar Anki (la app real), podés copiar el texto de pregunta
y respuesta de cada tarjeta manualmente, ya que el formato de bloque colapsable
no es compatible con los importadores automáticos de Anki (a diferencia del
patrón `Q:`/`A:` plano que usaban estos archivos antes).

---

## Estructura de mazos

| Archivo | Mazo | Tarjetas |
|---|---|---|
| `01-historia.md` | Historia de la Psicología | 40 |
| `02-psicoanalisis.md` | Psicoanálisis | 40 |
| `03-conductismo-cognitivismo.md` | Conductismo y Cognitivismo | 37 |
| `04-humanismo-existencial.md` | Humanismo y Existencialismo | 36 |
| `05-neurociencias.md` | Neurociencias | 40 |
| `06-psicologia-social.md` | Psicología Social | 37 |
| `07-desarrollo-humano.md` | Desarrollo Humano | 39 |
| `08-psicopatologia.md` | Psicopatología | 40 |
| `09-evaluacion-y-diagnostico.md` | Evaluación y Diagnóstico | 44 |
| `10-temas-propios.md` | Temas Propios (marco metodológico) | 25 |
| `11-metodologia.md` | Metodología e Investigación | 40 |
| `12-procesos.md` | Procesos Psicológicos Básicos | 40 |
| `13-cognitiva.md` | Psicología Cognitiva | 35 |
| `14-personalidad.md` | Personalidad | 40 |
| `15-etica-profesional.md` | Ética Profesional | 41 |
| `16-psicologia-clinica.md` | Psicología Clínica | 41 |
| `17-psicobiologia.md` | Psicobiología | 40 |
| `18-psicofarmacologia.md` | Psicofarmacología | 44 |
| `19-psicologia-educacional.md` | Psicología Educacional | 43 |
| `20-psicologia-salud.md` | Psicología de la Salud | 42 |
| `21-neuropsicologia-clinica.md` | Neuropsicología Clínica | 45 |
| `22-psicologia-organizacional.md` | Psicología Organizacional | 43 |

Cobertura: 22/22 módulos (todos, incluyendo el 10, que usa el marco metodológico del módulo en vez de contenido factual).

---

## Convenciones de nomenclatura

Los nombres de archivo siguen el número de módulo del curriculum del proyecto (`curriculum.md`). Si se crean más mazos, seguir la misma numeración.

---

## Recomendaciones de estudio

- Estudia un mazo por semana como mínimo.
- Usa el intervalo de repetición espaciada predeterminado de Anki.
- Si fallas una tarjeta, no la memorices: busca la fuente en `/modulos/` y lee el contexto.
- Las tarjetas están diseñadas para probar comprensión, no recitación literal.
