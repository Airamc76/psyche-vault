# Conceptos — Módulo 09: Evaluación y Diagnóstico

---

## 1. Qué es la evaluación psicológica

La **evaluación psicológica** es un proceso sistemático y científico de recogida y análisis de información sobre una persona con el objetivo de describir, comprender, predecir o modificar su comportamiento. Conviene distinguirla de términos afines que a veces se usan de forma imprecisa:

- **Evaluación** (psychological assessment): proceso amplio que abarca todo el ciclo de recogida de información, análisis e integración de datos procedentes de múltiples fuentes (entrevistas, tests, observación, historial).
- **Diagnóstico**: acto de clasificar o etiquetar un conjunto de síntomas dentro de un sistema nosológico (DSM-5, CIE-11). Es un producto posible de la evaluación, no la evaluación en sí.
- **Assessment**: término anglosajón que suele usarse como sinónimo de evaluación en sentido amplio; en contextos más técnicos, puede referirse específicamente al uso de instrumentos estandarizados.

### El proceso completo

1. **Demanda y análisis de la solicitud**: ¿quién pide la evaluación y para qué? El contexto (clínico, forense, laboral, educativo) determina el objetivo y los instrumentos.
2. **Recogida de información inicial**: historia clínica, entrevistas, documentación previa.
3. **Formulación de hipótesis**: hipótesis descriptivas, explicativas y predictivas que guiarán la selección de instrumentos.
4. **Selección de instrumentos**: elegir los tests adecuados al constructo a medir, a la población y a las hipótesis planteadas.
5. **Aplicación**: administración bajo condiciones estandarizadas para garantizar la validez de las puntuaciones.
6. **Corrección e interpretación**: transformar puntuaciones brutas en puntuaciones normativas y elaborar un perfil integrado.
7. **Elaboración del informe**: documento escrito que integra los resultados con el resto de información clínica.
8. **Devolución**: comunicar los hallazgos al evaluado y/o a los destinatarios relevantes de forma comprensible y ética.

---

## 2. Propiedades psicométricas

Las propiedades psicométricas definen en qué medida un instrumento mide lo que dice medir (validez) y con qué consistencia lo hace (confiabilidad).

### Validez

La **validez** es el grado en que un instrumento mide el constructo que pretende medir. No es una propiedad del test en sí, sino de las inferencias que se hacen a partir de sus puntuaciones.

- **Validez de contenido**: ¿los ítems representan adecuadamente el dominio del constructo? Se evalúa mediante juicio experto y puede cuantificarse con índices como el CVR de Lawshe.
- **Validez de criterio**: ¿las puntuaciones predicen o se relacionan con un criterio externo relevante?
  - *Concurrente*: la medición del test y el criterio se recogen simultáneamente.
  - *Predictiva*: el criterio se mide en el futuro (p. ej., rendimiento académico posterior).
- **Validez de constructo**: ¿las puntuaciones se comportan de forma teóricamente coherente? Se evalúa con análisis factorial, estudios de grupos contrastados (grupos conocidos), correlaciones convergentes y discriminantes (matriz multimétodo-multirrasgo).

### Confiabilidad

La **confiabilidad** (o fiabilidad) es la consistencia o estabilidad de las puntuaciones. Hay distintas formas de estimarla:

- **Test-retest**: correlación entre dos administraciones del mismo test separadas por un intervalo temporal. Sensible a cambios reales del atributo.
- **Consistencia interna**: grado en que los ítems de un test miden lo mismo; el índice más común es el alfa de Cronbach (α ≥ 0,70 se considera aceptable).
- **Confiabilidad interjueces (o interobservadores)**: acuerdo entre dos o más evaluadores que puntúan la misma respuesta; se cuantifica con el índice kappa de Cohen o el coeficiente de concordancia intraclase.

### Estandarización y normas

La **estandarización** implica procedimientos uniformes de aplicación, corrección e interpretación. Las **normas** son tablas que permiten transformar puntuaciones brutas en puntuaciones derivadas (percentiles, puntuaciones T, puntuaciones estándar con M=100, SD=15) referidas a una muestra representativa.

### ¿Puede un test ser válido sin ser confiable, y viceversa?

- Un test **con baja confiabilidad no puede ser válido**: si las puntuaciones fluctúan aleatoriamente, no pueden medir ningún constructo de forma sistemática. La confiabilidad es condición necesaria pero no suficiente para la validez.
- Un test **confiable puede no ser válido**: puede medir algo de forma consistente pero ese algo no ser el constructo de interés (p. ej., un test muy confiable de vocabulario aplicado como medida de inteligencia fluida tiene validez cuestionable para ese fin).

