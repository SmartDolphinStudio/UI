import { useEffect } from "react";

/**
 * Access / Permission Matrix — Role x component access at a glance.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface AccessMatrixProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

const CSS =
  ".dd-dp-security-matrix { --paper:#f5f5f5; --ink:#2d3142; --muted:#4f5d75; --soft:#7a8399; --rule:rgba(45,49,66,.12); --accent:#eb6c36; --sans:'Geist',system-ui,sans-serif; --serif:'Instrument Serif',serif; --mono:'Geist Mono',ui-monospace,monospace } .dd-dp-security-matrix *, .dd-dp-security-matrix *::before, .dd-dp-security-matrix *::after { box-sizing:border-box;margin:0;padding:0 } .dd-dp-security-matrix .subtitle { margin-bottom:1.5rem;color:var(--muted);font-size:.9rem;line-height:1.5 } .dd-dp-security-matrix .diagram { overflow-x:auto } .dd-dp-security-matrix svg .component-head, .dd-dp-security-matrix svg .component { fill:#fff;stroke:rgba(45,49,66,.12);stroke-width:.8 } .dd-dp-security-matrix svg .role { fill:#2d3142 } .dd-dp-security-matrix svg .head-name, .dd-dp-security-matrix svg .component-name, .dd-dp-security-matrix svg .role-name, .dd-dp-security-matrix svg .value { font-family:'Geist',sans-serif } .dd-dp-security-matrix svg .head-name, .dd-dp-security-matrix svg .component-name, .dd-dp-security-matrix svg .role-name { font-size:11px;font-weight:600 } .dd-dp-security-matrix svg .head-name, .dd-dp-security-matrix svg .component-name { fill:#2d3142 } .dd-dp-security-matrix svg .role-name, .dd-dp-security-matrix svg .role-code { fill:#f5f5f5 } .dd-dp-security-matrix svg .head-sub, .dd-dp-security-matrix svg .role-code, .dd-dp-security-matrix svg .hint, .dd-dp-security-matrix svg .legend-text, .dd-dp-security-matrix svg .focal-sub { font-family:'Geist Mono',monospace } .dd-dp-security-matrix svg .head-sub, .dd-dp-security-matrix svg .hint, .dd-dp-security-matrix svg .legend-text { fill:#4f5d75 } .dd-dp-security-matrix svg .head-sub, .dd-dp-security-matrix svg .role-code, .dd-dp-security-matrix svg .hint { font-size:9px } .dd-dp-security-matrix svg .role-code { opacity:.85 } .dd-dp-security-matrix svg .cell { stroke:rgba(45,49,66,.12);stroke-width:.6 } .dd-dp-security-matrix svg .full { fill:rgba(45,49,66,.08) } .dd-dp-security-matrix svg .write { fill:#fff } .dd-dp-security-matrix svg .read { fill:rgba(79,93,117,.08) } .dd-dp-security-matrix svg .none { fill:#f5f5f5 } .dd-dp-security-matrix svg .value { font-size:10px } .dd-dp-security-matrix svg .value.full-text { fill:#2d3142;font-weight:600 } .dd-dp-security-matrix svg .value.write-text { fill:#2d3142 } .dd-dp-security-matrix svg .value.read-text { fill:#4f5d75 } .dd-dp-security-matrix svg .value.none-text { fill:#7a8399 } .dd-dp-security-matrix svg .focal { fill:rgba(235,108,54,.07);stroke:#eb6c36;stroke-width:1.4 } .dd-dp-security-matrix svg .focal-text { fill:#eb6c36;font-weight:600 } .dd-dp-security-matrix svg .focal-sub { fill:#eb6c36;font-size:8px;opacity:.85 } .dd-dp-security-matrix svg .legend-text { font-size:9px }";

export default function AccessMatrix({ className }: AccessMatrixProps) {
  // Load the editorial fonts (and scoped CSS when needed) once, on first mount.
  useEffect(() => {
    if (!document.getElementById("dd-fonts")) {
      const link = document.createElement("link");
      link.id = "dd-fonts";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }
    if (!document.getElementById("dd-css-dp-security-matrix")) {
      const style = document.createElement("style");
      style.id = "dd-css-dp-security-matrix";
      style.textContent = CSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="dp-security-matrix">
      <svg viewBox="0 0 1084 400" role="img" aria-labelledby="dp-security-matrix-title dp-security-matrix-desc">

  <title id="dp-security-matrix-title">Data platform access matrix</title><desc id="dp-security-matrix-desc">A five by five permission matrix for platform roles and components.</desc>
  <rect width="1084" height="400" fill="#f5f5f5"/>
  <rect className="component-head" x="12" y="72" width="208" height="52" rx="6"/><text className="head-name" x="116" y="96" textAnchor="middle">Component</text><text className="head-sub" x="116" y="112" textAnchor="middle">vs. AD group</text>
  <rect className="role" x="232" y="72" width="148" height="52" rx="6"/><text className="role-name" x="306" y="92" textAnchor="middle">Data Engineer</text><text className="role-code" x="306" y="108" textAnchor="middle">GRP-DATA-ENG</text>
  <rect className="role" x="396" y="72" width="148" height="52" rx="6"/><text className="role-name" x="470" y="92" textAnchor="middle">Data Scientist</text><text className="role-code" x="470" y="108" textAnchor="middle">GRP-DATA-SCI</text>
  <rect className="role" x="560" y="72" width="148" height="52" rx="6"/><text className="role-name" x="634" y="92" textAnchor="middle">Analyst</text><text className="role-code" x="634" y="108" textAnchor="middle">GRP-ANALYST</text>
  <rect className="role" x="724" y="72" width="148" height="52" rx="6"/><text className="role-name" x="798" y="92" textAnchor="middle">Administrator</text><text className="role-code" x="798" y="108" textAnchor="middle">GRP-ADMIN</text>
  <rect className="role" x="888" y="72" width="148" height="52" rx="6"/><text className="role-name" x="962" y="92" textAnchor="middle">External Partner</text><text className="role-code" x="962" y="108" textAnchor="middle">GRP-PARTNER</text>
  <rect className="component" x="12" y="140" width="208" height="36" rx="4"/><text className="component-name" x="24" y="162">Object storage</text><text className="hint" x="208" y="162" textAnchor="end">S3</text>
  <rect className="cell write" x="232" y="140" width="148" height="36" rx="4"/><text className="value write-text" x="306" y="162" textAnchor="middle">Write</text>
  <rect className="cell read" x="396" y="140" width="148" height="36" rx="4"/><text className="value read-text" x="470" y="162" textAnchor="middle">Read</text>
  <rect className="cell none" x="560" y="140" width="148" height="36" rx="4"/><text className="value none-text" x="634" y="162" textAnchor="middle">None</text>
  <rect className="cell full" x="724" y="140" width="148" height="36" rx="4"/><text className="value full-text" x="798" y="162" textAnchor="middle">Admin</text>
  <rect className="cell none" x="888" y="140" width="148" height="36" rx="4"/><text className="value none-text" x="962" y="162" textAnchor="middle">None</text>
  <rect className="component" x="12" y="180" width="208" height="36" rx="4"/><text className="component-name" x="24" y="202">Query engine</text><text className="hint" x="208" y="202" textAnchor="end">SQL</text>
  <rect className="cell write" x="232" y="180" width="148" height="36" rx="4"/><text className="value write-text" x="306" y="202" textAnchor="middle">Write</text>
  <rect className="cell read" x="396" y="180" width="148" height="36" rx="4"/><text className="value read-text" x="470" y="202" textAnchor="middle">Read</text>
  <rect className="cell read" x="560" y="180" width="148" height="36" rx="4"/><text className="value read-text" x="634" y="202" textAnchor="middle">Read</text>
  <rect className="cell full" x="724" y="180" width="148" height="36" rx="4"/><text className="value full-text" x="798" y="202" textAnchor="middle">Admin</text>
  <rect className="cell read" x="888" y="180" width="148" height="36" rx="4"/><text className="value read-text" x="962" y="202" textAnchor="middle">Read</text>
  <rect className="component" x="12" y="220" width="208" height="36" rx="4"/><text className="component-name" x="24" y="242">Notebooks</text><text className="hint" x="208" y="242" textAnchor="end">PY</text>
  <rect className="cell write" x="232" y="220" width="148" height="36" rx="4"/><text className="value write-text" x="306" y="242" textAnchor="middle">Write</text>
  <rect className="cell write" x="396" y="220" width="148" height="36" rx="4"/><text className="value write-text" x="470" y="242" textAnchor="middle">Write</text>
  <rect className="cell none" x="560" y="220" width="148" height="36" rx="4"/><text className="value none-text" x="634" y="242" textAnchor="middle">None</text>
  <rect className="cell full" x="724" y="220" width="148" height="36" rx="4"/><text className="value full-text" x="798" y="242" textAnchor="middle">Admin</text>
  <rect className="cell none" x="888" y="220" width="148" height="36" rx="4"/><text className="value none-text" x="962" y="242" textAnchor="middle">None</text>
  <rect className="component" x="12" y="260" width="208" height="36" rx="4"/><text className="component-name" x="24" y="282">BI tool</text><text className="hint" x="208" y="282" textAnchor="end">DASH</text>
  <rect className="cell write" x="232" y="260" width="148" height="36" rx="4"/><text className="value write-text" x="306" y="282" textAnchor="middle">Write</text>
  <rect className="cell read" x="396" y="260" width="148" height="36" rx="4"/><text className="value read-text" x="470" y="282" textAnchor="middle">Read</text>
  <rect className="cell write" x="560" y="260" width="148" height="36" rx="4"/><text className="value write-text" x="634" y="282" textAnchor="middle">Write</text>
  <rect className="cell full" x="724" y="260" width="148" height="36" rx="4"/><text className="value full-text" x="798" y="282" textAnchor="middle">Admin</text>
  <rect className="focal" x="888" y="260" width="148" height="36" rx="4"/><text className="value focal-text" x="962" y="278" textAnchor="middle">Read</text><text className="focal-sub" x="962" y="290" textAnchor="middle">shared dashboards</text>
  <rect className="component" x="12" y="300" width="208" height="36" rx="4"/><text className="component-name" x="24" y="322">Orchestrator</text><text className="hint" x="208" y="322" textAnchor="end">DAG</text>
  <rect className="cell write" x="232" y="300" width="148" height="36" rx="4"/><text className="value write-text" x="306" y="322" textAnchor="middle">Write</text>
  <rect className="cell read" x="396" y="300" width="148" height="36" rx="4"/><text className="value read-text" x="470" y="322" textAnchor="middle">Read</text>
  <rect className="cell none" x="560" y="300" width="148" height="36" rx="4"/><text className="value none-text" x="634" y="322" textAnchor="middle">None</text>
  <rect className="cell full" x="724" y="300" width="148" height="36" rx="4"/><text className="value full-text" x="798" y="322" textAnchor="middle">Admin</text>
  <rect className="cell none" x="888" y="300" width="148" height="36" rx="4"/><text className="value none-text" x="962" y="322" textAnchor="middle">None</text>
  <line x1="12" y1="356" x2="1072" y2="356" stroke="rgba(45,49,66,.12)" strokeWidth=".8"/><text className="legend-text" x="12" y="380" letterSpacing=".14em">LEGEND</text>
  <rect className="cell full" x="96" y="368" width="16" height="12" rx="2"/><text className="legend-text" x="120" y="380">Admin</text><rect className="cell write" x="200" y="368" width="16" height="12" rx="2"/><text className="legend-text" x="224" y="380">Write</text><rect className="cell read" x="304" y="368" width="16" height="12" rx="2"/><text className="legend-text" x="328" y="380">Read</text><rect className="cell none" x="408" y="368" width="16" height="12" rx="2"/><text className="legend-text" x="432" y="380">None</text><rect className="focal" x="504" y="368" width="16" height="12" rx="2"/><text className="legend-text" x="528" y="380">partner read boundary</text>
      </svg>
    </div>
  );
}
