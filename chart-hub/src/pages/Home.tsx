/**
 * @file        Home.tsx
 * @author      Astraeus
 * @created     2026-09-24 16:10:38 UTC
 * @license     GPL-2.0-only
 *
 * Home page. Renders the chart gallery card grid sourced from diagrams.json.
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: SmartDolphinStudio@gmail.com
 */

import { Link } from 'react-router-dom'
import diagrams from '../data/diagrams.json'

/**
 * Home — the chart component gallery.
 * A responsive card grid for every chart / diagram in the collection.
 */
export default function Home() {
  return (
    <div className="min-h-full bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-lg font-bold tracking-tight">
            Component<span className="font-light">Hub</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Charts</h1>
          <p className="mt-2 text-sm text-neutral-500">
            {diagrams.length} chart components — click a card to view its source & docs
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diagrams.map((d) => (
            <Link
              key={d.slug}
              to={`/diagram/${d.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-neutral-800 transition-all hover:-translate-y-0.5 hover:border-neutral-100 hover:shadow-2xl hover:shadow-black"
            >
              {/* Preview */}
              <div className="relative aspect-[2/1] overflow-hidden border-b border-neutral-800 bg-neutral-900">
                <img
                  src={d.preview}
                  alt={d.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              {/* Meta */}
              <div className="flex flex-1 flex-col justify-between gap-2 p-4">
                <div>
                  <h2 className="font-semibold tracking-tight">{d.title}</h2>
                  <p className="mt-1 line-clamp-2 text-sm text-neutral-500">
                    {d.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-600">
                  <span className="font-mono">{d.codeFile}</span>
                  <span className="inline-flex items-center gap-1 transition-colors group-hover:text-neutral-100">
                    View code
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-xs text-neutral-500">
          ComponentHub — open-source component collection
        </div>
      </footer>
    </div>
  )
}
