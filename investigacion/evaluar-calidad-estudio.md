# Evaluar la calidad de un estudio

No todos los estudios pesan igual. Saber en que posicion de la jerarquia de evidencia esta un resultado y que sesgos podrian afectarlo es lo que diferencia leer papers de creer papers.

---

## 1. La jerarquia de evidencia

Ordenada de mayor a menor capacidad para establecer causalidad con certeza:

```
        [NIVEL MAS ALTO]
        
  Meta-analisis y revisiones sistematicas
  con y sin meta-analisis de RCTs
         ↓
  Ensayos controlados aleatorizados (RCT)
         ↓
  Estudios de cohorte (longitudinales)
         ↓
  Estudios de caso-control
         ↓
  Estudios transversales / correlacionales
         ↓
  Series de casos / reportes de caso
         ↓
  Opinion de expertos / consenso clinico
  
        [NIVEL MAS BAJO]
```

**Interpretacion practica:**

- Un meta-analisis bien hecho es mas informativo que cualquier estudio individual
- Los RCT son el estandar de oro para preguntas causales ("¿esta intervencion funciona?")
- Los estudios correlacionales responden "¿X e Y estan asociados?" pero no "¿X causa Y?"
- La opinion de expertos tiene valor clinico pero no es evidencia empirica

**Caveat importante:** La jerarquia aplica principalmente a preguntas de eficacia de intervenciones. Para preguntas descriptivas ("¿que tan comun es X?") un buen estudio epidemiologico puede ser mas apropiado que un RCT.

---

## 2. Checklist por tipo de estudio

### Para Ensayos Controlados Aleatorizados (RCT)

**Aleatorizacion:**
- [ ] ¿Como se realizo la asignacion aleatoria? (tabla de numeros aleatorios, software, etc.)
- [ ] ¿Fue ocultada la secuencia de asignacion hasta el momento de la asignacion? (allocation concealment)
- [ ] ¿Los grupos eran comparables al inicio? (tabla de caracteristicas basales)

**Cegamiento:**
- [ ] ¿Quienes estaban cegados? (participantes, intervencionistas, evaluadores de outcomes)
- [ ] ¿Era plausible el cegamiento dado el tipo de intervencion?
- [ ] ¿Se evaluo si el cegamiento fue exitoso?

**Conduccion del ensayo:**
- [ ] ¿Cuanto fue el abandono? Mas del 20% es preocupante
- [ ] ¿Se realizo analisis por intencion de tratar (ITT)? Este es el estandar: analizar a todos los que fueron aleatorizados, independientemente de si completaron la intervencion
- [ ] ¿Se reportan los outcomes que dijeron medir en el protocolo? (o solo los que salieron significativos)
- [ ] ¿El follow-up fue suficientemente largo para el tipo de resultado?

**Reporte:**
- [ ] ¿El ensayo sigue el checklist CONSORT?
- [ ] ¿Fue preregistrado en ClinicalTrials.gov, ISRCTN u otro?

---

### Para Meta-analisis y Revisiones Sistematicas

**Busqueda:**
- [ ] ¿La busqueda fue sistematica y exhaustiva? (multiples bases de datos, sin restriccion de idioma)
- [ ] ¿Los criterios de inclusion/exclusion son claros y predefinidos?
- [ ] ¿Se busco literatura gris (tesis, conferencias, reportes no publicados)?

**Evaluacion de calidad:**
- [ ] ¿Se evaluo el riesgo de sesgo de cada estudio incluido? (con herramientas como RoB 2, Newcastle-Ottawa)
- [ ] ¿Se excluyeron estudios de baja calidad del analisis principal?

**Sesgo de publicacion:**
- [ ] ¿Se evaluo el sesgo de publicacion? (funnel plot, Egger's test, trim-and-fill)
- [ ] El funnel plot asimetrico sugiere que estudios negativos estan sin publicar

**Heterogeneidad:**
- [ ] ¿Se reporta I² (estadistico de heterogeneidad)?
  - I² < 25%: heterogeneidad baja
  - I² 25-75%: heterogeneidad moderada
  - I² > 75%: heterogeneidad alta — combinar estos estudios puede no tener sentido
- [ ] Si la heterogeneidad es alta, ¿se exploro por que? (analisis de subgrupo, meta-regresion)

**Reporte:**
- [ ] ¿El reporte sigue PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses)?
- [ ] ¿Hay un diagrama de flujo con los estudios incluidos y excluidos?

---

### Para Estudios Correlacionales / Transversales