---

## 3. Teoría Clásica de los Tests (TCT)

La **Teoría Clásica de los Tests** (TCT), formulada por Spearman a principios del siglo XX y sistematizada por Gulliksen (1950) y Lord y Novick (1968), constituye el marco psicométrico tradicional.

### El modelo de la puntuación verdadera

El axioma central de la TCT es:

> **X = V + E**

Donde:
- **X** = puntuación observada (lo que el test registra)
- **V** = puntuación verdadera (el nivel real del atributo latente)
- **E** = error de medición aleatorio (con media 0, sin correlación con V ni con sí mismo en mediciones repetidas)

### Error estándar de medición (SEM)

El **error estándar de medición** cuantifica cuánto varía, en promedio, la puntuación observada respecto a la puntuación verdadera:

> SEM = DS × √(1 − rxx)

Donde DS es la desviación estándar de la distribución de puntuaciones y rxx es la confiabilidad del test. Se usa para construir intervalos de confianza alrededor de la puntuación observada.

### Limitaciones de la TCT

La TCT presenta limitaciones importantes:

1. **Dependencia de la muestra**: los parámetros del ítem (dificultad, discriminación) varían según la muestra en que se calcularon; un ítem "difícil" en una muestra puede ser "fácil" en otra.
2. **Dependencia del test**: la puntuación verdadera de una persona solo tiene sentido en relación con el test administrado; no es posible comparar personas evaluadas con tests distintos sin equiparación.
3. **La confiabilidad y la información no se localizan**: el SEM se aplica igual a toda la escala, aunque el test puede medir con distinta precisión en distintos niveles del atributo.

---

## 4. Teoría de Respuesta al Ítem (TRI)

La **Teoría de Respuesta al Ítem** (TRI; también llamada IRT por sus siglas en inglés) surgió para superar las limitaciones de la TCT. Sus fundamentos modernos se deben a Rasch, Lord y Birnbaum.

### Qué resuelve la TRI

- Las propiedades de los ítems (dificultad, discriminación) son **invariantes respecto a la muestra** (dentro de los límites del modelo).
- La habilidad del sujeto es **invariante respecto al test**: personas evaluadas con distintos subconjuntos de ítems pueden compararse en la misma escala (theta, θ).
- Permite calcular la **información del ítem** en cada nivel de habilidad, optimizando la selección de ítems.

### La curva característica del ítem (CCI)

La CCI describe la probabilidad de responder correctamente a un ítem en función del nivel de habilidad θ. Tiene forma de S (sigmoide). Los modelos más comunes son:

- **Modelo 1PL (Rasch)**: solo parámetro de dificultad (b). Asume discriminación igual para todos los ítems.
- **Modelo 2PL**: parámetros de dificultad (b) y discriminación (a).
- **Modelo 3PL**: añade el parámetro de pseudo-azar (c), que estima la probabilidad de acertar por azar.

### Parámetros del ítem

| Parámetro | Símbolo | Descripción |
|---|---|---|
| Dificultad | b | Nivel de θ en que la probabilidad de acierto es 0,50 (en el modelo 1PL/2PL) |
| Discriminación | a | Pendiente de la CCI; mayor a → el ítem distingue mejor entre niveles de habilidad |
| Pseudo-azar | c | Probabilidad de acertar por azar (relevante en tests de elección múltiple) |

### Test Adaptativo Informatizado (CAT)

El **CAT** (Computerized Adaptive Test) aplica ítems seleccionados en tiempo real según la estimación actualizada de θ del sujeto. Solo se administran los ítems más informativos para cada nivel, reduciendo el número de ítems necesarios y aumentando la precisión. Aplicaciones: GRE, exámenes de licencias profesionales, pruebas clínicas adaptativas.

---

## 5. Tipos de tests psicológicos

### Tests objetivos

Los **tests objetivos** tienen claves de corrección inequívocas; la subjetividad del evaluador no influye en la puntuación.

- **Autoinforme**: el sujeto responde sobre sí mismo (p. ej., MMPI-2, BDI-II). Ventaja: económicos, pueden administrarse en grupo. Limitación: susceptibles a sesgo de respuesta (deseabilidad social, simulación).
- **Tests de ejecución máxima (o rendimiento)**: miden el mejor desempeño posible del sujeto (tests de inteligencia, aptitudes, rendimiento neuropsicológico). No hay respuesta "falsa" intencionada; el sujeto debe esforzarse al máximo.

