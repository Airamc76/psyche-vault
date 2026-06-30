# Conceptos — Psicología Cognitiva

---

## 1. El nacimiento del cognitivismo: Neisser, la metáfora computacional y el procesamiento de información

### Contexto histórico

En la década de 1950, el conductismo dominaba la psicología académica anglosajona con un mandato metodológico claro: solo son objeto legítimo de estudio los eventos observables. La mente era una "caja negra" que el científico no debía abrir. La revolución cognitiva no fue un evento único sino una convergencia de influencias:

- **La cibernética de Norbert Wiener (1948):** introduce la idea de que los sistemas pueden autorregularse mediante bucles de retroalimentación, lo que implica procesar información sobre su propio estado.
- **La teoría de la comunicación de Shannon y Weaver (1949):** formaliza conceptos como canal, ruido, capacidad y codificación, que la psicología adoptará para describir el procesamiento mental.
- **Las ciencias de la computación:** el trabajo de Alan Turing y John von Neumann establece que es posible construir máquinas que manipulan símbolos según reglas explícitas. Si una máquina puede "pensar" siguiendo reglas, quizás el pensamiento humano también sea manipulación de símbolos.
- **El simposio del MIT (1956):** considerado el acta de nacimiento del cognitivismo. Chomsky presenta su crítica a Skinner sobre adquisición del lenguaje; Miller expone "The magical number seven"; Newell y Simon presentan el *Logic Theorist*, el primer programa de inteligencia artificial capaz de demostrar teoremas.

### La metáfora computacional

Ulric Neisser (1967) sistematiza el programa en *Cognitive Psychology*: la mente es un sistema de procesamiento de información análogo (no idéntico) a un ordenador. Esta metáfora tiene tres componentes:

1. **Input:** la información del entorno entra por los receptores sensoriales.
2. **Procesamiento:** la información es transformada, codificada, almacenada y recuperada mediante operaciones mentales.
3. **Output:** la conducta observable es el producto final de ese procesamiento interno.

### Críticas a la metáfora computacional

La metáfora es productiva pero ha sido criticada en varios frentes:

- **Embodied cognition (Varela, Thompson y Rosch, 1991):** la cognición no ocurre solo en el cerebro sino que está distribuida en el cuerpo y el entorno. La metáfora computacional ignora que somos organismos con cuerpos que interactúan físicamente con el mundo.
- **Crítica de Dreyfus (1972):** los ordenadores manipulan símbolos sin comprensión; los humanos comprenden porque están situados en un mundo con significado. La metáfora confunde sintaxis con semántica.
- **La habitación china de Searle (1980):** un sistema puede seguir reglas sintácticas perfectamente y producir outputs correctos sin entender nada semánticamente. La simulación de la cognición no equivale a la cognición.

A pesar de estas críticas, el marco de procesamiento de información sigue siendo el paradigma dominante porque genera predicciones verificables y tiene un poder heurístico enorme.

---

## 2. Representaciones mentales: conceptos, categorías, prototipos y redes semánticas

### Definición de representación mental

Una representación mental es un estado interno que está *en lugar de* algo: puede ser un objeto, un evento, una relación o una categoría abstracta. Las representaciones median entre el mundo y la conducta: no respondemos directamente al mundo sino a nuestra representación de él.

Tipos principales de representaciones:
- **Proposicionales:** relaciones abstractas entre conceptos (ej.: "los pájaros tienen alas").
- **Analógicas:** preservan la estructura del objeto representado (ej.: imágenes mentales).
- **Procedurales:** conocimiento sobre cómo hacer algo (*know-how* vs *know-that*).

### La teoría clásica de los conceptos y sus problemas

La visión aristotélica clásica sostiene que los conceptos se definen por condiciones necesarias y suficientes: algo es un "triángulo" si y solo si tiene tres lados y tres ángulos. Este modelo tiene problemas serios cuando se aplica a conceptos naturales:

- ¿Cuáles son las condiciones necesarias y suficientes para ser un "juego"? Wittgenstein (1953) argumenta que los juegos comparten "parecidos de familia" pero no una esencia común.
- La mayoría de los conceptos cotidianos tienen bordes borrosos (*fuzzy boundaries*).

### Teoría de los prototipos (Rosch, 1975)

