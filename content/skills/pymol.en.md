---
title: PyMOL Molecular Visualization
description: >-
  Render high-quality 3D molecular structures, perform structural alignments,
  measure distances, and color structures by pLDDT confidence.
oneLiner: Visualize and render molecular structures in 3D using PyMOL.
seoTitle: PyMOL Molecular Visualization — Skillbook Agents
seoDescription: >-
  Guide for Agents to render protein structures, analyze binding pockets, and
  create molecular graphics using PyMOL.
---


## 📖 Why Do We Need This Skill?

Raw protein coordinate files (mmCIF, PDB) are difficult to analyze visually. PyMOL converts 3D atomic coordinates into high-quality visual renders — helping researchers analyze binding sites, superimpose structures, and generate figures for publication.

- **Headless rendering**: Execute rendering scripts on servers without GPUs or display displays (utilizing OSMesa software rendering)
- **Automation**: Write Python scripts to orchestrate rendering pipelines
- **Rich structure analysis**: Measure bond distances, color residues by B-factor/pLDDT, perform structural superpositions, and run mutagenesis simulations

## ⚙️ How It Works

```
Structure file (.cif/.pdb) → PyMOL Python script → 
Render PNG + Save .pse session → Report metrics
```

1. **Script creation**: Write Python scripts containing PEP 0723 metadata headers, importing `pymol-open-source-whl`
2. **Headless execution**: Run commands like `uv run render.py` setting `PYOPENGL_PLATFORM=osmesa`
3. **Output compilation**: Export PNG images and `.pse` PyMOL session files (which can be opened in PyMOL desktop)

All scripts MUST include the required initialization boilerplate and terminate with `cmd.quit()`.

## 🚀 How to use

### Universal

```markdown
# PyMOL Visualization Rules
- Always check that the structure file exists before writing scripts.
- Every script MUST have initialization boilerplate: pymol.finish_launching() before importing cmd from pymol.
- Always save the .pse session file alongside the PNG output.
- Always call cmd.quit() at the end of the script — omitting this will cause the process to hang.
- Use cmd.png() for output, DO NOT use cmd.ray() or cmd.draw() (incompatible with OSMesa).
- Verify structure load: check that cmd.count_atoms("all") > 0 after loading.
```

### Cursor (.cursorrules)

```markdown
# PyMOL Rules
- Software rendering only (OSMesa). Do not use hardware acceleration.
- Output paths must be absolute or relative to the project root.
- Combine with AlphaFold or PDB skill to download structures before visualizing.
- 16+ recipes available: cartoon coloring, B-factor, surface, pocket, superposition, mutagenesis.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I want to generate a 3D render of insulin to include in a paper. Help me write a PyMOL script that colors chains and exports a high-quality image."

### 🤖 AI Agent (Equipped with this Skill):
> "I will create a PyMOL script to automate the high-resolution rendering:"
>
> 1. **Scripting Setup**: I wrote a PML script that:
>    * Downloads the insulin structure from the PDB (ID: **1MSO**).
>    * Renders the structure in cartoon mode (`show cartoon`).
>    * Colors chains A and B in distinct gradient palettes.
>    * Displays key disulfide bonds as yellow sticks (`show sticks` on Cysteine residues).
>    * Orients the camera and renders a transparent PNG under ray tracing (`ray 1200, 900`).
> 2. **Run Guide**: I provide the complete PML file instructions so you can execute `run script.pml` inside PyMOL in seconds.
>
> *The professional PyMOL visualization script is prepared, ready for publication-grade rendering.*

## ⚠️ Gotchas and notes

- **Structure File Required**: Make sure structure coordinate files are downloaded first using the AlphaFold or PDB skills.
- **Boilerplate placement**: In Python, import commands `from pymol import cmd` MUST be placed after `pymol.finish_launching()`, never before.
- **Visualization only**: PyMOL is designed for visual rendering and analysis; it does not run molecular dynamics or docking simulations.
- **Session file size**: Renders with complex surface details can produce `.pse` files larger than 500 MB — adjust `--max_output_mb` constraints accordingly.
