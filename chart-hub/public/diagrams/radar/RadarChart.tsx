import { useEffect } from "react";

/**
 * Radar Chart — Multi-dimensional capability comparison.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface RadarChartProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function RadarChart({ className }: RadarChartProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="radar">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="radar-title radar-desc">

  <title id="radar-title">Storage backends · Capability radar</title>
  <desc id="radar-desc">Radar chart comparing MinIO, Amazon S3, Ceph, and Google Cloud Storage across five storage capabilities.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <polygon points="500,208 530,230 519,266 481,266 470,230" fill="none" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <polygon points="500,176 561,220 538,292 462,292 439,220" fill="none" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <polygon points="500,144 591,211 556,317 444,317 409,211" fill="none" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <polygon points="500,112 622,201 575,343 425,343 378,201" fill="none" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <polygon points="500,80 652,191 594,369 406,369 348,191" fill="none" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <line x1="500" y1="240" x2="500" y2="80" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <line x1="500" y1="240" x2="652" y2="191" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <line x1="500" y1="240" x2="594" y2="369" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <line x1="500" y1="240" x2="406" y2="369" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <line x1="500" y1="240" x2="348" y2="191" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <text x="500" y="62" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Small-file handling</text>
  <text x="669" y="189" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="start">Large-object reads</text>
  <text x="605" y="400" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="start">Write throughput</text>
  <text x="395" y="400" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="end">Operational simplicity</text>
  <text x="331" y="189" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="end">Iceberg integration</text>
  <text x="494" y="82" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">10</text>
  <text x="494" y="114" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">8</text>
  <text x="494" y="146" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">6</text>
  <text x="494" y="178" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">4</text>
  <text x="494" y="210" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">2</text>
  <polygon points="500,128 606,206 566,330 462,292 409,211" fill="rgba(94,122,155,0.18)" stroke="#5e7a9b" strokeWidth="1.5"/>
  <polygon points="500,144 637,196 575,343 444,317 394,206" fill="rgba(184,145,90,0.18)" stroke="#b8915a" strokeWidth="1.5"/>
  <polygon points="500,144 652,191 585,356 453,305 378,201" fill="rgba(124,143,111,0.18)" stroke="#7c8f6f" strokeWidth="1.5"/>
  <polygon points="500,96 622,201 585,356 415,356 363,196" fill="rgba(235,108,54,0.18)" stroke="#eb6c36" strokeWidth="1.8"/>
  <circle cx="500" cy="96" r="4" fill="#eb6c36"/>
  <circle cx="622" cy="201" r="4" fill="#eb6c36"/>
  <circle cx="585" cy="356" r="4" fill="#eb6c36"/>
  <circle cx="415" cy="356" r="4" fill="#eb6c36"/>
  <circle cx="363" cy="196" r="4" fill="#eb6c36"/>
  <line x1="40" y1="456" x2="960" y2="456" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="472" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="484" width="16" height="8" fill="rgba(235,108,54,0.18)" stroke="#eb6c36" strokeWidth="1.5"/>
  <text x="64" y="492" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">MinIO · recommended</text>
  <rect x="220" y="484" width="16" height="8" fill="rgba(124,143,111,0.18)" stroke="#7c8f6f" strokeWidth="1.5"/>
  <text x="244" y="492" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Amazon S3</text>
  <rect x="344" y="484" width="16" height="8" fill="rgba(94,122,155,0.18)" stroke="#5e7a9b" strokeWidth="1.5"/>
  <text x="368" y="492" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Ceph</text>
  <rect x="424" y="484" width="16" height="8" fill="rgba(184,145,90,0.18)" stroke="#b8915a" strokeWidth="1.5"/>
  <text x="448" y="492" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Google Cloud Storage</text>
  <text x="608" y="492" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif" fontStyle="italic">One coral. Position is the signal — color reserved for the recommended option.</text>
      </svg>
    </div>
  );
}
