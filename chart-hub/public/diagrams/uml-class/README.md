# UML Class Diagram

> Classes, interfaces, and relations.

![Preview](preview.png)

Overview

The **UML Class Diagram** is a self-contained editorial diagram. Classes, interfaces, and relations. It ships as a **single-file React component** (inline SVG + Tailwind CSS) with no chart library, no data files, and no external stylesheets — copy the file in and it renders immediately.

Class diagram showing Card and BankTransfer realizing a PaymentMethod interface, PaymentService depending on PaymentMethod, and Order composed of OrderLine while associated with Customer.


## When to use it

- Domain-modeling documentation
- API and service design docs
- Codebase onboarding for a payments domain


## Tech stack

| Layer | Technology | Role |
| ----- | ---------- | ---- |
| UI | **React 18+** | Function component with hooks, no classes |
| Types | **TypeScript 5+** | Typed props for safe, self-documenting usage |
| Styling | **Tailwind CSS** | Layout only, on the wrapper element |
| Graphics | **Inline SVG** | The entire diagram is hand-authored SVG |


## File anatomy

- `UmlClassDiagram.tsx` — the whole diagram in one file:

  1. **Font loading** — a `useEffect` injects the editorial font stack
     (Geist, Geist Mono, Instrument Serif) into the page once. It is idempotent,
     so rendering many diagrams never duplicates the stylesheet link.
  2. **Wrapper** — a `<div>` with Tailwind utilities (`w-full max-w-4xl mx-auto`)
     and a `data-diagram="uml-class"` attribute. Pass your own `className` to
     override sizing.
  3. **The SVG** — one `<svg viewBox="0 0 980 664">` containing every element of the
     diagram. `uml-class-title` / `uml-class-desc` provide accessible names.


## Visual layers

Reading the SVG top to bottom:

- Class boxes with name / attributes / methods
- An interface box with the realizes relation
- Dependency, composition, and association lines
- Relation markers (arrowheads, diamonds)

Keep the marker vocabulary consistent with standard UML.


## Props

| Prop        | Type     | Default                          | Description                       |
| ----------- | -------- | -------------------------------- | --------------------------------- |
| `className` | `string` | `"w-full max-w-4xl mx-auto"`     | Extra classes for the wrapper div |


## Usage

```tsx
   import UmlClassDiagram from "./components/UmlClassDiagram";

   export function Dashboard() {
     return <UmlClassDiagram className="w-full max-w-4xl mx-auto" />;
   }
   
```


## Customization

- **Sizing** — override `className` to control the wrapper width and margins.
- **Colors** — edit the SVG `fill` / `stroke` presentation attributes directly to match your brand palette.
- **Content** — the SVG is hand-authored; edit labels and geometry directly in the JSX to reflect your own data.
