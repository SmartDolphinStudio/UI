import { useEffect } from "react";

/**
 * Process Diagram — A process across owning teams.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface ProcessDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

const CSS =
  ".dd-process { --paper:#f5f5f5; --ink:#2d3142; --muted:#4f5d75; --soft:#7a8399; --accent:#eb6c36; --accent-tint:rgba(235,108,54,.08); --rule:rgba(45,49,66,.12); --label-rule:rgba(45,49,66,.20); --lane:rgba(45,49,66,.018); --node:#fff; --node-stroke:rgba(45,49,66,.25); --chip:rgba(45,49,66,.12); --dot:rgba(45,49,66,.10); --db:#5e7a9b; --ls:#7c8f6f; --fl:#9c6b50; --tb:#b8915a; --wb:#6e6479; --sans:'Geist',system-ui,sans-serif; --serif:'Instrument Serif',serif; --mono:'Geist Mono',ui-monospace,monospace } .dd-process *, .dd-process *::before, .dd-process *::after { box-sizing:border-box;margin:0;padding:0 } .dd-process svg text { font-family:var(--sans) } .dd-process .mono { font-family:var(--mono) } .dd-process .lane { fill:var(--lane) } .dd-process .rule { stroke:var(--rule) } .dd-process .label-rule { stroke:var(--label-rule) } .dd-process .actor { fill:var(--muted);font:500 8px var(--mono);letter-spacing:.08em } .dd-process .step-label { fill:var(--muted);font:500 6px var(--mono);letter-spacing:.12em } .dd-process .step-chip { fill:var(--chip) } .dd-process .step-num { fill:var(--ink);font:600 7px var(--mono) } .dd-process .connector { fill:none;stroke:var(--muted);stroke-width:1 } .dd-process .connector.focal { stroke:var(--accent);stroke-width:1.2 } .dd-process .node-mask { fill:var(--paper) } .dd-process .node { fill:var(--node);stroke:var(--node-stroke) } .dd-process .node.focal { fill:var(--accent-tint);stroke:var(--accent);stroke-width:1.2 } .dd-process .role { fill:rgba(45,49,66,.10) } .dd-process .role.focal { fill:rgba(235,108,54,.25) } .dd-process .role-text { fill:var(--ink);font:600 6px var(--mono) } .dd-process .role-text.focal { fill:var(--accent) } .dd-process .node-title { fill:var(--ink);font:600 9px var(--sans) } .dd-process .node-sub { fill:var(--muted);font:6.5px var(--mono) } .dd-process .node-tool { fill:var(--soft);font:6.5px var(--mono) } .dd-process .data-text { fill:white;font:700 5px var(--mono) } .dd-process .legend-key { fill:var(--muted);font:500 7px var(--mono);letter-spacing:.12em } .dd-process .legend-text { fill:var(--muted);font:8px var(--sans) }";

export default function ProcessDiagram({ className }: ProcessDiagramProps) {
  // Load the editorial fonts (and scoped CSS when needed) once, on first mount.
  useEffect(() => {
    if (!document.getElementById("dd-fonts")) {
      const link = document.createElement("link");
      link.id = "dd-fonts";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }
    if (!document.getElementById("dd-css-process")) {
      const style = document.createElement("style");
      style.id = "dd-css-process";
      style.textContent = CSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="process">
      <svg viewBox="0 0 1064 436" role="img" aria-labelledby="process-title process-desc">

  <title id="process-title">Order fulfillment across four teams</title>
  <desc id="process-desc">Process diagram showing an order moving through customer, support, warehouse, and finance ownership from placement to close.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="0.8" fill="var(--dot)"/></pattern>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--muted)"/></marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--accent)"/></marker>
   <marker id="arrow-sm" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="var(--muted)"/></marker>
  </defs>
  <rect width="1064" height="436" fill="var(--paper)"/><rect width="1064" height="436" fill="url(#dots)" opacity=".55"/>
  <rect className="lane" x="140" y="36" width="924" height="80"/><rect className="lane" x="140" y="196" width="924" height="80"/>
  <g className="rule" strokeWidth=".8"><line x1="0" y1="36" x2="1064" y2="36"/><line x1="0" y1="116" x2="1064" y2="116"/><line x1="0" y1="196" x2="1064" y2="196"/><line x1="0" y1="276" x2="1064" y2="276"/><line x1="0" y1="356" x2="1064" y2="356"/></g>
  <line className="label-rule" x1="140" y1="36" x2="140" y2="356"/>
  <g className="actor" textAnchor="middle"><text x="70" y="80">CUSTOMER</text><text x="70" y="160">SUPPORT</text><text x="70" y="240">WAREHOUSE</text><text x="70" y="320">FINANCE</text></g>
  <g textAnchor="middle">
   <rect className="step-chip" x="190" y="8" width="16" height="16" rx="8"/><text className="step-num" x="198" y="19">1</text><text className="step-label" x="198" y="32">ORDER</text>
   <rect className="step-chip" x="302" y="8" width="16" height="16" rx="8"/><text className="step-num" x="310" y="19">2</text><text className="step-label" x="310" y="32">VERIFY</text>
   <rect x="414" y="8" width="16" height="16" rx="8" fill="rgba(235,108,54,.20)"/><text x="422" y="19" fill="var(--accent)" fontSize="7" fontWeight="600" className="mono">3</text><text x="422" y="32" fill="var(--accent)" fontSize="6" fontWeight="500" letterSpacing=".12em" className="mono">ALLOCATE</text>
   <rect className="step-chip" x="526" y="8" width="16" height="16" rx="8"/><text className="step-num" x="534" y="19">4</text><text className="step-label" x="534" y="32">PICK</text>
   <rect className="step-chip" x="638" y="8" width="16" height="16" rx="8"/><text className="step-num" x="646" y="19">5</text><text className="step-label" x="646" y="32">PACK</text>
   <rect className="step-chip" x="750" y="8" width="16" height="16" rx="8"/><text className="step-num" x="758" y="19">6</text><text className="step-label" x="758" y="32">PAY</text>
   <rect className="step-chip" x="862" y="8" width="16" height="16" rx="8"/><text className="step-num" x="870" y="19">7</text><text className="step-label" x="870" y="32">RECEIVE</text>
   <rect className="step-chip" x="974" y="8" width="16" height="16" rx="8"/><text className="step-num" x="982" y="19">8</text><text className="step-label" x="982" y="32">CLOSE</text>
  </g>
  <path className="connector" d="M248 76 H302 Q310 76 310 84 V124" markerEnd="url(#arrow)"/><path className="connector focal" d="M360 156 H414 Q422 156 422 164 V204" markerEnd="url(#arrow-accent)"/><line className="connector focal" x1="472" y1="236" x2="484" y2="236" markerEnd="url(#arrow-accent)"/><line className="connector" x1="584" y1="236" x2="596" y2="236" markerEnd="url(#arrow)"/><path className="connector" d="M696 236 H750 Q758 236 758 244 V284" markerEnd="url(#arrow)"/><path className="connector" d="M808 316 H862 Q870 316 870 308 V108" markerEnd="url(#arrow)"/><path className="connector" d="M920 76 H974 Q982 76 982 84 V124" markerEnd="url(#arrow)"/>
  <g textAnchor="middle">
   <g><rect className="node-mask" x="148" y="44" width="100" height="64" rx="6"/><rect className="node" x="148" y="44" width="100" height="64" rx="6"/><rect className="role" x="152" y="48" width="20" height="10" rx="2"/><text className="role-text" x="162" y="56">CUS</text><text className="node-title" x="198" y="70">Place order</text><text className="node-sub" x="198" y="84">cart → order</text><text className="node-tool" x="198" y="96">storefront</text><rect x="228" y="98" width="16" height="8" rx="2" fill="var(--db)"/><text className="data-text" x="236" y="104">DB</text></g>
   <g><rect className="node-mask" x="260" y="124" width="100" height="64" rx="6"/><rect className="node" x="260" y="124" width="100" height="64" rx="6"/><rect className="role" x="264" y="128" width="20" height="10" rx="2"/><text className="role-text" x="274" y="136">SUP</text><text className="node-title" x="310" y="150">Verify order</text><text className="node-sub" x="310" y="164">order → cleared</text><text className="node-tool" x="310" y="176">service desk</text><rect x="264" y="178" width="16" height="8" rx="2" fill="var(--db)"/><text className="data-text" x="272" y="184">DB</text><rect x="340" y="178" width="16" height="8" rx="2" fill="var(--db)"/><text className="data-text" x="348" y="184">DB</text></g>
   <g><rect className="node-mask" x="372" y="204" width="100" height="64" rx="6"/><rect className="node focal" x="372" y="204" width="100" height="64" rx="6"/><rect className="role focal" x="376" y="208" width="20" height="10" rx="2"/><text className="role-text focal" x="386" y="216">WHS</text><text className="node-title" x="422" y="230">Allocate stock</text><text className="node-sub" x="422" y="244">order → pick list</text><text className="node-tool" x="422" y="256">inventory system</text><rect x="376" y="258" width="16" height="8" rx="2" fill="var(--db)"/><text className="data-text" x="384" y="264">DB</text><rect x="452" y="258" width="16" height="8" rx="2" fill="var(--ls)"/><text className="data-text" x="460" y="264">LS</text></g>
   <g><rect className="node-mask" x="484" y="204" width="100" height="64" rx="6"/><rect className="node" x="484" y="204" width="100" height="64" rx="6"/><rect className="role" x="488" y="208" width="20" height="10" rx="2"/><text className="role-text" x="498" y="216">WHS</text><text className="node-title" x="534" y="230">Pick items</text><text className="node-sub" x="534" y="244">list → picked</text><text className="node-tool" x="534" y="256">handheld scanner</text><rect x="488" y="258" width="16" height="8" rx="2" fill="var(--ls)"/><text className="data-text" x="496" y="264">LS</text><rect x="564" y="258" width="16" height="8" rx="2" fill="var(--ls)"/><text className="data-text" x="572" y="264">LS</text></g>
   <g><rect className="node-mask" x="596" y="204" width="100" height="64" rx="6"/><rect className="node" x="596" y="204" width="100" height="64" rx="6"/><rect className="role" x="600" y="208" width="20" height="10" rx="2"/><text className="role-text" x="610" y="216">WHS</text><text className="node-title" x="646" y="230">Pack order</text><text className="node-sub" x="646" y="244">picked → shipment</text><text className="node-tool" x="646" y="256">packing station</text><rect x="600" y="258" width="16" height="8" rx="2" fill="var(--ls)"/><text className="data-text" x="608" y="264">LS</text><rect x="676" y="258" width="16" height="8" rx="2" fill="var(--fl)"/><text className="data-text" x="684" y="264">FL</text></g>
   <g><rect className="node-mask" x="708" y="284" width="100" height="64" rx="6"/><rect className="node" x="708" y="284" width="100" height="64" rx="6"/><rect className="role" x="712" y="288" width="20" height="10" rx="2"/><text className="role-text" x="722" y="296">FIN</text><text className="node-title" x="758" y="310">Capture payment</text><text className="node-sub" x="758" y="324">shipment → receipt</text><text className="node-tool" x="758" y="336">payment gateway</text><rect x="712" y="338" width="16" height="8" rx="2" fill="var(--fl)"/><text className="data-text" x="720" y="344">FL</text><rect x="788" y="338" width="16" height="8" rx="2" fill="var(--tb)"/><text className="data-text" x="796" y="344">TB</text></g>
   <g><rect className="node-mask" x="820" y="44" width="100" height="64" rx="6"/><rect className="node" x="820" y="44" width="100" height="64" rx="6"/><rect className="role" x="824" y="48" width="20" height="10" rx="2"/><text className="role-text" x="834" y="56">CUS</text><text className="node-title" x="870" y="70">Receive shipment</text><text className="node-sub" x="870" y="84">receipt → confirmed</text><text className="node-tool" x="870" y="96">delivery portal</text><rect x="824" y="98" width="16" height="8" rx="2" fill="var(--tb)"/><text className="data-text" x="832" y="104">TB</text><rect x="900" y="98" width="16" height="8" rx="2" fill="var(--wb)"/><text className="data-text" x="908" y="104">WB</text></g>
   <g><rect className="node-mask" x="932" y="124" width="100" height="64" rx="6"/><rect className="node" x="932" y="124" width="100" height="64" rx="6"/><rect className="role" x="936" y="128" width="20" height="10" rx="2"/><text className="role-text" x="946" y="136">SUP</text><text className="node-title" x="982" y="150">Close order</text><text className="node-sub" x="982" y="164">confirmed → closed</text><text className="node-tool" x="982" y="176">service desk</text><rect x="936" y="178" width="16" height="8" rx="2" fill="var(--wb)"/><text className="data-text" x="944" y="184">WB</text></g>
  </g>
  <g><text className="legend-key" x="144" y="372">STEPS</text><g textAnchor="middle"><rect className="step-chip" x="208" y="364" width="16" height="16" rx="8"/><text className="step-num" x="216" y="375">1</text><text className="legend-text" x="248" y="375">ORDER</text><rect className="step-chip" x="300" y="364" width="16" height="16" rx="8"/><text className="step-num" x="308" y="375">2</text><text className="legend-text" x="340" y="375">VERIFY</text><rect x="392" y="364" width="16" height="16" rx="8" fill="rgba(235,108,54,.20)"/><text x="400" y="375" fill="var(--accent)" fontSize="7" className="mono">3</text><text x="432" y="375" fill="var(--accent)" fontSize="8">ALLOCATE</text><rect className="step-chip" x="496" y="364" width="16" height="16" rx="8"/><text className="step-num" x="504" y="375">4</text><text className="legend-text" x="532" y="375">PICK</text><rect className="step-chip" x="576" y="364" width="16" height="16" rx="8"/><text className="step-num" x="584" y="375">5</text><text className="legend-text" x="612" y="375">PACK</text><rect className="step-chip" x="656" y="364" width="16" height="16" rx="8"/><text className="step-num" x="664" y="375">6</text><text className="legend-text" x="692" y="375">PAY</text><rect className="step-chip" x="736" y="364" width="16" height="16" rx="8"/><text className="step-num" x="744" y="375">7</text><text className="legend-text" x="780" y="375">RECEIVE</text><rect className="step-chip" x="832" y="364" width="16" height="16" rx="8"/><text className="step-num" x="840" y="375">8</text><text className="legend-text" x="872" y="375">CLOSE</text></g>
  <text className="legend-key" x="144" y="393">DATA TYPE</text><rect x="220" y="386" width="16" height="8" rx="2" fill="var(--db)"/><text className="legend-text" x="244" y="393">DB · records</text><rect x="328" y="386" width="16" height="8" rx="2" fill="var(--ls)"/><text className="legend-text" x="352" y="393">LS · task</text><rect x="428" y="386" width="16" height="8" rx="2" fill="var(--fl)"/><text className="legend-text" x="452" y="393">FL · document</text><rect x="552" y="386" width="16" height="8" rx="2" fill="var(--tb)"/><text className="legend-text" x="576" y="393">TB · transaction</text><rect x="688" y="386" width="16" height="8" rx="2" fill="var(--wb)"/><text className="legend-text" x="712" y="393">WB · web status</text><text className="legend-key" x="856" y="393">LEFT IN · RIGHT OUT</text>
  <text className="legend-key" x="144" y="414">FLOW</text><line x1="200" y1="410" x2="228" y2="410" stroke="var(--accent)" strokeWidth="1.2" markerEnd="url(#arrow-accent)"/><text className="legend-text" x="240" y="414">Critical handoff</text><line x1="360" y1="410" x2="388" y2="410" stroke="var(--muted)" markerEnd="url(#arrow)"/><text className="legend-text" x="400" y="414">Sequential handoff</text></g>
      </svg>
    </div>
  );
}
