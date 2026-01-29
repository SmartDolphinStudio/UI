import { useEffect } from "react";

/**
 * Venn Diagram — Set intersections.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface VennDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function VennDiagram({ className }: VennDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="venn">
      <svg viewBox="0 0 1000 480" role="img" aria-labelledby="venn-title venn-desc">

  <title id="venn-title">Good design · Desirable × Feasible × Viable</title>
  <desc id="venn-desc">Venn diagram showing desirable, feasible, and viable product qualities intersecting at shippable.</desc>
  <defs>
   <clipPath id="clip-desirable">
    <circle cx="500" cy="180" r="140"/>
   </clipPath>
   <clipPath id="clip-feasible">
    <circle cx="428" cy="320" r="140"/>
   </clipPath>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <circle cx="500" cy="180" r="140" fill="rgba(45,49,66,0.04)" stroke="#2d3142" strokeWidth="1"/>
  <circle cx="428" cy="320" r="140" fill="rgba(79,93,117,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="572" cy="320" r="140" fill="rgba(122,131,153,0.05)" stroke="#7a8399" strokeWidth="1"/>
  <g clipPath="url(#clip-desirable)">
   <g clipPath="url(#clip-feasible)">
    <circle cx="572" cy="320" r="140" fill="#2d3142"/>
   </g>
  </g>
  <text x="500" y="96" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Desirable</text>
  <text x="500" y="112" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">PEOPLE WANT IT</text>
  <text x="340" y="386" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Feasible</text>
  <text x="340" y="402" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">WE CAN BUILD IT</text>
  <text x="660" y="386" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Viable</text>
  <text x="660" y="402" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">BUSINESS SUSTAINS</text>
  <text x="500" y="268" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Shippable</text>
  <text x="500" y="284" fill="rgba(245,245,245,0.75)" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">THE SWEET SPOT</text>
      </svg>
    </div>
  );
}
