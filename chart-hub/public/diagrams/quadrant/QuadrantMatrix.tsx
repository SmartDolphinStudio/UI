import { useEffect } from "react";

/**
 * Quadrant Matrix — 2x2 prioritization.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface QuadrantMatrixProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function QuadrantMatrix({ className }: QuadrantMatrixProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="quadrant">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="quadrant-title quadrant-desc">

  <title id="quadrant-title">Content ideas · Impact × Effort</title>
  <desc id="quadrant-desc">Impact-effort matrix showing eight content projects across do first, major projects, quick wins, and avoid quadrants.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <rect x="120" y="80" width="380" height="170" fill="rgba(235,108,54,0.03)"/>
  <line x1="120" y1="250" x2="880" y2="250" stroke="rgba(45,49,66,0.45)" strokeWidth="1"/>
  <line x1="500" y1="80" x2="500" y2="420" stroke="rgba(45,49,66,0.45)" strokeWidth="1"/>
  <text x="880" y="266" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.14em">HIGH EFFORT →</text>
  <text x="120" y="266" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">← LOW EFFORT</text>
  <text x="512" y="80" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">↑ HIGH IMPACT</text>
  <text x="512" y="432" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">↓ LOW IMPACT</text>
  <text x="140" y="104" fill="#eb6c36" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em" fontWeight="600">DO FIRST</text>
  <text x="860" y="104" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.18em">MAJOR PROJECTS</text>
  <text x="140" y="412" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">QUICK WINS</text>
  <text x="860" y="412" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.18em">AVOID</text>
  <circle cx="220" cy="140" r="6" fill="#eb6c36"/>
  <text x="232" y="144" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif">Schematic skill v4</text>
  <circle cx="320" cy="200" r="4" fill="#2d3142"/>
  <text x="332" y="204" fill="#4f5d75" fontSize="11" fontFamily="'Geist', sans-serif">Update changelog</text>
  <circle cx="620" cy="140" r="4" fill="#2d3142"/>
  <text x="632" y="144" fill="#4f5d75" fontSize="11" fontFamily="'Geist', sans-serif">Design v4 refresh</text>
  <circle cx="760" cy="180" r="4" fill="#2d3142"/>
  <text x="772" y="184" fill="#4f5d75" fontSize="11" fontFamily="'Geist', sans-serif">New publication</text>
  <circle cx="260" cy="320" r="4" fill="#2d3142"/>
  <text x="272" y="324" fill="#4f5d75" fontSize="11" fontFamily="'Geist', sans-serif">Fix footer link</text>
  <circle cx="360" cy="380" r="4" fill="#2d3142"/>
  <text x="372" y="384" fill="#4f5d75" fontSize="11" fontFamily="'Geist', sans-serif">Update OG tags</text>
  <circle cx="640" cy="380" r="4" fill="#2d3142"/>
  <text x="652" y="384" fill="#4f5d75" fontSize="11" fontFamily="'Geist', sans-serif">Rewrite build pipeline</text>
  <circle cx="780" cy="320" r="4" fill="#2d3142"/>
  <text x="792" y="324" fill="#4f5d75" fontSize="11" fontFamily="'Geist', sans-serif">Port to Nuxt</text>
  <line x1="40" y1="456" x2="960" y2="456" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="472" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <circle cx="52" cy="488" r="6" fill="#eb6c36"/>
  <text x="68" y="492" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Start tomorrow</text>
  <circle cx="192" cy="488" r="4" fill="#2d3142"/>
  <text x="208" y="492" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Candidate project</text>
  <text x="336" y="492" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif" fontStyle="italic">Position is the signal. Colour is reserved for the single action item.</text>
      </svg>
    </div>
  );
}
