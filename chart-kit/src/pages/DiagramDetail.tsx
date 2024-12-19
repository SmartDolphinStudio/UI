/**
 * @file        DiagramDetail.tsx
 * @author      Astraeus
 * @created     2026-09-24 16:10:38 UTC
 * @license     GPL-2.0-only
 *
 * Diagram detail page. Renders source code, preview and README documentation for a single chart.
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: SmartDolphinStudio@gmail.com
 */

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import diagrams from '../data/diagrams.json'
import CodeViewer, { type CodeFile } from '../components/CodeViewer'
import Markdown from '../components/Markdown'

interface DiagramMeta {
  slug: string
  title: string
  description: string
  files: string[]
  codeFile: string | null
  preview: string
  readme: string
}

/**
 * DiagramDetail — a single chart's page.
 *
 * Layout (top to bottom, full width):
 *   1. Header with back link and title
 *   2. README.md rendered as full-width documentation (preview image inlined)
 *   3. Full-width source code viewer
 */
export default function DiagramDetail() {
  const { slug } = useParams()
  const meta = diagrams.find((d) => d.slug === slug) as DiagramMeta | undefined

  const [code, setCode] = useState<string>('')
  const [readme, setReadme] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!meta) return
    let cancelled = false

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const [codeRes, readmeRes] = await Promise.all([
          meta.codeFile
            ? fetch(`/diagrams/${meta.slug}/${meta.codeFile}`)
            : Promise.resolve(null),
          fetch(meta.readme),
        ])
        if (cancelled) return
        if (codeRes && !codeRes.ok) throw new Error('Failed to load source file')
        if (!readmeRes.ok) throw new Error('Failed to load documentation')
        setCode(codeRes ? await codeRes.text() : '')
        setReadme(await readmeRes.text())
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Load failed')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [meta?.slug]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!meta) {
    return (
      <div className="flex min-h-full flex-col items-center justify-center gap-4 bg-neutral-950 text-neutral-100">
        <p className="text-lg font-semibold">Component not found</p>
        <Link
          to="/"
          className="rounded-full border border-neutral-100 px-4 py-1.5 text-sm hover:bg-neutral-100 hover:text-neutral-950"
        >
          Back to home
        </Link>
      </div>
    )
  }

  const codeFiles: CodeFile[] =
    code.length > 0 && meta.codeFile ? [{ name: meta.codeFile, content: code }] : []

  return (
    <div className="min-h-full bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-100"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back
            </Link>
            <span className="h-4 w-px bg-neutral-700" />
            <span className="text-sm font-medium">{meta.title}</span>
          </div>
          <span className="text-xs text-neutral-500">Charts · {meta.slug}</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
          <p className="mt-2 text-sm text-neutral-500">{meta.description}</p>
        </div>

        {loading ? (
          <div className="flex h-96 items-center justify-center text-sm text-neutral-500">
            Loading…
          </div>
        ) : error ? (
          <div className="flex h-96 flex-col items-center justify-center gap-3 text-sm text-neutral-500">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-full border border-neutral-700 px-4 py-1.5 hover:border-neutral-100 hover:text-neutral-100"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {/* Documentation (full width, preview image inlined) */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
              <div className="mb-4 flex items-center gap-2 border-b border-neutral-800 pb-3">
                <svg
                  className="h-4 w-4 text-neutral-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span className="text-sm font-semibold">README.md</span>
              </div>
              <Markdown content={readme} basePath={`/diagrams/${meta.slug}`} />
            </div>

            {/* Source code (full width) */}
            <div>
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-sm font-semibold">Source</span>
                <span className="text-xs text-neutral-500">
                  {meta.codeFile} · {code.split('\n').length} lines
                </span>
              </div>
              <CodeViewer files={codeFiles} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
