# Mapa de Módulos — Conexiones y Dependencias

> Documento de síntesis transversal del curriculum psyche-vault (22 módulos).
> Actualizado: 2026-06-30

---

## 1. Diagrama de dependencias y flujos

```
FUNDAMENTOS EPISTEMOLOGICOS
============================

[00 Orientacion] ──────────────────────────────────────────────┐
      │                                                         │
      ▼                                                         │
[01 Historia y Escuelas] ←──────────────── BASE HISTORICA      │
      │         │                                               │
      │         └──────── [11 Metodologia] ←──────────────────┘
      │                         │
      │              (hilo critico transversal)
      │                         │
      ▼                         ▼
[12 Procesos Basicos] ──── [13 Psicologia Cognitiva]
      │                         │
      ▼                         ▼
      └─────────── [17 Psicobiologia] ────────────────────────┐
                        │                                      │
      ┌─────────────────┴──────────────────┐                  │
      ▼                 ▼                  ▼                   │
[02 Psicoanalisis]  [03 Conductismo/   [04 Humanismo/         │
      │              Cognitivismo]      Existencialismo]        │
      │                  │                  │                   │
      └──────────────────┼──────────────────┘                  │
                         │                                      │
                         ▼                                      │
                    [14 Personalidad] ◄──────────────────────┐ │
                         │                                   │ │
                         ▼                                   │ │
                    [05 Neurociencias] ◄────────────────── ──┘ │
                         │                                      │
              ┌──────────┴──────────┐                          │
              ▼                     ▼                           │
         [06 Social]          [21 Neuropsicologia]             │
              │                     │                           │
              ▼                     ▼                           │
         [07 Desarrollo]       [18 Psicofarmacologia] ◄────────┘
              │
    ┌─────────┴─────────┐
    ▼                   ▼
[08 Psicopatologia]  [19 Psicologia
    │                 Educacional]
    │
    ├──────────────► [16 Clinica e Intervencion]
    │                        │
    ▼                        ▼
[09 Evaluacion]         [18 Psicofarmacologia]
    │
    ├──────────────► [21 Neuropsicologia Clinica]
    │
    ▼
[15 Etica]
    │
    └──────────────► [20 Psicologia Salud]
                          │
                          └──────────► [22 Organizacional]
                                              │
                                              ▼
                                         [10 Temas Propios]
```

### Lectura del diagrama

- Flecha `──►` : dependencia directa (conviene hacer A antes que B)
- Flecha `◄────` : retroalimenta (B enriquece la comprension de A)
- Bifurcaciones `┌─┤─┐` : modulos que se ramifican en paralelo

---

## 2. Conexiones por concepto transversal

### 2.1 El Apego — Modulos 07, 02, 17, 16, 08, 21

El apego es uno de los conceptos con mayor poder explicativo del curriculum.
Aparece en seis modulos con angulos distintos que se complementan:

| Modulo | Perspectiva sobre el apego |
|--------|---------------------------|
| **07 Desarrollo** | Nucleo teorico: Bowlby y Ainsworth. Patrones seguros/ansiosos/evitativos/desorganizados. El apego como sistema motivacional biologico. |
| **02 Psicoanalisis** | Raiz conceptual: relaciones de objeto (Winnicott, Klein, Mahler). El vinculo temprano como prototipo de todas las relaciones. |
| **17 Psicobiologia** | Mecanismos neurologicos del apego: oxitocina, cortisol, eje HPA. El estres de separacion como respuesta fisiologica medible. |
| **16 Clinica** | Apego adulto y psicoterapia: relacion terapeutica como espacio de reparacion vincular. Teoria del apego aplicada a TCC, DBT y terapias de tercera ola. |
| **08 Psicopatologia** | Patrones de apego desorganizado como factor de riesgo para TPL, TEPT, trastornos de la personalidad del cluster B. |
| **21 Neuropsicologia** | Apego y desarrollo cerebral: los primeros anos moldean la arquitectura prefrontal y la capacidad de regulacion emocional. |

**Ruta de estudio recomendada para dominar el concepto:**
07 → 02 → 17 → 08 → 16 → 21

---

### 2.2 La Regulacion Emocional — Modulos 12, 05, 16, 17, 07

