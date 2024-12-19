import { useEffect } from "react";

/**
 * Waterfall Chart — A running-total bridge between two numbers.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface WaterfallChartProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function WaterfallChart({ className }: WaterfallChartProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="waterfall">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="waterfall-title waterfall-desc">

  <title id="waterfall-title">Cloud budget bridge · FY25 → FY26</title>
  <desc id="waterfall-desc">Waterfall chart bridging the FY25 cloud budget of 240 thousand dollars a month to the FY26 plan of 236, through headcount growth, reserved-instance savings, new ML workloads, and storage tiering — the largest saving.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <text transform="rotate(-90 24 230)" x="24" y="230" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">CLOUD SPEND · $K / MO</text>
  <line x1="80" y1="325" x2="960" y2="325" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="230" x2="960" y2="230" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="135" x2="960" y2="135" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="40" x2="960" y2="40" stroke="rgba(45,49,66,0.06)" strokeWidth="0.8"/>
  <line x1="80" y1="40" x2="80" y2="420" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <line x1="80" y1="420" x2="960" y2="420" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text x="72" y="329" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">100</text>
  <text x="72" y="234" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">200</text>
  <text x="72" y="139" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">300</text>
  <text x="72" y="44" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">400</text>
  <line x1="208" y1="192" x2="256" y2="192" stroke="rgba(45,49,66,0.55)" strokeWidth="1" data-carry="240"/>
  <line x1="352" y1="131" x2="400" y2="131" stroke="rgba(45,49,66,0.55)" strokeWidth="1" data-carry="304"/>
  <line x1="496" y1="167" x2="544" y2="167" stroke="rgba(45,49,66,0.55)" strokeWidth="1" data-carry="266"/>
  <line x1="640" y1="146" x2="688" y2="146" stroke="rgba(45,49,66,0.55)" strokeWidth="1" data-carry="288"/>
  <line x1="784" y1="196" x2="832" y2="196" stroke="rgba(45,49,66,0.55)" strokeWidth="1" data-carry="236"/>
  <rect x="112" y="192" width="96" height="228" fill="#f5f5f5"/>
  <rect x="112" y="192" width="96" height="228" fill="rgba(45,49,66,0.08)" stroke="#2d3142" strokeWidth="1" data-role="total" data-value="240" data-name="FY25 base"/>
  <text x="160" y="184" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">240</text>
  <rect x="256" y="131" width="96" height="61" fill="#f5f5f5"/>
  <rect x="256" y="131" width="96" height="61" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1" data-role="delta" data-value="+64" data-name="Headcount"/>
  <text x="304" y="123" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">+64</text>
  <rect x="400" y="131" width="96" height="36" fill="#f5f5f5"/>
  <rect x="400" y="131" width="96" height="36" fill="#f5f5f5" stroke="#4f5d75" strokeWidth="1" data-role="delta" data-value="-38" data-name="Reserved inst."/>
  <text x="448" y="179" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">−38</text>
  <rect x="544" y="146" width="96" height="21" fill="#f5f5f5"/>
  <rect x="544" y="146" width="96" height="21" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1" data-role="delta" data-value="+22" data-name="ML workloads"/>
  <text x="592" y="138" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">+22</text>
  <rect x="688" y="146" width="96" height="50" fill="#f5f5f5"/>
  <rect x="688" y="146" width="96" height="50" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" strokeWidth="1" data-role="delta" data-value="-52" data-name="Storage tiering"/>
  <text x="736" y="208" fill="#2d3142" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">−52</text>
  <rect x="832" y="196" width="96" height="224" fill="#f5f5f5"/>
  <rect x="832" y="196" width="96" height="224" fill="rgba(45,49,66,0.08)" stroke="#2d3142" strokeWidth="1" data-role="total" data-value="236" data-name="FY26 plan"/>
  <text x="880" y="188" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">236</text>
  <text x="160" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">FY25 base</text>
  <text x="304" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Headcount</text>
  <text x="448" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Reserved inst.</text>
  <text x="592" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">ML workloads</text>
  <text x="736" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Storage tiering</text>
  <text x="880" y="440" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">FY26 plan</text>
  <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="488" width="16" height="10" rx="2" fill="rgba(45,49,66,0.08)" stroke="#2d3142" strokeWidth="1"/>
  <text x="64" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Start / end total</text>
  <rect x="200" y="488" width="16" height="10" rx="2" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="224" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Cost added</text>
  <rect x="340" y="488" width="16" height="10" rx="2" fill="#f5f5f5" stroke="#4f5d75" strokeWidth="1"/>
  <text x="364" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Cost removed</text>
  <rect x="480" y="488" width="16" height="10" rx="2" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="504" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Storage tiering · largest saving</text>
      </svg>
    </div>
  );
}
