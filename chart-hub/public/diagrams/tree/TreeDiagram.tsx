import { useEffect } from "react";

/**
 * Tree Diagram — A taxonomy that branches.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface TreeDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function TreeDiagram({ className }: TreeDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="tree">
      <svg viewBox="0 0 1000 480" role="img" aria-labelledby="tree-title tree-desc">

  <title id="tree-title">Claude Code skill taxonomy</title>
  <desc id="tree-desc">Tree diagram showing a Skills root branching into Design, Engineering, and Research categories and their leaf skills.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <text x="40" y="108" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">TIER 0 · ROOT</text>
  <text x="40" y="224" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em" textAnchor="start">TIER 1</text>
  <text x="40" y="324" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em" textAnchor="start">TIER 2</text>
  <path d="M 500 128 L 500 168 L 220 168 L 220 208" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 500 168 L 500 208" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 500 168 L 780 168 L 780 208" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 220 256 L 220 296 L 140 296 L 140 336" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 220 296 L 300 296 L 300 336" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 500 256 L 500 296 L 480 296 L 480 336" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 500 296 L 660 296 L 660 336" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 780 256 L 780 296 L 840 296 L 840 336" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="420" y="80" width="160" height="48" rx="6" fill="#f5f5f5"/>
  <rect x="420" y="80" width="160" height="48" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <rect x="428" y="88" width="32" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" strokeWidth="0.8"/>
  <text x="444" y="97" fill="#eb6c36" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">ROOT</text>
  <text x="500" y="118" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Skills</text>
  <rect x="140" y="208" width="160" height="48" rx="6" fill="#f5f5f5"/>
  <rect x="140" y="208" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="148" y="216" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="162" y="225" fill="#2d3142" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">CAT</text>
  <text x="220" y="240" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Design</text>
  <text x="220" y="252" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">ui · visual · ux</text>
  <rect x="420" y="208" width="160" height="48" rx="6" fill="#f5f5f5"/>
  <rect x="420" y="208" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="428" y="216" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="442" y="225" fill="#2d3142" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">CAT</text>
  <text x="500" y="240" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Engineering</text>
  <text x="500" y="252" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">ship · review · test</text>
  <rect x="700" y="208" width="160" height="48" rx="6" fill="#f5f5f5"/>
  <rect x="700" y="208" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="708" y="216" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="722" y="225" fill="#2d3142" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">CAT</text>
  <text x="780" y="240" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Research</text>
  <text x="780" y="252" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">investigate · analyze</text>
  <rect x="60" y="336" width="160" height="48" rx="6" fill="#f5f5f5"/>
  <rect x="60" y="336" width="160" height="48" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="140" y="360" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">polish</text>
  <text x="140" y="372" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">align · space · rhythm</text>
  <rect x="220" y="336" width="160" height="48" rx="6" fill="#f5f5f5"/>
  <rect x="220" y="336" width="160" height="48" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="300" y="360" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">critique</text>
  <text x="300" y="372" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">hierarchy · density</text>
  <rect x="400" y="336" width="160" height="48" rx="6" fill="#f5f5f5"/>
  <rect x="400" y="336" width="160" height="48" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="480" y="360" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">review</text>
  <text x="480" y="372" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">pre-land diff · sql</text>
  <rect x="580" y="336" width="160" height="48" rx="6" fill="#f5f5f5"/>
  <rect x="580" y="336" width="160" height="48" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="660" y="360" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">ship</text>
  <text x="660" y="372" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">merge · deploy · verify</text>
  <rect x="760" y="336" width="160" height="48" rx="6" fill="#f5f5f5"/>
  <rect x="760" y="336" width="160" height="48" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="840" y="360" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">investigate</text>
  <text x="840" y="372" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">root cause · evidence</text>
  <line x1="40" y1="412" x2="960" y2="412" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="428" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="444" width="14" height="10" rx="2" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="60" y="452" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Root · focal</text>
  <rect x="180" y="444" width="14" height="10" rx="2" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="200" y="452" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Category branch</text>
  <rect x="340" y="444" width="14" height="10" rx="2" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="360" y="452" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Leaf skill</text>
  <text x="500" y="452" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif" fontStyle="italic">Orthogonal connectors only. Coral marks the root — every branch descends from one idea.</text>
      </svg>
    </div>
  );
}
