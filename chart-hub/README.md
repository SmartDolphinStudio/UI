# ComponentHub

A chart and diagram component gallery built with React 19, TypeScript and Tailwind CSS. It collects a hand-crafted set of reusable chart components — from classic statistical charts to architecture and process diagrams — each with its source code and documentation viewable in the browser.

---

## Gallery

The gallery ships with **46 chart components**, including:

- **Statistical charts** — Bar, Line, Scatter, Bubble, Radar, Polar, Waterfall, Slopegraph, Ridgeline, Beeswarm, Bump, Treemap, Sankey, Gantt, Timeline.
- **Architecture & data diagrams** — Architecture, Deployment, Layered Stack, Medallion, Data Lake, Database Schema, Entity-Relationship, Data Flow, Dependency Graph.
- **Process & structure diagrams** — Flowchart, Sequence, State Machine, Swimlane, Process, Venn, Pyramid, Fishbone, Wardley Map, Org Chart, Tree, Loop, Kanban.
- **Planning & analysis maps** — Quadrant Matrix, User Journey Map, User Story Map, Access / Permission Matrix, IT Landscape.

Every component folder under `public/diagrams/` contains the React source (`*.tsx`), a rendered preview image and a README document describing the component.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19, React Router 7 |
| Build | Vite 8, TypeScript 6 |
| Styling | Tailwind CSS 4 |
| Rendering | React Markdown, remark-gfm, Prism React Renderer |

---

## Getting Started

```bash
pnpm install
pnpm dev
```

The development server starts with hot module replacement and opens at `http://localhost:5173`.

### Build

```bash
pnpm build
```

Output is written to `dist/`.

---

## License

**GNU General Public License v2.0 (GPLv2)** — see the source file headers for the full disclaimer. Copyright (C) 2026 Astraeus.
