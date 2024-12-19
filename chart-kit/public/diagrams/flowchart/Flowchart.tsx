import { useEffect } from "react";

/**
 * Flowchart — Decisions, branches, and outcomes.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface FlowchartProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function Flowchart({ className }: FlowchartProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="flowchart">
      <svg viewBox="0 0 1000 600" role="img" aria-labelledby="flowchart-title flowchart-desc">

  <title id="flowchart-title">Should you write this as a skill?</title>
  <desc id="flowchart-desc">Flowchart showing when a new workflow should stay manual, become a project note, or be written as a reusable skill.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <line x1="500" y1="88" x2="500" y2="120" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="500" y1="168" x2="500" y2="192" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="600" y1="240" x2="720" y2="240" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="500" y1="288" x2="500" y2="328" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="600" y1="376" x2="720" y2="376" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="500" y1="424" x2="500" y2="464" stroke="#eb6c36" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/>
  <rect x="644" y="230" width="24" height="12" rx="2" fill="#f5f5f5"/>
  <text x="656" y="239" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.12em">NO</text>
  <rect x="484" y="298" width="32" height="12" rx="2" fill="#f5f5f5"/>
  <text x="500" y="307" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.12em">YES</text>
  <rect x="644" y="366" width="24" height="12" rx="2" fill="#f5f5f5"/>
  <text x="656" y="375" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.12em">NO</text>
  <rect x="484" y="434" width="32" height="12" rx="2" fill="#f5f5f5"/>
  <text x="500" y="443" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.12em">YES</text>
  <rect x="420" y="40" width="160" height="48" rx="24" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="500" y="68" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">New workflow</text>
  <rect x="420" y="120" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="500" y="148" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Do it manually once</text>
  <polygon points="500,192 600,240 500,288 400,240" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="500" y="238" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Will you repeat</text>
  <text x="500" y="252" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">it &gt;3 times?</text>
  <rect x="720" y="216" width="160" height="48" rx="24" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="800" y="240" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">One-off</text>
  <text x="800" y="254" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">keep manual</text>
  <polygon points="500,328 600,376 500,424 400,376" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="500" y="374" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Reusable across</text>
  <text x="500" y="388" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">projects?</text>
  <rect x="720" y="352" width="160" height="48" rx="24" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="800" y="376" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">CLAUDE.md note</text>
  <text x="800" y="390" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">project-scoped</text>
  <rect x="420" y="464" width="160" height="56" rx="28" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="500" y="492" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Write a skill</text>
  <text x="500" y="508" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">reusable + assets</text>
  <line x1="40" y1="540" x2="960" y2="540" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="556" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND · SHAPE CARRIES TYPE</text>
  <rect x="40" y="572" width="24" height="12" rx="6" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="72" y="582" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Start / end (oval)</text>
  <rect x="220" y="572" width="24" height="12" rx="2" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="252" y="582" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Step (rectangle)</text>
  <polygon points="412,578 424,572 436,578 424,584" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="448" y="582" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Decision (diamond)</text>
  <line x1="604" y1="580" x2="632" y2="580" stroke="#eb6c36" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/>
  <text x="640" y="582" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Happy path</text>
  <line x1="768" y1="580" x2="796" y2="580" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <text x="804" y="582" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Branch</text>
      </svg>
    </div>
  );
}
