# Bump Chart

> Show rank changes over time.

![Preview](preview.png)

## Overview

The **Bump Chart** is a self-contained editorial diagram. Show rank changes over time. It ships as a **single-file React component** (inline SVG + Tailwind CSS) with no chart library, no data files, and no external stylesheets — copy the file in and it renders immediately.

Bump chart ranking six internal packages by weekly downloads across four quarters; legacy-http slides from first to sixth while fetch-kit takes the top rank in the second quarter and keeps it.

## When to use it

- Tool / package / library popularity over time
- Leaderboard movement quarter over quarter
- Cohort rank shifts that a line chart would bury

## Tech stack

| Layer | Technology | Role |
| ----- | ---------- | ---- |
| UI | **React 18+** | Function component with hooks, no classes |
| Types | **TypeScript 5+** | Typed props for safe, self-documenting usage |
| Styling | **Tailwind CSS** | Layout only, on the wrapper element |
| Graphics | **Inline SVG** | The entire diagram is hand-authored SVG |

## File anatomy

- `BumpChart.tsx` — the whole diagram in one file:

  1. **Font loading** — a `useEffect` injects the editorial font stack
     (Geist, Geist Mono, Instrument Serif) into the page once. It is idempotent,
     so rendering many diagrams never duplicates the stylesheet link.
  2. **Wrapper** — a `<div>` with Tailwind utilities (`w-full max-w-4xl mx-auto`)
     and a `data-diagram="bump"` attribute. Pass your own `className` to
     override sizing.
  3. **The SVG** — one `<svg viewBox="0 0 1000 500">` containing every element of the
     diagram. `bump-title` / `bump-desc` provide accessible names.

## Visual layers

Reading the SVG top to bottom:

- Rank lines connecting each item across time points
- The top rank emphasized in accent
- Rank numbers beside every time point
- A caption naming the winner and the fallen leader

Only meaningful when rank order is the message; magnitudes live in other charts.

## Props

| Prop        | Type     | Default                          | Description                       |
| ----------- | -------- | -------------------------------- | --------------------------------- |
| `className` | `string` | `"w-full max-w-4xl mx-auto"`     | Extra classes for the wrapper div |

## Usage

```tsx
   import BumpChart from "./components/BumpChart";

   export function Dashboard() {
     return <BumpChart className="w-full max-w-4xl mx-auto" />;
   }
   
```

## Customization

- **Sizing** — override `className` to control the wrapper width and margins.
- **Colors** — edit the SVG `fill` / `stroke` presentation attributes directly to match your brand palette.
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
  internal SVG ids (`bump-title`, patterns). Visual output is unaffected;
  only a11y tooling sees duplicated ids.
- **Tailwind optional** — the diagram itself is styled by SVG presentation
  attributes, so it renders even in a project without Tailwind; only the
  wrapper's utility classes need Tailwind.

## Credits

Adapted from [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)
(MIT License).
