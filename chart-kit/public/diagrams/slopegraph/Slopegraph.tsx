import { useEffect } from "react";

/**
 * Slopegraph — Before / after per category on one shared scale.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface SlopegraphProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function Slopegraph({ className }: SlopegraphProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="slopegraph">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="slopegraph-title slopegraph-desc">

  <title id="slopegraph-title">One service went the other way</title>
  <desc id="slopegraph-desc">Slopegraph of p95 response time by service before and after a caching layer, on one shared 100-to-550-millisecond scale; four services got faster and the recommender got slower, crossing three of them.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <text transform="rotate(-90 24 230)" x="24" y="230" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">P95 RESPONSE TIME, MS</text>
  <line x1="320" y1="40" x2="320" y2="420" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text data-axis="from" data-state="BEFORE" x="320" y="440" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">BEFORE</text>
  <line x1="680" y1="40" x2="680" y2="420" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text data-axis="to" data-state="AFTER" x="680" y="440" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">AFTER</text>
  <line data-series="Search" data-from="512" data-to="208" x1="320" y1="72.1" x2="680" y2="328.8" stroke="rgba(45,49,66,0.80)" strokeWidth="1.2"/>
  <circle cx="320" cy="72.1" r="3" fill="rgba(45,49,66,0.80)"/>
  <circle cx="680" cy="328.8" r="3" fill="rgba(45,49,66,0.80)"/>
  <text data-series="Search" data-end="from" data-role="name" x="272" y="75.6" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif" textAnchor="end">Search</text>
  <text data-series="Search" data-end="from" x="304" y="75.6" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">512</text>
  <text data-series="Search" data-end="to" x="696" y="332.3" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">208</text>
  <text data-series="Search" data-end="to" data-role="name" x="728" y="332.3" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif">Search</text>
  <line data-series="Catalog" data-from="376" data-to="164" x1="320" y1="186.9" x2="680" y2="366" stroke="rgba(45,49,66,0.74)" strokeWidth="1.2"/>
  <circle cx="320" cy="186.9" r="3" fill="rgba(45,49,66,0.74)"/>
  <circle cx="680" cy="366" r="3" fill="rgba(45,49,66,0.74)"/>
  <text data-series="Catalog" data-end="from" data-role="name" x="272" y="190.4" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif" textAnchor="end">Catalog</text>
  <text data-series="Catalog" data-end="from" x="304" y="190.4" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">376</text>
  <text data-series="Catalog" data-end="to" x="696" y="369.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">164</text>
  <text data-series="Catalog" data-end="to" data-role="name" x="728" y="369.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif">Catalog</text>
  <line data-series="Checkout" data-from="291" data-to="143" x1="320" y1="258.7" x2="680" y2="383.7" stroke="rgba(45,49,66,0.68)" strokeWidth="1.2"/>
  <circle cx="320" cy="258.7" r="3" fill="rgba(45,49,66,0.68)"/>
  <circle cx="680" cy="383.7" r="3" fill="rgba(45,49,66,0.68)"/>
  <text data-series="Checkout" data-end="from" data-role="name" x="272" y="262.2" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif" textAnchor="end">Checkout</text>
  <text data-series="Checkout" data-end="from" x="304" y="262.2" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">291</text>
  <text data-series="Checkout" data-end="to" x="696" y="387.2" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">143</text>
  <text data-series="Checkout" data-end="to" data-role="name" x="728" y="387.2" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif">Checkout</text>
  <line data-series="Auth" data-from="154" data-to="121" x1="320" y1="374.4" x2="680" y2="402.3" stroke="rgba(45,49,66,0.62)" strokeWidth="1.2"/>
  <circle cx="320" cy="374.4" r="3" fill="rgba(45,49,66,0.62)"/>
  <circle cx="680" cy="402.3" r="3" fill="rgba(45,49,66,0.62)"/>
  <text data-series="Auth" data-end="from" data-role="name" x="272" y="377.9" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif" textAnchor="end">Auth</text>
  <text data-series="Auth" data-end="from" x="304" y="377.9" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">154</text>
  <text data-series="Auth" data-end="to" x="696" y="405.8" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">121</text>
  <text data-series="Auth" data-end="to" data-role="name" x="728" y="405.8" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif">Auth</text>
  <line data-series="Recommender" data-from="238" data-to="431" x1="320" y1="303.5" x2="680" y2="140.5" stroke="#eb6c36" strokeWidth="2.4"/>
  <circle cx="320" cy="303.5" r="4" fill="#eb6c36"/>
  <circle cx="680" cy="140.5" r="4" fill="#eb6c36"/>
  <text data-series="Recommender" data-end="from" data-role="name" x="272" y="307" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="end">Recommender</text>
  <text data-series="Recommender" data-end="from" x="304" y="307" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">238</text>
  <text data-series="Recommender" data-end="to" x="696" y="144" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">431</text>
  <text data-series="Recommender" data-end="to" data-role="name" x="728" y="144" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif">Recommender</text>
  <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <text x="960" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.06em" textAnchor="end">P95 RESPONSE TIME IN MS, LOWER IS BETTER · SAME 100-550 SCALE ON BOTH AXES · ILLUSTRATIVE FIGURES, NOT A MEASURED RELEASE</text>
  <line x1="40" y1="492" x2="64" y2="492" stroke="#eb6c36" strokeWidth="2.4"/>
  <circle cx="52" cy="492" r="4" fill="#eb6c36"/>
  <text x="72" y="496" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Recommender · focal, the only regression</text>
  <line x1="320" y1="492" x2="344" y2="492" stroke="rgba(45,49,66,0.80)" strokeWidth="1.2"/>
  <circle cx="332" cy="492" r="3" fill="rgba(45,49,66,0.80)"/>
  <text x="352" y="496" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Other services · strongest tone was slowest before</text>
      </svg>
    </div>
  );
}
