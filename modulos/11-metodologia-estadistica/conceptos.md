# Conceptos — Módulo 11

## 1. Tipos de investigación en psicología

**Experimental:** El investigador manipula una variable independiente (VI) y mide el efecto
sobre la variable dependiente (VD), controlando todo lo demás. Es el único diseño que permite
establecer causalidad. Requiere asignación aleatoria de participantes a condiciones.

Ejemplo: asignar aleatoriamente participantes a TCC vs lista de espera y medir depresión
al final. Si el grupo TCC mejora más, podemos atribuirlo a la intervención.

**Cuasi-experimental:** Tiene manipulación de VI pero sin asignación aleatoria. Los grupos
no son equivalentes al inicio, lo que introduce confusiones. Más común en investigación
aplicada donde la asignación aleatoria es imposible o no ética.

Ejemplo: comparar el bienestar de estudiantes que eligieron voluntariamente meditar vs
los que no. El grupo meditador puede diferir en otras variables (disciplina, motivación).

**Correlacional:** Se miden dos o más variables sin manipulación. Permite describir relaciones
pero no establecer causalidad. Es el diseño más común en psicología social y clínica.

Ejemplo: medir apego adulto y satisfacción en relaciones de pareja. Si correlacionan,
¿el apego causa la satisfacción, la satisfacción modela el apego, o un tercero causa ambos?

**Ex post facto:** Se estudian variables que ya ocurrieron (trauma, abuso, eventos vitales).
No hay manipulación posible. Muy usado en psicopatología.

---

## 2. Validez interna y externa

**Validez interna:** grado en que los cambios en la VD se deben realmente a la VI y no a
otras variables. Las amenazas clásicas son:
- Historia: eventos externos que ocurren durante el estudio
- Maduración: cambios naturales en los participantes con el tiempo
- Regresión a la media: participantes extremos tienden a moverse hacia el promedio
- Sesgo de selección: los grupos no eran equivalentes desde el inicio
- Deserción diferencial: distintos tipos de personas abandonan cada grupo

**Validez externa:** grado en que los resultados generalizan más allá del estudio.
El problema WEIRD: la mayoría de estudios psicológicos usa muestras Western, Educated,
Industrialized, Rich, Democratic. Los resultados se generalizan a toda la humanidad
pero la muestra es estudiantes universitarios estadounidenses.

---

## 3. El valor p y sus límites

El valor p (p-value) es la probabilidad de obtener un resultado igual o más extremo que
el observado, asumiendo que la hipótesis nula es verdadera. Si p < 0.05, el resultado
se considera "estadísticamente significativo" por convención.

Lo que p NO dice:
- No dice la probabilidad de que la hipótesis sea verdadera
- No dice el tamaño del efecto (qué tan grande es la diferencia)
- No dice si el resultado es importante en términos prácticos
- No dice si el resultado se va a replicar

El umbral 0.05 es arbitrario (Fisher lo propuso como heurístico, no como regla universal).
Su abuso sistemático es una de las causas estructurales de la crisis de replicación.

---

## 4. Tamaño de efecto

El tamaño de efecto indica qué tan grande es la diferencia o relación encontrada,
independientemente del tamaño de muestra. Es el complemento necesario del valor p.

Índices comunes:
- **d de Cohen:** diferencia entre dos medias expresada en unidades de desviación estándar
  - d = 0.2: efecto pequeño / d = 0.5: medio / d = 0.8: grande
- **r de Pearson:** correlación entre dos variables continuas (-1 a +1)
- **η² (eta cuadrado):** proporción de varianza explicada en ANOVA

Un resultado puede ser estadísticamente significativo (p < 0.001) con un tamaño de efecto
minúsculo (d = 0.05) si la muestra es enorme. Y puede ser importante clínicamente con
p = 0.08 si el tamaño de efecto es grande pero la muestra pequeña.

---

## 5. Poder estadístico

El poder estadístico es la probabilidad de detectar un efecto real cuando existe. Depende de:
- Tamaño de muestra (más participantes → más poder)
- Tamaño del efecto esperado (efectos grandes se detectan con menos participantes)
- Nivel alfa (el umbral de significancia)

