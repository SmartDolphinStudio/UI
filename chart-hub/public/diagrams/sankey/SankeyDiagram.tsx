import { useEffect } from "react";

/**
 * Sankey Diagram — Flow volume splits and merges.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface SankeyDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function SankeyDiagram({ className }: SankeyDiagramProps) {
  // Load the editorial fonts (and scoped CSS when needed) once, on first mount.
  useEffect(() => {
    if (!document.getElementById("dd-fonts")) {
      const link = document.createElement("link");
      link.id = "dd-fonts";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="sankey">
      <svg viewBox="0 0 1000 560" role="img" aria-labelledby="sankey-title sankey-desc">

  <title id="sankey-title">CI compute budget · a month of pipeline minutes</title>
  <desc id="sankey-desc">Sankey diagram showing 12,000 monthly CI minutes splitting into unit test, E2E, build, and lint stages, then merging into passed, failed, and flaked outcomes, with the flaky-rerun path highlighted as the one accent flow.</desc>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <text x="124" y="76" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">BUDGET</text>
  <text x="504" y="76" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">TEST STAGE</text>
  <text x="884" y="76" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">OUTCOME</text>
  <path d="M132,120 C316,120 316,120 500,120 L500,224 C316,224 316,224 132,224 Z" fill="rgba(79,93,117,0.18)"/>
  <path d="M132,224 C316,224 316,256 500,256 L500,336 C316,336 316,304 132,304 Z" fill="rgba(79,93,117,0.18)"/>
  <path d="M132,304 C316,304 316,368 500,368 L500,408 C316,408 316,344 132,344 Z" fill="rgba(79,93,117,0.18)"/>
  <path d="M132,344 C316,344 316,440 500,440 L500,456 C316,456 316,360 132,360 Z" fill="rgba(79,93,117,0.18)"/>
  <path d="M512,136 C696,136 696,148 880,148 L880,236 C696,236 696,224 512,224 Z" fill="rgba(79,93,117,0.18)"/>
  <path d="M512,260 C696,260 696,236 880,236 L880,312 C696,312 696,336 512,336 Z" fill="rgba(79,93,117,0.18)"/>
  <path d="M512,368 C696,368 696,312 880,312 L880,328 C696,328 696,384 512,384 Z" fill="rgba(79,93,117,0.18)"/>
  <path d="M512,384 C696,384 696,344 880,344 L880,368 C696,368 696,408 512,408 Z" fill="rgba(79,93,117,0.18)"/>
  <path d="M512,440 C696,440 696,328 880,328 L880,336 C696,336 696,448 512,448 Z" fill="rgba(79,93,117,0.18)"/>
  <path d="M512,448 C696,448 696,368 880,368 L880,376 C696,376 696,456 512,456 Z" fill="rgba(79,93,117,0.18)"/>
  <path d="M512,120 C696,120 696,120 880,120 L880,136 C696,136 696,136 512,136 Z" fill="rgba(235,108,54,0.28)"/>
  <path d="M512,256 C696,256 696,136 880,136 L880,140 C696,140 696,260 512,260 Z" fill="rgba(235,108,54,0.28)"/>
  <rect x="120" y="120" width="12" height="240" fill="#2d3142"/>
  <rect x="500" y="120" width="12" height="104" fill="#2d3142"/>
  <rect x="500" y="256" width="12" height="80" fill="#2d3142"/>
  <rect x="500" y="368" width="12" height="40" fill="#2d3142"/>
  <rect x="500" y="440" width="12" height="16" fill="#2d3142"/>
  <rect x="880" y="120" width="12" height="20" fill="#2d3142"/>
  <rect x="880" y="148" width="12" height="188" fill="#2d3142"/>
  <rect x="880" y="344" width="12" height="32" fill="#2d3142"/>
  <text x="104" y="236" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="end">CI minutes</text>
  <text x="104" y="252" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">12,000 min</text>
  <text x="504" y="96" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Unit tests</text>
  <text x="504" y="112" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">5,200 min</text>
  <text x="504" y="236" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">E2E</text>
  <text x="504" y="252" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">4,000 min</text>
  <text x="504" y="348" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Build</text>
  <text x="504" y="364" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">2,000 min</text>
  <text x="504" y="420" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Lint</text>
  <text x="504" y="436" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">800 min</text>
  <text x="908" y="124" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="start">Flaked</text>
  <text x="908" y="136" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="start">1,000 min</text>
  <text x="908" y="236" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="start">Passed</text>
  <text x="908" y="252" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="start">9,400 min</text>
  <text x="908" y="356" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="start">Failed</text>
  <text x="908" y="372" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="start">1,600 min</text>
  <line x1="40" y1="492" x2="960" y2="492" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="508" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="520" width="16" height="8" fill="rgba(79,93,117,0.18)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="64" y="528" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Flow · stage routing</text>
  <rect x="220" y="520" width="16" height="8" fill="rgba(235,108,54,0.28)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="244" y="528" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Flaked path · reruns</text>
  <rect x="420" y="520" width="16" height="8" fill="#2d3142"/>
  <text x="444" y="528" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Node · stage total</text>
  <text x="600" y="528" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif" fontStyle="italic">Two coral ribbons — flaky reruns burn ~8% of the monthly CI budget.</text>
      </svg>
    </div>
  );
}
