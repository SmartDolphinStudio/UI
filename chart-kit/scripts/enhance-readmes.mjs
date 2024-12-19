/**
 * @file        enhance-readmes.mjs
 * @author      Astraeus
 * @created     2026-09-24 16:10:38 UTC
 * @license     GPL-2.0-only
 *
 * Node script that enhances diagram README files with metadata.
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: SmartDolphinStudio@gmail.com
 */

// Batch-enhance every chart README into the professional documentation layout.
//
// Usage: node scripts/enhance-readmes.mjs
//
// - Reads public/diagrams/<slug>/README.md
// - Skips any README already containing "## Overview" (hand-written editions)
// - Preserves every chart-specific paragraph/table/list from the original;
//   only adds the standard professional sections around them.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = join(process.cwd(), 'public', 'diagrams')

/** Split a markdown document into { intro, sections: Map(heading -> body) }. */
function parse(rawMd) {
  // Normalize CRLF/CR to LF — JS regex "." does not match "\r".
  const md = rawMd.replace(/\r\n?/g, '\n')
  const lines = md.split('\n')
  const title = (md.match(/^#\s+(.+)$/m) || [])[1]?.trim() ?? ''
  const tagline = (md.match(/^>\s*(.+)$/m) || [])[1]?.trim() ?? ''
  const sections = new Map()
  let current = null
  let buf = []
  const flush = () => {
    if (current) sections.set(current, buf.join('\n').trim())
    buf = []
  }
  for (const line of lines) {
    const m = line.match(/^##\s+(.+)$/)
    if (m) {
      flush()
      current = m[1].trim()
    } else if (current) {
      buf.push(line)
    }
  }
  flush()
  return { title, tagline, sections }
}

/** Extract the first fenced code block (with its language) from a body. */
function firstCodeBlock(body) {
  const m = body.match(/```(\w+)?\n([\s\S]*?)```/)
  if (!m) return null
  return { lang: m[1] || 'tsx', code: m[2].replace(/\n+$/, '') }
}

const TECH_TABLE = `| Layer | Technology | Role |
| ----- | ---------- | ---- |
| UI | **React 18+** | Function component with hooks, no classes |
| Types | **TypeScript 5+** | Typed props for safe, self-documenting usage |
| Styling | **Tailwind CSS** | Layout only, on the wrapper element |
| Graphics | **Inline SVG** | The entire diagram is hand-authored SVG |`

const A11Y = `- \`role="img"\` with an \`aria-labelledby\` title + description
- Text inside the SVG is real text, not images — screen-reader friendly
- Focus-safe: no interactive elements, safe to embed anywhere`

const BROWSERS = `Runs anywhere React 18+ runs — Chrome, Firefox, Safari, Edge. No WebGL, no canvas,
no network requests beyond the one-time Google Fonts stylesheet.`

function build(slug, md, codeFile, hasScopedCss) {
  const { title, tagline, sections: s } = parse(md)
  const comp = codeFile ? codeFile.replace(/\.tsx$/, '') : title.replace(/\s+/g, '')

  const whatIs = (s.get('What it is') || '').trim()
  const useCases = (s.get('Use cases') || '').trim()
  const anatomy = (s.get('File anatomy') || '').trim()
  const layers = (s.get('Visual layers') || '').trim()
  const props = (s.get('Props') || '').trim()
  const howTo = (s.get('How to use') || '').trim()
  const notes = (s.get('Notes') || '').trim()
  const credit = (s.get('Credit') || '').trim()

  const usageBlock =
    firstCodeBlock(howTo)?.code ??
    `import ${comp} from './${codeFile ?? comp + '.tsx'}'

export default function Example() {
  return <${comp} />
}`

  const colorsBullet = hasScopedCss
    ? '- **Colors** — the scoped stylesheet defines CSS custom properties (`--paper`, `--ink`, `--accent`, …) that you can redefine to match your brand.'
    : '- **Colors** — edit the SVG `fill` / `stroke` presentation attributes directly to match your brand palette.'

  const out = []
  out.push(`# ${title}`)
  out.push('')
  out.push(`> ${tagline}`)
  out.push('')
  out.push('![Preview](preview.png)')
  out.push('')

  // Overview — a positioning line plus the original descriptive paragraphs.
  out.push('## Overview')
  out.push('')
  out.push(
    `The **${title}** is a self-contained editorial diagram. ${tagline} It ships as a **single-file React component** (inline SVG + Tailwind CSS) with no chart library, no data files, and no external stylesheets — copy the file in and it renders immediately.`,
  )
  out.push('')
  if (whatIs) {
    // Drop the generic "single-file" paragraph from the original body to avoid
    // repeating the Overview intro; keep every chart-specific sentence.
    const kept = whatIs
      .split(/\n\n+/)
      .filter((p) => !/^This folder contains one single-file React component/i.test(p.trim()))
      .join('\n\n')
    if (kept.trim()) {
      out.push(kept.trim())
      out.push('')
    }
  }

  if (useCases) {
    out.push('## When to use it')
    out.push('')
    out.push(useCases)
    out.push('')
  }

  out.push('## Tech stack')
  out.push('')
  out.push(TECH_TABLE)
  out.push('')

  if (anatomy) {
    out.push('## File anatomy')
    out.push('')
    out.push(anatomy)
    out.push('')
  }

  if (layers) {
    out.push('## Visual layers')
    out.push('')
    out.push(layers)
    out.push('')
  }

  if (props) {
    out.push('## Props')
    out.push('')
    out.push(props)
    out.push('')
  }

  out.push('## Usage')
  out.push('')
  out.push('```tsx')
  out.push(usageBlock)
  out.push('```')
  out.push('')

  out.push('## Customization')
  out.push('')
  out.push('- **Sizing** — override `className` to control the wrapper width and margins.')
  out.push(colorsBullet)
  out.push('- **Content** — the SVG is hand-authored; edit labels and geometry directly in the JSX to reflect your own data.')
  out.push('')

  out.push('## Accessibility')
  out.push('')
  out.push(A11Y)
  out.push('')

  out.push('## Browser support')
  out.push('')
  out.push(BROWSERS)
  out.push('')

  if (notes) {
    out.push('## Notes')
    out.push('')
    out.push(notes)
    out.push('')
  }

  out.push('## Credits')
  out.push('')
  if (credit) {
    out.push(credit)
  } else {
    out.push(
      'Part of the *Diagram Kit* — editorial diagram types rebuilt as single-file React + Tailwind + TypeScript + SVG components.',
    )
  }
  out.push('')

  return out.join('\n')
}

// ---------------------------------------------------------------------------

const dirs = readdirSync(ROOT).filter((d) =>
  existsSync(join(ROOT, d, 'README.md')),
)

let enhanced = 0
let skipped = 0

for (const slug of dirs) {
  const dir = join(ROOT, slug)
  const mdPath = join(dir, 'README.md')
  const md = readFileSync(mdPath, 'utf8')

  if (md.includes('## Overview')) {
    skipped++
    continue
  }

  const codeFile = readdirSync(dir).find((f) => f.endsWith('.tsx')) ?? null
  const tsx = codeFile ? readFileSync(join(dir, codeFile), 'utf8') : ''
  const hasScopedCss = /const\s+CSS\s*=|--paper/.test(tsx)

  const next = build(slug, md, codeFile, hasScopedCss)
  writeFileSync(mdPath, next)
  enhanced++
}

console.log(`Enhanced ${enhanced} README(s); skipped ${skipped} already-enhanced.`)
