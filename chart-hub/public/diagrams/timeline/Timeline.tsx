import { useEffect } from "react";

/**
 * Timeline — Milestones in chronological order.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface TimelineProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function Timeline({ className }: TimelineProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="timeline">
      <svg viewBox="0 0 1000 420" role="img" aria-labelledby="timeline-title timeline-desc">

  <title id="timeline-title">Product launch · fourteen months</title>
  <desc id="timeline-desc">Timeline showing product milestones from the first post in February 2025 through three design versions and the schematic skill in April 2026.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <text x="60" y="340" fill="rgba(45,49,66,0.06)" fontSize="72" fontWeight="600" fontFamily="'Geist Mono', monospace">2025</text>
  <text x="700" y="340" fill="rgba(45,49,66,0.06)" fontSize="72" fontWeight="600" fontFamily="'Geist Mono', monospace">2026</text>
  <line x1="80" y1="240" x2="920" y2="240" stroke="rgba(79,93,117,0.45)" strokeWidth="1"/>
  <line x1="680" y1="232" x2="680" y2="248" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <text x="680" y="260" fill="#7a8399" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">JAN '26</text>
  <line x1="80" y1="232" x2="80" y2="248" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <line x1="920" y1="232" x2="920" y2="248" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <line x1="100" y1="240" x2="100" y2="296" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <circle cx="100" cy="240" r="4" fill="#2d3142"/>
  <text x="100" y="312" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">FEB 2025</text>
  <text x="100" y="328" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">First post</text>
  <line x1="240" y1="184" x2="240" y2="240" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <circle cx="240" cy="240" r="4" fill="#2d3142"/>
  <text x="240" y="156" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">APR 2025</text>
  <text x="240" y="172" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Design v1</text>
  <line x1="500" y1="240" x2="500" y2="296" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <circle cx="500" cy="240" r="4" fill="#2d3142"/>
  <text x="500" y="312" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">SEP 2025</text>
  <text x="500" y="328" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Design v2</text>
  <text x="500" y="344" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">typography pass</text>
  <line x1="740" y1="160" x2="740" y2="240" stroke="#eb6c36" strokeWidth="1"/>
  <circle cx="740" cy="240" r="6" fill="#eb6c36"/>
  <text x="740" y="128" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">JAN 2026</text>
  <text x="740" y="148" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Design v3</text>
  <text x="740" y="164" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">complexity budget</text>
  <line x1="900" y1="240" x2="900" y2="296" stroke="#eb6c36" strokeWidth="1"/>
  <circle cx="900" cy="240" r="6" fill="#eb6c36"/>
  <text x="900" y="312" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">APR 2026 · NOW</text>
  <text x="900" y="328" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Schematic skill</text>
  <text x="900" y="344" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">eight diagram types</text>
  <line x1="40" y1="376" x2="960" y2="376" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="392" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <circle cx="52" cy="408" r="4" fill="#2d3142"/>
  <text x="68" y="412" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Event</text>
  <circle cx="148" cy="408" r="6" fill="#eb6c36"/>
  <text x="164" y="412" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Major milestone</text>
  <text x="296" y="412" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif" fontStyle="italic">Spacing is proportional to real elapsed time.</text>
      </svg>
    </div>
  );
}
