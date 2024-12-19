import { useEffect } from "react";

/**
 * IT Landscape / Current-State Map — What systems exist today, and how they hand off.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface ItLandscapeDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

const CSS =
  ".dd-it-state { --paper: #f5f5f5; --paper-2: #ececec; --ink: #2d3142; --muted: #4f5d75; --soft: #7a8399; --rule: rgba(45,49,66,0.12); --accent: #eb6c36; --link: #2e5aa8; --sans: 'Geist', system-ui, sans-serif; --serif: 'Instrument Serif', serif; --mono: 'Geist Mono', ui-monospace, monospace } .dd-it-state .subtitle { margin-bottom: 1.5rem; color: var(--muted); font-size: 0.9rem; line-height: 1.5; } .dd-it-state .diagram { overflow-x: auto; } .dd-it-state svg .zone { fill: rgba(45,49,66,0.02); stroke: rgba(45,49,66,0.10); stroke-width: 0.8; } .dd-it-state svg .zone-mask, .dd-it-state svg .node-mask, .dd-it-state svg .label-mask { fill: #f5f5f5; } .dd-it-state svg .zone-label, .dd-it-state svg .arrow-label, .dd-it-state svg .legend-label { font-family: 'Geist Mono', monospace; } .dd-it-state svg .zone-label { fill: rgba(45,49,66,0.40); font-size: 8px; letter-spacing: 0.14em; } .dd-it-state svg .node { fill: #fff; stroke: #2d3142; stroke-width: 1; } .dd-it-state svg .node.external { stroke: #4f5d75; stroke-dasharray: 4 3; } .dd-it-state svg .node.focal { fill: rgba(235,108,54,0.07); stroke: #eb6c36; stroke-width: 1.4; } .dd-it-state svg .node.survivor { fill: rgba(124,143,111,0.06); stroke: rgba(124,143,111,0.45); } .dd-it-state svg .node-name { fill: #2d3142; font: 600 12px 'Geist', sans-serif; } .dd-it-state svg .node-name.survivor { fill: #7c8f6f; } .dd-it-state svg .sub { fill: #4f5d75; font: 400 10px 'Geist Mono', monospace; } .dd-it-state svg .sub.focal { fill: #eb6c36; } .dd-it-state svg .arrow-label { font-size: 8px; font-weight: 600; letter-spacing: 0.08em; } .dd-it-state svg .legend-label { fill: #4f5d75; font-size: 8px; }";

export default function ItLandscapeDiagram({ className }: ItLandscapeDiagramProps) {
  // Load the editorial fonts (and scoped CSS when needed) once, on first mount.
  useEffect(() => {
    if (!document.getElementById("dd-fonts")) {
      const link = document.createElement("link");
      link.id = "dd-fonts";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }
    if (!document.getElementById("dd-css-it-state")) {
      const style = document.createElement("style");
      style.id = "dd-css-it-state";
      style.textContent = CSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="it-state">
      <svg viewBox="0 0 960 500" role="img" aria-labelledby="it-state-title it-state-desc">

  <title id="it-state-title">Northwind Retail current IT landscape</title>
  <desc id="it-state-desc">Three zones show collection, processing, and dissemination through manual file handoffs.</desc>
  <defs>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
   <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
   <symbol id="icon-file" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2"/></symbol>
   <symbol id="icon-screen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M7 20h10M9 16v4M15 16v4"/></symbol>
   <symbol id="icon-db" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></symbol>
   <symbol id="icon-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="9" cy="8" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 4.5a4 4 0 0 1 0 7M18 15a4 4 0 0 1 3 4v2"/></symbol>
  </defs>
  <rect width="960" height="500" fill="#f5f5f5"/>
  <rect className="zone" x="16" y="52" width="256" height="360" rx="8"/>
  <rect className="zone-mask" x="36" y="44" width="92" height="16"/>
  <text className="zone-label" x="40" y="56">COLLECTION</text>
  <rect className="zone" x="292" y="52" width="360" height="360" rx="8"/>
  <rect className="zone-mask" x="312" y="44" width="92" height="16"/>
  <text className="zone-label" x="316" y="56">PROCESSING</text>
  <rect className="zone" x="672" y="52" width="272" height="360" rx="8"/>
  <rect className="zone-mask" x="692" y="44" width="116" height="16"/>
  <text className="zone-label" x="696" y="56">DISSEMINATION</text>
  <path d="M 252,108 H 340" fill="none" stroke="#2e5aa8" strokeWidth="1.2" markerEnd="url(#arrow-link)"/>
  <path d="M 252,196 H 308 Q 316,196 316,188 V 132 Q 316,124 324,124 H 340" fill="none" stroke="#2e5aa8" strokeWidth="1.2" markerEnd="url(#arrow-link)"/>
  <path d="M 252,284 H 324 Q 332,284 332,276 V 148 Q 332,140 340,140" fill="none" stroke="#2e5aa8" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrow-link)"/>
  <line x1="472" y1="148" x2="472" y2="232" stroke="#eb6c36" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#arrow-accent)"/>
  <line x1="472" y1="304" x2="472" y2="344" stroke="#4f5d75" strokeWidth="1" markerEnd="url(#arrow)"/>
  <path d="M 604,268 H 654 Q 662,268 662,260 V 72 Q 662,64 670,64 H 800 Q 808,64 808,72 V 80" fill="none" stroke="#eb6c36" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/>
  <line x1="808" y1="140" x2="808" y2="216" stroke="#2e5aa8" strokeWidth="1.2" markerEnd="url(#arrow-link)"/>
  <line x1="808" y1="272" x2="808" y2="344" stroke="#2e5aa8" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrow-link)"/>
  <rect className="node-mask" x="36" y="80" width="216" height="56" rx="6"/><rect className="node" x="36" y="80" width="216" height="56" rx="6"/>
  <use href="#icon-file" x="48" y="96" width="24" height="24" color="#2d3142"/><text className="node-name" x="80" y="106">Point-of-Sale Exports</text><text className="sub" x="80" y="122">nightly · CSV</text>
  <rect className="node-mask" x="36" y="168" width="216" height="56" rx="6"/><rect className="node" x="36" y="168" width="216" height="56" rx="6"/>
  <use href="#icon-file" x="48" y="184" width="24" height="24" color="#2d3142"/><text className="node-name" x="80" y="194">Online Store Export</text><text className="sub" x="80" y="210">orders · flat file</text>
  <rect className="node-mask" x="36" y="256" width="216" height="56" rx="6"/><rect className="node external" x="36" y="256" width="216" height="56" rx="6"/>
  <use href="#icon-file" x="48" y="272" width="24" height="24" color="#4f5d75"/><text className="node-name" x="80" y="282">Supplier Price Lists</text><text className="sub" x="80" y="298">external · XLSX</text>
  <rect className="node-mask" x="340" y="80" width="264" height="68" rx="6"/><rect className="node focal" x="340" y="80" width="264" height="68" rx="6"/>
  <use href="#icon-file" x="352" y="100" width="24" height="24" color="#eb6c36"/><text className="node-name" x="384" y="108">Shared Drive</text><text className="sub focal" x="384" y="124">no version control</text><text className="sub" x="384" y="140">department folders</text>
  <rect className="node-mask" x="340" y="232" width="264" height="72" rx="6"/><rect className="node" x="340" y="232" width="264" height="72" rx="6"/>
  <use href="#icon-screen" x="352" y="256" width="24" height="24" color="#2d3142"/><text className="node-name" x="384" y="262">Spreadsheet Handoffs</text><text className="sub" x="384" y="278">local workbooks · macros</text><text className="sub" x="384" y="292">manual reconciliation</text>
  <rect className="node-mask" x="340" y="344" width="264" height="56" rx="6"/><rect className="node survivor" x="340" y="344" width="264" height="56" rx="6"/>
  <use href="#icon-db" x="352" y="360" width="24" height="24" color="#7c8f6f"/><text className="node-name survivor" x="384" y="370">On-prem RDBMS</text><text className="sub" x="384" y="386">inventory · finance</text>
  <rect className="node-mask" x="704" y="80" width="208" height="60" rx="6"/><rect className="node focal" x="704" y="80" width="208" height="60" rx="6"/>
  <use href="#icon-screen" x="716" y="100" width="24" height="24" color="#eb6c36"/><text className="node-name" x="748" y="108">Reporting Portal</text><text className="sub focal" x="748" y="124">manual refresh</text>
  <rect className="node-mask" x="704" y="216" width="208" height="56" rx="6"/><rect className="node" x="704" y="216" width="208" height="56" rx="6"/>
  <use href="#icon-file" x="716" y="232" width="24" height="24" color="#2d3142"/><text className="node-name" x="748" y="242">Email Report Packs</text><text className="sub" x="748" y="258">weekly · PDF</text>
  <rect className="node-mask" x="704" y="344" width="208" height="56" rx="6"/><rect className="node external" x="704" y="344" width="208" height="56" rx="6"/>
  <use href="#icon-users" x="716" y="360" width="24" height="24" color="#4f5d75"/><text className="node-name" x="748" y="370">Regional Managers</text><text className="sub" x="748" y="386">12 store regions</text>
  <rect className="label-mask" x="260" y="86" width="40" height="16" rx="2"/><text className="arrow-label" x="280" y="98" textAnchor="middle" fill="#2e5aa8">CSV</text>
  <rect className="label-mask" x="260" y="174" width="52" height="16" rx="2"/><text className="arrow-label" x="286" y="186" textAnchor="middle" fill="#2e5aa8">EXPORT</text>
  <rect className="label-mask" x="260" y="262" width="44" height="16" rx="2"/><text className="arrow-label" x="282" y="274" textAnchor="middle" fill="#2e5aa8">XLSX</text>
  <rect className="label-mask" x="478" y="156" width="40" height="16" rx="2"/><text className="arrow-label" x="498" y="168" textAnchor="middle" fill="#eb6c36">COPY</text>
  <rect className="label-mask" x="478" y="312" width="40" height="16" rx="2"/><text className="arrow-label" x="498" y="324" textAnchor="middle" fill="#4f5d75">LOAD</text>
  <rect className="label-mask" x="612" y="246" width="44" height="16" rx="2"/><text className="arrow-label" x="634" y="258" textAnchor="middle" fill="#eb6c36">XLSX</text>
  <rect className="label-mask" x="814" y="148" width="36" height="16" rx="2"/><text className="arrow-label" x="832" y="160" textAnchor="middle" fill="#2e5aa8">PDF</text>
  <rect className="label-mask" x="814" y="280" width="48" height="16" rx="2"/><text className="arrow-label" x="838" y="292" textAnchor="middle" fill="#2e5aa8">EMAIL</text>
  <line x1="16" y1="440" x2="944" y2="440" stroke="rgba(45,49,66,0.12)" strokeWidth="0.8"/>
  <text className="legend-label" x="16" y="460" letterSpacing="0.14em">LEGEND</text>
  <line x1="80" y1="456" x2="104" y2="456" stroke="#2e5aa8" strokeWidth="1.2"/><text className="legend-label" x="112" y="460">data flow</text>
  <line x1="208" y1="456" x2="232" y2="456" stroke="#eb6c36" strokeWidth="1.4"/><text className="legend-label" x="240" y="460">pain-point</text>
  <rect x="372" y="450" width="16" height="12" rx="2" fill="#fff" stroke="#4f5d75" strokeWidth="0.8" strokeDasharray="4 3"/><text className="legend-label" x="396" y="460">external</text>
  <rect x="492" y="450" width="16" height="12" rx="2" fill="rgba(235,108,54,0.07)" stroke="#eb6c36"/><text className="legend-label" x="516" y="460">bottleneck</text>
      </svg>
    </div>
  );
}