La regulacion emocional recorre el curriculum como un hilo que va de lo basico a lo clinico:

| Modulo | Aporte especifico |
|--------|------------------|
| **12 Procesos Basicos** | Definicion de emocion. Componentes (fisiologico, conductual, cognitivo). Teorias clasicas: James-Lange, Cannon-Bard, Schachter-Singer. |
| **05 Neurociencias** | Amigdala, cortex prefrontal, insula: la arquitectura neural de la regulacion. LeDoux y el "camino corto" del miedo. Damasio y el marcador somatico. |
| **17 Psicobiologia** | El eje HPA y el SNA. Cortisol y estres cronico. La regulacion emocional como fenomeno neuroendocrino. |
| **07 Desarrollo** | Como se desarrolla la capacidad de regular emociones. Corregulacion cuidador-infante. Ventana de tolerancia de Siegel. |
| **16 Clinica** | Intervenciones: regulacion emocional en DBT (Linehan), mindfulness, defusion cognitiva en ACT (Hayes), tecnicas de TCC de Beck. |

**Ruta de estudio recomendada:**
12 → 05 → 17 → 07 → 16

---

### 2.3 El Debate Naturaleza-Crianza — Modulos 17, 07, 14, 08, 05

Uno de los debates fundacionales de la psicologia. Cada modulo lo aborda desde un angulo:

| Modulo | Posicion en el debate |
|--------|-----------------------|
| **17 Psicobiologia** | La base biologica de la conducta. Genetica del comportamiento, epigenetica, heritabilidad. Gemelos monocigotivos como experimento natural. |
| **07 Desarrollo** | Interaccion genes-ambiente a lo largo del ciclo vital. Piaget (constructivismo) vs Vygotsky (socioculturalismo). El concepto de plasticidad. |
| **14 Personalidad** | El debate en personalidad: Big Five tiene heritabilidad ~50%. Mischel y la critica situacionista. La interaccion persona-situacion. |
| **08 Psicopatologia** | Etiologia de los trastornos: vulnerabilidad genetica + estresores ambientales. Modelo diatesis-estres. Debate en esquizofrenia, depresion, autismo. |
| **05 Neurociencias** | Neuroplasticidad como evidencia de que el ambiente modifica el cerebro. La experiencia cambia la estructura neuronal. |

**Sintesis del debate (posicion actual del campo):**
No es naturaleza O crianza, es naturaleza A TRAVES DE crianza. La epigenetica mostro que los genes se expresan segun el ambiente, y que el ambiente moldea estructuras biologicas.

---

### 2.4 La Evidencia Empirica como Hilo Conductor — Modulo 11 + todos

El modulo 11 (Metodologia) es transversal a todo el curriculum.
Su funcion no es ensenar estadistica en el vacio, sino dotar al estudiante de las
herramientas para evaluar la calidad de la evidencia en cada modulo.

| Tipo de pregunta critica | Modulos donde aparece |
|--------------------------|----------------------|
| ¿Este resultado se replicó? | 03, 06, 14 (crisis de replicabilidad) |
| ¿El tamaño del efecto es relevante? | 16, 19, 20 |
| ¿El diseño permite inferencia causal? | 06, 07, 11, 17 |
| ¿Qué mide realmente este test? | 09, 14 |
| ¿Hay conflictos de interes en este estudio? | 11, 15, 18 |
| ¿El DSM refleja categorias naturales o artificiales? | 08, 14, 11 |
| ¿Hay evidencia para esta psicoterapia? | 16, 11 (meta-analisis de Wampold) |
| ¿Que dice la evidencia sobre neuroimagen? | 05, 21, 17 |

**El modulo 11 no se hace una vez y se olvida. Se aplica en cada lectura de paper,
en cada afirmacion teorica, en cada discusion de resultado clinico.**

---

## 3. Tabla de prerequisitos recomendados

Para cada modulo avanzado, los modulos que conviene haber completado antes:

