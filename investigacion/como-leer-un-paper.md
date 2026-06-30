# Como leer un paper cientifico

Leer un paper no es leerlo de corrido de principio a fin. Hay un orden optimo, hay secciones mas densas que otras, y hay preguntas especificas que tenes que hacerte en cada parte. Esta guia te da el proceso completo.

---

## 1. La estructura IMRD

La mayoria de los articulos empiricos siguen esta estructura. Saber que buscar en cada seccion te ahorra tiempo y mejora la comprension.

### Introduccion
**Que buscar:**
- El problema que motiva el estudio — por que importa esta investigacion
- El estado del arte: que se sabe hasta ahora y que gap existe
- La pregunta de investigacion: formulada explicitamente o inferible del contexto
- Las hipotesis: predicciones directas que el estudio quiere poner a prueba
- Justificacion del diseno elegido

**Errores comunes al leerla:**
- Asumir que todo lo que dicen los autores en la intro es verdad establecida. Parte puede ser contestada o sesgada hacia sus hipotesis.
- Perderse en las citas sin captar la estructura argumental.

**Tip:** Leer la intro con la pregunta "¿A que conclusion quieren llegar?" ayuda a detectar el sesgo de confirmacion desde el principio.

---

### Metodo
**Que buscar:**
- Diseno del estudio (experimental, cuasi-experimental, correlacional, longitudinal, etc.)
- Participantes: N total, criterios de inclusion/exclusion, como fueron reclutados, caracteristicas demograficas
- Variables: independiente, dependiente, covariables, como fueron operacionalizadas
- Instrumentos: nombres de escalas, validacion, propiedades psicometricas (alpha de Cronbach, validez)
- Procedimiento: que hicieron exactamente
- Analisis estadistico planeado: que pruebas y por que

**Por que importa:**
El metodo es la seccion que determina si los resultados son creibles. Un resultado brillante de un metodo flojo no vale nada.

**Preguntas criticas:**
- ¿El N es suficiente para detectar el efecto esperado? (ver seccion de poder estadistico)
- ¿La muestra representa a quien dicen representar?
- ¿Los instrumentos tienen validez demostrada en esta poblacion?
- ¿El diseno permite establecer causalidad o solo asociacion?

---

### Resultados
**Que buscar:**
- Estadisticos descriptivos: medias, desviaciones estandar, distribuciones
- Estadisticos inferenciales: valores de prueba (t, F, chi-cuadrado, etc.), grados de libertad, valor p
- **Tamano del efecto** — este es el dato mas importante
- Intervalos de confianza
- Tablas y figuras: a veces cuentan mas que el texto

**El valor p: que dice y que no dice**

El valor p es la probabilidad de obtener datos al menos tan extremos como los observados, asumiendo que la hipotesis nula es verdadera.

- p < .05 NO significa que la hipotesis alternativa sea verdadera
- p < .05 NO dice nada sobre el tamano o la importancia del efecto
- p < .05 NO confirma que el resultado se va a replicar
- Un p < .001 en un N de 10.000 puede corresponder a un efecto trivial
- Un p = .06 con N = 30 puede ser un efecto real que el estudio no tenia poder para detectar

**El valor p solo dice:** si el efecto existe (si N es suficiente). No dice si es importante.

---

### Tamano del efecto

El tamano del efecto dice cuanto importa el resultado, no solo si existe.

**d de Cohen (diferencia entre dos grupos):**
| Valor | Interpretacion |
|-------|---------------|
| 0.2   | Efecto pequeno |
| 0.5   | Efecto mediano |
| 0.8   | Efecto grande  |
| 1.2+  | Efecto muy grande |

Contexto: la mayoria de los efectos en psicologia social son d ≈ 0.2–0.4. Un d = 0.8 en psicologia es inusualmente grande y merece escepticismo.

**r de Pearson (correlacion):**
| Valor | Interpretacion |
|-------|---------------|
| .10   | Pequeno |
| .30   | Mediano |
| .50   | Grande  |

**Eta-cuadrado (η²) y omega-cuadrado (ω²) — para ANOVA:**
- η² sobreestima el efecto poblacional, ω² es mas preciso
- η² < .06 pequeno, .06–.14 mediano, > .14 grande

**Regla practica:** Si el paper no reporta tamano de efecto, es una serial de alerta. Si solo reporta valores p, hay que calcularlo o al menos estimarlo.

---

### Discusion
**Que buscar:**
- Como los autores interpretan sus resultados
- Si las conclusiones van mas alla de lo que los datos permiten
- Limitaciones reconocidas (y las que no reconocen)
- Implicaciones teoricas y practicas
- Direcciones futuras

**Lectura critica de la discusion:**
La discusion es donde los autores tienen mas libertad interpretativa y donde el sesgo de confirmacion es mas peligroso. Compara lo que dicen con lo que viste en Resultados. A veces las dos secciones no coinciden del todo.

