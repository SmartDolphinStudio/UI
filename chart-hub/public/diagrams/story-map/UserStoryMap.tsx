import { useEffect } from "react";

/**
 * User Story Map — Activities, steps, and release slices.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface UserStoryMapProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function UserStoryMap({ className }: UserStoryMapProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="story-map">
      <svg viewBox="0 0 1032 540" role="img" aria-labelledby="story-map-title story-map-desc">

  <title id="story-map-title">Reporting, first release · User story map</title>
  <desc id="story-map-desc">User story map for a reporting tool's first release: four narrative activities from finding data to trusting it, walking-skeleton steps beneath each, and three release slices sliced by an MVP release-cut line, with the row-level-permissions story flagged as the riskiest bet in Release 2.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <rect x="32" y="216" width="968" height="80" fill="rgba(45,49,66,0.02)"/>
  <rect x="32" y="376" width="968" height="80" fill="rgba(45,49,66,0.02)"/>
  <text x="48" y="260" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">MVP</text>
  <text x="48" y="340" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">RELEASE 2</text>
  <text x="48" y="420" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">LATER</text>
  <line x1="116" y1="108" x2="116" y2="456" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8" strokeDasharray="4,4"/>
  <line x1="340" y1="108" x2="340" y2="456" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8" strokeDasharray="4,4"/>
  <line x1="564" y1="108" x2="564" y2="456" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8" strokeDasharray="4,4"/>
  <line x1="788" y1="108" x2="788" y2="456" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8" strokeDasharray="4,4"/>
  <line x1="1012" y1="108" x2="1012" y2="456" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8" strokeDasharray="4,4"/>
  <rect x="128" y="40" width="200" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="228" y="68" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Find the data</text>
  <text x="228" y="88" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">ACTIVITY 1</text>
  <rect x="352" y="40" width="200" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="452" y="68" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Build the report</text>
  <text x="452" y="88" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">ACTIVITY 2</text>
  <rect x="576" y="40" width="200" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="676" y="68" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Share it</text>
  <text x="676" y="88" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">ACTIVITY 3</text>
  <rect x="800" y="40" width="200" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="900" y="68" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Trust it</text>
  <text x="900" y="88" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">ACTIVITY 4</text>
  <rect x="144" y="120" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="0.8"/>
  <text x="156" y="140" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">Search datasets</text>
  <rect x="144" y="160" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="0.8"/>
  <text x="156" y="180" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">Preview rows</text>
  <rect x="368" y="120" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="0.8"/>
  <text x="380" y="140" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">Pick columns</text>
  <rect x="368" y="160" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="0.8"/>
  <text x="380" y="180" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">Add a chart</text>
  <rect x="592" y="120" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="0.8"/>
  <text x="604" y="140" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">Send a link</text>
  <rect x="816" y="120" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="0.8"/>
  <text x="828" y="140" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">Check freshness</text>
  <rect x="144" y="232" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="156" y="250" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Keyword search</text>
  <text x="156" y="266" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">RPT-101 · 3pt</text>
  <rect x="368" y="232" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="380" y="250" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Table + one chart</text>
  <text x="380" y="266" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">RPT-102 · 5pt</text>
  <rect x="592" y="232" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="604" y="250" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Public link</text>
  <text x="604" y="266" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">RPT-103 · 2pt</text>
  <rect x="816" y="232" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="828" y="250" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Last-updated stamp</text>
  <text x="828" y="266" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">RPT-104 · 1pt</text>
  <line x1="32" y1="296" x2="1000" y2="296" stroke="#eb6c36" strokeWidth="1.5"/>
  <rect x="736" y="280" width="104" height="8" rx="2" fill="#f5f5f5"/>
  <text x="788" y="285" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.10em">RELEASE CUT</text>
  <rect x="144" y="312" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="156" y="330" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Saved filters</text>
  <text x="156" y="346" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">RPT-110 · 3pt</text>
  <rect x="592" y="312" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="604" y="330" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Scheduled email</text>
  <text x="604" y="346" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">RPT-112 · 5pt</text>
  <rect x="816" y="312" width="168" height="48" rx="4" fill="rgba(235,108,54,0.05)" stroke="#eb6c36" strokeWidth="1" strokeDasharray="4,4"/>
  <text x="828" y="330" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Row-level permissions</text>
  <text x="828" y="346" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">RPT-114 · 3pt</text>
  <rect x="936" y="336" width="40" height="12" rx="2" fill="transparent" stroke="#eb6c36" strokeWidth="0.8"/>
  <text x="956" y="345" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">RISK</text>
  <rect x="144" y="392" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="156" y="410" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Natural-language query</text>
  <text x="156" y="426" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">RPT-120 · 8pt</text>
  <rect x="816" y="392" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="828" y="410" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Alerting on anomalies</text>
  <text x="828" y="426" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">RPT-121 · 5pt</text>
  <line x1="32" y1="480" x2="1000" y2="480" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="32" y="496" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="32" y="508" width="16" height="8" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="56" y="516" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Story card</text>
  <rect x="232" y="508" width="16" height="8" fill="rgba(235,108,54,0.05)" stroke="#eb6c36" strokeWidth="1" strokeDasharray="4,4"/>
  <text x="256" y="516" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Highest risk</text>
  <line x1="432" y1="512" x2="464" y2="512" stroke="#eb6c36" strokeWidth="1.5"/>
  <text x="480" y="516" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Release cut</text>
      </svg>
    </div>
  );
}