Eleanor Rosch demuestra experimentalmente que las categorías naturales tienen estructura interna: algunos miembros son más "típicos" o "centrales" que otros. Un petirrojo es un pájaro más prototípico que un pingüino; una silla es más prototípica de "mueble" que una lámpara.

Los prototipos son los miembros que comparten más rasgos con los otros miembros de la categoría y menos rasgos con miembros de categorías contrastantes. La tipicidad se mide mediante:
- **Tiempos de reacción:** se verifica más rápidamente "¿es un petirrojo un pájaro?" que "¿es un pingüino un pájaro?".
- **Gradientes de pertenencia:** los sujetos aceptan que algo puede ser "más o menos" miembro de una categoría.

Implicaciones: la categorización no es un proceso binario sino continuo. Las categorías no tienen esencias sino estructuras de similitud.

### Redes semánticas

Las redes semánticas (Collins y Quillian, 1969) modelan el conocimiento conceptual como un grafo donde los nodos son conceptos y los arcos son relaciones (es-un, tiene, puede, etc.). La recuperación de información se modela como *spreading activation*: activar un nodo activa parcialmente los nodos vecinos.

El modelo predice que verificar "¿tiene un canario plumas?" tardará más que "¿tiene un canario piel?" porque "plumas" está almacenado en el nodo "pájaro" (supraordinado) y hay que recorrer más arcos. Esto se confirma experimentalmente, aunque el modelo simple tuvo que refinarse para capturar efectos de frecuencia y tipicidad.

---

## 3. Resolución de problemas: espacio de problema, heurísticos, insight y fijación funcional

### El espacio de problema (Newell y Simon, 1972)

Newell y Simon proponen que resolver un problema consiste en moverse dentro de un *espacio de problema*: el conjunto de todos los estados posibles del problema, las operaciones que permiten pasar de un estado a otro, el estado inicial y el estado meta. Resolver el problema es encontrar un camino desde el estado inicial hasta la meta.

Este marco permite analizar formalmente la dificultad de un problema: depende del tamaño del espacio, del factor de ramificación (cuántas opciones hay en cada estado) y de cuán buenas son las heurísticas disponibles para guiar la búsqueda.

### Algoritmos vs heurísticos

- **Algoritmo:** procedimiento que garantiza encontrar la solución si existe, pero puede ser computacionalmente costoso (ej.: búsqueda exhaustiva en ajedrez).
- **Heurístico:** regla de decisión simplificada que no garantiza la solución óptima pero es eficiente. Ej.: en ajedrez, "controla el centro del tablero".

Los heurísticos de resolución de problemas más estudiados son:
- **Análisis medios-fines:** comparar el estado actual con la meta e identificar la acción que más reduce la diferencia.
- **Analogía:** usar la solución de un problema anterior como guía para el nuevo.
- **Búsqueda hacia atrás:** partir de la meta y trabajar hacia el estado inicial.

### Insight

Algunos problemas no se resuelven mediante búsqueda incremental sino mediante una reorganización súbita de la representación: el *insight* o "efecto ajá". Köhler (1925) documentó esto en chimpancés; Duncker (1945) lo estudió en humanos con problemas como el problema del tumor.

El insight implica que el espacio de problema se ha representado de forma incorrecta y que la solución requiere una reestructuración (*Umstrukturierung* en la terminología de la Gestalt). La investigación moderna (Ohlsson, 1992) sugiere que el insight ocurre cuando la representación inicial falla y se activa una representación alternativa que desbloquea el camino a la solución.

### Fijación funcional (Duncker, 1945)

La *functional fixedness* es la tendencia a ver los objetos solo en función de su uso habitual, lo que bloquea la solución de problemas que requieren usos novedosos. En el experimento clásico de la vela de Duncker, los sujetos reciben una vela, chinchetas y una caja de cerillas y deben fijar la vela a la pared. La solución requiere ver la caja como soporte, no solo como contenedor. Muchos sujetos no lo consiguen porque la función habitual de la caja (contener cerillas) bloquea su uso alternativo.

---

## 4. Razonamiento deductivo e inductivo: silogismos, sesgo de confirmación y razonamiento bayesiano

### Razonamiento deductivo