| Modulo a estudiar | Prerequisitos recomendados | Razon |
|-------------------|---------------------------|-------|
| **02 Psicoanalisis** | 01, 12 | Contexto historico + procesos mentales basicos |
| **03 Conductismo/Cognitivismo** | 01, 12, 11 | Evaluar los experimentos clasicos criticamente |
| **04 Humanismo** | 01, 02, 03 | Reaccion a las escuelas anteriores; sin contexto pierde fuerza |
| **05 Neurociencias** | 12, 17 | Sin procesos basicos y psicobiologia, la neurociencia es memorizacion |
| **06 Social** | 03, 12, 11 | Experimentos clasicos requieren lectura metodologica critica |
| **07 Desarrollo** | 05, 02, 03 | Integra perspectivas biologicas, psicoanalıticas y conductuales |
| **08 Psicopatologia** | 07, 05, 14, 12 | Requiere entender desarrollo, neurociencia y personalidad |
| **09 Evaluacion** | 08, 11, 14 | Diagnostico supone conocer psicopatologia y psicometria |
| **13 Cognitiva** | 12, 03 | Extension formal del conductismo-cognitivismo |
| **14 Personalidad** | 02, 03, 04, 07 | Integra todas las escuelas; es sintesis de perspectivas |
| **16 Clinica** | 08, 03, 04, 07 | Intervencion supone saber que se trata y como se desarrollo |
| **17 Psicobiologia** | 05, 12 | Neurociencia aplicada al comportamiento; requiere base neuro |
| **18 Psicofarmacologia** | 05, 08, 17 | Farmacos actuan sobre cerebro y trastornos especificos |
| **19 Educacional** | 07, 03, 13 | Aprendizaje, desarrollo y cognicion son su base |
| **20 Salud** | 05, 07, 17, 16 | Biopsicosocial requiere todas las perspectivas |
| **21 Neuropsicologia** | 05, 08, 09, 17 | Evaluacion neuropsicologica requiere psicologia clinica y neuro |
| **22 Organizacional** | 06, 14, 04 | Social, personalidad y motivacion son sus pilares |

---

## 4. Tabla de modulos complementarios

Pares de modulos que se amplifican mutuamente — hacerlos en secuencia cercana maximiza la integracion:

| Par | Por que se amplifican |
|-----|----------------------|
| **02 + 16** | El psicoanalisis fundó la psicoterapia; el modulo 16 la transformo con evidencia. El contraste clarifica que permanece y que se abandono. |
| **03 + 13** | El conductismo-cognitivismo (03) es la historia; la psicologia cognitiva (13) es la version experimental y formal. |
| **05 + 17** | Neurociencias (05) da el panorama general del cerebro; psicobiologia (17) profundiza en genetica, SNA y ejes hormonales. |
| **05 + 21** | Neurociencias (05) es el mapa; neuropsicologia clinica (21) es la aplicacion cuando algo en ese mapa falla. |
| **07 + 19** | Desarrollo humano (07) es la base teorica; psicologia educacional (19) es su aplicacion en contextos de aprendizaje formal. |
| **08 + 16** | Psicopatologia (08) describe los trastornos; intervencion clinica (16) explica como tratarlos. Son las dos caras de la misma moneda. |
| **08 + 18** | Saber que trastornos existen (08) hace inteligible por que un farmaco actua de cierta manera (18). |
| **09 + 21** | Evaluacion psicologica (09) y evaluacion neuropsicologica (21) comparten logica pero instrumentos distintos. Juntos dan vision completa. |
| **11 + 06** | Metodologia (11) hace que los experimentos sociales clasicos de Milgram y Zimbardo sean analizables criticamente en vez de asombrosos. |
| **14 + 08** | Personalidad (14) y psicopatologia (08) son continuos: los trastornos de la personalidad son el punto de interseccion literal. |
| **04 + 22** | El humanismo (04) con Maslow y Rogers es la base teorica del liderazgo, la motivacion laboral y el desarrollo organizacional (22). |
| **17 + 18** | Psicobiologia (17) explica el sustrato; psicofarmacologia (18) explica como los farmacos lo modifican. Son biologia y quimica del mismo sistema. |
| **16 + 20** | Intervencion clinica (16) y psicologia de la salud (20) comparten poblacion, pero la salud integra lo biomedico; el contraste es util. |

---

## 5. Los grandes autores y en que modulos aparecen

### Sigmund Freud