**Diseno:**
- [ ] ¿La medicion fue simultanea o hay un orden temporal claro?
- [ ] Un diseno transversal no puede establecer causalidad aunque la correlacion sea fuerte
- [ ] ¿Que variables de confusion podrian explicar la asociacion observada?

**Confusores:**
- [ ] ¿Se controlaron estadisticamente los confusores relevantes? (regresion multiple, matching, PSM)
- [ ] ¿Cuales son los confusores no medidos que podrian invalidar la conclusion?
- [ ] Regla util: "¿Que tercera variable podria causar tanto X como Y?"

**Causalidad:**
- [ ] El lenguaje del paper ¿es causal ("produce", "genera") o asociativo ("se asocia con", "predice")?
- [ ] Los autores ¿reconocen la limitacion de no poder establecer causalidad?
- [ ] Criterios de Bradford Hill: temporalidad, consistencia, fuerza de la asociacion, gradiente dosis-respuesta, plausibilidad biologica — cuantos cumplen?

---

## 3. Los sesgos mas comunes

### Sesgo de publicacion
Los estudios con resultados positivos y significativos tienen mas probabilidad de ser publicados. Los estudios nulos "duermen en un cajon". Esto infla sistematicamente el tamano de efecto reportado en la literatura.

**Como detectarlo:** Funnel plot asimetrico en meta-analisis. Abundancia de estudios con p justo debajo de .05.

**Magnitud:** En psicologia social, se estima que el efecto real podria ser un 30-50% mas pequeno que el publicado, debido al sesgo de publicacion combinado con p-hacking.

---

### HARKing — Hypothesizing After Results are Known
El investigador obtiene resultados exploratorios y luego los presenta como si hubieran sido hipoteticos desde el principio. Convierte analisis exploratorios en confirmatorios de forma enganosa.

**Como detectarlo:** Ausencia de preregistro. Hipotesis muy especificas que calzan perfectamente con resultados. Lenguaje que mezcla exploratorio y confirmatorio sin distincion.

---

### P-hacking
Analizar los datos de multiples formas, con distintas subgrupos, covariables o metodos estadisticos hasta que aparece un p < .05. Cuando haces 20 pruebas, una saldra significativa por azar.

**Formas comunes:**
- Excluir outliers selectivamente hasta que el resultado mejora
- Agregar o quitar covariables
- Elegir el punto de corte de una variable continua para maximizar el efecto
- Reportar solo las condiciones que salieron significativas

**Como detectarlo:** Muchas comparaciones sin ajuste por multiplicidad. Ausencia de preregistro. Resultados que solo son significativos en subgrupos sin hipotesis previa.

---

### Sesgo WEIRD
Western, Educated, Industrialized, Rich, Democratic. La mayoria de los estudios en psicologia se hacen con estudiantes universitarios de paises de ingresos altos y luego se generalizan a "los humanos".

**Por que importa:** Efectos en cognicion, emocion, percepcion y comportamiento social muestran variacion sustancial entre culturas. Un efecto robusto en una muestra WEIRD puede no replicar en otras poblaciones.

**Ejemplo concreto:** La ilusion de Muller-Lyer varia sistematicamente entre culturas. El pensamiento analitico vs. holistico difiere entre culturas occidentales y del este asiatico. Los valores de autoestima y autovalorizacion tienen distribuciones distintas.

---

### Sesgo de confirmacion
Los investigadores (y los revisores) tienen mayor probabilidad de aceptar resultados que confirman sus expectativas teoricas. Afecta desde el diseno del estudio hasta la revision de pares.

**Como detectarlo:** Cuando la discusion ignora literatura contradictoria. Cuando los autores tienen publicaciones previas en la misma direccion que el nuevo resultado. Cuando la introduccion esta escrita de forma que solo un resultado era "el correcto".

---

### Sesgo de medicion
El instrumento o procedimiento de medicion introduce sistematicamente error en una direccion. Puede ser consciente (escala disenada para favorecer cierto resultado) o inconsciente (evaluador que sabe a que grupo pertenece el participante).

**Tipos comunes:**
- Sesgo del entrevistador: el evaluador sabe la hipotesis o la condicion del participante
- Sesgo de respuesta social: los participantes responden lo que creen que se espera
- Sesgo de memoria: retrospectivos que dependen de recuerdo exacto
- Efecto Hawthorne: cambio de comportamiento por saberse observado

---

### Sesgo de supervivencia
Solo se observan los casos que "sobrevivieron" a algun proceso de seleccion. Los casos que no sobrevivieron no estan disponibles para el analisis.