### Tests proyectivos

Los **tests proyectivos** presentan estímulos ambiguos para que el sujeto los interprete; se asume que al hacerlo proyecta aspectos de su personalidad, conflictos y motivaciones inconscientes.

- **Rorschach**: láminas de manchas de tinta. El Sistema Comprehensivo (Exner) y el Rorschach Performance Assessment System (R-PAS) proporcionan sistemas de corrección estandarizados.
- **TAT (Test de Apercepción Temática)**: láminas con escenas ambiguas; el sujeto construye una historia.
- **HTP (House-Tree-Person)**: dibujo proyectivo; el sujeto dibuja una casa, un árbol y una persona.

### Debate sobre la validez de los proyectivos

La evidencia meta-analítica (Lilienfeld et al., 2000; Wood et al.) señala que la mayoría de las variables del Rorschach tienen validez incremental limitada sobre los autoinformes. El R-PAS y el uso de índices específicos (p. ej., índice de pensamiento inusual) tienen respaldo empírico más sólido. El TAT y el HTP presentan la evidencia más débil. El debate sigue abierto y la postura científica es de escepticismo cauteloso.

### Escalas de observación

Registran conductas observables directamente o a través de un informante (padres, docentes). Son especialmente útiles en población infantil (p. ej., BASC-3, CBCL).

---

## 6. Instrumentos de evaluación de personalidad

### MMPI-2 / MMPI-3

El **MMPI-2** (Minnesota Multiphasic Personality Inventory-2; Butcher et al., 1989) es el test de personalidad más investigado del mundo. El **MMPI-3** (Ben-Porath & Tellegen, 2020) es la versión actualizada con 335 ítems, escalas reestructuradas y normas contemporáneas.

**Escalas de validez del MMPI-2** (y equivalentes en MMPI-3):

| Escala | Qué mide |
|---|---|
| VRIN (Variable Response Inconsistency) | Inconsistencia aleatoria de respuestas; si es elevada, el protocolo es inválido independientemente del contenido |
| TRIN (True Response Inconsistency) | Tendencia a responder "verdadero" o "falso" indiscriminadamente (aquiescencia o negación) |
| F (Infrecuencia) | Ítems raros en la población normativa; elevación sugiere exageración de síntomas (sobresimulación) o respuesta al azar |
| Fb (Infrecuencia en la segunda parte) | Similar a F pero para la segunda mitad del cuestionario |
| Fp (Infrecuencia psiquiátrica) | Ítems infrecuentes incluso en pacientes psiquiátricos; elevación alta sugiere simulación de trastorno grave |
| L (Mentira) | Virtudes poco comunes; elevación sugiere presentación excesivamente favorable (deseabilidad social ingenua) |
| K (Corrección) | Defensividad más sofisticada; también se usa como factor de corrección en algunas escalas clínicas |
| S (Superlativa) | Presentación muy positiva; más sensible que L a la defensividad sofisticada |

### NEO-PI-R / NEO-PI-3

Mide los cinco grandes factores de personalidad (Neuroticismo, Extraversión, Apertura, Amabilidad, Responsabilidad) y sus 30 facetas. No tiene escalas de validez, por lo que es más vulnerable al sesgo de respuesta.

### PAI (Personality Assessment Inventory)

344 ítems, 22 escalas. Incluye escalas de inconsistencia, infrecuencia, impresión negativa e impresión positiva. Bien validado en contextos forenses y clínicos.

### MCMI-IV (Millon Clinical Multiaxial Inventory-IV)

195 ítems. Diseñado específicamente para evaluar trastornos de personalidad (vinculados a la teoría de Millon) y síndromes clínicos. Utiliza tasas base (prevalencia esperada) en lugar de puntuaciones T estándar.

---

## 7. Evaluación de inteligencia

### Las escalas Wechsler

Las escalas Wechsler son los instrumentos de evaluación de inteligencia más utilizados en contextos clínicos:

- **WAIS-IV** (Wechsler Adult Intelligence Scale, 4.ª ed.): para adultos de 16 a 90 años. Mide 4 índices: Comprensión Verbal (ICV), Razonamiento Perceptivo (IRP), Memoria de Trabajo (IMT) e Índice de Velocidad de Procesamiento (IVP), además del CI Total.
- **WISC-V** (Wechsler Intelligence Scale for Children, 5.ª ed.): para niños de 6 a 16 años. Añade el Índice de Razonamiento Fluido y el Índice Cuantitativo.
- **WPPSI-IV**: para preescolares de 2,5 a 7 años.

