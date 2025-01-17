import { useEffect } from "react";

/**
 * Bubble Chart — Three numeric dimensions: x, y, and bubble area.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface BubbleChartProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function BubbleChart({ className }: BubbleChartProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="bubble">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="bubble-title bubble-desc">

  <title id="bubble-title">The biggest risk is not the slowest service</title>
  <desc id="bubble-desc">Bubble chart of nine services by p95 latency and error rate on zero-based axes, bubble area proportional to requests per second; Payments carries near-peak traffic at the highest error rate.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <text transform="rotate(-90 24 230)" x="24" y="230" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">ERROR RATE, %</text>
  <text x="520" y="492" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">P95 LATENCY, MS</text>
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
  <text data-tick="y" data-value="1" x="72" y="329" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">1</text>
  <text data-tick="y" data-value="2" x="72" y="234" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">2</text>
  <text data-tick="y" data-value="3" x="72" y="139" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">3</text>
  <text data-tick="y" data-value="4" x="72" y="44" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">4</text>
  <text data-tick="y" data-value="0" x="72" y="424" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">0</text>
  <text data-tick="x" data-value="0" x="80" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">0</text>
  <text data-tick="x" data-value="100" x="256" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">100</text>
  <text data-tick="x" data-value="200" x="432" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">200</text>
  <text data-tick="x" data-value="300" x="608" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">300</text>
  <text data-tick="x" data-value="400" x="784" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">400</text>
  <text data-tick="x" data-value="500" x="960" y="440" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">500</text>
  <circle cx="229.6" cy="372.5" r="42" fill="#f5f5f5"/>
  <circle data-name="Gateway" data-x="85" data-y="0.5" data-size="900" cx="229.6" cy="372.5" r="42" fill="rgba(45,49,66,0.14)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="537.6" cy="154" r="38.6" fill="#f5f5f5"/>
  <circle data-name="Payments" data-x="260" data-y="2.8" data-size="760" cx="537.6" cy="154" r="38.6" fill="rgba(235,108,54,0.15)" stroke="#eb6c36" strokeWidth="1.2"/>
  <circle cx="326.4" cy="334.5" r="34.9" fill="#f5f5f5"/>
  <circle data-name="Auth" data-x="140" data-y="0.9" data-size="620" cx="326.4" cy="334.5" r="34.9" fill="rgba(45,49,66,0.17)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="396.8" cy="353.5" r="32.5" fill="#f5f5f5"/>
  <circle data-name="Catalog" data-x="180" data-y="0.7" data-size="540" cx="396.8" cy="353.5" r="32.5" fill="rgba(45,49,66,0.20)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="643.2" cy="315.5" r="30.7" fill="#f5f5f5"/>
  <circle data-name="Search" data-x="320" data-y="1.1" data-size="480" cx="643.2" cy="315.5" r="30.7" fill="rgba(45,49,66,0.23)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="484.8" cy="287" r="25.4" fill="#f5f5f5"/>
  <circle data-name="Media" data-x="230" data-y="1.4" data-size="330" cx="484.8" cy="287" r="25.4" fill="rgba(45,49,66,0.26)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="819.2" cy="268" r="20.3" fill="#f5f5f5"/>
  <circle data-name="Recommender" data-x="420" data-y="1.6" data-size="210" cx="819.2" cy="268" r="20.3" fill="rgba(45,49,66,0.29)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="247.2" cy="211" r="17.1" fill="#f5f5f5"/>
  <circle data-name="Notifications" data-x="95" data-y="2.2" data-size="150" cx="247.2" cy="211" r="17.1" fill="rgba(45,49,66,0.32)" stroke="#4f5d75" strokeWidth="1"/>
  <circle cx="889.6" cy="334.5" r="10.8" fill="#f5f5f5"/>
  <circle data-name="Reports" data-x="460" data-y="0.9" data-size="60" cx="889.6" cy="334.5" r="10.8" fill="rgba(45,49,66,0.35)" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="506" y="99" width="64" height="12" rx="2" fill="#f5f5f5"/>
  <text data-name="Payments" data-role="label" x="538" y="108" fill="#2d3142" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">PAYMENTS</text>
  <rect x="198" y="316" width="64" height="12" rx="2" fill="#f5f5f5"/>
  <text data-name="Gateway" data-role="label" x="230" y="325" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">GATEWAY</text>
  <rect x="858" y="347" width="64" height="12" rx="2" fill="#f5f5f5"/>
  <text data-name="Reports" data-role="label" x="890" y="356" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">REPORTS</text>
  <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <text x="960" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.06em" textAnchor="end">P95 VS ERROR RATE, BUBBLE AREA ∝ REQUESTS PER SECOND · BOTH AXES START AT ZERO · ILLUSTRATIVE FIGURES, NOT MEASURED SERVICES</text>
  <circle cx="52" cy="490" r="6" fill="rgba(235,108,54,0.15)" stroke="#eb6c36" strokeWidth="1.2"/>
  <text x="68" y="494" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Payments · focal, highest error rate at near-peak traffic</text>
  <circle cx="660" cy="490" r="5" fill="rgba(45,49,66,0.23)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="676" y="494" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Service · faintest fill is the largest bubble</text>
      </svg>
    </div>
  );
}