**Ejemplo clasico:** Estudiar a empresas exitosas para aprender que hacen diferente. Las empresas que hicieron lo mismo pero fracasaron no estan en la muestra.

**En psicologia:** Estudiar a personas que completaron una intervencion excluye a quienes la abandonaron (que suelen ser los que menos se beneficiaron).

---

## 4. El preregistro

### Que es
Un preregistro es el registro publico y fechado de la hipotesis, diseno, muestra planeada y plan de analisis de un estudio, hecho antes de recolectar datos. Crea un registro permanente de lo que se planeaba hacer versus lo que se termino haciendo.

### Por que importa
- Permite distinguir analisis confirmatorios (hipoteticos) de exploratorios
- Reduce el p-hacking y el HARKing
- Aumenta la transparencia sobre cambios al protocolo original
- Los estudios preregistrados que se publican tienen tamanos de efecto mas pequenos (mas realistas) que los no preregistrados

### Donde preregistrar

| Plataforma | Para que |
|------------|----------|
| **OSF (osf.io)** | Estudios academicos en general, psicologia, ciencias sociales. Gratuito. |
| **AsPredicted.org** | Preregistros breves y rapidos. Muy usado en psicologia experimental. |
| **ClinicalTrials.gov** | Obligatorio para ensayos clinicos en EEUU y muchos otros paises. |
| **ISRCTN** | Ensayos clinicos internacionales, alternativa a ClinicalTrials.gov. |
| **PROSPERO** | Revisiones sistematicas y meta-analisis. |

### Tipos de preregistro

**Preregistro estandar:** Se registra el plan antes de recolectar datos. El paper debe declarar que es preregistrado e indicar el numero de registro.

**Registered Report:** Formato de publicacion donde la revista acepta (o rechaza) el articulo basandose en la introduccion y el metodo, antes de que los datos sean recolectados. Garantiza publicacion independientemente del resultado. Es el estandar mas alto actualmente.

### Como leerlo en un paper
- Busca en el paper: "This study was preregistered at..." o "Preregistration: osf.io/xxxxx"
- Compara el plan preregistrado con lo que reportan: ¿los outcomes primarios son los mismos? ¿El tamano de muestra planeado coincide?
- Si hay desviaciones, ¿las justifican?

---

## 5. Poder estadistico: como estimarlo retroactivamente

El poder estadistico es la probabilidad de detectar un efecto real si existe. Convencionalmente, un poder de 80% o mas se considera adecuado.

**Poder = f(tamano de efecto, N, alpha)**

- Mayor N → mayor poder
- Mayor tamano de efecto → mayor poder
- Alpha mas flexible (0.10 en lugar de 0.05) → mayor poder

### Analisis retroactivo de poder (post-hoc power)

Si el estudio no reporto un calculo de poder a priori, podes estimar retroactivamente:

**Con el tamano de efecto observado:**
Usa G*Power (gratuito) o pwr en R:

```r
# En R, para una prueba t de dos muestras independientes:
library(pwr)
pwr.t.test(d = 0.3,         # tamano de efecto observado
           n = 40,           # N por grupo
           sig.level = 0.05,
           type = "two.sample")
# Esto devuelve el poder del estudio
```

**Interpretacion:**
- Poder < 0.50: el estudio no tenia capacidad razonable de detectar el efecto
- Poder entre 0.50-0.80: poder insuficiente, resultado negativo no es informativo
- Poder >= 0.80: adecuado

**Problema del analisis post-hoc con efecto observado:**
El tamano de efecto observado esta inflado si el resultado es significativo (sesgo del ganador). Para una estimacion mas conservadora, usa el tamano de efecto de estudios previos o el minimo efecto de interes clinico (SESOI: Smallest Effect Size of Interest).

### Senal de alerta practica
Un estudio con N = 30 tiene poder aproximado de:
- 17% para detectar d = 0.2 (efecto pequeno)
- 56% para detectar d = 0.5 (efecto mediano)
- 86% para detectar d = 0.8 (efecto grande)

Si un estudio con N = 30 reporta haber detectado un efecto pequeno, ese resultado es sospechoso: o el efecto es mas grande de lo que parece, o el resultado es un falso positivo.

---

## Recursos

- CONSORT (ensayos aleatorizados): consort-statement.org
- PRISMA (revisiones sistematicas): prisma-statement.org
- RoB 2 (herramienta de riesgo de sesgo para RCTs): cochrane.org
- G*Power (calculo de poder): gpower.hhu.de
- pwr (R): CRAN
- Catalog of Bias (Oxford): catalogofbias.org