| Rol | Modulo |
|-----|--------|
| **Central** | 02 Psicoanalisis |
| Secundario — contexto historico | 01 Historia y Escuelas |
| Secundario — critica y superacion | 03 Conductismo/Cognitivismo |
| Secundario — raices de la clinica | 16 Clinica e Intervencion |
| Secundario — mecanismos de defensa | 14 Personalidad |
| Secundario — concepto de trauma | 08 Psicopatologia |

---

### B.F. Skinner

| Rol | Modulo |
|-----|--------|
| **Central** | 03 Conductismo/Cognitivismo |
| Secundario — contexto historico | 01 Historia |
| Secundario — condicionamiento operante | 19 Educacional |
| Secundario — modificacion de conducta | 16 Clinica |
| Secundario — conducta y ambiente | 06 Social (Bandura lo cita para diferenciarse) |

---

### Jean Piaget

| Rol | Modulo |
|-----|--------|
| **Central** | 07 Desarrollo Humano |
| Secundario — estadios cognitivos | 13 Cognitiva |
| Secundario — constructivismo | 19 Educacional |
| Secundario — epistemologia genetica | 01 Historia |
| Secundario — evaluacion del desarrollo | 09 Evaluacion |

---

### Lev Vygotsky

| Rol | Modulo |
|-----|--------|
| **Central** | 19 Educacional (ZDP, andamiaje) |
| Secundario — desarrollo sociocultural | 07 Desarrollo |
| Secundario — cognicion como practica social | 13 Cognitiva |
| Secundario — lenguaje y pensamiento | 12 Procesos Basicos |

---

### John Bowlby

| Rol | Modulo |
|-----|--------|
| **Central** | 07 Desarrollo Humano |
| Secundario — apego adulto | 16 Clinica |
| Secundario — vinculo y psicopatologia | 08 Psicopatologia |
| Secundario — bases biologicas del apego | 17 Psicobiologia |
| Secundario — apego y cerebro | 21 Neuropsicologia |

---

### Mary Ainsworth

| Rol | Modulo |
|-----|--------|
| **Central** | 07 Desarrollo Humano (Situacion Extrana) |
| Secundario — tipos de apego | 08 Psicopatologia |
| Secundario — evaluacion del apego | 09 Evaluacion |
| Secundario — apego y psicoterapia | 16 Clinica |

---

### Aaron Beck

| Rol | Modulo |
|-----|--------|
| **Central** | 03 Conductismo/Cognitivismo (TCC) |
| **Central** | 16 Clinica e Intervencion (protocolo TCC) |
| Secundario — distorsiones cognitivas | 13 Cognitiva |
| Secundario — evaluacion (escalas BDI, BAI) | 09 Evaluacion |
| Secundario — cognicion y psicopatologia | 08 Psicopatologia |

---

### Albert Bandura

| Rol | Modulo |
|-----|--------|
| **Central** | 03 Conductismo/Cognitivismo (aprendizaje social) |
| Secundario — autoeficacia | 04 Humanismo (contraste con Rogers) |
| Secundario — modelado | 19 Educacional |
| Secundario — autoeficacia laboral | 22 Organizacional |
| Secundario — aprendizaje observacional | 06 Social |

---

### Daniel Kahneman

| Rol | Modulo |
|-----|--------|
| **Central** | 03 Conductismo/Cognitivismo (sesgos) |
| **Central** | 13 Psicologia Cognitiva (Sistema 1 y Sistema 2) |
| Secundario — heuristicos y sesgos sociales | 06 Social |
| Secundario — toma de decisiones clinicas | 16 Clinica |
| Secundario — juicio bajo incertidumbre | 11 Metodologia |

---

### Erik Erikson

| Rol | Modulo |
|-----|--------|
| **Central** | 07 Desarrollo Humano (ciclo vital completo) |
| Secundario — identidad y adolescencia | 14 Personalidad |
| Secundario — integridad en vejez | 20 Salud (envejecimiento) |
| Secundario — etapas en contexto clinico | 16 Clinica |

---

### Stanley Milgram

