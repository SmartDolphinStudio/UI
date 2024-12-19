import { useEffect } from "react";

/**
 * Fishbone (Ishikawa) Diagram — Root-cause analysis across cause categories.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface FishboneDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function FishboneDiagram({ className }: FishboneDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="fishbone">
      <svg viewBox="-40 0 1480 600" role="img" aria-labelledby="fishbone-title fishbone-desc">

  <title id="fishbone-title">Checkout p99 latency · Root-cause fishbone</title>
  <desc id="fishbone-desc">Fishbone diagram tracing a checkout latency incident to five candidate cause categories, with a missing database index under Data confirmed as the root cause.</desc>
  <defs>
   <marker id="fishbone-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#2d3142"/>
   </marker>
  </defs>
  <rect x="-40" y="0" width="1480" height="600" fill="#f5f5f5"/>
  <line x1="120" y1="320" x2="1200" y2="320" stroke="#2d3142" strokeWidth="1.2" markerEnd="url(#fishbone-arrow)"/>
  <line x1="880" y1="320" x2="784" y2="152" stroke="#2d3142" strokeWidth="1.2"/>
  <line x1="720" y1="320" x2="624" y2="488" stroke="#eb6c36" strokeWidth="1.2"/>
  <line x1="560" y1="320" x2="464" y2="152" stroke="#2d3142" strokeWidth="1.2"/>
  <line x1="400" y1="320" x2="304" y2="488" stroke="#2d3142" strokeWidth="1.2"/>
  <line x1="240" y1="320" x2="144" y2="152" stroke="#2d3142" strokeWidth="1.2"/>
  <line x1="848" y1="264" x2="816" y2="264" stroke="#4f5d75" strokeWidth="1"/>
  <text x="812" y="260" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">canary skipped</text>
  <line x1="816" y1="208" x2="784" y2="208" stroke="#4f5d75" strokeWidth="1"/>
  <text x="780" y="204" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">config drift</text>
  <line x1="688" y1="376" x2="656" y2="376" stroke="#4f5d75" strokeWidth="1"/>
  <text x="652" y="388" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">index missing on orders.created_at</text>
  <line x1="656" y1="432" x2="624" y2="432" stroke="#4f5d75" strokeWidth="1"/>
  <text x="620" y="444" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">table 3x forecast</text>
  <line x1="528" y1="264" x2="496" y2="264" stroke="#4f5d75" strokeWidth="1"/>
  <text x="492" y="260" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">connection pool cap 20</text>
  <line x1="496" y1="208" x2="464" y2="208" stroke="#4f5d75" strokeWidth="1"/>
  <text x="460" y="204" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">GC pauses</text>
  <line x1="368" y1="376" x2="336" y2="376" stroke="#4f5d75" strokeWidth="1"/>
  <text x="332" y="388" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">no p99 alert</text>
  <line x1="336" y1="432" x2="304" y2="432" stroke="#4f5d75" strokeWidth="1"/>
  <text x="300" y="444" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">dashboard sampled at 5m</text>
  <line x1="192" y1="236" x2="160" y2="236" stroke="#4f5d75" strokeWidth="1"/>
  <text x="156" y="232" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">on-call handover mid-incident</text>
  <rect x="724" y="116" width="120" height="28" rx="4" fill="#f5f5f5" stroke="#2d3142" strokeWidth="0.8"/>
  <text x="784" y="134" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">DEPLOY</text>
  <rect x="564" y="496" width="120" height="28" rx="4" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="0.8"/>
  <text x="624" y="514" fill="#eb6c36" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">DATA</text>
  <rect x="404" y="116" width="120" height="28" rx="4" fill="#f5f5f5" stroke="#2d3142" strokeWidth="0.8"/>
  <text x="464" y="134" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">RUNTIME</text>
  <rect x="244" y="496" width="120" height="28" rx="4" fill="#f5f5f5" stroke="#2d3142" strokeWidth="0.8"/>
  <text x="304" y="514" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">OBSERVABILITY</text>
  <rect x="84" y="116" width="120" height="28" rx="4" fill="#f5f5f5" stroke="#2d3142" strokeWidth="0.8"/>
  <text x="144" y="134" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">PEOPLE</text>
  <rect x="1200" y="272" width="200" height="96" rx="6" fill="#f5f5f5"/>
  <rect x="1200" y="272" width="200" height="96" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <rect x="1208" y="280" width="48" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.40)" strokeWidth="0.8"/>
  <text x="1232" y="289" fill="#eb6c36" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">EFFECT</text>
  <text x="1300" y="324" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Checkout p99 latency</text>
  <text x="1300" y="340" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">4x for 90 minutes</text>
  <line x1="40" y1="560" x2="1400" y2="560" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="576" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <line x1="40" y1="588" x2="56" y2="588" stroke="#2d3142" strokeWidth="1.2"/>
  <text x="64" y="592" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Category (bone)</text>
  <line x1="260" y1="588" x2="276" y2="588" stroke="#eb6c36" strokeWidth="1.2"/>
  <text x="284" y="592" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Confirmed root cause</text>
  <line x1="480" y1="588" x2="496" y2="588" stroke="#4f5d75" strokeWidth="1"/>
  <text x="504" y="592" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Sub-cause</text>
  <rect x="700" y="584" width="16" height="8" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="724" y="592" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Observed effect</text>
      </svg>
    </div>
  );
}
