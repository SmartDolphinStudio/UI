import { useEffect } from "react";

/**
 * Line Chart — Trends over time across series.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface LineChartProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function LineChart({ className }: LineChartProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="line">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="line-title line-desc">

  <title id="line-title">Weekly signups · Organic leads the growth</title>
  <desc id="line-desc">Line chart showing weekly signups from organic, direct, and referral channels across weeks W1 through W8.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <text transform="rotate(-90 24 230)" x="24" y="230" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">SIGNUPS / WEEK</text>
  <line x1="80" y1="357" x2="960" y2="357" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="293" x2="960" y2="293" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="230" x2="960" y2="230" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="167" x2="960" y2="167" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="103" x2="960" y2="103" stroke="rgba(45,49,66,0.08)" strokeWidth="0.8"/>
  <line x1="80" y1="40" x2="960" y2="40" stroke="rgba(45,49,66,0.06)" strokeWidth="0.8"/>
  <line x1="80" y1="40" x2="80" y2="420" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <line x1="80" y1="420" x2="960" y2="420" stroke="rgba(45,49,66,0.25)" strokeWidth="1"/>
  <text x="72" y="361" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">40</text>
  <text x="72" y="297" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">80</text>
  <text x="72" y="234" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">120</text>
  <text x="72" y="171" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">160</text>
  <text x="72" y="107" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">200</text>
  <text x="72" y="44" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end">240</text>
  <polyline points="80,349 200,338 320,344 440,325 560,333 680,312 800,322 920,301" fill="none" stroke="#5e7a9b" strokeWidth="1.2" strokeLinejoin="round"/>
  <polyline points="80,293 200,290 320,281 440,278 560,284 680,274 800,270 920,265" fill="none" stroke="#7c8f6f" strokeWidth="1.2" strokeLinejoin="round"/>
  <polygon points="80,230 200,206 320,186 440,164 560,175 680,138 800,111 920,88 920,420 80,420" fill="rgba(235,108,54,0.06)"/>
  <polyline points="80,230 200,206 320,186 440,164 560,175 680,138 800,111 920,88" fill="none" stroke="#eb6c36" strokeWidth="1.8" strokeLinejoin="round"/>
  <circle cx="80" cy="230" r="4" fill="#eb6c36"/>
  <circle cx="200" cy="206" r="4" fill="#eb6c36"/>
  <circle cx="320" cy="186" r="4" fill="#eb6c36"/>
  <circle cx="440" cy="164" r="4" fill="#eb6c36"/>
  <circle cx="560" cy="175" r="4" fill="#eb6c36"/>
  <circle cx="680" cy="138" r="4" fill="#eb6c36"/>
  <circle cx="800" cy="111" r="4" fill="#eb6c36"/>
  <circle cx="920" cy="88" r="4" fill="#eb6c36"/>
  <text x="80" y="440" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">W1</text>
  <text x="200" y="440" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">W2</text>
  <text x="320" y="440" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">W3</text>
  <text x="440" y="440" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">W4</text>
  <text x="560" y="440" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">W5</text>
  <text x="680" y="440" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">W6</text>
  <text x="800" y="440" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">W7</text>
  <text x="920" y="440" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">W8</text>
  <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <line x1="40" y1="492" x2="64" y2="492" stroke="#eb6c36" strokeWidth="1.8"/>
  <circle cx="52" cy="492" r="4" fill="#eb6c36"/>
  <text x="72" y="496" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Organic · focal</text>
  <line x1="200" y1="492" x2="224" y2="492" stroke="#7c8f6f" strokeWidth="1.2"/>
  <text x="232" y="496" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Direct</text>
  <line x1="316" y1="492" x2="340" y2="492" stroke="#5e7a9b" strokeWidth="1.2"/>
  <text x="348" y="496" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Referral</text>
      </svg>
    </div>
  );
}
