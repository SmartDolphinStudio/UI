/**
 * @file        generate-manifest.mjs
 * @author      Astraeus
 * @created     2026-09-24 16:10:38 UTC
 * @license     GPL-2.0-only
 *
 * Node script that generates the diagrams manifest consumed by the gallery.
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: SmartDolphinStudio@gmail.com
 */

// 扫描 public/diagrams 下的每个图表目录，生成 src/data/diagrams.json 清单
// 用法: node scripts/generate-manifest.mjs
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs'
import { join, basename } from 'node:path'

const ROOT = join(process.cwd(), 'public', 'diagrams')
const OUT = join(process.cwd(), 'src', 'data', 'diagrams.json')

if (!existsSync(ROOT)) {
  console.error('未找到 public/diagrams，请先复制 diagram-kit')
  process.exit(1)
}

const dirs = readdirSync(ROOT).filter((d) => {
  try { return statSync(join(ROOT, d)).isDirectory() } catch { return false }
})

const diagrams = dirs
  .map((dir) => {
    const p = join(ROOT, dir)
    const files = readdirSync(p)
    const tsx = files.find((f) => f.endsWith('.tsx'))
    const png = files.find((f) => f.endsWith('.png'))
    const mdPath = join(p, 'README.md')

    let title = dir
    let description = ''
    if (existsSync(mdPath)) {
      const md = readFileSync(mdPath, 'utf8')
      const h1 = md.match(/^#\s+(.+)$/m)
      const quote = md.match(/^>\s*(.+)$/m)
      if (h1) title = h1[1].trim()
      if (quote) description = quote[1].trim()
    }

    return {
      slug: dir,
      title,
      description,
      files: files.filter((f) => f !== 'preview.png'),
      codeFile: tsx || null,
      preview: `/diagrams/${dir}/${png || 'preview.png'}`,
      readme: `/diagrams/${dir}/README.md`,
    }
  })
  .sort((a, b) => a.title.localeCompare(b.title, 'en'))

writeFileSync(OUT, JSON.stringify(diagrams, null, 2) + '\n')
console.log(`已生成 ${diagrams.length} 个图表清单 -> ${OUT}`)
