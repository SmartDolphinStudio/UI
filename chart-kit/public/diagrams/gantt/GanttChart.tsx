import { useEffect } from "react";

/**
 * Gantt Chart — Work items on a shared schedule.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface GanttChartProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function GanttChart({ className }: GanttChartProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="gantt">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="gantt-title gantt-desc">

  <title id="gantt-title">Q2 product launch · 12-week plan</title>
  <desc id="gantt-desc">Gantt chart showing a twelve-week product launch from market research and interviews through design review, development, beta testing, and launch.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <rect x="12" y="72" width="976" height="84" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <rect x="12" y="172" width="976" height="120" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <rect x="12" y="312" width="976" height="88" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="326" y="52" fill="#2d3142" fontSize="9" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">April</text>
  <text x="578" y="52" fill="#2d3142" fontSize="9" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">May</text>
  <text x="830" y="52" fill="#2d3142" fontSize="9" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">June</text>
  <line x1="452" y1="36" x2="452" y2="416" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8" strokeDasharray="3,3"/>
  <line x1="704" y1="36" x2="704" y2="416" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8" strokeDasharray="3,3"/>
  <line x1="263" y1="60" x2="263" y2="416" stroke="rgba(45,49,66,0.05)" strokeWidth="0.6"/>
  <line x1="326" y1="60" x2="326" y2="416" stroke="rgba(45,49,66,0.05)" strokeWidth="0.6"/>
  <line x1="389" y1="60" x2="389" y2="416" stroke="rgba(45,49,66,0.05)" strokeWidth="0.6"/>
  <line x1="515" y1="60" x2="515" y2="416" stroke="rgba(45,49,66,0.05)" strokeWidth="0.6"/>
  <line x1="578" y1="60" x2="578" y2="416" stroke="rgba(45,49,66,0.05)" strokeWidth="0.6"/>
  <line x1="641" y1="60" x2="641" y2="416" stroke="rgba(45,49,66,0.05)" strokeWidth="0.6"/>
  <line x1="767" y1="60" x2="767" y2="416" stroke="rgba(45,49,66,0.05)" strokeWidth="0.6"/>
  <line x1="830" y1="60" x2="830" y2="416" stroke="rgba(45,49,66,0.05)" strokeWidth="0.6"/>
  <line x1="893" y1="60" x2="893" y2="416" stroke="rgba(45,49,66,0.05)" strokeWidth="0.6"/>
  <line x1="200" y1="60" x2="956" y2="60" stroke="rgba(45,49,66,0.20)" strokeWidth="0.8"/>
  <line x1="200" y1="36" x2="200" y2="416" stroke="rgba(45,49,66,0.20)" strokeWidth="0.8"/>
  <text x="20" y="85" fill="rgba(45,49,66,0.40)" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">DISCOVERY</text>
  <text x="20" y="185" fill="rgba(45,49,66,0.40)" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">DESIGN</text>
  <text x="20" y="325" fill="rgba(45,49,66,0.40)" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">LAUNCH</text>
  <rect x="20" y="92" width="176" height="24" fill="#f5f5f5"/>
  <text x="20" y="108" fill="#2d3142" fontSize="10" fontWeight="600" fontFamily="'Geist', sans-serif">Market research</text>
  <rect x="200" y="92" width="126" height="24" rx="4" fill="#f5f5f5"/>
  <rect x="200" y="92" width="126" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="20" y="132" width="176" height="24" fill="#f5f5f5"/>
  <text x="20" y="148" fill="#2d3142" fontSize="10" fontWeight="600" fontFamily="'Geist', sans-serif">User interviews</text>
  <rect x="263" y="132" width="126" height="24" rx="4" fill="#f5f5f5"/>
  <rect x="263" y="132" width="126" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="20" y="192" width="176" height="24" fill="#f5f5f5"/>
  <text x="20" y="208" fill="#2d3142" fontSize="10" fontWeight="600" fontFamily="'Geist', sans-serif">Wireframes</text>
  <rect x="389" y="192" width="126" height="24" rx="4" fill="#f5f5f5"/>
  <rect x="389" y="192" width="126" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="20" y="232" width="176" height="24" fill="#f5f5f5"/>
  <text x="20" y="248" fill="#2d3142" fontSize="10" fontWeight="600" fontFamily="'Geist', sans-serif">Prototype</text>
  <rect x="452" y="232" width="189" height="24" rx="4" fill="#f5f5f5"/>
  <rect x="452" y="232" width="189" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="20" y="272" width="176" height="24" fill="#f5f5f5"/>
  <text x="20" y="288" fill="#eb6c36" fontSize="10" fontWeight="600" fontFamily="'Geist', sans-serif">Design review</text>
  <rect x="641" y="272" width="63" height="24" rx="4" fill="#f5f5f5"/>
  <rect x="641" y="272" width="63" height="24" rx="4" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="672" y="289" fill="#eb6c36" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">GATE</text>
  <rect x="20" y="332" width="176" height="24" fill="#f5f5f5"/>
  <text x="20" y="348" fill="#2d3142" fontSize="10" fontWeight="600" fontFamily="'Geist', sans-serif">Development</text>
  <rect x="578" y="332" width="252" height="24" rx="4" fill="#f5f5f5"/>
  <rect x="578" y="332" width="252" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="20" y="372" width="176" height="24" fill="#f5f5f5"/>
  <text x="20" y="388" fill="#2d3142" fontSize="10" fontWeight="600" fontFamily="'Geist', sans-serif">Beta testing</text>
  <rect x="767" y="372" width="126" height="24" rx="4" fill="#f5f5f5"/>
  <rect x="767" y="372" width="126" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <line x1="40" y1="430" x2="960" y2="430" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="446" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="456" width="20" height="12" rx="3" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="68" y="466" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Design review · critical gate</text>
  <rect x="280" y="456" width="20" height="12" rx="3" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="308" y="466" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Task</text>
  <rect x="368" y="456" width="20" height="12" rx="3" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="396" y="466" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Phase</text>
      </svg>
    </div>
  );
}
