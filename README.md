# UI

A curated collection of UI components, motion effects and interactive design experiments — the shared component gallery of SmartDolphin Studio. It archives front-end implementations with outstanding visual performance or unique interaction effects worth preserving.

---

## I. Repository Overview

This repository is a **monorepo-style collection** of independently runnable UI engineering projects. Each top-level folder is a fully independent, self-contained project with its own dependencies, tooling and lifecycle; they are versioned and released together from this repository.

1. Each top-level folder corresponds to a fully independent engineering project;
2. Projects are developed, iterated and versioned directly in this repository;
3. The root README and `CODE_STANDARD.md` define shared conventions that apply across all subprojects;
4. Feature iterations, bug fixes and version upgrades are carried out inside each subproject folder and committed to this repo.

---

## II. Technology Stack Constraints

### Mandatory Technology Admission Rules

All subproject development, iterations and external contribution PRs **must strictly adopt technologies listed below only**.

1. All contributors must develop business functions using technologies within the list;
2. Any PR adopting unlisted technologies will be rejected directly;
3. If new technology is truly necessary for business scenarios, add a line at the very top of PR description: `Request to add technology: XXX`, including detailed reasons, advantages over existing alternatives and long-term maintainability.

### Technology Stack List

| Layer | Technologies |
|-------|--------------|
| Core Runtime | TypeScript, JavaScript, React, Vite, Node.js, pnpm, npm, yarn, Bun, Deno, nodemon |
| Styling & Animation | Tailwind CSS, CSS Modules, Plain CSS, CSS-in-JS, Framer Motion, GSAP, WebGL2, WebGPU, Three.js |
| Headless UI | Radix UI, shadcn/ui, Headless UI, Ariakit, cmdk, Vaul, React Aria, Floating UI |
| State Management | Zustand, Jotai, Valtio, XState, TanStack Query, SWR, tRPC, Axios, React Context, Redux Toolkit |
| Form & Utilities | Zod, Valibot, React Hook Form, clsx, cva, nanoid, uuid, date-fns, Lodash, Radash |
| Code Quality | ESLint, Prettier, Vitest, Jest, React Testing Library, Playwright, Cypress, Storybook |
| Build & Deployment | Rollup, esbuild, Webpack 5, Next.js, Remix, Astro, Turborepo, Docker, GitHub Actions |

---

## III. Subproject Index

| Folder | Project Name | Description | Version |
|--------|--------------|-------------|---------|
| chart-hub | ComponentHub | Chart and diagram component gallery (46 chart components) | V0.0.1 |
| claude-range-slider | Claude Range Slider | WebGL2 particle flame effect effort level slider | V0.0.3 |
| modelnex-console | ModelNex Console | Interactive console login page with animations | V0.0.1 |
| smart-dolphin-verification | Smart Dolphin Verification | Reusable PlayCaptcha and ALTCHA human verification UI and API reference | V0.0.10 |

---

## IV. Repository Management Standards

### 1. Subproject Hosting Rules

1. Each independent business module shall be placed in an individual top-level folder;
2. Each subfolder is a fully self-contained project (own package manifest, tooling and documentation) versioned within this repository;
3. The root README and `CODE_STANDARD.md` define shared conventions across all subprojects;
4. All public documents and code comments are written in formal American English;
5. Every source file shall carry the unified copyright header statement;
6. All code strictly follows the official specifications of the corresponding technologies.

### 2. Git Commit Version Standard

All subprojects use pure version number as commit subject:

- Initial commit: `V0.0.1`
- Increment the last digit for each release: `V0.0.2`, `V0.0.3`...
- Commit body uses concise formal English within 3~4 words.

### 3. Mandatory Source File Header

```typescript
/**
 * @file        FileName.tsx
 * @author      Astraeus
 * @created     2026-XX-XX HH:mm:ss UTC
 * @license     GPL-2.0-only
 *
 * Brief description of current file function
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: SmartDolphinStudio@gmail.com
 */
```

---

## V. Inspiration and Attribution

| Reference Source | Detailed Reference Scope |
|------------------|--------------------------|
| Claude Code (Anthropic) | Structure, particle flame visual style and interaction logic of `claude-range-slider` |

---

## VI. Contact

E-mail: SmartDolphinStudio@gmail.com

---

## VII. License

**GNU General Public License v2.0 (GPLv2)** - See LICENSE file for full text.

Copyright (C) 2000-2026 Astraeus

---

## VIII. Code Standards

Global coding standards are defined in `CODE_STANDARD.md`.
