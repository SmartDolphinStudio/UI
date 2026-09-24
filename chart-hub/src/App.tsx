/**
 * @file        App.tsx
 * @author      Astraeus
 * @created     2026-09-24 16:10:38 UTC
 * @license     GPL-2.0-only
 *
 * Root application component. Declares the route table of the chart gallery.
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: SmartDolphinStudio@gmail.com
 */

import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const DiagramDetail = lazy(() => import('./pages/DiagramDetail'))

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-white text-sm text-neutral-400">
            Loading…
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagram/:slug" element={<DiagramDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
