import { useEffect } from "react";

/**
 * Sequence Diagram — Message order between participants.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface SequenceDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function SequenceDiagram({ className }: SequenceDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="sequence">
      <svg viewBox="0 0 1000 584" role="img" aria-labelledby="sequence-title sequence-desc">

  <title id="sequence-title">Article request, cold cache</title>
  <desc id="sequence-desc">Sequence diagram showing a cold-cache article request moving from reader and browser through Cloudflare to an Astro origin and analytics beacon.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/>
   </marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/>
   </marker>
   <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/>
   </marker>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <line x1="128" y1="128" x2="128" y2="488" stroke="rgba(45,49,66,0.22)" strokeWidth="1" strokeDasharray="3,3"/>
  <line x1="352" y1="128" x2="352" y2="488" stroke="rgba(45,49,66,0.22)" strokeWidth="1" strokeDasharray="3,3"/>
  <line x1="584" y1="128" x2="584" y2="488" stroke="rgba(45,49,66,0.22)" strokeWidth="1" strokeDasharray="3,3"/>
  <line x1="800" y1="128" x2="800" y2="488" stroke="rgba(45,49,66,0.22)" strokeWidth="1" strokeDasharray="3,3"/>
  <rect x="348" y="180" width="8" height="232" fill="rgba(45,49,66,0.06)" stroke="#4f5d75" strokeWidth="0.8"/>
  <rect x="580" y="236" width="8" height="120" fill="rgba(45,49,66,0.06)" stroke="#4f5d75" strokeWidth="0.8"/>
  <line x1="128" y1="176" x2="352" y2="176" stroke="#2e5aa8" strokeWidth="1.2" markerEnd="url(#arrow-link)"/>
  <line x1="352" y1="232" x2="580" y2="232" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <path d="M 588 284 L 624 284 L 624 316 L 588 316" fill="none" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="580" y1="352" x2="356" y2="352" stroke="#4f5d75" strokeWidth="1.2" strokeDasharray="5,4" markerEnd="url(#arrow)"/>
  <line x1="348" y1="408" x2="128" y2="408" stroke="#eb6c36" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/>
  <line x1="128" y1="464" x2="800" y2="464" stroke="#4f5d75" strokeWidth="1.2" strokeDasharray="5,4" markerEnd="url(#arrow)"/>
  <rect x="188" y="160" width="104" height="12" rx="2" fill="#f5f5f5"/>
  <text x="240" y="170" fill="#2e5aa8" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">GET /ARTICLES/SLUG</text>
  <rect x="416" y="216" width="100" height="12" rx="2" fill="#f5f5f5"/>
  <text x="466" y="226" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">CACHE MISS · ORIGIN</text>
  <rect x="632" y="292" width="72" height="12" rx="2" fill="#f5f5f5"/>
  <text x="668" y="302" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">RENDER MDX</text>
  <rect x="420" y="336" width="96" height="12" rx="2" fill="#f5f5f5"/>
  <text x="468" y="346" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">200 · HTML + MAX-AGE</text>
  <rect x="192" y="392" width="96" height="12" rx="2" fill="#f5f5f5"/>
  <text x="240" y="402" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">200 · EDGE-CACHED</text>
  <rect x="648" y="448" width="96" height="12" rx="2" fill="#f5f5f5"/>
  <text x="696" y="458" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">PAGEVIEW BEACON</text>
  <rect x="56" y="72" width="144" height="56" rx="6" fill="#f5f5f5"/>
  <rect x="56" y="72" width="144" height="56" rx="6" fill="rgba(79,93,117,0.10)" stroke="#7a8399" strokeWidth="1"/>
  <rect x="64" y="80" width="28" height="12" rx="2" fill="transparent" stroke="rgba(122,131,153,0.40)" strokeWidth="0.8"/>
  <text x="78" y="89" fill="#7a8399" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">EXT</text>
  <text x="128" y="104" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Reader</text>
  <text x="128" y="119" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">Browser</text>
  <rect x="280" y="72" width="144" height="56" rx="6" fill="#f5f5f5"/>
  <rect x="280" y="72" width="144" height="56" rx="6" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <rect x="288" y="80" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.22)" strokeWidth="0.8"/>
  <text x="304" y="89" fill="#7a8399" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">EDGE</text>
  <text x="352" y="104" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Cloudflare</text>
  <text x="352" y="119" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">Pages · cache</text>
  <rect x="504" y="72" width="160" height="56" rx="6" fill="#f5f5f5"/>
  <rect x="504" y="72" width="160" height="56" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <rect x="512" y="80" width="32" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" strokeWidth="0.8"/>
  <text x="528" y="89" fill="#eb6c36" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">ORIG</text>
  <text x="584" y="104" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Astro Origin</text>
  <text x="584" y="119" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">SSR + MDX</text>
  <rect x="728" y="72" width="144" height="56" rx="6" fill="#f5f5f5"/>
  <rect x="728" y="72" width="144" height="56" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.22)" strokeWidth="1" strokeDasharray="4,3"/>
  <rect x="736" y="80" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.22)" strokeWidth="0.8"/>
  <text x="750" y="89" fill="#7a8399" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">ASY</text>
  <text x="800" y="104" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Analytics</text>
  <text x="800" y="119" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">Beacon · async</text>
  <line x1="56" y1="504" x2="944" y2="504" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="56" y="520" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="56" y="540" width="14" height="10" rx="2" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="76" y="548" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Focal actor</text>
  <rect x="188" y="536" width="4" height="18" fill="rgba(45,49,66,0.06)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="200" y="548" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Activation</text>
  <line x1="308" y1="546" x2="336" y2="546" stroke="#2e5aa8" strokeWidth="1.2" markerEnd="url(#arrow-link)"/>
  <text x="344" y="548" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">HTTP request</text>
  <line x1="476" y1="546" x2="504" y2="546" stroke="#4f5d75" strokeWidth="1.2" strokeDasharray="5,4" markerEnd="url(#arrow)"/>
  <text x="512" y="548" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Return / async</text>
  <line x1="652" y1="546" x2="680" y2="546" stroke="#eb6c36" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/>
  <text x="688" y="548" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Primary response</text>
      </svg>
    </div>
  );
}