### El cociente intelectual (CI) y su interpretación

El CI es una **puntuación estándar** con media 100 y desviación típica 15:

| Rango CI | Clasificación descriptiva |
|---|---|
| ≥ 130 | Muy superior |
| 120–129 | Superior |
| 110–119 | Alto promedio |
| 90–109 | Promedio |
| 80–89 | Bajo promedio |
| 70–79 | Limítrofe |
| ≤ 69 | Discapacidad intelectual (requiere evaluación adicional) |

### El perfil de subescalas

El CI Total es útil como resumen, pero el **perfil de subescalas** proporciona información clínicamente rica:

- Discrepancias significativas entre índices (p. ej., ICV >> IVP) sugieren perfiles diferenciados (superdotación asincrónica, TDAH, dislexia).
- En neuropsicología, las fluctuaciones entre subtests permiten identificar fortalezas y debilidades cognitivas.
- La interpretación debe hacerse siempre en contexto: variabilidad entre índices es la norma, no la excepción.

### Qué mide y qué no mide el CI

El CI predice razonablemente bien el rendimiento académico y laboral en promedio poblacional. Sin embargo, **no mide**:

- Inteligencia emocional o social
- Creatividad
- Motivación, esfuerzo o resiliencia
- Conocimiento práctico o "sabiduría"
- Habilidades específicas de dominio no evaluadas por la batería

---

## 8. Entrevista clínica

La entrevista clínica es el instrumento más universal de la evaluación psicológica. Permite recoger información que ningún test estandarizado puede capturar: historia de vida, contexto, significados subjetivos y la observación directa del comportamiento.

### Tipos de entrevista según su estructura

| Tipo | Características | Ventajas | Limitaciones |
|---|---|---|---|
| **Estructurada** | Preguntas fijas, orden predeterminado | Alta confiabilidad, comparabilidad | Poca flexibilidad, puede sentirse artificial |
| **Semiestructurada** | Guión con preguntas nucleares y libertad para explorar | Equilibrio entre rigor y flexibilidad | Requiere más formación del entrevistador |
| **No estructurada (libre)** | El entrevistador decide sobre la marcha | Permite seguir el flujo del paciente | Baja confiabilidad, difícil de comparar |

### Entrevistas diagnósticas estandarizadas

- **SCID-5** (Structured Clinical Interview for DSM-5): entrevista semiestructurada de referencia para diagnóstico de trastornos del Eje I según el DSM-5. Hay versiones para pacientes (SCID-5-CV, clínica), para investigación (SCID-5-RV) y para trastornos de personalidad (SCID-5-PD).
- **MINI** (Mini-International Neuropsychiatric Interview): entrevista estructurada breve (15-30 min) para los trastornos más prevalentes. Ampliamente usada en ensayos clínicos.
- **ADIS-5** (Anxiety and Related Disorders Interview Schedule): especializada en trastornos de ansiedad, obsesivo-compulsivo, trauma y somáticos.

### Habilidades fundamentales

- **Escucha activa**: reflejos, paráfrasis, validación emocional, contacto visual adecuado y gestión del silencio.
- **Formulación de preguntas**: preguntas abiertas para explorar ("¿cómo se siente cuando...?"), preguntas cerradas para confirmar datos ("¿esto ocurrió antes de los 18 años?"), preguntas de embudo (de lo general a lo específico).
- **Evitar**: preguntas sugestivas, dobles preguntas, lenguaje demasiado técnico, y el cierre prematuro de hipótesis.

---

## 9. El informe psicológico

El informe psicológico es el documento que integra y comunica los resultados de la evaluación. Es un producto ético y legal: debe ser preciso, confidencial y comprensible para su destinatario.

### Estructura estándar

1. **Datos de identificación**: nombre (o iniciales), fecha de nacimiento, edad, fecha/s de evaluación, nombre del evaluador y número de colegiado, motivo de derivación.
2. **Motivo de consulta**: demanda en palabras del propio evaluado o del derivante; distinguir el motivo manifiesto del motivo latente cuando difieren.
3. **Antecedentes relevantes**: historia clínica y psiquiátrica, historia del desarrollo (en infancia), contexto familiar y social, historia laboral/educativa, tratamientos previos.
4. **Procedimiento de evaluación**: instrumentos administrados, número de sesiones, condiciones de administración, limitaciones del proceso (p. ej., esfuerzo inconsistente, barrera idiomática).
5. **Resultados**: presentar los hallazgos por área o constructo evaluado (no instrumento por instrumento). Incluir puntuaciones relevantes con su interpretación.
6. **Conclusiones / Diagnóstico**: síntesis integradora; diagnóstico diferencial cuando proceda; juicio clínico sobre el nivel de funcionamiento.
7. **Recomendaciones**: orientaciones para el tratamiento, derivaciones, acomodaciones educativas o laborales, seguimiento.