---

## 2. El orden correcto para leer un paper

No empieces por la Introduccion. El orden eficiente es:

1. **Titulo y abstract** — decision de si el paper vale tu tiempo
2. **Introduccion: solo la ultima parte** — las hipotesis o preguntas de investigacion
3. **Figuras y tablas** — los resultados visualmente antes de leer el texto
4. **Discusion: primero los dos primeros parrafos y el ultimo** — la respuesta a las hipotesis y las limitaciones
5. **Metodo** — ahora que sabes que encontraron, evalualo
6. **Resultados completos** — con contexto del metodo ya leido
7. **Introduccion completa** — para entender el marco teorico
8. **Discusion completa** — con todo el contexto

Este orden te permite evaluar rapidamente si vale profundizar y detectar inconsistencias entre lo que el abstract promete y lo que los datos entregan.

---

## 3. Que mirar en los resultados: guia rapida

**Valores p:**
- Reportados como p = .034, no p < .05 (la precision importa)
- Bilateral vs. unilateral: los unilaterales son mas faciles de significar; sospecha si el paper los usa sin justificacion

**Tamano de efecto:**
- d, g, r, η², ω², OR, RR, NNT (numero necesario a tratar)
- Si no esta reportado: busca los datos para calcularlo o considera que es una limitacion

**Intervalo de confianza:**
- Un IC 95% que incluye el cero indica que el efecto no es estadisticamente significativo (equivalente a p > .05)
- El ancho del IC dice cuanta incertidumbre hay: IC angosto = estimacion precisa, IC ancho = mucha incertidumbre
- El IC es mas informativo que el valor p solo

**Ajuste por multiples comparaciones:**
- Si el paper hace muchas pruebas sin ajustar (Bonferroni, FDR), el riesgo de falsos positivos es alto
- Regla: con 20 pruebas, se espera 1 resultado "significativo" por azar

---

## 4. Las 10 preguntas criticas para cualquier paper

1. ¿Cual es la pregunta de investigacion y esta claramente formulada?
2. ¿El diseno elegido permite responder esa pregunta? ¿Permite establecer causalidad?
3. ¿La muestra es adecuada en tamano y representatividad?
4. ¿Los instrumentos son validos y confiables para esta poblacion?
5. ¿El tamano del efecto es reportado y es clinica/practicamente significativo?
6. ¿Los intervalos de confianza son reportados?
7. ¿Las conclusiones estan justificadas por los datos o van mas alla?
8. ¿El estudio fue preregistrado? ¿Los analisis son exploratorios o confirmatorios?
9. ¿Hay conflicto de intereses declarado? ¿Quien financio el estudio?
10. ¿El efecto ha sido replicado de forma independiente?

---

## 5. Senales de alerta

Estos elementos no invalidan automaticamente un paper, pero deben aumentar tu escrutinio:

**Muestra:**
- N muy pequeno sin justificacion de poder estadistico
- Muestra de conveniencia (estudiantes universitarios de primer ano) generalizada a "los humanos"
- Criterios de inclusion/exclusion demasiado estrictos que limitan la validez externa

**Estadistica:**
- Solo valores p, sin tamano de efecto ni IC
- Muchas comparaciones sin ajuste por multiplicidad
- Uso de prueba unilateral sin justificacion teorica previa
- Ausencia de analisis por intencion de tratar en ensayos clinicos

**Diseno:**
- Estudio correlacional con lenguaje causal ("X produce", "X genera", "X lleva a")
- Ausencia de grupo control
- Cegamiento imposible o no implementado en intervenciones
- Follow-up muy corto para el tipo de efecto estudiado

**Transparencia:**
- Sin preregistro en estudios confirmatorios
- Datos no disponibles para replica
- Conflicto de intereses no declarado o con financiamiento de industria
- Resultado "marginalmente significativo" (p = .051 reportado como significativo)

**Generalizacion WEIRD:**
- Western, Educated, Industrialized, Rich, Democratic
- La mayoria de los estudios en psicologia usan muestras WEIRD pero generalizan a toda la humanidad
- Preguntate: ¿este efecto ha sido probado en otras poblaciones?

**Replicacion:**
- Un solo estudio, sin replica independiente, no establece un hecho
- La crisis de replicacion afecto especialmente a psicologia social y priming
- Busca si el efecto fue incluido en el Many Labs o Reproducibility Project

**Narrativa:**
- Abstract que promete mas de lo que los datos entregan
- Discusion que ignora sistematicamente las limitaciones
- Citas selectivas que omiten literatura contradictoria

---

## Recursos adicionales

- Leer el comentario de Andrew Gelman sobre p-values y sus mal usos
- Many Labs Replication Project (Klein et al., 2014) — que efectos se replicaron y cuales no
- Open Science Framework (osf.io) — repositorio de preregistros y datos abiertos