El razonamiento deductivo preserva la verdad: si las premisas son verdaderas y la inferencia es válida, la conclusión debe ser verdadera. La forma prototípica es el silogismo:
- Todos los hombres son mortales (premisa mayor)
- Sócrates es un hombre (premisa menor)
- Por tanto, Sócrates es mortal (conclusión)

La investigación psicológica (Johnson-Laird, 1983; Wason, 1968) demuestra que los humanos no razonan siguiendo las reglas de la lógica formal. Cometen errores sistemáticos influidos por:
- **Sesgo de creencia:** tendencia a aceptar conclusiones que concuerdan con las propias creencias independientemente de la validez del argumento.
- **Sesgo de atmósfera:** la presencia de cuantificadores "algunos" en las premisas lleva a aceptar conclusiones con "algunos".

### La tarea de selección de Wason

Wason (1968) presenta cuatro cartas (E, K, 4, 7) y la regla "si hay una vocal en una cara, hay un número par en la cara opuesta". La tarea es seleccionar las cartas mínimas necesarias para verificar la regla. La respuesta correcta es E y 7, pero la mayoría elige E y 4 (sesgo de confirmación).

La tarea se facilita drásticamente cuando se reformula en términos concretos y socialmente relevantes (ej.: "si alguien bebe alcohol, debe tener más de 18 años"). Esto sugiere que el razonamiento humano no es puramente lógico sino que depende del contenido y del contexto, lo que apoya la teoría de los módulos de dominio específico (Cosmides y Tooby, 1992).

### Razonamiento inductivo

La inducción generaliza desde casos particulares a reglas generales; a diferencia de la deducción, no preserva la verdad (ninguna cantidad de observaciones de cisnes blancos prueba definitivamente que todos los cisnes son blancos). Los humanos infieren patrones rápidamente pero están sujetos a sesgos:

- **Sesgo de muestra pequeña:** tendencia a generalizar desde muestras insuficientes.
- **Correlación ilusoria:** percibir relaciones entre variables que no están correlacionadas.

### Razonamiento bayesiano

La teoría normativa del razonamiento bajo incertidumbre es el teorema de Bayes: P(H|E) = P(E|H) × P(H) / P(E). La probabilidad posterior de una hipótesis dado un dato es función de la probabilidad previa y de la verosimilitud del dato bajo esa hipótesis.

Los humanos son malos bayesianos (Kahneman y Tversky, 1973): ignoran las tasas base (*base-rate neglect*), son excesivamente sensibles a la información saliente y no actualizan correctamente las probabilidades. Sin embargo, el debate continúa: Gigerenzen y colaboradores argumentan que los humanos razonan bayesianamente cuando la información se presenta en formato de frecuencias naturales en lugar de probabilidades.

---

## 5. Toma de decisiones: racionalidad limitada, teoría prospectiva y heurísticos

### El modelo del agente racional y sus límites

La economía neoclásica asume que los agentes maximizan la utilidad esperada: dado un conjunto de opciones, el agente calcula el valor esperado de cada una (probabilidad × utilidad) y elige la que maximiza ese valor. Este modelo es normativo (describe cómo se debería decidir) y ha sido refutado descriptivamente por décadas de investigación experimental.

### Racionalidad limitada (Simon, 1955)

Herbert Simon propone que los humanos no maximizan sino que *satisfacen* (*satisfice*): buscan una solución suficientemente buena que supere un umbral de aceptabilidad, no la mejor solución posible. Esto se debe a:
- Capacidad cognitiva limitada (memoria operativa, atención).
- Información incompleta sobre el entorno.
- Tiempo limitado para tomar decisiones.

La racionalidad limitada no es irracionalidad: es la respuesta adaptativa de un organismo con recursos limitados a un entorno complejo.

### Teoría prospectiva (Kahneman y Tversky, 1979)

La teoría prospectiva describe cómo las personas realmente toman decisiones bajo riesgo. Sus características principales:

1. **Función de valor asimétrica:** las ganancias y las pérdidas se evalúan respecto a un punto de referencia (el estado actual). La función es cóncava para ganancias (utilidad marginal decreciente) y convexa para pérdidas (sensibilidad decreciente al dolor). Crucialmente, la pérdida de 100€ produce más malestar que el placer producido por ganar 100€: *loss aversion* (aversión a la pérdida).

