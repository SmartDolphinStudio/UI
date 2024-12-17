# Diagram Kit

46 editorial diagram types, each rebuilt as a **single-file React + Tailwind + TypeScript + SVG**
component, with an English README and a PNG preview per type.

Layout

```
D:\diagram-kit
├─ architecture\   ArchitectureDiagram.tsx   README.md   preview.png
├─ bar\             BarDiagram.tsx             README.md   preview.png
├─ ...
└─ waterfall\       WaterfallChart.tsx         README.md   preview.png
```

Each folder is standalone: copy the `.tsx` into any React project, import it, and it renders.
No chart library, no data files, no external CSS. Fonts (Geist / Geist Mono / Instrument Serif)
are loaded automatically from Google Fonts, with safe fallbacks.