| Rol | Modulo |
|-----|--------|
| **Central** | 06 Psicologia Social (obediencia a la autoridad) |
| Secundario — implicaciones eticas | 15 Etica Profesional |
| Secundario — contexto historico | 01 Historia |
| Secundario — metodologia y debate etico | 11 Metodologia |

---

### Abraham Maslow

| Rol | Modulo |
|-----|--------|
| **Central** | 04 Humanismo y Existencialismo |
| Secundario — motivacion laboral | 22 Organizacional |
| Secundario — jerarquia de necesidades | 12 Procesos Basicos (motivacion) |
| Secundario — autorrealizacion y salud | 20 Salud |

---

### Carl Rogers

| Rol | Modulo |
|-----|--------|
| **Central** | 04 Humanismo y Existencialismo |
| **Central** | 16 Clinica (condiciones del cambio: empatia, congruencia, aceptacion) |
| Secundario — relacion terapeutica | 15 Etica |
| Secundario — aprendizaje centrado en el estudiante | 19 Educacional |
| Secundario — clima organizacional | 22 Organizacional |

---

### Viktor Frankl

| Rol | Modulo |
|-----|--------|
| **Central** | 04 Humanismo y Existencialismo (logoterapia) |
| Secundario — sentido y psicopatologia | 08 Psicopatologia (depresion existencial) |
| Secundario — resiliencia | 20 Salud |
| Secundario — motivacion intrinseca | 22 Organizacional |

---

### Antonio Damasio

| Rol | Modulo |
|-----|--------|
| **Central** | 05 Neurociencias (marcador somatico, razon y emocion) |
| Secundario — emocion y decision | 13 Cognitiva |
| Secundario — conciencia y self | 12 Procesos Basicos |
| Secundario — neurologia del sindrome frontal | 21 Neuropsicologia |

---

### Joseph LeDoux

| Rol | Modulo |
|-----|--------|
| **Central** | 05 Neurociencias (amigdala y miedo) |
| Secundario — regulacion emocional | 16 Clinica |
| Secundario — TEPT y miedo condicionado | 08 Psicopatologia |
| Secundario — bases neurales de la emocion | 12 Procesos Basicos |
| Secundario — circuitos del miedo | 17 Psicobiologia |

---

### Christina Maslach

| Rol | Modulo |
|-----|--------|
| **Central** | 22 Organizacional (burnout, Maslach Burnout Inventory) |
| Secundario — estres laboral | 20 Salud |
| Secundario — desgaste en profesiones de ayuda | 15 Etica |
| Secundario — burnout como psicopatologia | 08 Psicopatologia |

---

### Marsha Linehan

| Rol | Modulo |
|-----|--------|
| **Central** | 16 Clinica (DBT — Terapia Dialectica Conductual) |
| Secundario — TPL y regulacion emocional | 08 Psicopatologia |
| Secundario — mindfulness como tecnica | 12 Procesos Basicos |
| Secundario — evidencia en psicoterapia | 11 Metodologia |

---

### Steven Hayes

| Rol | Modulo |
|-----|--------|
| **Central** | 16 Clinica (ACT — Terapia de Aceptacion y Compromiso) |
| Secundario — conductismo radical y tercera ola | 03 Conductismo |
| Secundario — defusion cognitiva | 13 Cognitiva |
| Secundario — valores y sentido | 04 Humanismo (punto de contacto) |

---

### Bruce Wampold

| Rol | Modulo |
|-----|--------|
| **Central** | 16 Clinica (modelo contextual; factores comunes) |
| Secundario — meta-analisis en psicoterapia | 11 Metodologia |
| Secundario — relacion terapeutica como variable | 15 Etica |

---

## Notas de uso de este mapa

1. Este documento se actualiza a medida que avanzan los modulos.
2. El orden real de estudio puede diferir del sugerido; las tablas de prerequisitos
   indican dependencias logicas, no obligaciones rigidas.
3. Cuando un concepto aparece en varios modulos, el modulo donde aparece como
   "Central" es donde se estudia en profundidad. Las apariciones secundarias
   son menciones, aplicaciones o contrastes.
4. El modulo 11 (Metodologia) funciona como lente critico: aplicarlo retroactivamente
   sobre cualquier modulo ya estudiado es ejercicio recomendado permanentemente.
