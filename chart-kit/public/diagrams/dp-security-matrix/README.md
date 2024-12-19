# Access / Permission Matrix

> Role x component access at a glance.

![Preview](preview.png)

## Overview

The **Access / Permission Matrix** is a self-contained editorial diagram. Role x component access at a glance. It ships as a **single-file React component** (inline SVG + Tailwind CSS) with no chart library, no data files, and no external stylesheets — copy the file in and it renders immediately.

A five by five permission matrix for platform roles and components.

## When to use it

- Security documentation and RBAC design reviews
- Onboarding guides that explain who can do what
- Access audits and permission change proposals

## Tech stack

| Layer | Technology | Role |
| ----- | ---------- | ---- |
| UI | **React 18+** | Function component with hooks, no classes |
| Types | **TypeScript 5+** | Typed props for safe, self-documenting usage |
| Styling | **Tailwind CSS** | Layout only, on the wrapper element |
| Graphics | **Inline SVG** | The entire diagram is hand-authored SVG |

## File anatomy

- `AccessMatrix.tsx` — the whole diagram in one file:

  1. **Font loading** — a `useEffect` injects the editorial font stack
     (Geist, Geist Mono, Instrument Serif) into the page once. It is idempotent,
     so rendering many diagrams never duplicates the stylesheet link.
  2. **Wrapper** — a `<div>` with Tailwind utilities (`w-full max-w-4xl mx-auto`)
     and a `data-diagram="dp-security-matrix"` attribute. Pass your own `className` to
     override sizing.
  3. **The SVG** — one `<svg viewBox="0 0 1084 400">` containing every element of the
     diagram. `dp-security-matrix-title` / `dp-security-matrix-desc` provide accessible names.
  4. **Scoped CSS** — this diagram relies on CSS classes inside the
     SVG, so the component injects a small scoped stylesheet
     (`dd-dp-security-matrix`-prefixed selectors) in the same effect. It cannot
     collide with your own styles.

## Visual layers

Reading the SVG top to bottom:

- Role headers and component headers
- Permission cells coded read / write / none / full
- A focal cell or row highlighted in accent
- Legend tying cell codes to meanings

Five-by-five is the max that stays legible at this scale.

## Props

| Prop        | Type     | Default                          | Description                       |
| ----------- | -------- | -------------------------------- | --------------------------------- |
| `className` | `string` | `"w-full max-w-4xl mx-auto"`     | Extra classes for the wrapper div |

## Usage

```tsx
   import AccessMatrix from "./components/AccessMatrix";

   export function Dashboard() {
     return <AccessMatrix className="w-full max-w-4xl mx-auto" />;
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
  internal SVG ids (`dp-security-matrix-title`, patterns). Visual output is unaffected;
  only a11y tooling sees duplicated ids.
- **Tailwind optional** — the diagram itself is styled by SVG presentation
  attributes, so it renders even in a project without Tailwind; only the
  wrapper's utility classes need Tailwind.

## Credits

Adapted from [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)
(MIT License).
