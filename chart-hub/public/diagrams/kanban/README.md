# Kanban Board

> Work in progress across columns, with WIP limits.

![Preview](preview.png)

## Overview

The **Kanban Board** is a self-contained editorial diagram. Work in progress across columns, with WIP limits. It ships as a **single-file React component** (inline SVG + Tailwind CSS) with no chart library, no data files, and no external stylesheets — copy the file in and it renders immediately.

Kanban board showing a platform team's work-in-progress across backlog, in-progress, review, and done columns, with the in-progress column over its WIP limit and one blocked card awaiting a vendor maintenance window.

## When to use it

- Team process documentation
- Sprint reviews and WIP policy explainers
- Delivery workflow onboarding

## Tech stack

| Layer | Technology | Role |
| ----- | ---------- | ---- |
| UI | **React 18+** | Function component with hooks, no classes |
| Types | **TypeScript 5+** | Typed props for safe, self-documenting usage |
| Styling | **Tailwind CSS** | Layout only, on the wrapper element |
| Graphics | **Inline SVG** | The entire diagram is hand-authored SVG |

## File anatomy

- `KanbanBoard.tsx` — the whole diagram in one file:

  1. **Font loading** — a `useEffect` injects the editorial font stack
     (Geist, Geist Mono, Instrument Serif) into the page once. It is idempotent,
     so rendering many diagrams never duplicates the stylesheet link.
  2. **Wrapper** — a `<div>` with Tailwind utilities (`w-full max-w-4xl mx-auto`)
     and a `data-diagram="kanban"` attribute. Pass your own `className` to
     override sizing.
  3. **The SVG** — one `<svg viewBox="0 0 1120 440">` containing every element of the
     diagram. `kanban-title` / `kanban-desc` provide accessible names.

## Visual layers

Reading the SVG top to bottom:

- Column headers with WIP limits
- Task cards under each column
- An over-limit column and a blocked card highlighted
- Legend for card states

The WIP-limit breach is the story; the accent makes it unmissable.

## Props

| Prop        | Type     | Default                          | Description                       |
| ----------- | -------- | -------------------------------- | --------------------------------- |
| `className` | `string` | `"w-full max-w-4xl mx-auto"`     | Extra classes for the wrapper div |

## Usage

```tsx
   import KanbanBoard from "./components/KanbanBoard";

   export function Dashboard() {
     return <KanbanBoard className="w-full max-w-4xl mx-auto" />;
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
  internal SVG ids (`kanban-title`, patterns). Visual output is unaffected;
  only a11y tooling sees duplicated ids.
- **Tailwind optional** — the diagram itself is styled by SVG presentation
  attributes, so it renders even in a project without Tailwind; only the
  wrapper's utility classes need Tailwind.

## Credits

Adapted from [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)
(MIT License).
