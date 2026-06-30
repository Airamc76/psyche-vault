# Respuestas — Módulo 11

---

**1. Experimental vs cuasi-experimental**
La diferencia clave es la asignación aleatoria. En experimental, los participantes se asignan al azar a las condiciones, lo que hace que los grupos sean equivalentes en variables conocidas y desconocidas antes de la manipulación. En cuasi-experimental, los grupos se forman por criterios naturales o prácticos (ya estaban en un colegio, ya tenían el diagnóstico). La diferencia importa porque sin asignación aleatoria, diferencias previas entre los grupos pueden explicar los resultados, no la manipulación. El cuasi-experimental puede sugerir causalidad pero no establecerla con la misma certeza.

**2. Alternativas explicativas (clases de música y notas)**
Las familias que pagan clases de música tienen mayor nivel socioeconómico, que también predice mejores notas. Los niños que van a clases de música tienen padres más involucrados en su educación, lo que a su vez mejora las notas. Los niños con mayor disciplina y capacidad cognitiva son más propensos tanto a tomar música como a sacar buenas notas (una tercera variable los causa a ambos). Para establecer causalidad se necesitaría asignación aleatoria: tomar niños comparables y asignarlos aleatoriamente a recibir o no clases de música.

**3. Significancia estadística: qué significa y qué no**
Significa que si la hipótesis nula fuera verdadera (no hay efecto real), la probabilidad de obtener un resultado igual o más extremo que el observado es menor al 5%. No significa: que la hipótesis alternativa sea verdadera con 95% de probabilidad; que el efecto sea importante o grande; que el resultado se vaya a replicar; que la conclusión sea correcta.

**4. Tamaño de efecto**
El valor p solo dice si un resultado es estadísticamente distinguible del azar, pero no dice cuán grande es la diferencia. Con muestras enormes, diferencias triviales son estadísticamente significativas. El tamaño de efecto (d de Cohen, r, η²) cuantifica la magnitud real del fenómeno. Un resultado con p = 0.001 y d = 0.05 es estadísticamente significativo pero prácticamente irrelevante.

**5. n = 10.000, p = 0.001, d = 0.04**
El resultado es estadísticamente significativo porque la muestra enorme tiene poder para detectar efectos minúsculos. Pero d = 0.04 es un tamaño de efecto negligible (por referencia, d = 0.2 es "pequeño" según Cohen). En términos prácticos, este efecto no tiene relevancia clínica ni aplicada. La significancia estadística engaña aquí: el resultado es real pero trivial.

**6. Poder estadístico**
Es la probabilidad de detectar un efecto real cuando existe. Con poder = 0.30, el estudio tiene solo 30% de probabilidad de encontrar el efecto aunque exista realmente. Esto significa que el 70% de las veces el estudio va a "no encontrar efecto" aunque el efecto sea real. Los estudios con bajo poder publican resultados inconsistentes: a veces encuentran el efecto, a veces no, dependiendo de la variación muestral.

**7. P-hacking**
Un investigador recolecta datos hasta llegar a n = 30, mira los datos, excluye 3 participantes que "parecen outliers" (pero realmente porque sin ellos p < 0.05), corre 4 tests distintos y reporta el único que da significativo. Cada decisión post-hoc infla la tasa de falso positivo. Simmons et al. (2011) mostraron que con suficiente flexibilidad analítica, se puede demostrar que escuchar a los Beatles hace que la gente sea literalmente más joven.

**8. Preregistro**
El preregistro registra las hipótesis, el diseño, la muestra planeada y el plan de análisis antes de recolectar datos. Resuelve el problema de no poder distinguir entre hipótesis confirmatorias (predije esto y lo encontré) y exploratorias (encontré esto y ahora digo que lo predije). Lo que va más allá del preregistro se puede publicar, pero etiquetado como exploratorio.

**9. t independiente vs t pareada**
Independiente: cuando los dos grupos son personas distintas (grupo control vs grupo experimental, hombres vs mujeres). Pareada: cuando el mismo participante aparece en ambas condiciones (antes vs después de tratamiento en los mismos sujetos, o cuando los pares están emparejados por una variable de control). La prueba pareada es más potente porque elimina la variabilidad entre sujetos.

**10. Qué reportar además de la prueba t**
Medias y desviaciones estándar de cada grupo, tamaño de efecto (d de Cohen), intervalo de confianza para la diferencia, tamaño de muestra y poder del estudio. Solo con el valor t y p no se puede interpretar el resultado ni replicarlo.

**11. ANOVA vs múltiples t**
Cuando tenés 3+ grupos, hacer múltiples pruebas t infla el error tipo I: con 3 comparaciones al nivel α = 0.05, la probabilidad de al menos un falso positivo es ~14%. ANOVA compara todos los grupos simultáneamente manteniendo el nivel de error controlado. Si el ANOVA es significativo, las pruebas post-hoc con corrección (Tukey, Bonferroni) identifican qué pares difieren.

**12. r = 0.65**
Podés concluir: existe una relación lineal positiva moderada-alta entre las dos variables; comparten aproximadamente el 42% de varianza (r² = 0.42). No podés concluir: cuál causa cuál; que la relación sea causal; que sea lineal en todo el rango de valores; que se generalice a otras poblaciones.

**13. Amenazas a validez interna sin grupo control**
Sin grupo control, cualquier cambio observado puede deberse a: maduración (el tiempo mismo produce el cambio), historia (eventos externos que ocurrieron durante el estudio), regresión a la media (los participantes seleccionados por ser extremos tienden a volverse más promedio), efecto placebo (la expectativa de mejorar produce mejoría). El grupo control permite distinguir el efecto de la intervención de estos factores.

**14. Problema WEIRD**
La mayoría de estudios en psicología usa estudiantes universitarios de países occidentales, educados, industrializados, ricos y democráticos. Esto es una muestra sesgada de la humanidad: representan alrededor del 12% de la población mundial pero protagonizan ~96% de los estudios. Muchos hallazgos que se presentan como universales (ilusiones perceptuales, sesgos cognitivos, normas morales) tienen efectos mucho más débiles o no aparecen en culturas no-WEIRD.

**15. p = 0.048, n = 30, sin tamaño de efecto**
Señales de alarma: p muy cerca del umbral de 0.05 (zona de sospecha de p-hacking); n = 30 es bajo, lo que da poco poder para efectos pequeños o medianos; sin tamaño de efecto no se puede evaluar la magnitud. Este resultado requiere replicación antes de tomarse en serio. Con n = 30 y poder típico de 0.50, hay ~50% de probabilidad de que una replicación no lo encuentre aunque el efecto sea real.
