# Mazos Anki — Psyche Vault

## Formato de las tarjetas

Cada tarjeta sigue este patrón:

```
Q: Pregunta concreta, una sola idea
A: Respuesta directa, 1-3 oraciones máximo
```

Una tarjeta por bloque. Los bloques se separan por línea en blanco.

---

## Cómo importar a Anki

### Opción A: Importar con el plugin "Markdown Importer"

1. Instala el plugin **MarkdownImporter** (Anki → Herramientas → Complementos → Obtener complementos → código: buscar en AnkiWeb).
2. En Anki, ve a Archivo → Importar Markdown.
3. Selecciona el archivo `.md` de este directorio.
4. El plugin detecta el patrón `Q:` / `A:` automáticamente.

### Opción B: Convertir a CSV y luego importar (sin plugins)

Usa este script de PowerShell para convertir cualquier mazo a CSV:

```powershell
$input_file = "01-historia.md"
$output_file = "01-historia.csv"

$lines = Get-Content $input_file
$cards = @()
$q = ""; $a = ""

foreach ($line in $lines) {
    if ($line -match "^Q: (.+)") { $q = $matches[1] }
    elseif ($line -match "^A: (.+)") {
        $a = $matches[1]
        if ($q -and $a) { $cards += '"' + $q + '","' + $a + '"' }
        $q = ""; $a = ""
    }
}

$cards | Out-File -Encoding UTF8 $output_file
Write-Host "Exportadas $($cards.Count) tarjetas a $output_file"
```

Luego en Anki:
1. Archivo → Importar
2. Selecciona el CSV generado
3. Tipo de nota: Básico (Anverso / Reverso)
4. Campo 1 → Anverso, Campo 2 → Reverso
5. Separador: Coma
6. Importar

### Opción C: Importar directo (CrowdAnki / AnkiConnect)

Si usas AnkiConnect con un script externo, el formato `Q:/A:` es compatible con la mayoría de herramientas de terceros (genanki, AnkiEditor, etc.).

---

## Estructura de mazos

| Archivo | Mazo | Tarjetas |
|---|---|---|
| `01-historia.md` | Historia de la Psicología | 40 |
| `02-psicoanalisis.md` | Psicoanálisis | 40 |
| `05-neurociencias.md` | Neurociencias | 40 |
| `08-psicopatologia.md` | Psicopatología | 40 |
| `11-metodologia.md` | Metodología e Investigación | 40 |
| `12-procesos.md` | Procesos Psicológicos Básicos | 40 |
| `13-cognitiva.md` | Psicología Cognitiva | 35 |
| `14-personalidad.md` | Personalidad | 40 |
| `16-psicologia-clinica.md` | Psicología Clínica | 41 |
| `17-psicobiologia.md` | Psicobiología | 40 |

---

## Convenciones de nomenclatura

Los nombres de archivo siguen el número de módulo del curriculum del proyecto (`curriculum.md`). Si se crean más mazos, seguir la misma numeración.

---

## Recomendaciones de estudio

- Estudia un mazo por semana como mínimo.
- Usa el intervalo de repetición espaciada predeterminado de Anki.
- Si fallas una tarjeta, no la memorices: busca la fuente en `/modulos/` y lee el contexto.
- Las tarjetas están diseñadas para probar comprensión, no recitación literal.
