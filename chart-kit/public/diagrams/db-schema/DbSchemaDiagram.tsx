import { useEffect } from "react";

/**
 * Database Schema Diagram — Tables, columns, foreign keys, and constraints.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface DbSchemaDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function DbSchemaDiagram({ className }: DbSchemaDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="db-schema">
      <svg viewBox="0 0 1080 560" role="img" aria-labelledby="db-schema-title db-schema-desc">

  <title id="db-schema-title">Commerce schema · public + billing</title>
  <desc id="db-schema-desc">Physical database schema diagram showing five commerce tables with column-level foreign keys, SQL types, and constraint chips, including a cascading delete from orders into order_items and a billing schema group.</desc>
  <defs>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
   <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect x="744" y="284" width="272" height="152" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" strokeWidth="0.8" strokeDasharray="4,4"/>
  <text x="756" y="300" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">BILLING</text>
  <path d="M 400,104 H 348 Q 340,104 340,112 Q 340,120 332,120 H 280" fill="none" stroke="#4f5d75" strokeWidth="1" markerEnd="url(#arrow)"/>
  <path d="M 640,384 H 692 Q 700,384 700,376 V 80 Q 700,72 692,72 H 640" fill="none" stroke="#eb6c36" strokeWidth="1.2" markerEnd="url(#arrow-accent)"/>
  <path d="M 640,408 H 708 Q 716,408 716,400 V 88 Q 716,80 724,80 H 760" fill="none" stroke="#4f5d75" strokeWidth="1" markerEnd="url(#arrow)"/>
  <path d="M 760,384 H 692 Q 684,384 684,376 V 96 Q 684,88 676,88 H 640" fill="none" stroke="#4f5d75" strokeWidth="1" markerEnd="url(#arrow)"/>
  <rect x="284" y="82" width="112" height="12" rx="2" fill="#f5f5f5"/>
  <text x="340" y="91" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">ON DELETE RESTRICT</text>
  <rect x="648" y="392" width="88" height="12" rx="2" fill="#f5f5f5"/>
  <text x="692" y="401" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">ON DELETE CASCADE</text>
  <rect x="724" y="252" width="112" height="12" rx="2" fill="#f5f5f5"/>
  <text x="780" y="261" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">ON DELETE RESTRICT</text>
  <rect x="564" y="270" width="112" height="12" rx="2" fill="#f5f5f5"/>
  <text x="620" y="279" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">ON DELETE RESTRICT</text>
  <rect x="40" y="80" width="240" height="100" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="40" y="80" width="240" height="28" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
  <rect x="40" y="100" width="240" height="8" fill="rgba(45,49,66,0.04)"/>
  <line x1="40" y1="108" x2="280" y2="108" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="52" y="98" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">public.customers</text>
  <rect x="228" y="88" width="40" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="248" y="97" fill="#2d3142" opacity="0.8" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">TABLE</text>
  <rect x="40" y="108" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="52" y="124" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">id</text>
  <rect x="160" y="116" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="170" y="125" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">PK</text>
  <text x="268" y="124" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="52" y="148" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">email</text>
  <rect x="160" y="140" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="170" y="149" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">UQ</text>
  <rect x="184" y="140" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="194" y="149" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="268" y="148" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <rect x="40" y="156" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="52" y="172" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">created_at</text>
  <rect x="160" y="164" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="170" y="173" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="268" y="172" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">timestamptz</text>
  <rect x="400" y="40" width="240" height="200" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="400" y="40" width="240" height="28" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
  <rect x="400" y="60" width="240" height="8" fill="rgba(45,49,66,0.04)"/>
  <line x1="400" y1="68" x2="640" y2="68" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="412" y="58" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">public.orders</text>
  <rect x="588" y="48" width="40" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="608" y="57" fill="#2d3142" opacity="0.8" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">TABLE</text>
  <rect x="400" y="68" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="412" y="84" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">id</text>
  <rect x="520" y="76" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="530" y="85" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">PK</text>
  <text x="628" y="84" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="412" y="108" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">customer_id</text>
  <rect x="520" y="100" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="530" y="109" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">FK</text>
  <rect x="544" y="100" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="554" y="109" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="628" y="108" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <rect x="400" y="116" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="412" y="132" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">status</text>
  <rect x="520" y="124" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="530" y="133" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="628" y="132" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <text x="412" y="156" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">total</text>
  <rect x="520" y="148" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="530" y="157" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="628" y="156" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">numeric(12,2)</text>
  <rect x="400" y="164" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="412" y="180" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">placed_at</text>
  <rect x="520" y="172" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="530" y="181" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="628" y="180" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">timestamptz</text>
  <line x1="400" y1="188" x2="640" y2="188" stroke="rgba(45,49,66,0.12)" strokeWidth="0.8"/>
  <text x="412" y="202" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">INDEXES</text>
  <text x="412" y="220" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">idx_orders_customer_id</text>
  <text x="412" y="236" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">idx_orders_status</text>
  <rect x="400" y="320" width="240" height="148" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="400" y="320" width="240" height="28" rx="6" fill="rgba(235,108,54,0.08)" stroke="none"/>
  <rect x="400" y="340" width="240" height="8" fill="rgba(235,108,54,0.08)"/>
  <line x1="400" y1="348" x2="640" y2="348" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="412" y="338" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">public.order_items</text>
  <rect x="588" y="328" width="40" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="608" y="337" fill="#2d3142" opacity="0.8" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">TABLE</text>
  <rect x="400" y="348" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="412" y="364" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">id</text>
  <rect x="520" y="356" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="530" y="365" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">PK</text>
  <text x="628" y="364" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="412" y="388" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">order_id</text>
  <rect x="520" y="380" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="530" y="389" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">FK</text>
  <rect x="544" y="380" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="554" y="389" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="628" y="388" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <rect x="400" y="396" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="412" y="412" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">product_id</text>
  <rect x="520" y="404" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="530" y="413" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">FK</text>
  <rect x="544" y="404" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="554" y="413" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="628" y="412" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="412" y="436" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">qty</text>
  <rect x="520" y="428" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="530" y="437" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="628" y="436" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">integer</text>
  <rect x="400" y="444" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="412" y="460" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">unit_price</text>
  <rect x="520" y="452" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="530" y="461" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="628" y="460" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">numeric(12,2)</text>
  <rect x="760" y="40" width="240" height="184" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="760" y="40" width="240" height="28" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
  <rect x="760" y="60" width="240" height="8" fill="rgba(45,49,66,0.04)"/>
  <line x1="760" y1="68" x2="1000" y2="68" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="772" y="58" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">public.products</text>
  <rect x="948" y="48" width="40" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="968" y="57" fill="#2d3142" opacity="0.8" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">TABLE</text>
  <rect x="760" y="68" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="772" y="84" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">id</text>
  <rect x="880" y="76" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="890" y="85" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">PK</text>
  <text x="988" y="84" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="772" y="108" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">sku</text>
  <rect x="880" y="100" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="890" y="109" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">UQ</text>
  <rect x="904" y="100" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="914" y="109" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="988" y="108" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <rect x="760" y="116" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="772" y="132" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">name</text>
  <rect x="880" y="124" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="890" y="133" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="988" y="132" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <text x="772" y="156" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">price</text>
  <rect x="880" y="148" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="890" y="157" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="988" y="156" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">numeric(12,2)</text>
  <rect x="760" y="164" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="772" y="180" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">+ 3 more columns</text>
  <line x1="760" y1="188" x2="1000" y2="188" stroke="rgba(45,49,66,0.12)" strokeWidth="0.8"/>
  <text x="772" y="202" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">INDEXES</text>
  <text x="772" y="220" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">uq_products_sku</text>
  <rect x="760" y="320" width="240" height="100" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="760" y="320" width="240" height="28" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
  <rect x="760" y="340" width="240" height="8" fill="rgba(45,49,66,0.04)"/>
  <line x1="760" y1="348" x2="1000" y2="348" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="772" y="338" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">billing.invoices</text>
  <rect x="948" y="328" width="40" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="968" y="337" fill="#2d3142" opacity="0.8" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">TABLE</text>
  <rect x="760" y="348" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="772" y="364" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">id</text>
  <rect x="880" y="356" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="890" y="365" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">PK</text>
  <text x="988" y="364" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="772" y="388" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">order_id</text>
  <rect x="880" y="380" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="890" y="389" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">FK</text>
  <rect x="904" y="380" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="914" y="389" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="988" y="388" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <rect x="760" y="396" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
  <text x="772" y="412" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">issued_at</text>
  <rect x="880" y="404" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="890" y="413" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">NN</text>
  <text x="988" y="412" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">timestamptz</text>
  <line x1="40" y1="500" x2="1040" y2="500" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="516" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="532" width="20" height="12" rx="2" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="68" y="540" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Table</text>
  <rect x="180" y="532" width="20" height="12" rx="2" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8" strokeDasharray="3,3"/>
  <text x="208" y="540" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Schema group</text>
  <rect x="340" y="532" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="0.8"/>
  <text x="350" y="541" fill="#2d3142" opacity="0.75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">PK</text>
  <text x="368" y="540" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Constraint chip</text>
  <line x1="500" y1="538" x2="520" y2="538" stroke="#4f5d75" strokeWidth="1"/>
  <text x="528" y="540" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Foreign key (column to column)</text>
  <line x1="740" y1="538" x2="760" y2="538" stroke="#eb6c36" strokeWidth="1.2"/>
  <text x="768" y="540" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Destructive delete (CASCADE)</text>
      </svg>
    </div>
  );
}
