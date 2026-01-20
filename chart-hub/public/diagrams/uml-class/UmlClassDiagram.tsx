import { useEffect } from "react";

/**
 * UML Class Diagram — Classes, interfaces, and relations.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface UmlClassDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function UmlClassDiagram({ className }: UmlClassDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="uml-class">
      <svg viewBox="0 0 980 664" role="img" aria-labelledby="uml-class-title uml-class-desc">

  <title id="uml-class-title">Payments domain · UML class diagram</title>
  <desc id="uml-class-desc">Class diagram showing Card and BankTransfer realizing a PaymentMethod interface, PaymentService depending on PaymentMethod, and Order composed of OrderLine while associated with Customer.</desc>
  <defs>
   <marker id="uml-triangle" markerWidth="16" markerHeight="12" refX="15" refY="6" orient="auto" markerUnits="userSpaceOnUse">
    <polygon points="0 0, 16 6, 0 12" fill="#f5f5f5" stroke="#2d3142" strokeWidth="1"/>
   </marker>
   <marker id="uml-diamond-filled" markerWidth="18" markerHeight="10" refX="0" refY="5" orient="auto" markerUnits="userSpaceOnUse">
    <polygon points="0 5, 9 0, 18 5, 9 10" fill="#2d3142"/>
   </marker>
   <marker id="uml-diamond-hollow" markerWidth="18" markerHeight="10" refX="0" refY="5" orient="auto" markerUnits="userSpaceOnUse">
    <polygon points="0 5, 9 0, 18 5, 9 10" fill="#f5f5f5" stroke="#2d3142" strokeWidth="1"/>
   </marker>
   <marker id="uml-open" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto" markerUnits="userSpaceOnUse">
    <path d="M0,0 L9,4 L0,8" fill="none" stroke="#4f5d75" strokeWidth="1"/>
   </marker>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <line x1="480" y1="240" x2="480" y2="140" stroke="#eb6c36" strokeWidth="1" strokeDasharray="5,4" markerEnd="url(#uml-triangle)"/>
  <line x1="760" y1="240" x2="760" y2="140" stroke="#eb6c36" strokeWidth="1" strokeDasharray="5,4" markerEnd="url(#uml-triangle)"/>
  <line x1="320" y1="100" x2="420" y2="100" stroke="#4f5d75" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#uml-open)"/>
  <line x1="260" y1="480" x2="380" y2="480" stroke="#4f5d75" strokeWidth="1" markerStart="url(#uml-diamond-filled)"/>
  <path d="M 160,540 V 572 Q 160,580 168,580 H 752 Q 760,580 760,572 V 540" fill="none" stroke="#4f5d75" strokeWidth="1" markerEnd="url(#uml-open)"/>
  <rect x="352" y="80" width="32" height="12" rx="2" fill="#f5f5f5"/>
  <text x="368" y="89" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">USES</text>
  <rect x="288" y="474" width="12" height="12" rx="2" fill="#f5f5f5"/>
  <text x="294" y="484" fill="#2d3142" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">1</text>
  <rect x="348" y="474" width="24" height="12" rx="2" fill="#f5f5f5"/>
  <text x="360" y="484" fill="#2d3142" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">1..*</text>
  <rect x="164" y="548" width="28" height="12" rx="2" fill="#f5f5f5"/>
  <text x="178" y="557" fill="#2d3142" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">0..*</text>
  <rect x="752" y="548" width="16" height="12" rx="2" fill="#f5f5f5"/>
  <text x="760" y="557" fill="#2d3142" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">1</text>
  <rect x="420" y="40" width="360" height="100" rx="6" fill="rgba(235,108,54,0.04)" stroke="#eb6c36" strokeWidth="1"/>
  <rect x="420" y="40" width="360" height="40" rx="6" fill="rgba(235,108,54,0.10)"/>
  <rect x="420" y="72" width="360" height="8" fill="rgba(235,108,54,0.10)"/>
  <line x1="420" y1="80" x2="780" y2="80" stroke="rgba(235,108,54,0.40)" strokeWidth="1"/>
  <text x="600" y="56" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">«interface»</text>
  <text x="600" y="72" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">PaymentMethod</text>
  <text x="436" y="100" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">+ authorize(amount: Money): AuthResult</text>
  <text x="436" y="120" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">+ capture(ref: String): void</text>
  <rect x="380" y="240" width="200" height="120" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <line x1="380" y1="280" x2="580" y2="280" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="480" y="264" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Card</text>
  <text x="396" y="300" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- number: String</text>
  <text x="396" y="320" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- expiry: Date</text>
  <text x="396" y="340" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- cvv: String</text>
  <rect x="660" y="240" width="200" height="100" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <line x1="660" y1="280" x2="860" y2="280" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="760" y="264" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">BankTransfer</text>
  <text x="676" y="300" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- iban: String</text>
  <text x="676" y="320" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- accountHolder: String</text>
  <rect x="40" y="60" width="280" height="80" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <line x1="40" y1="100" x2="320" y2="100" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="180" y="84" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">PaymentService</text>
  <text x="56" y="120" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">+ charge(order: Order): Receipt</text>
  <rect x="60" y="420" width="200" height="120" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <line x1="60" y1="460" x2="260" y2="460" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="160" y="444" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Order</text>
  <text x="76" y="480" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- id: String</text>
  <text x="76" y="500" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- placedAt: Date</text>
  <text x="76" y="520" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- total: Money</text>
  <rect x="380" y="420" width="200" height="120" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <line x1="380" y1="460" x2="580" y2="460" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="480" y="444" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">OrderLine</text>
  <text x="396" y="480" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- sku: String</text>
  <text x="396" y="500" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- qty: Int</text>
  <text x="396" y="520" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- price: Money</text>
  <rect x="660" y="420" width="200" height="120" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <line x1="660" y1="460" x2="860" y2="460" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="760" y="444" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Customer</text>
  <text x="676" y="480" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- id: String</text>
  <text x="676" y="500" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- name: String</text>
  <text x="676" y="520" fill="#2d3142" fontSize="9" fontFamily="'Geist Mono', monospace">- email: String</text>
  <line x1="40" y1="604" x2="940" y2="604" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="620" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND · RELATIONSHIPS</text>
  <line x1="40" y1="636" x2="68" y2="636" stroke="#2d3142" strokeWidth="1" markerEnd="url(#uml-triangle)"/>
  <text x="76" y="640" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Inheritance</text>
  <line x1="188" y1="636" x2="216" y2="636" stroke="#2d3142" strokeWidth="1" strokeDasharray="5,4" markerEnd="url(#uml-triangle)"/>
  <text x="224" y="640" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Realization</text>
  <line x1="336" y1="636" x2="364" y2="636" stroke="#2d3142" strokeWidth="1" markerStart="url(#uml-diamond-filled)"/>
  <text x="372" y="640" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Composition · owns</text>
  <line x1="484" y1="636" x2="512" y2="636" stroke="#2d3142" strokeWidth="1" markerStart="url(#uml-diamond-hollow)"/>
  <text x="520" y="640" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Aggregation · has</text>
  <line x1="632" y1="636" x2="660" y2="636" stroke="#4f5d75" strokeWidth="1" markerEnd="url(#uml-open)"/>
  <text x="668" y="640" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Association</text>
  <line x1="780" y1="636" x2="808" y2="636" stroke="#4f5d75" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#uml-open)"/>
  <text x="816" y="640" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Dependency · uses</text>
      </svg>
    </div>
  );
}