### Lenguaje técnico vs. comprensible

El nivel de tecnicismo debe adaptarse al destinatario:
- Para otro profesional de salud mental: terminología técnica es apropiada.
- Para el propio evaluado o su familia: lenguaje claro, sin jerga, con ejemplos concretos.
- Para un tribunal o aseguradora: lenguaje preciso con referencia a los estándares aplicados.

Un error frecuente es reportar puntuaciones sin interpretarlas ("obtuvo una puntuación T de 78 en la escala X") sin explicar qué significa clínicamente.

---

## 10. Evaluación neuropsicológica básica

La **neuropsicología clínica** evalúa el funcionamiento cognitivo y conductual derivado del sistema nervioso central, ya sea para detectar deterioro, caracterizar el perfil de una lesión o monitorizar la rehabilitación.

### Qué evalúa

| Dominio | Descripción |
|---|---|
| **Funciones ejecutivas** | Planificación, inhibición, flexibilidad cognitiva, memoria de trabajo, monitorización |
| **Memoria** | Codificación, consolidación, recuperación; memoria episódica, semántica, de trabajo, procedimental |
| **Atención** | Atención sostenida, selectiva, dividida y alternante |
| **Lenguaje** | Fluencia verbal, denominación, comprensión, repetición, lectura y escritura |
| **Praxias** | Capacidad de ejecutar movimientos aprendidos ante una consigna (apraxia ideomotora, constructiva) |
| **Gnosias** | Reconocimiento perceptivo de estímulos: prosopognosia, agnosia visual, etc. |

### Instrumentos comunes

- **MMSE** (Mini-Mental State Examination): cribado rápido (≤ 10 min); sensible a deterioro moderado-grave, poco sensible a deterioro leve. Punt. máx. 30; < 24 sugiere deterioro.
- **MoCA** (Montreal Cognitive Assessment): cribado de deterioro leve; mayor sensibilidad que el MMSE para DCL. Punt. máx. 30; < 26 sugiere deterioro leve (con ajuste por educación).
- **Trail Making Test (TMT)**: Parte A mide atención y velocidad visomotora; Parte B evalúa flexibilidad cognitiva (alternancia). La ratio B/A es un índice de control ejecutivo.
- **Test de Stroop**: mide inhibición de respuesta dominante (interferencia). Tres fases: lectura de palabras, denominación de colores, e interferencia palabra-color.
- **WCST** (Wisconsin Card Sorting Test): evalúa formación de conceptos, flexibilidad cognitiva y perseveración; clásicamente asociado a disfunción prefrontal.
- **Digit Span** (dígitos en orden directo e inverso): memoria de trabajo verbal.
- **Rey AVLT / CVLT**: aprendizaje y memoria verbal episódica con curva de aprendizaje, recuperación diferida y reconocimiento.
- **Figura Compleja de Rey (ROCF)**: memoria visual episódica y organización visoespacial.

### Diferencias con la evaluación clínica estándar

| Aspecto | Evaluación clínica estándar | Evaluación neuropsicológica |
|---|---|---|
| Foco | Psicopatología, personalidad | Funciones cognitivas y su substrato neural |
| Instrumentos | Tests de personalidad, entrevista diagnóstica | Baterías de rendimiento cognitivo |
| Marco teórico | Psicopatología descriptiva (DSM/CIE) | Neurociencia cognitiva, neuroanatomía funcional |
| Objetivo | Diagnóstico psiquiátrico, orientación terapéutica | Localización funcional, perfil de fortalezas/debilidades, rehabilitación |
| Duración típica | 1–3 sesiones | 4–8 horas (a veces más) |

La evaluación neuropsicológica es especialmente indicada ante sospecha de daño cerebral adquirido (TCE, ACV), enfermedades neurodegenerativas (Alzheimer, Parkinson), epilepsia, secuelas de infección del SNC, o cuando se necesita objetivar el perfil cognitivo para planificar rehabilitación.
