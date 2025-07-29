import { useEffect } from "react";

/**
 * Medallion Architecture — Raw to refined data tiers.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface MedallionArchitectureProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

const CSS =
  ".dd-medallion { --paper: #f5f5f5; --paper-2: #ececec; --ink: #2d3142; --muted: #4f5d75; --soft: #7a8399; --rule: rgba(45,49,66,0.12); --accent: #eb6c36; --accent-tint: rgba(235,108,54,0.08); --link: #2e5aa8; --sans: 'Geist', system-ui, sans-serif; --serif: 'Instrument Serif', serif; --mono: 'Geist Mono', ui-monospace, monospace } .dd-medallion .tier-title { fill: var(--ink); font: 600 13px var(--sans); text-anchor: middle; } .dd-medallion .bucket, .dd-medallion .field-value, .dd-medallion .example-value { fill: var(--muted); font: 400 9px var(--mono); } .dd-medallion .bucket { text-anchor: middle; } .dd-medallion .field-value { color: var(--muted); } .dd-medallion .focal-text { fill: var(--accent); } .dd-medallion .field-label { fill: var(--ink); font: 600 11px var(--sans); } .dd-medallion .example-label, .dd-medallion .arc-label, .dd-medallion .path-tag { font-family: var(--mono); font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; } .dd-medallion .example-label { fill: var(--soft); font-size: 8px; } .dd-medallion .arc-label { font-size: 10px; text-anchor: middle; } .dd-medallion .path-title { fill: var(--ink); font: 600 11px var(--sans); } .dd-medallion .path-sub { fill: var(--muted); font: 400 9px var(--mono); }";

export default function MedallionArchitecture({ className }: MedallionArchitectureProps) {
  // Load the editorial fonts (and scoped CSS when needed) once, on first mount.
  useEffect(() => {
    if (!document.getElementById("dd-fonts")) {
      const link = document.createElement("link");
      link.id = "dd-fonts";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }
    if (!document.getElementById("dd-css-medallion")) {
      const style = document.createElement("style");
      style.id = "dd-css-medallion";
      style.textContent = CSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="medallion">
      <svg viewBox="0 0 1040 548" role="img" aria-labelledby="medallion-title medallion-desc">

  <title id="medallion-title">Five-tier e-commerce analytics medallion</title>
  <desc id="medallion-desc">Clickstream events and order records move from raw storage through anonymized, staging, and aggregated tiers before lifecycle archiving.</desc>
  <defs>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
   <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
   <clipPath id="clip-raw"><rect x="16" y="80" width="172" height="380" rx="6"/></clipPath>
   <clipPath id="clip-anon"><rect x="204" y="80" width="172" height="380" rx="6"/></clipPath>
   <clipPath id="clip-stage"><rect x="392" y="80" width="172" height="380" rx="6"/></clipPath>
   <clipPath id="clip-aggregate"><rect x="580" y="80" width="172" height="380" rx="6"/></clipPath>
   <clipPath id="clip-archive"><rect x="768" y="80" width="172" height="380" rx="6"/></clipPath>
  </defs>
  <rect width="1040" height="548" fill="#f5f5f5"/>
  <path d="M102 80 C102 0 290 0 290 80" fill="none" stroke="#4f5d75" strokeWidth="1.4" markerEnd="url(#arrow)"/>
  <path d="M290 80 C290 0 478 0 478 80" fill="none" stroke="#4f5d75" strokeWidth="1.4" markerEnd="url(#arrow)"/>
  <path d="M478 80 C478 0 666 0 666 80" fill="none" stroke="#eb6c36" strokeWidth="1.6" markerEnd="url(#arrow-accent)"/>
  <path d="M666 80 C666 0 854 0 854 80" fill="none" stroke="#4f5d75" strokeWidth="1.4" strokeDasharray="4,3" markerEnd="url(#arrow)"/>
  <text x="196" y="50" className="arc-label" fill="#4f5d75">MASK IDS</text>
  <text x="384" y="50" className="arc-label" fill="#4f5d75">CLEAN + JOIN</text>
  <text x="572" y="50" className="arc-label" fill="#eb6c36">AGGREGATE</text>
  <text x="760" y="50" className="arc-label" fill="#4f5d75">LIFECYCLE</text>
  <rect x="16" y="80" width="172" height="380" rx="6" fill="#fff"/>
  <rect x="16" y="80" width="172" height="50" fill="rgba(79,93,117,0.10)" clipPath="url(#clip-raw)"/>
  <rect x="16" y="80" width="172" height="380" rx="6" fill="none" stroke="#4f5d75"/>
  <text x="102" y="106" className="tier-title">Raw</text>
  <text x="102" y="144" className="bucket">raw-commerce</text>
  <text x="32" y="180" className="field-label">Tool</text>
  <foreignObject x="32" y="186" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>NiFi ingest</div></foreignObject>
  <text x="32" y="220" className="field-label">Format</text>
  <foreignObject x="32" y="226" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>JSON · Parquet</div></foreignObject>
  <text x="32" y="260" className="field-label">Writer</text>
  <foreignObject x="32" y="266" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Data Engineer</div></foreignObject>
  <text x="32" y="360" className="example-label">E-COMMERCE EXAMPLE</text>
  <text x="32" y="374" className="example-value">clickstream events</text>
  <text x="32" y="388" className="example-value">order records</text>
  <rect x="204" y="80" width="172" height="380" rx="6" fill="#fff"/>
  <rect x="204" y="80" width="172" height="50" fill="rgba(45,49,66,0.06)" clipPath="url(#clip-anon)"/>
  <rect x="204" y="80" width="172" height="380" rx="6" fill="none" stroke="#2d3142"/>
  <text x="290" y="106" className="tier-title">Anonymized</text>
  <text x="290" y="144" className="bucket">anon-commerce</text>
  <text x="220" y="180" className="field-label">Tool</text>
  <foreignObject x="220" y="186" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Trino SQL</div></foreignObject>
  <text x="220" y="220" className="field-label">Format</text>
  <foreignObject x="220" y="226" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Iceberg · partitioned</div></foreignObject>
  <text x="220" y="260" className="field-label">Writer</text>
  <foreignObject x="220" y="266" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Data Engineer</div></foreignObject>
  <text x="220" y="360" className="example-label">E-COMMERCE EXAMPLE</text>
  <text x="220" y="374" className="example-value">session pseudonyms</text>
  <text x="220" y="388" className="example-value">masked customer IDs</text>
  <rect x="392" y="80" width="172" height="380" rx="6" fill="#fff"/>
  <rect x="392" y="80" width="172" height="50" fill="rgba(45,49,66,0.06)" clipPath="url(#clip-stage)"/>
  <rect x="392" y="80" width="172" height="380" rx="6" fill="none" stroke="#2d3142"/>
  <text x="478" y="106" className="tier-title">Staging</text>
  <text x="478" y="144" className="bucket">staging-commerce</text>
  <text x="408" y="180" className="field-label">Tool</text>
  <foreignObject x="408" y="186" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Trino · notebooks</div></foreignObject>
  <text x="408" y="220" className="field-label">Format</text>
  <foreignObject x="408" y="226" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Iceberg · cleaned</div></foreignObject>
  <text x="408" y="260" className="field-label">Writer</text>
  <foreignObject x="408" y="266" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Data Scientist</div></foreignObject>
  <text x="408" y="360" className="example-label">E-COMMERCE EXAMPLE</text>
  <text x="408" y="374" className="example-value">joined order facts</text>
  <text x="408" y="388" className="example-value">validated event rows</text>
  <rect x="580" y="80" width="172" height="380" rx="6" fill="rgba(235,108,54,0.07)"/>
  <rect x="580" y="80" width="172" height="50" fill="rgba(235,108,54,0.14)" clipPath="url(#clip-aggregate)"/>
  <rect x="580" y="80" width="172" height="380" rx="6" fill="none" stroke="#eb6c36" strokeWidth="1.6"/>
  <text x="666" y="106" className="tier-title">Aggregated</text>
  <text x="666" y="144" className="bucket focal-text">analytics-marts</text>
  <text x="596" y="180" className="field-label">Tool</text>
  <foreignObject x="596" y="186" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Trino INSERT</div></foreignObject>
  <text x="596" y="220" className="field-label">Format</text>
  <foreignObject x="596" y="226" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Iceberg · metrics</div></foreignObject>
  <text x="596" y="260" className="field-label">Writer</text>
  <foreignObject x="596" y="266" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Data Scientist</div></foreignObject>
  <text x="596" y="360" className="example-label">E-COMMERCE EXAMPLE</text>
  <text x="596" y="374" className="example-value focal-text">daily conversion rate</text>
  <text x="596" y="388" className="example-value focal-text">revenue by channel</text>
  <rect x="768" y="80" width="172" height="380" rx="6" fill="#ececec"/>
  <rect x="768" y="80" width="172" height="50" fill="rgba(79,93,117,0.18)" clipPath="url(#clip-archive)"/>
  <rect x="768" y="80" width="172" height="380" rx="6" fill="none" stroke="#4f5d75" strokeDasharray="5,3"/>
  <text x="854" y="106" className="tier-title">Archive</text>
  <text x="854" y="144" className="bucket">archive-commerce</text>
  <text x="784" y="180" className="field-label">Tool</text>
  <foreignObject x="784" y="186" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Object storage lifecycle</div></foreignObject>
  <text x="784" y="220" className="field-label">Format</text>
  <foreignObject x="784" y="226" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Cold tier · immutable</div></foreignObject>
  <text x="784" y="260" className="field-label">Writer</text>
  <foreignObject x="784" y="266" width="140" height="24"><div className="field-value" style={{lineHeight: 1.25}}>Data Engineer</div></foreignObject>
  <text x="784" y="360" className="example-label">E-COMMERCE EXAMPLE</text>
  <text x="784" y="374" className="example-value">retained clickstream</text>
  <text x="784" y="388" className="example-value">closed order snapshots</text>
  <rect x="16" y="476" width="460" height="56" rx="6" fill="#fff" stroke="rgba(45,49,66,0.20)"/>
  <rect x="24" y="482" width="64" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.30)" strokeWidth="0.8"/>
  <text x="56" y="491" className="path-tag" fill="#2d3142" fontSize="7" textAnchor="middle">SQL PATH</text>
  <text x="96" y="506" className="path-title">Trino INSERT INTO … SELECT</text>
  <text x="96" y="522" className="path-sub">filter · join · aggregate — repeatable transforms</text>
  <rect x="492" y="476" width="460" height="56" rx="6" fill="#fff" stroke="rgba(45,49,66,0.20)"/>
  <rect x="500" y="482" width="96" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.30)" strokeWidth="0.8"/>
  <text x="548" y="491" className="path-tag" fill="#2d3142" fontSize="7" textAnchor="middle">NOTEBOOK PATH</text>
  <text x="604" y="506" className="path-title">Python notebooks on object storage</text>
  <text x="604" y="522" className="path-sub">explore · validate · model — interactive analysis</text>
      </svg>
    </div>
  );
}