La mayoría de los estudios de psicología publicados antes de 2015 tenían poder estadístico
bajo (< 0.50), lo que significa que aunque el efecto existiera, tenían menos del 50% de
probabilidad de detectarlo. Esto explica la irreproducibilidad: muchos efectos son reales
pero pequeños, y los estudios eran demasiado pequeños para detectarlos consistentemente.

Cohen (1992) recomendó diseñar estudios con poder ≥ 0.80. Hoy se apunta a 0.90-0.95.

---

## 6. La prueba t

Compara las medias de dos grupos para determinar si la diferencia es estadísticamente
significativa.

- **t para muestras independientes:** los dos grupos son distintas personas
  Ejemplo: bienestar en grupo control vs grupo TCC (n distintos)

- **t para muestras relacionadas (pareadas):** el mismo grupo medido dos veces, o pares emparejados
  Ejemplo: depresión antes y después de intervención en los mismos participantes

La fórmula conceptual: t = (diferencia observada entre medias) / (error estándar de la diferencia)
Cuanto más grande la diferencia en relación al error, más grande t, más pequeño p.

---

## 7. ANOVA (Análisis de Varianza)

Compara las medias de tres o más grupos. Pregunta: ¿hay diferencias entre los grupos
más grandes de lo que esperaríamos por azar?

El ANOVA de una vía tiene una VI categórica con 3+ niveles y una VD continua.
Ejemplo: comparar ansiedad en tres grupos (TCC / medicación / combinación).

Si el ANOVA es significativo, indica que hay diferencias en algún lugar, pero no dice
dónde. Las pruebas post-hoc (Tukey, Bonferroni) identifican qué pares de grupos difieren.

---

## 8. Correlación de Pearson

Mide la relación lineal entre dos variables continuas. Va de -1 (correlación negativa perfecta)
a +1 (positiva perfecta). r = 0 indica ausencia de relación lineal (puede haber no-lineal).

Interpretación: r = 0.10 pequeña / 0.30 media / 0.50 grande (según Cohen).

Limitaciones: solo captura relaciones lineales, es sensible a outliers, y no establece
causalidad. Correlación espuria: dos variables pueden correlacionar por una tercera (el
consumo de helados y los ahogamientos correlacionan en verano; la causa es la temperatura).

---

## 9. Chi-cuadrado

Analiza la relación entre dos variables categóricas. Pregunta: ¿la distribución observada
difiere de lo que esperaríamos si no hubiera relación?

Ejemplo: ¿el diagnóstico (depresión vs ansiedad vs ambos) se distribuye de forma distinta
entre hombres y mujeres? Chi-cuadrado compara la tabla observada con la esperada bajo
independencia.

---

## 10. P-hacking y preregistro

P-hacking (o "researcher degrees of freedom"): el investigador toma decisiones analíticas
después de ver los datos para obtener p < 0.05. Excluir outliers selectivamente, elegir
el test estadístico que da significativo, detener la recolección cuando el p llega a 0.05.

El preregistro es la solución: antes de recolectar datos, el investigador registra en un
repositorio público (OSF, AsPredicted) qué va a medir, qué hipótesis va a testear y cómo
va a analizar los datos. Lo que no estaba preregistrado se reporta como exploratorio.

---

## 11. Diseño de muestra: muestreo aleatorio vs por conveniencia

**Muestreo aleatorio:** cada miembro de la población tiene igual probabilidad de ser
seleccionado. Permite generalizar a la población. Difícil de implementar en psicología.

**Muestreo por conveniencia:** se usan los participantes disponibles (estudiantes universitarios).
Es la norma en psicología de laboratorio. Limita la generalización.

**Muestreo estratificado:** se asegura representación proporcional de subgrupos (género,
edad, nivel educativo) relevantes para la investigación.

El tamaño de muestra no garantiza representatividad. Una encuesta de un millón de personas
mal muestreadas es peor que una de mil personas bien muestreadas.
