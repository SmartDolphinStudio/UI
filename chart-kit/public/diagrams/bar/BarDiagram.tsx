import { useEffect } from "react";

/**
 * Bar Chart — Compare discrete quantities across categories or time intervals.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface BarDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function BarDiagram({ className }: BarDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="bar">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="bar-title bar-desc">

  <title id="bar-title">Sprint velocity · 8-sprint view</title>
  <desc id="bar-desc">Bar chart showing story points delivered across sprints S1 through S8, with Sprint 5 as the record high.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <text transform="rotate(-90 24 230)" x="24" y="230" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">STORY POINTS</text>
  <line x1="80" y1="357" x2="960" y2="357" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="293" x2="960" y2="293" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="230" x2="960" y2="230" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="167" x2="960" y2="167" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="103" x2="960" y2="103" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="40" x2="960" y2="40" stroke="rgba(45,49,66,0.06)" strokeWidth="0.8"/>
  <line x1="80" y1="40" x2="80" y2="420" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <line x1="80" y1="420" x2="960" y2="420" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text x="72" y="361" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">20</text>
  <text x="72" y="297" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">40</text>
  <text x="72" y="234" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">60</text>
  <text x="72" y="171" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">80</text>
  <text x="72" y="107" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">100</text>
  <text x="72" y="44" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">120</text>
  <rect x="99" y="192" width="72" height="228" fill="#f5f5f5"/>
  <rect x="99" y="192" width="72" height="228" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="135" y="184" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">72</text>
  <rect x="209" y="140" width="72" height="280" fill="#f5f5f5"/>
  <rect x="209" y="140" width="72" height="280" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="245" y="132" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">88</text>
  <rect x="319" y="120" width="72" height="300" fill="#f5f5f5"/>
  <rect x="319" y="120" width="72" height="300" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="355" y="112" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">95</text>
  <rect x="429" y="172" width="72" height="248" fill="#f5f5f5"/>
  <rect x="429" y="172" width="72" height="248" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="465" y="164" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">78</text>
  <rect x="539" y="72" width="72" height="348" fill="#f5f5f5"/>
  <rect x="539" y="72" width="72" height="348" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="575" y="64" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">110</text>
  <rect x="649" y="96" width="72" height="324" fill="#f5f5f5"/>
  <rect x="649" y="96" width="72" height="324" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="685" y="88" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">102</text>
  <rect x="759" y="152" width="72" height="268" fill="#f5f5f5"/>
  <rect x="759" y="152" width="72" height="268" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="795" y="144" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">85</text>
  <rect x="869" y="124" width="72" height="296" fill="#f5f5f5"/>
  <rect x="869" y="124" width="72" height="296" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="905" y="116" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">93</text>
  <text x="135" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">S1</text>
  <text x="245" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">S2</text>
  <text x="355" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">S3</text>
  <text x="465" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">S4</text>
  <text x="575" y="440" fill="#eb6c36" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">S5</text>
  <text x="685" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">S6</text>
  <text x="795" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">S7</text>
  <text x="905" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">S8</text>
  <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="488" width="16" height="10" rx="2" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="64" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Sprint 5 · record high</text>
  <rect x="220" y="488" width="16" height="10" rx="2" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="244" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Other sprints</text>
      </svg>
    </div>
  );
}
