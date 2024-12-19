import { useEffect } from "react";

/**
 * Scatter Plot — Two metrics per entity, quadrant read.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface ScatterPlotProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function ScatterPlot({ className }: ScatterPlotProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="scatter">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="scatter-title scatter-desc">

  <title id="scatter-title">Deploy frequency vs. lead time · 12 teams</title>
  <desc id="scatter-desc">Scatter plot showing twelve engineering teams by deploy frequency and lead time, with Platform in the best-performing quadrant.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <text transform="rotate(-90 24 230)" x="24" y="230" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">LEAD TIME (DAYS)</text>
  <text x="520" y="492" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">DEPLOYS PER WEEK</text>
  <line x1="80" y1="325" x2="960" y2="325" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="230" x2="960" y2="230" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="135" x2="960" y2="135" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="40" x2="960" y2="40" stroke="rgba(45,49,66,0.06)" strokeWidth="0.8"/>
  <line x1="256" y1="40" x2="256" y2="420" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="432" y1="40" x2="432" y2="420" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="608" y1="40" x2="608" y2="420" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="784" y1="40" x2="784" y2="420" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="40" x2="80" y2="420" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <line x1="80" y1="420" x2="960" y2="420" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text x="72" y="324" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">6</text>
  <text x="72" y="234" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">12</text>
  <text x="72" y="139" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">18</text>
  <text x="72" y="44" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">24</text>
  <text x="72" y="424" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">0</text>
  <text x="80" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">0</text>
  <text x="256" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">4</text>
  <text x="432" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">8</text>
  <text x="608" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">12</text>
  <text x="784" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">16</text>
  <text x="960" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">20</text>
  <line x1="168" y1="103" x2="900" y2="388" stroke="rgba(45,49,66,0.18)" strokeWidth="1" strokeDasharray="4,3"/>
  <circle cx="168" cy="103" r="5" fill="#f5f5f5"/>
  <circle cx="168" cy="103" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="256" cy="135" r="5" fill="#f5f5f5"/>
  <circle cx="256" cy="135" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="256" cy="167" r="5" fill="#f5f5f5"/>
  <circle cx="256" cy="167" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="344" cy="198" r="5" fill="#f5f5f5"/>
  <circle cx="344" cy="198" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="432" cy="230" r="5" fill="#f5f5f5"/>
  <circle cx="432" cy="230" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="432" cy="262" r="5" fill="#f5f5f5"/>
  <circle cx="432" cy="262" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="520" cy="293" r="5" fill="#f5f5f5"/>
  <circle cx="520" cy="293" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="608" cy="325" r="5" fill="#f5f5f5"/>
  <circle cx="608" cy="325" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="608" cy="262" r="5" fill="#f5f5f5"/>
  <circle cx="608" cy="262" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="784" cy="357" r="5" fill="#f5f5f5"/>
  <circle cx="784" cy="357" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="960" cy="388" r="5" fill="#f5f5f5"/>
  <circle cx="960" cy="388" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="872" cy="372" r="6" fill="#f5f5f5"/>
  <circle cx="872" cy="372" r="6" fill="rgba(235,108,54,0.15)" stroke="#eb6c36" strokeWidth="1.2"/>
  <rect x="798" y="348" width="64" height="12" rx="2" fill="#f5f5f5"/>
  <text x="830" y="357" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">PLATFORM</text>
  <text x="88" y="56" fill="rgba(45,49,66,0.25)" fontSize="8" fontFamily="'Geist Mono', monospace">HIGH LEAD TIME</text>
  <text x="88" y="412" fill="rgba(45,49,66,0.25)" fontSize="8" fontFamily="'Geist Mono', monospace">LOW LEAD TIME</text>
  <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <circle cx="52" cy="490" r="6" fill="rgba(235,108,54,0.15)" stroke="#eb6c36" strokeWidth="1.2"/>
  <text x="68" y="494" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Platform team · best performer</text>
  <circle cx="256" cy="490" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="272" y="494" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Engineering team</text>
  <line x1="416" y1="490" x2="440" y2="490" stroke="rgba(45,49,66,0.18)" strokeWidth="1" strokeDasharray="4,3"/>
  <text x="448" y="494" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Trend</text>
      </svg>
    </div>
  );
}
