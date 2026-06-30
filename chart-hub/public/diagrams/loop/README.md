# Loop / Cycle Diagram

> A cyclic process with a central shared state.

![Preview](preview.png)

## Overview

The **Loop / Cycle Diagram** is a self-contained editorial diagram. A cyclic process with a central shared state. It ships as a **single-file React component** (inline SVG + Tailwind CSS) with no chart library, no data files, and no external stylesheets — copy the file in and it renders immediately.

Six stations flow clockwise from Capture through Learn and back to Capture. Each station writes shared state into one central memory hub, with Decide highlighted as the human approval gate.

## When to use it

- Agent loops and feedback systems
- Continuous improvement and habit cycles
- Any process that feeds back into itself

## Tech stack

| Layer | Technology | Role |
| ----- | ---------- | ---- |
| UI | **React 18+** | Function component with hooks, no classes |
| Types | **TypeScript 5+** | Typed props for safe, self-documenting usage |
| Styling | **Tailwind CSS** | Layout only, on the wrapper element |
| Graphics | **Inline SVG** | The entire diagram is hand-authored SVG |

## File anatomy

- `LoopDiagram.tsx` — the whole diagram in one file:

  1. **Font loading** — a `useEffect` injects the editorial font stack
     (Geist, Geist Mono, Instrument Serif) into the page once. It is idempotent,
     so rendering many diagrams never duplicates the stylesheet link.
  2. **Wrapper** — a `<div>` with Tailwind utilities (`w-full max-w-4xl mx-auto`)
     and a `data-diagram="loop"` attribute. Pass your own `className` to
     override sizing.
  3. **The SVG** — one `<svg viewBox="0 0 1040 680">` containing every element of the
     diagram. `loop-title` / `loop-desc` provide accessible names.
  4. **Scoped CSS** — this diagram relies on CSS classes inside the
     SVG, so the component injects a small scoped stylesheet
     (`dd-loop`-prefixed selectors) in the same effect. It cannot
     collide with your own styles.

## Visual layers

Reading the SVG top to bottom:

- Six station nodes on a ring
- A central hub every station writes to
- Clockwise connectors with arrow labels
- The human-approval station (Decide) in accent

The ring + hub layout says 'shared state, cyclic flow' instantly.

## Props

| Prop        | Type     | Default                          | Description                       |
| ----------- | -------- | -------------------------------- | --------------------------------- |
| `className` | `string` | `"w-full max-w-4xl mx-auto"`     | Extra classes for the wrapper div |

## Usage

```tsx
   import LoopDiagram from "./components/LoopDiagram";

   export function Dashboard() {
     return <LoopDiagram className="w-full max-w-4xl mx-auto" />;
   }
   
```

## Customization

- **Sizing** — override `className` to control the wrapper width and margins.
- **Colors** — the scoped stylesheet defines CSS custom properties (`--paper`, `--ink`, `--accent`, …) that you can redefine to match your brand.
- **Content** — the SVG is hand-authored; edit labels and geometry directly in the JSX to reflect your own data.

## Accessibility

- `role="img"` with an `aria-labelledby` title + description
- Text inside the SVG is real text, not images — screen-reader friendly
- Focus-safe: no interactive elements, safe to embed anywhere

## Browser support

Runs anywhere React 18+ runs — Chrome, Firefox, Safari, Edge. No WebGL, no canvas,
no network requests beyond the one-time Google Fonts stylesheet.

## Notes

- **Responsive** — the SVG scales to its container width via the `viewBox`;
  control size with `className` (`max-w-*`, `w-full`, etc.).
- **Fonts** — Geist / Geist Mono / Instrument Serif are loaded from Google
  Fonts automatically. Offline, they fall back to `system-ui` / `monospace`
  without breaking the layout.
- **Duplicates** — rendering the same component twice on one page repeats
  internal SVG ids (`loop-title`, patterns). Visual output is unaffected;
  only a11y tooling sees duplicated ids.
- **Tailwind optional** — the diagram itself is styled by SVG presentation
  attributes, so it renders even in a project without Tailwind; only the
  wrapper's utility classes need Tailwind.

## Credits

Adapted from [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)
(MIT License).
