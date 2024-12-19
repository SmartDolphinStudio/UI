import { useEffect } from "react";

/**
 * Org Chart — Reporting and routing structure.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface OrgChartProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function OrgChart({ className }: OrgChartProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="org-chart">
      <svg viewBox="0 0 1040 620" role="img" aria-labelledby="org-chart-title org-chart-desc">

  <title id="org-chart-title">Agent team org chart</title><desc id="org-chart-desc">Org chart showing a command center routing work to specialist agents and escalation owners.</desc>
  <rect width="1040" height="620" fill="#f5f5f5"/>
  <defs><marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#4f5d75"/></marker></defs>
  <text x="40" y="64" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" letterSpacing=".16em">COMMAND CENTER</text>
  <text x="40" y="196" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" letterSpacing=".16em">WORKSTREAMS</text>
  <text x="40" y="348" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" letterSpacing=".16em">SPECIALISTS</text>
  <line x1="36" y1="148" x2="1004" y2="148" stroke="rgba(45,49,66,.12)"/><line x1="36" y1="300" x2="1004" y2="300" stroke="rgba(45,49,66,.12)"/>
  <path d="M 520 120 L 520 172 L 200 172 L 200 220" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 520 172 L 412 172 L 412 220" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 520 172 L 628 172 L 628 220" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 520 172 L 840 172 L 840 220" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 200 268 L 200 324 L 120 324 L 120 372" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 200 324 L 280 324 L 280 372" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 412 268 L 412 324 L 440 324 L 440 372" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 628 268 L 628 324 L 600 324 L 600 372" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 628 324 L 760 324 L 760 372" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <path d="M 840 268 L 840 324 L 920 324 L 920 372" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="420" y="72" width="200" height="48" rx="6" fill="#f5f5f5"/><rect x="420" y="72" width="200" height="48" rx="6" fill="rgba(235,108,54,.08)" stroke="#eb6c36"/>
  <rect x="428" y="80" width="48" height="12" rx="2" fill="transparent" stroke="#eb6c36" opacity=".55"/><text x="452" y="89" fill="#eb6c36" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle" letterSpacing=".08em">FRONT</text>
  <text x="520" y="104" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Athena</text><text x="520" y="116" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">@athena · route ambiguous work</text>
  <rect x="120" y="220" width="160" height="48" rx="6" fill="#f5f5f5"/><rect x="120" y="220" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/><rect x="128" y="228" width="32" height="12" rx="2" fill="transparent" stroke="#4f5d75" opacity=".45"/><text x="144" y="237" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle" letterSpacing=".08em">POD</text><text x="200" y="252" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Growth</text><text x="200" y="264" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">ads · analytics</text>
  <rect x="332" y="220" width="160" height="48" rx="6" fill="#f5f5f5"/><rect x="332" y="220" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/><rect x="340" y="228" width="32" height="12" rx="2" fill="transparent" stroke="#4f5d75" opacity=".45"/><text x="356" y="237" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle" letterSpacing=".08em">POD</text><text x="412" y="252" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Content</text><text x="412" y="264" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">email · blog · SEO</text>
  <rect x="548" y="220" width="160" height="48" rx="6" fill="#f5f5f5"/><rect x="548" y="220" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/><rect x="556" y="228" width="32" height="12" rx="2" fill="transparent" stroke="#4f5d75" opacity=".45"/><text x="572" y="237" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle" letterSpacing=".08em">POD</text><text x="628" y="252" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Commerce</text><text x="628" y="264" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">shopify · CRO</text>
  <rect x="760" y="220" width="160" height="48" rx="6" fill="#f5f5f5"/><rect x="760" y="220" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/><rect x="768" y="228" width="32" height="12" rx="2" fill="transparent" stroke="#4f5d75" opacity=".45"/><text x="784" y="237" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle" letterSpacing=".08em">POD</text><text x="840" y="252" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Systems</text><text x="840" y="264" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">agents · runtime</text>
  <rect x="40" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="40" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" strokeWidth=".8"/><text x="108" y="400" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Media Buyer</text><text x="108" y="416" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">Google · Meta</text>
  <rect x="200" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="200" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" strokeWidth=".8"/><text x="268" y="400" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Maximo</text><text x="268" y="416" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">offers · strategy</text>
  <rect x="360" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="360" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" strokeWidth=".8"/><text x="428" y="400" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Rory</text><text x="428" y="416" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">copy · newsletter</text>
  <rect x="520" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="520" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" strokeWidth=".8"/><text x="588" y="400" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Porter</text><text x="588" y="416" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">Shopify admin</text>
  <rect x="680" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="680" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" strokeWidth=".8"/><text x="748" y="400" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Atlas</text><text x="748" y="416" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">theme · APIs</text>
  <rect x="840" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="840" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" strokeWidth=".8"/><text x="908" y="400" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Hermes</text><text x="908" y="416" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" textAnchor="middle">Paperclip health</text>
  <rect x="72" y="480" width="896" height="48" rx="6" fill="#f5f5f5"/><rect x="72" y="480" width="896" height="48" rx="6" fill="rgba(45,49,66,.02)" stroke="#7a8399" strokeDasharray="4,4"/>
  <text x="96" y="508" fill="#2d3142" fontFamily="'Geist',sans-serif" fontSize="12" fontWeight="600">Setup gaps stay visible:</text><text x="244" y="508" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9">specialists without Slack bots · approval gates · backend name mismatches</text>
  <line x1="40" y1="560" x2="1000" y2="560" stroke="rgba(45,49,66,.12)"/><text x="40" y="584" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9" letterSpacing=".14em">LEGEND</text><rect x="132" y="572" width="16" height="12" rx="2" fill="rgba(235,108,54,.08)" stroke="#eb6c36"/><text x="156" y="582" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9">front door</text><rect x="288" y="572" width="16" height="12" rx="2" fill="#ffffff" stroke="#2d3142"/><text x="312" y="582" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9">pod / owner</text><rect x="452" y="572" width="16" height="12" rx="2" fill="rgba(45,49,66,.02)" stroke="#7a8399" strokeDasharray="4,4"/><text x="476" y="582" fill="#4f5d75" fontFamily="'Geist Mono',monospace" fontSize="9">needs setup / gap</text>
      </svg>
    </div>
  );
}