2. **Función de ponderación de probabilidades:** las probabilidades pequeñas se sobreestiman (por eso jugamos a la lotería) y las probabilidades moderadas y altas se subestiman (por eso compramos seguros incluso cuando el riesgo objetivo es bajo).

3. **Efecto de encuadre (*framing*):** la presentación de la misma información en términos de ganancias vs pérdidas altera la elección aunque la información sea objetivamente idéntica.

---

## 6. Sesgos cognitivos principales: anclaje, disponibilidad, representatividad y encuadre

### Heurístico de representatividad

Se usa cuando juzgamos la probabilidad de que un objeto o evento pertenezca a una categoría evaluando cuánto se parece al prototipo de esa categoría. Es eficiente pero produce sesgos sistemáticos:

- **Falacia del jugador:** si ha salido cara cinco veces seguidas, "debe" salir cruz (aunque las tiradas son independientes).
- **Conjunción fallida:** en el experimento de "Linda" (Tversky y Kahneman, 1983), el 85% de los sujetos juzga más probable que "Linda sea cajera y feminista" que "Linda sea cajera", violando la regla de la conjunción de probabilidades.
- **Insensibilidad a las tasas base:** se ignora la frecuencia previa de la categoría.

### Heurístico de disponibilidad

Se usa cuando juzgamos la probabilidad de un evento evaluando con qué facilidad podemos evocar ejemplos de él. Produce sesgos porque la facilidad de evocación está influida por la recencia, la emocionalidad y la exposición mediática, no por la frecuencia objetiva:

- Las personas sobreestiman la frecuencia de muertes por accidente de avión y subestiman la de accidente de coche.
- Tras leer noticias sobre crímenes violentos, se eleva la estimación de la tasa de criminalidad.

### Heurístico de anclaje y ajuste

Al hacer estimaciones numéricas, nos anclamos en un valor inicial (aunque sea arbitrario) y ajustamos insuficientemente a partir de él. Tversky y Kahneman (1974) demostraron que si se hace girar una ruleta (trucada para dar 10 o 65) antes de preguntar qué porcentaje de países africanos son miembros de la ONU, los sujetos que vieron 65 dieron estimaciones significativamente más altas que los que vieron 10.

El anclaje tiene implicaciones prácticas importantes en negociación, medicina (primera impresión diagnóstica) y sistemas legales (petición de pena de la fiscalía).

### Efecto de encuadre (*framing effect*)

Kahneman y Tversky (1981) presentan el "problema de la enfermedad asiática": el mismo programa que "salva 200 vidas" (framing de ganancia) se prefiere sobre el alternativo, pero cuando se reformula como "400 personas morirán" (framing de pérdida) la preferencia se invierte, aunque ambas descripciones sean matemáticamente equivalentes. El efecto de encuadre viola la invariancia descriptiva que requiere cualquier teoría normativa de la decisión.

---

## 7. Metacognición: pensar sobre el propio pensamiento, ilusión de saber y efecto Dunning-Kruger

### Definición de metacognición

Flavell (1979) acuña el término para referirse al conocimiento y control de los propios procesos cognitivos. La metacognición tiene dos componentes:

1. **Conocimiento metacognitivo:** lo que sabemos sobre nuestra propia cognición (ej.: "soy mejor en reconocimiento que en recuerdo libre"; "este texto es difícil para mí").
2. **Regulación metacognitiva:** el control activo de los procesos cognitivos durante una tarea (planificación, monitorización, evaluación).

La metacognición es crucial para el aprendizaje autorregulado: los estudiantes que monitorean eficazmente su propia comprensión aprenden significativamente más.

### Ilusión de saber (*illusion of knowing*)

Los sujetos sobreestiman sistemáticamente cuánto comprenden. En el efecto de *fluencia* (*fluency effect*), la facilidad con que se procesa un texto genera la ilusión de que se comprende mejor, aunque la comprensión profunda sea escasa. Kornell y Bjork (2009) demuestran que releer un texto produce más confianza pero no más aprendizaje que los tests de recuperación (el *testing effect*).

### Ilusión de comprensión explicativa (Rozenblit y Keil, 2002)

