import { useEffect } from "react";

/**
 * Data Platform Integration — Integration topology for a generic data platform.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface DataPlatformIntegrationProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

const CSS =
  ".dd-dp-integration { --paper:#f5f5f5; --paper-2:#ececec; --ink:#2d3142; --muted:#4f5d75; --soft:#7a8399; --accent:#eb6c36; --accent-tint:rgba(235,108,54,.08); --link:#2e5aa8; --rule:rgba(45,49,66,.12); --dot:rgba(45,49,66,.10); --side-fill:rgba(79,93,117,.06); --side-stroke:#7a8399; --zone-fill:rgba(45,49,66,.025); --zone-stroke:rgba(45,49,66,.32); --bar-fill:rgba(45,49,66,.05); --node-fill:#fff; --custom-red:#9c6b50; --custom-red-fill:rgba(156,107,80,.06); --custom-red-stroke:rgba(156,107,80,.35); --custom-blue:#5e7a9b; --custom-blue-fill:rgba(94,122,155,.06); --custom-blue-stroke:rgba(94,122,155,.35); --sans:'Geist',system-ui,sans-serif; --serif:'Instrument Serif',serif; --mono:'Geist Mono',ui-monospace,monospace } .dd-dp-integration *, .dd-dp-integration *::before, .dd-dp-integration *::after { box-sizing:border-box;margin:0;padding:0 } .dd-dp-integration svg text { font-family:var(--sans) } .dd-dp-integration .mono { font-family:var(--mono) } .dd-dp-integration .connector { fill:none;stroke:var(--muted);stroke-width:1.2 } .dd-dp-integration .connector.primary { stroke:var(--accent);stroke-width:1.4 } .dd-dp-integration .connector.trigger { stroke:var(--muted);stroke-width:1;stroke-dasharray:4 3 } .dd-dp-integration .connector.auth { stroke:var(--accent);stroke-width:1.2;stroke-dasharray:5 4 } .dd-dp-integration .label-mask { fill:var(--paper) } .dd-dp-integration .edge-label { fill:var(--accent);font:8px var(--mono);letter-spacing:.06em } .dd-dp-integration .zone { fill:var(--zone-fill);stroke:var(--zone-stroke) } .dd-dp-integration .zone-mask, .dd-dp-integration .node-mask { fill:var(--paper) } .dd-dp-integration .zone-label { fill:var(--soft);font:500 8px var(--mono);letter-spacing:.18em } .dd-dp-integration .side-node { fill:var(--side-fill);stroke:var(--side-stroke) } .dd-dp-integration .core-node { fill:var(--accent-tint);stroke:var(--accent) } .dd-dp-integration .bar { fill:var(--bar-fill);stroke:var(--zone-stroke) } .dd-dp-integration .role-box { fill:transparent;stroke:var(--side-stroke);stroke-opacity:.5 } .dd-dp-integration .role-box.focal { stroke:var(--accent) } .dd-dp-integration .role-text { fill:var(--side-stroke);font:500 7px var(--mono);letter-spacing:.08em } .dd-dp-integration .role-text.focal { fill:var(--accent) } .dd-dp-integration .node-name { fill:var(--ink);font:600 12px var(--sans) } .dd-dp-integration .node-name.focal { fill:var(--ink) } .dd-dp-integration .node-sub { fill:var(--muted);font:9px var(--mono) } .dd-dp-integration .footer-red { fill:var(--custom-red-fill);stroke:var(--custom-red-stroke) } .dd-dp-integration .footer-blue { fill:var(--custom-blue-fill);stroke:var(--custom-blue-stroke) } .dd-dp-integration .footer-red-text { fill:var(--custom-red) } .dd-dp-integration .footer-blue-text { fill:var(--custom-blue) } .dd-dp-integration .legend-key { fill:var(--muted);font:500 8px var(--mono);letter-spacing:.14em } .dd-dp-integration .legend-text { fill:var(--muted);font:8px var(--sans) }";

export default function DataPlatformIntegration({ className }: DataPlatformIntegrationProps) {
  // Load the editorial fonts (and scoped CSS when needed) once, on first mount.
  useEffect(() => {
    if (!document.getElementById("dd-fonts")) {
      const link = document.createElement("link");
      link.id = "dd-fonts";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }
    if (!document.getElementById("dd-css-dp-integration")) {
      const style = document.createElement("style");
      style.id = "dd-css-dp-integration";
      style.textContent = CSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="dp-integration">
      <svg viewBox="0 0 1200 664" role="img" aria-labelledby="dp-integration-title dp-integration-desc">

  <title id="dp-integration-title">Generic data platform integration topology</title>
  <desc id="dp-integration-desc">Integration topology showing CRM, POS exports, and an event stream landing in object storage for query, notebooks, dashboards, and a partner API.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.9" fill="var(--dot)"/></pattern>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--muted)"/></marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--accent)"/></marker>
   <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--link)"/></marker>
   <marker id="arrow-sm" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="var(--muted)"/></marker>
   <marker id="arrow-dim" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--soft)"/></marker>
   <g id="ico-db" fill="none" stroke="currentColor" strokeWidth="1.2"><ellipse cx="0" cy="-5" rx="7" ry="3"/><path d="M-7-5V5c0 2 14 2 14 0V-5M-7 0c0 2 14 2 14 0"/></g>
   <g id="ico-file" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M-6-8H2l4 4V8H-6ZM2-8v4h4"/></g>
   <g id="ico-stream" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M-8-5H2M-4 0H8M-8 5H2"/><path d="m0-8 3 3-3 3M6-3l3 3-3 3M0 2l3 3-3 3"/></g>
   <g id="ico-chart" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M-8 8H8M-6 6V0H-2V6M0 6V-7H4V6M6 6V-3H9"/></g>
   <g id="ico-notebook" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="-7" y="-8" width="14" height="16" rx="2"/><path d="M-3-8V8M0-3h4M0 1h4"/></g>
   <g id="ico-api" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M-3-8c-3 0-3 2-3 4v2c0 2-1 2-3 2 2 0 3 0 3 2v2c0 2 0 4 3 4M3-8c3 0 3 2 3 4v2c0 2 1 2 3 2-2 0-3 0-3 2v2c0 2 0 4-3 4"/></g>
   <g id="ico-key" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="-4" cy="0" r="4"/><path d="M0 0H9M6 0v3M3 0v2"/></g>
   <g id="ico-log" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M-8 6h16M-6 3l3-4 3 2 4-7 3 2"/></g>
  </defs>
  <rect width="1200" height="664" fill="var(--paper)"/><rect width="1200" height="664" fill="url(#dots)" opacity=".55"/>
  <rect className="zone" x="260" y="72" width="696" height="336" rx="8" strokeWidth="1"/>
  <path className="connector primary" d="M200 124 H360 Q368 124 368 132 V180 Q368 188 376 188 H400" markerEnd="url(#arrow-accent)"/>
  <line className="connector primary" x1="200" y1="212" x2="400" y2="212" markerEnd="url(#arrow-accent)"/>
  <path className="connector primary" d="M200 300 H360 Q368 300 368 292 V244 Q368 236 376 236 H400" markerEnd="url(#arrow-accent)"/>
  <line className="connector primary" x1="560" y1="212" x2="656" y2="212" markerEnd="url(#arrow-accent)"/>
  <path className="connector primary" d="M816 188 H960 Q968 188 968 180 V132 Q968 124 976 124 H1000" markerEnd="url(#arrow-accent)"/>
  <line className="connector primary" x1="816" y1="212" x2="1000" y2="212" markerEnd="url(#arrow-accent)"/>
  <path className="connector primary" d="M816 236 H960 Q968 236 968 244 V292 Q968 300 976 300 H1000" markerEnd="url(#arrow-accent)"/>
  <line className="connector trigger" x1="480" y1="160" x2="480" y2="176" markerEnd="url(#arrow)"/><line className="connector trigger" x1="736" y1="160" x2="736" y2="176" markerEnd="url(#arrow)"/>
  <line className="connector auth" x1="592" y1="460" x2="592" y2="408" markerEnd="url(#arrow-accent)"/>
  <line className="connector auth" x1="624" y1="524" x2="624" y2="408" markerEnd="url(#arrow-accent)"/>
  <g textAnchor="middle"><rect className="label-mask" x="252" y="104" width="44" height="12" rx="2"/><text className="edge-label" x="274" y="113">REST</text><rect className="label-mask" x="272" y="192" width="48" height="12" rx="2"/><text className="edge-label" x="296" y="201">CSV</text><rect className="label-mask" x="248" y="280" width="56" height="12" rx="2"/><text className="edge-label" x="276" y="289">EVENTS</text><rect className="label-mask" x="584" y="192" width="48" height="12" rx="2"/><text className="edge-label" x="608" y="201">READ</text><rect className="label-mask" x="856" y="168" width="48" height="12" rx="2"/><text className="edge-label" x="880" y="177">JDBC</text><rect className="label-mask" x="872" y="192" width="56" height="12" rx="2"/><text className="edge-label" x="900" y="201">KERNEL</text><rect className="label-mask" x="856" y="216" width="56" height="12" rx="2"/><text className="edge-label" x="884" y="225">HTTPS</text></g>
  <g><rect className="label-mask" x="548" y="420" width="32" height="12" rx="2"/><text className="edge-label" x="564" y="429" textAnchor="middle">AUTH</text><rect className="label-mask" x="636" y="420" width="32" height="12" rx="2"/><text className="edge-label" x="652" y="429" textAnchor="middle">AUTH</text></g>
  <rect className="zone-mask" x="548" y="68" width="120" height="16" rx="2"/><text className="zone-label" x="608" y="79" textAnchor="middle">DATA PLATFORM</text>
  <g textAnchor="middle">
   <g><rect className="node-mask" x="40" y="92" width="160" height="64" rx="6"/><rect className="side-node" x="40" y="92" width="160" height="64" rx="6"/><use href="#ico-db" transform="translate(64 124)" style={{color: 'var(--muted)'}}/><text className="node-name" x="120" y="120">CRM</text><text className="node-sub" x="120" y="140">customer records</text></g>
   <g><rect className="node-mask" x="40" y="180" width="160" height="64" rx="6"/><rect className="side-node" x="40" y="180" width="160" height="64" rx="6"/><use href="#ico-file" transform="translate(64 212)" style={{color: 'var(--muted)'}}/><text className="node-name" x="120" y="208">POS exports</text><text className="node-sub" x="120" y="228">daily CSV batches</text></g>
   <g><rect className="node-mask" x="40" y="268" width="160" height="64" rx="6"/><rect className="side-node" x="40" y="268" width="160" height="64" rx="6"/><use href="#ico-stream" transform="translate(64 300)" style={{color: 'var(--muted)'}}/><text className="node-name" x="120" y="296">Event stream</text><text className="node-sub" x="120" y="316">near-real-time events</text></g>
  </g>
  <g textAnchor="middle"><rect className="node-mask" x="276" y="116" width="664" height="44" rx="6"/><rect className="bar" x="276" y="116" width="664" height="44" rx="6"/><rect className="role-box" x="288" y="128" width="32" height="12" rx="2"/><text className="role-text" x="304" y="137">DAG</text><text className="node-name" x="608" y="136">Orchestrator</text><text className="node-sub" x="608" y="151">schedules · retries · lineage</text>
  <rect className="node-mask" x="400" y="176" width="160" height="72" rx="6"/><rect className="core-node" x="400" y="176" width="160" height="72" rx="6"/><rect className="role-box focal" x="408" y="184" width="44" height="12" rx="2"/><text className="role-text focal" x="430" y="193">STORE</text><text className="node-name focal" x="480" y="214">Object storage</text><text className="node-sub" x="480" y="232">versioned data objects</text>
  <rect className="node-mask" x="656" y="176" width="160" height="72" rx="6"/><rect className="core-node" x="656" y="176" width="160" height="72" rx="6"/><rect className="role-box focal" x="664" y="184" width="32" height="12" rx="2"/><text className="role-text focal" x="680" y="193">SQL</text><text className="node-name focal" x="736" y="214">Query engine</text><text className="node-sub" x="736" y="232">federated SQL access</text></g>
  <g textAnchor="middle">
   <g><rect className="node-mask" x="1000" y="92" width="160" height="64" rx="6"/><rect className="side-node" x="1000" y="92" width="160" height="64" rx="6"/><use href="#ico-chart" transform="translate(1024 124)" style={{color: 'var(--muted)'}}/><text className="node-name" x="1080" y="120">BI tool</text><text className="node-sub" x="1080" y="140">dashboards · reports</text></g>
   <g><rect className="node-mask" x="1000" y="180" width="160" height="64" rx="6"/><rect className="side-node" x="1000" y="180" width="160" height="64" rx="6"/><use href="#ico-notebook" transform="translate(1024 212)" style={{color: 'var(--muted)'}}/><text className="node-name" x="1080" y="208">Notebooks</text><text className="node-sub" x="1080" y="228">Python · exploration</text></g>
   <g><rect className="node-mask" x="1000" y="268" width="160" height="64" rx="6"/><rect className="side-node" x="1000" y="268" width="160" height="64" rx="6"/><use href="#ico-api" transform="translate(1024 300)" style={{color: 'var(--muted)'}}/><text className="node-name" x="1080" y="296">Partner API</text><text className="node-sub" x="1080" y="316">scoped data products</text></g>
  </g>
  <g><rect className="node-mask" x="40" y="460" width="1120" height="56" rx="6"/><rect className="footer-red" x="40" y="460" width="1120" height="56" rx="6"/><use href="#ico-key" transform="translate(72 488)" style={{color: 'var(--custom-red)'}}/><text className="node-name footer-red-text" x="96" y="486">Identity provider</text><text className="node-sub" x="96" y="502">SSO · service identities · policy groups</text>
  <rect className="node-mask" x="40" y="524" width="1120" height="56" rx="6"/><rect className="footer-blue" x="40" y="524" width="1120" height="56" rx="6"/><use href="#ico-log" transform="translate(72 552)" style={{color: 'var(--custom-blue)'}}/><text className="node-name footer-blue-text" x="96" y="550">Centralized logging</text><text className="node-sub" x="96" y="566">platform events · audit trail · retention</text></g>
  <line x1="40" y1="608" x2="1160" y2="608" stroke="var(--rule)" strokeWidth=".8"/><text className="legend-key" x="40" y="628">TYPE KEY</text><rect x="128" y="620" width="16" height="12" rx="2" fill="var(--side-fill)" stroke="var(--side-stroke)"/><text className="legend-text" x="152" y="630">Source / consumer</text><rect x="296" y="620" width="16" height="12" rx="2" fill="var(--accent-tint)" stroke="var(--accent)"/><text className="legend-text" x="320" y="630">Focal platform surface</text><rect x="492" y="620" width="16" height="12" rx="2" fill="var(--bar-fill)" stroke="var(--zone-stroke)"/><text className="legend-text" x="516" y="630">Orchestration</text><line x1="640" y1="626" x2="672" y2="626" stroke="var(--accent)" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/><text className="legend-text" x="684" y="630">Primary data path</text><line x1="824" y1="626" x2="856" y2="626" stroke="var(--accent)" strokeDasharray="5 4" markerEnd="url(#arrow-accent)"/><text className="legend-text" x="868" y="630">Layer-wide service</text>
      </svg>
    </div>
  );
}
