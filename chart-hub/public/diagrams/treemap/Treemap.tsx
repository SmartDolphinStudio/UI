import { useEffect } from "react";

/**
 * Treemap — Area is the value; hierarchy is the nesting.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface TreemapProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function Treemap({ className }: TreemapProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="treemap">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="treemap-title treemap-desc">

  <title id="treemap-title">World population · six continents</title>
  <desc id="treemap-desc">Treemap of world population by continent in mid-2023, where cell area is population; Asia holds about 59 percent of the world total and Oceania, at under one percent, is too small to label.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <rect x="40" y="40" width="532" height="380" rx="2" fill="#f5f5f5"/>
  <rect x="40" y="40" width="532" height="380" rx="2" data-share="59.04" fill="rgba(235,108,54,0.16)" stroke="#eb6c36" strokeWidth="1.5"/>
  <text x="56" y="68" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif">Asia</text>
  <text x="56" y="88" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">4.78B · 59% of world</text>
  <rect x="576" y="40" width="252" height="252" rx="2" fill="#f5f5f5"/>
  <rect x="576" y="40" width="252" height="252" rx="2" data-share="18.29" fill="rgba(45,49,66,0.16)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="592" y="68" fill="#2d3142" fontSize="13" fontWeight="600" fontFamily="'Geist', sans-serif">Africa</text>
  <text x="592" y="88" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">1.48B · 18%</text>
  <rect x="832" y="40" width="124" height="252" rx="2" fill="#f5f5f5"/>
  <rect x="832" y="40" width="124" height="252" rx="2" data-share="9.23" fill="rgba(45,49,66,0.13)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="848" y="68" fill="#2d3142" fontSize="13" fontWeight="600" fontFamily="'Geist', sans-serif">Europe</text>
  <text x="848" y="88" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">0.75B · 9%</text>
  <rect x="576" y="296" width="208" height="124" rx="2" fill="#f5f5f5"/>
  <rect x="576" y="296" width="208" height="124" rx="2" data-share="7.52" fill="rgba(45,49,66,0.10)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="592" y="324" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">North America</text>
  <text x="592" y="344" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">0.61B · 8%</text>
  <rect x="788" y="296" width="148" height="124" rx="2" fill="#f5f5f5"/>
  <rect x="788" y="296" width="148" height="124" rx="2" data-share="5.35" fill="rgba(45,49,66,0.07)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="804" y="324" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">South America</text>
  <text x="804" y="344" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">0.43B · 5%</text>
  <rect x="940" y="296" width="16" height="124" rx="2" fill="#f5f5f5"/>
  <rect x="940" y="296" width="16" height="124" rx="2" data-share="0.56" fill="rgba(45,49,66,0.04)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <circle cx="948" cy="320" r="5" fill="#2d3142"/>
  <text x="948" y="323" fill="#f5f5f5" fontSize="7" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">i</text>
  <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <text x="960" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.06em" textAnchor="end">AREA = POPULATION · OUR WORLD IN DATA CONTINENTS (UN WPP) · MID-2023 · 8.09B TOTAL · PARTS ROUNDED, MAY NOT SUM</text>
  <rect x="40" y="488" width="16" height="10" rx="2" fill="rgba(235,108,54,0.16)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="64" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Asia · the focal share</text>
  <rect x="240" y="488" width="16" height="10" rx="2" fill="rgba(45,49,66,0.16)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="264" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Other continents · stronger contrast is larger</text>
  <circle cx="516" cy="493" r="5" fill="#2d3142"/>
  <text x="516" y="496" fill="#f5f5f5" fontSize="7" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">i</text>
  <text x="532" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Oceania · 0.05B, 0.6% — too small to label</text>
      </svg>
    </div>
  );
}