Los sujetos creen saber cómo funciona un inodoro, una cremallera o un gobierno mucho mejor de lo que realmente saben. Cuando se les pide que den una explicación paso a paso, su confianza colapsa. El fenómeno se denomina *illusion of explanatory depth* y es especialmente pronunciado en temas complejos donde el conocimiento está distribuido socialmente.

### Efecto Dunning-Kruger (1999)

Dunning y Kruger demuestran que las personas con baja competencia en un dominio tienen dos limitaciones simultáneas:
1. No realizan bien la tarea.
2. Carecen de la competencia metacognitiva necesaria para reconocer su propio déficit.

El resultado es una sobreestimación del propio rendimiento en los cuartiles inferiores. El efecto se ha replicado en múltiples dominios (lógica, gramática, humor). Una matización importante es que el efecto en los cuartiles superiores (subestimación de la propia competencia) puede explicarse por regresión estadística a la media y no requiere un mecanismo psicológico adicional.

---

## 8. Inteligencia: teorías, Flynn effect y el debate naturaleza-crianza

### ¿Qué es la inteligencia?

No existe consenso definitorio. Una definición ampliamente citada es la de Gottfredson (1997): "La inteligencia es una capacidad mental muy general que, entre otras cosas, implica la habilidad de razonar, planear, resolver problemas, pensar de forma abstracta, comprender ideas complejas, aprender rápido y aprender de la experiencia".

### El factor *g* (Spearman, 1904)

Charles Spearman observa que los tests de habilidad cognitiva correlacionan positivamente entre sí (*correlación positiva*). Mediante análisis factorial concluye que existe un factor general de inteligencia, *g*, que subyace a todos ellos y explica las correlaciones. El factor *g* es el constructo más robusto y replicado de toda la psicología diferencial: predice resultados académicos, laborales y de salud.

### Teoría de las inteligencias múltiples (Gardner, 1983)

Howard Gardner propone en *Frames of Mind* que existen al menos siete inteligencias independientes: lingüística, lógico-matemática, musical, espacial, corporal-cinestésica, interpersonal e intrapersonal (más tarde añade naturalista y existencial). Cada inteligencia tiene una base neurológica diferente y puede disociarse de las demás en casos de lesión cerebral o talento especial.

**Crítica:** la teoría de Gardner tiene gran impacto pedagógico pero débil apoyo empírico: las "inteligencias" correlacionan positivamente entre sí (contrariamente a lo que la teoría predice), y los métodos que Gardner usa para identificarlas (criterios no estadísticos) han sido criticados como circulares.

### Teoría triárquica (Sternberg, 1985)

Sternberg propone tres tipos de inteligencia: analítica (la que miden los tests), creativa (adaptarse a situaciones nuevas) y práctica (aplicar conocimiento al mundo real). La inteligencia práctica — conocer las reglas no escritas de un entorno — predice el éxito profesional independientemente de la inteligencia analítica.

### El efecto Flynn

James Flynn (1984) documenta que los CI medios han aumentado aproximadamente 3 puntos por década en los países desarrollados durante el siglo XX. Dado que el ADN no cambia tan rápidamente, el efecto demuestra que la inteligencia (tal como la miden los tests) es altamente sensible a factores ambientales: mejor nutrición, mayor escolarización, familiarización con el pensamiento abstracto.

El debate naturaleza-crianza se ha desplazado: los estudios de gemelos estiman la heredabilidad de la inteligencia en 0.50–0.80 en adultos, pero esto no implica que el ambiente sea irrelevante. La heredabilidad mide cuánto de la *varianza* en una población se explica por diferencias genéticas; en una población homogéneamente privada (como los niños de Abner Peddicord en el famoso estudio de adopción de Minnesota), el ambiente explica casi toda la varianza aunque la heredabilidad en condiciones normales sea alta.

---

## 9. Creatividad: pensamiento convergente vs divergente, incubación y el inconsciente

### Guilford y la distinción convergente-divergente (1950)

J. P. Guilford distingue entre:
- **Pensamiento convergente:** busca la única solución correcta a un problema bien definido. Es el pensamiento que miden los tests de inteligencia convencionales.
- **Pensamiento divergente:** genera múltiples soluciones posibles a un problema abierto. Se mide mediante tests de usos alternativos (dar el mayor número posible de usos para un ladrillo) o de asociaciones remotas.

