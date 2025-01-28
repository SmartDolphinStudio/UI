import { useEffect } from "react";

/**
 * Data Flow Diagram — Role-scoped analytics pipeline.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface DataFlowDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

const CSS =
  ".dd-data-flow { --paper: #f5f5f5; --paper-2: #ececec; --ink: #2d3142; --muted: #4f5d75; --soft: #7a8399; --rule: rgba(45,49,66,0.12); --accent: #eb6c36; --accent-tint: rgba(235,108,54,0.08); --link: #2e5aa8; --sans: 'Geist', system-ui, sans-serif; --serif: 'Instrument Serif', serif; --mono: 'Geist Mono', ui-monospace, monospace } .dd-data-flow .step-number, .dd-data-flow .step-label, .dd-data-flow .lane-label, .dd-data-flow .role-text, .dd-data-flow .chip-text, .dd-data-flow .legend-label { font-family: var(--mono); text-anchor: middle; } .dd-data-flow .step-number { fill: var(--ink); font-size: 7px; font-weight: 600; } .dd-data-flow .step-label { fill: var(--muted); font-size: 7px; font-weight: 500; letter-spacing: 0.12em; } .dd-data-flow .lane-label { fill: var(--muted); font-size: 8px; font-weight: 500; letter-spacing: 0.14em; } .dd-data-flow .role-text { fill: var(--ink); font-size: 6px; font-weight: 600; } .dd-data-flow .node-title { fill: var(--ink); font: 600 9px var(--sans); text-anchor: middle; } .dd-data-flow .node-sub { fill: var(--muted); font: 400 6.5px var(--mono); text-anchor: middle; } .dd-data-flow .node-tool { fill: var(--soft); font: 400 6.5px var(--mono); text-anchor: middle; } .dd-data-flow .chip-text { fill: #fff; font-size: 5px; font-weight: 700; } .dd-data-flow .focal-text { fill: var(--accent); } .dd-data-flow .legend-label { fill: var(--muted); font-size: 7px; font-weight: 500; letter-spacing: 0.12em; text-anchor: end; } .dd-data-flow .legend-text { fill: var(--muted); font: 400 7px var(--sans); }";

export default function DataFlowDiagram({ className }: DataFlowDiagramProps) {
  // Load the editorial fonts (and scoped CSS when needed) once, on first mount.
  useEffect(() => {
    if (!document.getElementById("dd-fonts")) {
      const link = document.createElement("link");
      link.id = "dd-fonts";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }
    if (!document.getElementById("dd-css-data-flow")) {
      const style = document.createElement("style");
      style.id = "dd-css-data-flow";
      style.textContent = CSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="data-flow">
      <svg viewBox="0 0 728 356" role="img" aria-labelledby="data-flow-title data-flow-desc">

  <title id="data-flow-title">Role-scoped analytics data flow</title>
  <desc id="data-flow-desc">A Data Engineer ingests and stores commerce data, a Data Scientist transforms and analyzes it, and an Analyst publishes a dashboard.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="0.8" fill="rgba(45,49,66,0.10)"/></pattern>
   <marker id="arr-muted" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#4f5d75"/></marker>
   <marker id="arr-accent" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#eb6c36"/></marker>
   <marker id="arr-link" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#2e5aa8"/></marker>
  </defs>
  <rect width="728" height="356" fill="#f5f5f5"/>
  <rect width="728" height="356" fill="url(#dots)"/>
  <rect x="0" y="36" width="728" height="80" fill="rgba(45,49,66,0.018)"/>
  <rect x="0" y="196" width="728" height="80" fill="rgba(45,49,66,0.018)"/>
  <line x1="0" y1="36" x2="728" y2="36" stroke="rgba(45,49,66,0.12)" strokeWidth="0.8"/>
  <line x1="0" y1="116" x2="728" y2="116" stroke="rgba(45,49,66,0.12)" strokeWidth="0.8"/>
  <line x1="0" y1="196" x2="728" y2="196" stroke="rgba(45,49,66,0.12)" strokeWidth="0.8"/>
  <line x1="0" y1="276" x2="728" y2="276" stroke="rgba(45,49,66,0.12)" strokeWidth="0.8"/>
  <line x1="140" y1="36" x2="140" y2="276" stroke="rgba(45,49,66,0.12)" strokeWidth="0.8"/>
  <g aria-label="Pipeline steps">
   <rect x="180" y="6" width="32" height="16" rx="8" fill="rgba(45,49,66,0.12)"/><text x="196" y="14" className="step-number">01</text><text x="196" y="29" className="step-label">INGEST</text>
   <rect x="292" y="6" width="32" height="16" rx="8" fill="rgba(45,49,66,0.12)"/><text x="308" y="14" className="step-number">02</text><text x="308" y="29" className="step-label">STORE</text>
   <rect x="404" y="6" width="32" height="16" rx="8" fill="rgba(235,108,54,0.20)"/><text x="420" y="14" className="step-number focal-text">03</text><text x="420" y="29" className="step-label focal-text">TRANSFORM</text>
   <rect x="516" y="6" width="32" height="16" rx="8" fill="rgba(45,49,66,0.12)"/><text x="532" y="14" className="step-number">04</text><text x="532" y="29" className="step-label">ANALYZE</text>
   <rect x="628" y="6" width="32" height="16" rx="8" fill="rgba(45,49,66,0.12)"/><text x="644" y="14" className="step-number">05</text><text x="644" y="29" className="step-label">PUBLISH</text>
  </g>
  <g aria-label="Role lanes">
   <text x="70" y="72" className="lane-label">DATA</text><text x="70" y="84" className="lane-label">ENGINEER</text>
   <text x="70" y="152" className="lane-label">DATA</text><text x="70" y="164" className="lane-label">SCIENTIST</text>
   <text x="70" y="232" className="lane-label">ANALYTICS</text><text x="70" y="244" className="lane-label">ANALYST</text>
  </g>
  <path d="M246 76 H258" fill="none" stroke="#4f5d75" markerEnd="url(#arr-muted)"/>
  <path d="M358 76 H412 Q420 76 420 84 V124" fill="none" stroke="#eb6c36" strokeWidth="1.2" markerEnd="url(#arr-accent)"/>
  <path d="M470 156 H482" fill="none" stroke="#4f5d75" markerEnd="url(#arr-muted)"/>
  <path d="M582 156 H636 Q644 156 644 164 V204" fill="none" stroke="#2e5aa8" markerEnd="url(#arr-link)"/>
  <rect x="368" y="56" width="48" height="12" rx="2" fill="#f5f5f5"/>
  <text x="392" y="65" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">RAW TABLE</text>
  <rect x="146" y="44" width="100" height="64" rx="6" fill="#f5f5f5" stroke="rgba(45,49,66,0.25)"/>
  <rect x="150" y="48" width="18" height="10" rx="3" fill="rgba(45,49,66,0.12)"/><text x="159" y="53" className="role-text">ENG</text>
  <text x="196" y="67" className="node-title">Capture Events</text><text x="196" y="79" className="node-sub">shop events → batch</text><text x="196" y="91" className="node-tool">NiFi ingest</text>
  <rect x="150" y="98" width="16" height="8" rx="3" fill="#7c8f6f"/><text x="158" y="104" className="chip-text">LS</text>
  <rect x="226" y="98" width="16" height="8" rx="3" fill="#5e7a9b"/><text x="234" y="104" className="chip-text">DB</text>
  <rect x="258" y="44" width="100" height="64" rx="6" fill="#f5f5f5" stroke="rgba(45,49,66,0.25)"/>
  <rect x="262" y="48" width="18" height="10" rx="3" fill="rgba(45,49,66,0.12)"/><text x="271" y="53" className="role-text">ENG</text>
  <text x="308" y="67" className="node-title">Land Records</text><text x="308" y="79" className="node-sub">events · orders</text><text x="308" y="91" className="node-tool">Object storage</text>
  <rect x="262" y="98" width="16" height="8" rx="3" fill="#5e7a9b"/><text x="270" y="104" className="chip-text">DB</text>
  <rect x="338" y="98" width="16" height="8" rx="3" fill="#5e7a9b"/><text x="346" y="104" className="chip-text">DB</text>
  <rect x="370" y="124" width="100" height="64" rx="6" fill="rgba(235,108,54,0.07)" stroke="#eb6c36" strokeWidth="1.2"/>
  <rect x="374" y="128" width="18" height="10" rx="3" fill="rgba(235,108,54,0.20)"/><text x="383" y="133" className="role-text focal-text">SCI</text>
  <text x="420" y="147" className="node-title">Clean &amp; Model</text><text x="420" y="159" className="node-sub">raw → trusted table</text><text x="420" y="171" className="node-tool">Trino · notebooks</text>
  <rect x="374" y="178" width="16" height="8" rx="3" fill="#5e7a9b"/><text x="382" y="184" className="chip-text">DB</text>
  <rect x="450" y="178" width="16" height="8" rx="3" fill="#b8915a"/><text x="458" y="184" className="chip-text">TB</text>
  <rect x="482" y="124" width="100" height="64" rx="6" fill="#f5f5f5" stroke="rgba(45,49,66,0.25)"/>
  <rect x="486" y="128" width="18" height="10" rx="3" fill="rgba(45,49,66,0.12)"/><text x="495" y="133" className="role-text">SCI</text>
  <text x="532" y="147" className="node-title">Curate Metrics</text><text x="532" y="159" className="node-sub">conversion · revenue</text><text x="532" y="171" className="node-tool">Trino SQL</text>
  <rect x="486" y="178" width="16" height="8" rx="3" fill="#b8915a"/><text x="494" y="184" className="chip-text">TB</text>
  <rect x="562" y="178" width="16" height="8" rx="3" fill="#b8915a"/><text x="570" y="184" className="chip-text">TB</text>
  <rect x="594" y="204" width="100" height="64" rx="6" fill="#f5f5f5" stroke="rgba(45,49,66,0.25)"/>
  <rect x="598" y="208" width="18" height="10" rx="3" fill="rgba(45,49,66,0.12)"/><text x="607" y="213" className="role-text">ANL</text>
  <text x="644" y="227" className="node-title">Publish Dashboard</text><text x="644" y="239" className="node-sub">metrics → decisions</text><text x="644" y="251" className="node-tool">BI workspace</text>
  <rect x="598" y="258" width="16" height="8" rx="3" fill="#b8915a"/><text x="606" y="264" className="chip-text">TB</text>
  <rect x="674" y="258" width="16" height="8" rx="3" fill="#9c6b50"/><text x="682" y="264" className="chip-text">FL</text>
  <text x="164" y="293" className="legend-label">STEPS</text>
  <rect x="180" y="284" width="24" height="12" rx="6" fill="rgba(45,49,66,0.12)"/><text x="192" y="292" className="step-number">01</text><text x="212" y="293" className="legend-text">Ingest</text>
  <rect x="272" y="284" width="24" height="12" rx="6" fill="rgba(45,49,66,0.12)"/><text x="284" y="292" className="step-number">02</text><text x="304" y="293" className="legend-text">Store</text>
  <rect x="360" y="284" width="24" height="12" rx="6" fill="rgba(235,108,54,0.20)"/><text x="372" y="292" className="step-number focal-text">03</text><text x="392" y="293" className="legend-text">Transform</text>
  <rect x="468" y="284" width="24" height="12" rx="6" fill="rgba(45,49,66,0.12)"/><text x="480" y="292" className="step-number">04</text><text x="500" y="293" className="legend-text">Analyze</text>
  <rect x="568" y="284" width="24" height="12" rx="6" fill="rgba(45,49,66,0.12)"/><text x="580" y="292" className="step-number">05</text><text x="600" y="293" className="legend-text">Publish</text>
  <text x="164" y="314" className="legend-label">DATA TYPE</text>
  <rect x="180" y="306" width="16" height="8" rx="3" fill="#7c8f6f"/><text x="188" y="312" className="chip-text">LS</text><text x="202" y="314" className="legend-text">Stream</text>
  <rect x="252" y="306" width="16" height="8" rx="3" fill="#5e7a9b"/><text x="260" y="312" className="chip-text">DB</text><text x="274" y="314" className="legend-text">Dataset</text>
  <rect x="332" y="306" width="16" height="8" rx="3" fill="#b8915a"/><text x="340" y="312" className="chip-text">TB</text><text x="354" y="314" className="legend-text">Table</text>
  <rect x="404" y="306" width="16" height="8" rx="3" fill="#9c6b50"/><text x="412" y="312" className="chip-text">FL</text><text x="426" y="314" className="legend-text">Dashboard</text>
  <text x="500" y="314" className="legend-text">left chip = input · right chip = output</text>
  <text x="164" y="336" className="legend-label">FLOW</text>
  <line x1="180" y1="333" x2="204" y2="333" stroke="#4f5d75" markerEnd="url(#arr-muted)"/><text x="212" y="336" className="legend-text">Standard handoff</text>
  <line x1="324" y1="333" x2="348" y2="333" stroke="#eb6c36" strokeWidth="1.2" markerEnd="url(#arr-accent)"/><text x="356" y="336" className="legend-text">Focal handoff</text>
  <line x1="460" y1="333" x2="484" y2="333" stroke="#2e5aa8" markerEnd="url(#arr-link)"/><text x="492" y="336" className="legend-text">Published output</text>
      </svg>
    </div>
  );
}
