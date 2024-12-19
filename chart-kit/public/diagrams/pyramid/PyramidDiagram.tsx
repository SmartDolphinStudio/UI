import { useEffect } from "react";

/**
 * Pyramid Diagram — Ordered by cadence and leverage.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface PyramidDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function PyramidDiagram({ className }: PyramidDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="pyramid">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="pyramid-title pyramid-desc">

  <title id="pyramid-title">Content pyramid · what compounds</title>
  <desc id="pyramid-desc">Content pyramid showing short posts, essays, long-form guides, and a flagship book ordered by shipping cadence and leverage.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <line x1="100" y1="40" x2="100" y2="320" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <polygon points="96,40 104,40 100,28" fill="rgba(45,49,66,0.45)"/>
  <text x="80" y="216" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em" textAnchor="middle" transform="rotate(-90 80 216)">RARER · FEWER · COMPOUNDS ↑</text>
  <polygon points="244,280 756,280 820,344 180,344" fill="#ececec" stroke="rgba(45,49,66,0.12)" strokeWidth="1"/>
  <text x="500" y="308" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Short posts</text>
  <text x="500" y="324" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">daily · ~200 words</text>
  <text x="836" y="316" fill="#7a8399" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.08em">~240/yr</text>
  <polygon points="308,216 692,216 756,280 244,280" fill="#ececec" stroke="rgba(45,49,66,0.12)" strokeWidth="1"/>
  <text x="500" y="244" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Essays</text>
  <text x="500" y="260" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">weekly · 800–1,500 words</text>
  <text x="776" y="252" fill="#7a8399" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.08em">~48/yr</text>
  <polygon points="372,152 628,152 692,216 308,216" fill="#ececec" stroke="rgba(45,49,66,0.12)" strokeWidth="1"/>
  <text x="500" y="180" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Long-form guides</text>
  <text x="500" y="196" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">quarterly · 4,000+ words</text>
  <text x="716" y="188" fill="#7a8399" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.08em">~4/yr</text>
  <polygon points="500,24 628,152 372,152" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="500" y="120" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Flagship book</text>
  <text x="500" y="136" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">every 3–5 years</text>
  <text x="656" y="112" fill="#eb6c36" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.08em">the apex</text>
  <text x="500" y="384" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif" textAnchor="middle" fontStyle="italic">The base funds the apex. The apex defines the base.</text>
  <line x1="40" y1="436" x2="960" y2="436" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="452" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="464" width="16" height="12" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="64" y="474" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Apex — rarest, highest leverage</text>
  <rect x="280" y="464" width="16" height="12" fill="#ececec" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text x="304" y="474" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Supporting layer — the volume work</text>
  <text x="560" y="474" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif" fontStyle="italic">Layer width is honest: narrower = rarer shipping cadence.</text>
      </svg>
    </div>
  );
}