Esta distinción está en la base de la mayoría de modelos contemporáneos de creatividad, aunque la investigación muestra que la creatividad real de alto nivel requiere ambos tipos: intuición divergente más evaluación convergente.

### El modelo de las cuatro etapas de Wallas (1926)

Wallas propone que el proceso creativo tiene cuatro fases:
1. **Preparación:** trabajo consciente e intenso sobre el problema.
2. **Incubación:** abandono consciente del problema; el procesamiento continúa de forma inconsciente.
3. **Iluminación:** aparición súbita de la solución (el insight).
4. **Verificación:** evaluación crítica y refinamiento de la solución.

La fase de incubación es especialmente controvertida. La evidencia experimental (Sio y Ormerod, 2009) sugiere que la incubación facilita la solución cuando el problema requiere insight y cuando la tarea de incubación (lo que se hace mientras se "descansa" del problema) es de baja demanda cognitiva.

### El papel del inconsciente

Dijksterhuis y Meurs (2006) proponen la *teoría del pensamiento inconsciente* (*unconscious thought theory*): las decisiones y soluciones creativas complejas se benefician de periodos de procesamiento no consciente porque el inconsciente tiene mayor capacidad de integración de información. Esta teoría ha sido objeto de fuertes críticas y fallos de replicación, lo que la sitúa en el contexto de la "crisis de replicación" en psicología social.

Lo que sí parece robusto es que la creatividad se inhibe bajo presión de tiempo, evaluación y estrés (estados que activan el Sistema 2 y el monitoreo continuo), y se facilita por estados de humor positivo y de incubación.

---

## 10. Psicología cognitiva y clínica: modelos cognitivos y la TCC, los esquemas de Beck

### Del laboratorio a la clínica

La psicología cognitiva experimental y la psicología clínica convergieron cuando Aaron Beck y Albert Ellis demostraron que los trastornos emocionales podían conceptualizarse y tratarse como distorsiones en el procesamiento de la información. La terapia cognitivo-conductual (TCC) es hoy el tratamiento psicológico con mayor evidencia empírica para la mayoría de los trastornos del eje I del DSM.

### La teoría cognitiva de la depresión de Beck (1967)

Beck propone que la depresión se mantiene por una tríada cognitiva negativa:
1. **Visión negativa de uno mismo** ("Soy un fracasado").
2. **Visión negativa del mundo** ("El mundo es injusto y hostil").
3. **Visión negativa del futuro** ("Las cosas no mejorarán").

Esta tríada es el producto de esquemas cognitivos negativos: estructuras mentales relativamente estables que filtran, interpretan y transforman la información del entorno de forma sesgada. Los esquemas se forman en la infancia y son activados por estresores relevantes en la vida adulta.

### Distorsiones cognitivas

Los esquemas producen distorsiones cognitivas — errores sistemáticos en el procesamiento de la información — que se denominan pensamientos automáticos negativos. Las principales distorsiones identificadas por Beck son:

- **Pensamiento dicotómico (todo o nada):** "Si no soy perfecto, soy un fracaso".
- **Catastrofización:** ampliar la importancia de los eventos negativos.
- **Abstracción selectiva:** atender solo a los aspectos negativos ignorando el contexto positivo.
- **Sobregeneralización:** sacar conclusiones amplias de eventos aislados.
- **Personalización:** atribuirse responsabilidad de eventos externos negativos.
- **Lectura del pensamiento:** asumir que se sabe lo que los demás piensan.

### Conexión con la psicología cognitiva experimental

El modelo de Beck puede traducirse directamente en términos de psicología cognitiva experimental:
- Los **esquemas** son equivalentes a estructuras de conocimiento activadas mediante *spreading activation*.
- Las **distorsiones cognitivas** son sesgos atencionales y de memoria: las personas deprimidas muestran ventajas en tareas de memoria para palabras con valencia negativa (Williams et al., 1997).
- La **rumia** es un fallo de inhibición ejecutiva: incapacidad de desactivar representaciones que ya no son útiles.

Esta convergencia entre investigación básica y clínica es uno de los logros más notables de la psicología cognitiva como programa de investigación.
