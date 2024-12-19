import { useEffect } from "react";

/**
 * Bump Chart — Show rank changes over time.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface BumpChartProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function BumpChart({ className }: BumpChartProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="bump">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="bump-title bump-desc">

  <title id="bump-title">The default everyone stopped choosing</title>
  <desc id="bump-desc">Bump chart ranking six internal packages by weekly downloads across four quarters; legacy-http slides from first to sixth while fetch-kit takes the top rank in the second quarter and keeps it.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <text transform="rotate(-90 24 228)" x="24" y="228" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">RANK BY WEEKLY DOWNLOADS · 1 = MOST</text>
  <line x1="320" y1="64" x2="320" y2="392" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text data-axis="0" data-state="Q1" x="320" y="416" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">Q1</text>
  <line x1="440" y1="64" x2="440" y2="392" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text data-axis="1" data-state="Q2" x="440" y="416" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">Q2</text>
  <line x1="560" y1="64" x2="560" y2="392" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text data-axis="2" data-state="Q3" x="560" y="416" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">Q3</text>
  <line x1="680" y1="64" x2="680" y2="392" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text data-axis="3" data-state="Q4" x="680" y="416" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">Q4</text>
  <path data-series="authx" data-ranks="2,3,3,2" d="M320,144 L440,200 L560,200 L680,144" fill="none" stroke="rgba(45,49,66,0.80)" strokeWidth="1.2"/>
  <circle cx="320" cy="144" r="3" fill="rgba(45,49,66,0.80)"/>
  <circle cx="440" cy="200" r="3" fill="rgba(45,49,66,0.80)"/>
  <circle cx="560" cy="200" r="3" fill="rgba(45,49,66,0.80)"/>
  <circle cx="680" cy="144" r="3" fill="rgba(45,49,66,0.80)"/>
  <text data-series="authx" data-end="first" data-role="name" x="272" y="147.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif" textAnchor="end">authx</text>
  <text data-series="authx" data-end="first" data-role="rank" x="304" y="147.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">#2</text>
  <text data-series="authx" data-end="last" data-role="rank" x="696" y="147.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">#2</text>
  <text data-series="authx" data-end="last" data-role="name" x="728" y="147.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif">authx</text>
  <path data-series="fetch-kit" data-ranks="3,1,1,1" d="M320,200 L440,88 L560,88 L680,88" fill="none" stroke="rgba(45,49,66,0.75)" strokeWidth="1.2"/>
  <circle cx="320" cy="200" r="3" fill="rgba(45,49,66,0.75)"/>
  <circle cx="440" cy="88" r="3" fill="rgba(45,49,66,0.75)"/>
  <circle cx="560" cy="88" r="3" fill="rgba(45,49,66,0.75)"/>
  <circle cx="680" cy="88" r="3" fill="rgba(45,49,66,0.75)"/>
  <text data-series="fetch-kit" data-end="first" data-role="name" x="272" y="203.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif" textAnchor="end">fetch-kit</text>
  <text data-series="fetch-kit" data-end="first" data-role="rank" x="304" y="203.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">#3</text>
  <text data-series="fetch-kit" data-end="last" data-role="rank" x="696" y="91.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">#1</text>
  <text data-series="fetch-kit" data-end="last" data-role="name" x="728" y="91.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif">fetch-kit</text>
  <path data-series="queuelib" data-ranks="4,5,5,4" d="M320,256 L440,312 L560,312 L680,256" fill="none" stroke="rgba(45,49,66,0.70)" strokeWidth="1.2"/>
  <circle cx="320" cy="256" r="3" fill="rgba(45,49,66,0.70)"/>
  <circle cx="440" cy="312" r="3" fill="rgba(45,49,66,0.70)"/>
  <circle cx="560" cy="312" r="3" fill="rgba(45,49,66,0.70)"/>
  <circle cx="680" cy="256" r="3" fill="rgba(45,49,66,0.70)"/>
  <text data-series="queuelib" data-end="first" data-role="name" x="272" y="259.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif" textAnchor="end">queuelib</text>
  <text data-series="queuelib" data-end="first" data-role="rank" x="304" y="259.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">#4</text>
  <text data-series="queuelib" data-end="last" data-role="rank" x="696" y="259.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">#4</text>
  <text data-series="queuelib" data-end="last" data-role="name" x="728" y="259.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif">queuelib</text>
  <path data-series="logfmt" data-ranks="5,4,2,3" d="M320,312 L440,256 L560,144 L680,200" fill="none" stroke="rgba(45,49,66,0.66)" strokeWidth="1.2"/>
  <circle cx="320" cy="312" r="3" fill="rgba(45,49,66,0.66)"/>
  <circle cx="440" cy="256" r="3" fill="rgba(45,49,66,0.66)"/>
  <circle cx="560" cy="144" r="3" fill="rgba(45,49,66,0.66)"/>
  <circle cx="680" cy="200" r="3" fill="rgba(45,49,66,0.66)"/>
  <text data-series="logfmt" data-end="first" data-role="name" x="272" y="315.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif" textAnchor="end">logfmt</text>
  <text data-series="logfmt" data-end="first" data-role="rank" x="304" y="315.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">#5</text>
  <text data-series="logfmt" data-end="last" data-role="rank" x="696" y="203.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">#3</text>
  <text data-series="logfmt" data-end="last" data-role="name" x="728" y="203.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif">logfmt</text>
  <path data-series="schema-gen" data-ranks="6,6,6,5" d="M320,368 L440,368 L560,368 L680,312" fill="none" stroke="rgba(45,49,66,0.62)" strokeWidth="1.2"/>
  <circle cx="320" cy="368" r="3" fill="rgba(45,49,66,0.62)"/>
  <circle cx="440" cy="368" r="3" fill="rgba(45,49,66,0.62)"/>
  <circle cx="560" cy="368" r="3" fill="rgba(45,49,66,0.62)"/>
  <circle cx="680" cy="312" r="3" fill="rgba(45,49,66,0.62)"/>
  <text data-series="schema-gen" data-end="first" data-role="name" x="272" y="371.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif" textAnchor="end">schema-gen</text>
  <text data-series="schema-gen" data-end="first" data-role="rank" x="304" y="371.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">#6</text>
  <text data-series="schema-gen" data-end="last" data-role="rank" x="696" y="315.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">#5</text>
  <text data-series="schema-gen" data-end="last" data-role="name" x="728" y="315.5" fill="#2d3142" fontSize="11" fontWeight="500" fontFamily="'Geist', sans-serif">schema-gen</text>
  <path data-series="legacy-http" data-ranks="1,2,4,6" d="M320,88 L440,144 L560,256 L680,368" fill="none" stroke="#eb6c36" strokeWidth="2.4"/>
  <circle cx="320" cy="88" r="4" fill="#eb6c36"/>
  <circle cx="440" cy="144" r="4" fill="#eb6c36"/>
  <circle cx="560" cy="256" r="4" fill="#eb6c36"/>
  <circle cx="680" cy="368" r="4" fill="#eb6c36"/>
  <text data-series="legacy-http" data-end="first" data-role="name" x="272" y="91.5" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="end">legacy-http</text>
  <text data-series="legacy-http" data-end="first" data-role="rank" x="304" y="91.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">#1</text>
  <text data-series="legacy-http" data-end="last" data-role="rank" x="696" y="371.5" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">#6</text>
  <text data-series="legacy-http" data-end="last" data-role="name" x="728" y="371.5" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif">legacy-http</text>
  <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <text x="960" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.06em" textAnchor="end">RANKED BY WEEKLY DOWNLOADS, TIES KEEP PRIOR ORDER · SAME MEASURE EVERY QUARTER · ILLUSTRATIVE FIGURES, NOT A MEASURED REGISTRY</text>
  <line x1="40" y1="492" x2="64" y2="492" stroke="#eb6c36" strokeWidth="2.4"/>
  <circle cx="52" cy="492" r="4" fill="#eb6c36"/>
  <text x="72" y="496" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">legacy-http · focal, first to sixth in a year</text>
  <line x1="320" y1="492" x2="344" y2="492" stroke="rgba(45,49,66,0.80)" strokeWidth="1.2"/>
  <circle cx="332" cy="492" r="3" fill="rgba(45,49,66,0.80)"/>
  <text x="352" y="496" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Other packages · opacity records the Q1 order</text>
      </svg>
    </div>
  );
}
