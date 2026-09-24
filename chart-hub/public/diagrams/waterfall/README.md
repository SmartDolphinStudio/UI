# Waterfall Chart

> A running-total bridge between two numbers.

![Preview](preview.png)

Overview

The **Waterfall Chart** is a self-contained editorial diagram. A running-total bridge between two numbers. It ships as a **single-file React component** (inline SVG + Tailwind CSS) with no chart library, no data files, and no external stylesheets — copy the file in and it renders immediately.

Waterfall chart bridging the FY25 cloud budget of 240 thousand dollars a month to the FY26 plan of 236, through headcount growth, reserved-instance savings, new ML workloads, and storage tiering - the largest saving.


## When to use it

- Budget bridges and P&L deltas
- KPI walk-ups and walk-downs
- Any 'how did we get from A to B' financial story


## Tech stack

| Layer | Technology | Role |
| ----- | ---------- | ---- |
| UI | **React 18+** | Function component with hooks, no classes |
| Types | **TypeScript 5+** | Typed props for safe, self-documenting usage |
| Styling | **Tailwind CSS** | Layout only, on the wrapper element |
| Graphics | **Inline SVG** | The entire diagram is hand-authored SVG |


## File anatomy

- `WaterfallChart.tsx` — the whole diagram in one file:

  1. **Font loading** — a `useEffect` injects the editorial font stack
     (Geist, Geist Mono, Instrument Serif) into the page once. It is idempotent,
     so rendering many diagrams never duplicates the stylesheet link.
  2. **Wrapper** — a `<div>` with Tailwind utilities (`w-full max-w-4xl mx-auto`)
     and a `data-diagram="waterfall"` attribute. Pass your own `className` to
     override sizing.
  3. **The SVG** — one `<svg viewBox="0 0 1000 500">` containing every element of the
     diagram. `waterfall-title` / `waterfall-desc` provide accessible names.


## Visual layers

Reading the SVG top to bottom:

- Start and end total bars
- Floating delta bars for each driver
- Connectors showing the running total
- The largest saving in accent

Deltas are floating bars, not columns from zero — that is the whole grammar.
