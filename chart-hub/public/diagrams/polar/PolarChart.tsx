import { useEffect } from "react";

/**
 * Polar Chart — Radial categories on a percentage scale.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface PolarChartProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function PolarChart({ className }: PolarChartProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="polar">
      <svg viewBox="0 0 1000 520" role="img" aria-labelledby="polar-title polar-desc">

  <title id="polar-title">Request demand by UTC window</title>
  <desc id="polar-desc">Polar chart on a 0–100% scale identifying 12–15 UTC as the 100% peak, with the other seven UTC windows proceeding clockwise.</desc>
  <rect data-polar-background width="100%" height="100%" fill="#f5f5f5"/>
  <text x="40" y="28" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">% OF DAILY PEAK · 0–100</text>
  <circle data-polar-ring cx="500" cy="230" r="32" fill="none" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <circle data-polar-ring cx="500" cy="230" r="64" fill="none" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <circle data-polar-ring cx="500" cy="230" r="96" fill="none" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <circle data-polar-ring cx="500" cy="230" r="128" fill="none" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <circle data-polar-ring cx="500" cy="230" r="160" fill="none" stroke="rgba(45,49,66,0.20)" strokeWidth="0.8"/>
  <line data-polar-spoke data-polar-index="0" x1="500" y1="230" x2="500" y2="70" stroke="rgba(45,49,66,0.16)" strokeWidth="0.8"/>
  <line data-polar-spoke data-polar-index="1" x1="500" y1="230" x2="613.137" y2="116.863" stroke="rgba(45,49,66,0.16)" strokeWidth="0.8"/>
  <line data-polar-spoke data-polar-index="2" x1="500" y1="230" x2="660" y2="230" stroke="rgba(45,49,66,0.16)" strokeWidth="0.8"/>
  <line data-polar-spoke data-polar-index="3" x1="500" y1="230" x2="613.137" y2="343.137" stroke="rgba(45,49,66,0.16)" strokeWidth="0.8"/>
  <line data-polar-spoke data-polar-index="4" x1="500" y1="230" x2="500" y2="390" stroke="rgba(45,49,66,0.16)" strokeWidth="0.8"/>
  <line data-polar-spoke data-polar-index="5" x1="500" y1="230" x2="386.863" y2="343.137" stroke="rgba(45,49,66,0.16)" strokeWidth="0.8"/>
  <line data-polar-spoke data-polar-index="6" x1="500" y1="230" x2="340" y2="230" stroke="rgba(45,49,66,0.16)" strokeWidth="0.8"/>
  <line data-polar-spoke data-polar-index="7" x1="500" y1="230" x2="386.863" y2="116.863" stroke="rgba(45,49,66,0.16)" strokeWidth="0.8"/>
  <text x="492" y="201" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">20</text>
  <text x="492" y="169" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">40</text>
  <text x="492" y="137" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">60</text>
  <text x="492" y="105" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">80</text>
  <text x="492" y="73" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">100</text>
  <text x="508" y="233" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace">0</text>
  <g data-polar-category="00–03" data-polar-index="0" data-polar-value="32">
   <line data-polar-ray x1="500" y1="230" x2="500" y2="178.8" stroke="#4f5d75" strokeWidth="2"/>
   <circle data-polar-marker cx="500" cy="178.8" r="4" fill="#f5f5f5" stroke="#4f5d75" strokeWidth="1.2"/>
   <text x="500" y="42" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">00–03</text>
   <text data-polar-value-label x="500" y="26" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">32</text>
  </g>
  <g data-polar-category="03–06" data-polar-index="1" data-polar-value="18">
   <line data-polar-ray x1="500" y1="230" x2="520.365" y2="209.635" stroke="#4f5d75" strokeWidth="2"/>
   <circle data-polar-marker cx="520.365" cy="209.635" r="4" fill="#f5f5f5" stroke="#4f5d75" strokeWidth="1.2"/>
   <text x="632.936" y="97.064" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="start">03–06</text>
   <text data-polar-value-label x="644.25" y="85.75" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="start">18</text>
  </g>
  <g data-polar-category="06–09" data-polar-index="2" data-polar-value="24">
   <line data-polar-ray x1="500" y1="230" x2="538.4" y2="230" stroke="#4f5d75" strokeWidth="2"/>
   <circle data-polar-marker cx="538.4" cy="230" r="4" fill="#f5f5f5" stroke="#4f5d75" strokeWidth="1.2"/>
   <text x="688" y="230" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="start">06–09</text>
   <text data-polar-value-label x="704" y="230" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="start" dy="16">24</text>
  </g>
  <g data-polar-category="09–12" data-polar-index="3" data-polar-value="58">
   <line data-polar-ray x1="500" y1="230" x2="565.62" y2="295.62" stroke="#4f5d75" strokeWidth="2"/>
   <circle data-polar-marker cx="565.62" cy="295.62" r="4" fill="#f5f5f5" stroke="#4f5d75" strokeWidth="1.2"/>
   <text x="632.936" y="362.936" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="start">09–12</text>
   <text data-polar-value-label x="644.25" y="374.25" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="start" dy="12">58</text>
  </g>
  <g data-polar-category="12–15" data-polar-index="4" data-polar-value="100" data-polar-focal="true">
   <line data-polar-ray x1="500" y1="230" x2="500" y2="390" stroke="#eb6c36" strokeWidth="2.4"/>
   <circle data-polar-marker cx="500" cy="390" r="5" fill="#f5f5f5" stroke="#eb6c36" strokeWidth="1.2"/>
   <text x="500" y="418" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">12–15</text>
   <text data-polar-value-label x="500" y="434" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">100</text>
  </g>
  <g data-polar-category="15–18" data-polar-index="5" data-polar-value="82">
   <line data-polar-ray x1="500" y1="230" x2="407.227" y2="322.773" stroke="#4f5d75" strokeWidth="2"/>
   <circle data-polar-marker cx="407.227" cy="322.773" r="4" fill="#f5f5f5" stroke="#4f5d75" strokeWidth="1.2"/>
   <text x="367.064" y="362.936" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="end">15–18</text>
   <text data-polar-value-label x="355.75" y="374.25" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end" dy="12">82</text>
  </g>
  <g data-polar-category="18–21" data-polar-index="6" data-polar-value="76">
   <line data-polar-ray x1="500" y1="230" x2="378.4" y2="230" stroke="#4f5d75" strokeWidth="2"/>
   <circle data-polar-marker cx="378.4" cy="230" r="4" fill="#f5f5f5" stroke="#4f5d75" strokeWidth="1.2"/>
   <text x="312" y="230" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="end">18–21</text>
   <text data-polar-value-label x="296" y="230" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end" dy="16">76</text>
  </g>
  <g data-polar-category="21–24" data-polar-index="7" data-polar-value="45">
   <line data-polar-ray x1="500" y1="230" x2="449.088" y2="179.088" stroke="#4f5d75" strokeWidth="2"/>
   <circle data-polar-marker cx="449.088" cy="179.088" r="4" fill="#f5f5f5" stroke="#4f5d75" strokeWidth="1.2"/>
   <text x="367.064" y="97.064" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="end">21–24</text>
   <text data-polar-value-label x="355.75" y="85.75" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">45</text>
  </g>
  <line data-polar-rule x1="40" y1="468" x2="960" y2="468" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="488" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.08em">Illustrative normalized workload profile</text>
      </svg>
    </div>
  );
}
