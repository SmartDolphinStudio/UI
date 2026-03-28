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
