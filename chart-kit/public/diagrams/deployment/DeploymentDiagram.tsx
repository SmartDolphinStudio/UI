import { useEffect } from "react";

/**
 * Deployment Diagram — Where each service runs: edge, cluster, and data zones.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface DeploymentDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function DeploymentDiagram({ className }: DeploymentDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="deployment">
      <svg viewBox="0 0 1040 416" role="img" aria-labelledby="deployment-title deployment-desc">

  <title id="deployment-title">Checkout service, production</title>
  <desc id="deployment-desc">Deployment diagram placing the checkout service across an edge CDN zone, a production Kubernetes zone running ingress and API pods, and a data zone with a primary Postgres instance replicating to a standby.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
   <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <rect x="40" y="40" width="208" height="280" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" strokeWidth="0.8" strokeDasharray="4,4"/>
  <rect x="56" y="44" width="48" height="12" fill="#f5f5f5"/>
  <text x="80" y="53" fill="rgba(45,49,66,0.40)" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">EDGE</text>
  <rect x="280" y="40" width="280" height="280" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" strokeWidth="0.8" strokeDasharray="4,4"/>
  <rect x="296" y="44" width="140" height="12" fill="#f5f5f5"/>
  <text x="366" y="53" fill="rgba(45,49,66,0.40)" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">PROD / EU-WEST-1</text>
  <rect x="600" y="40" width="240" height="280" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" strokeWidth="0.8" strokeDasharray="4,4"/>
  <rect x="616" y="44" width="40" height="12" fill="#f5f5f5"/>
  <text x="636" y="53" fill="rgba(45,49,66,0.40)" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">DATA</text>
  <path d="M 224,196 H 288 Q 296,196 296,188 V 128 Q 296,120 304,120" fill="none" stroke="#2e5aa8" strokeWidth="1.2" markerEnd="url(#arrow-link)"/>
  <line x1="420" y1="164" x2="420" y2="196" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <path d="M 536,252 H 572 Q 580,252 580,244 V 128 Q 580,120 588,120 H 624" fill="none" stroke="#2e5aa8" strokeWidth="1.2" markerEnd="url(#arrow-link)"/>
  <line x1="720" y1="164" x2="720" y2="212" stroke="#eb6c36" strokeWidth="1" strokeDasharray="5,4" markerEnd="url(#arrow-accent)"/>
  <rect x="224" y="176" width="64" height="12" rx="2" fill="#f5f5f5"/>
  <text x="256" y="185" fill="#2e5aa8" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">HTTPS:443</text>
  <rect x="428" y="174" width="64" height="12" rx="2" fill="#f5f5f5"/>
  <text x="460" y="183" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">HTTP:8080</text>
  <rect x="588" y="180" width="64" height="12" rx="2" fill="#f5f5f5"/>
  <text x="620" y="189" fill="#2e5aa8" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">TLS:5432</text>
  <rect x="728" y="182" width="72" height="12" rx="2" fill="#f5f5f5"/>
  <text x="764" y="191" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.06em">WAL STREAM</text>
  <rect x="64" y="156" width="160" height="84" rx="6" fill="#f5f5f5"/>
  <rect x="64" y="156" width="160" height="84" rx="6" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <rect x="72" y="164" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.22)" strokeWidth="0.8"/>
  <text x="88" y="173" fill="#7a8399" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">CDN</text>
  <text x="144" y="196" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Cloudflare</text>
  <rect x="72" y="208" width="144" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="80" y="224" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">edge-cache</text>
  <text x="208" y="224" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">v1.2</text>
  <rect x="304" y="80" width="232" height="84" rx="6" fill="#f5f5f5"/>
  <rect x="304" y="80" width="232" height="84" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="312" y="88" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="328" y="97" fill="#2d3142" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">POD</text>
  <text x="420" y="120" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">ingress</text>
  <rect x="312" y="132" width="216" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="320" y="148" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">nginx-ingress</text>
  <text x="520" y="148" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">v1.11</text>
  <rect x="304" y="196" width="232" height="116" rx="6" fill="#f5f5f5"/>
  <rect x="304" y="196" width="232" height="116" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="312" y="204" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="328" y="213" fill="#2d3142" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">POD</text>
  <rect x="500" y="204" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="514" y="213" fill="#2d3142" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">x3</text>
  <text x="420" y="236" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">app</text>
  <rect x="312" y="248" width="216" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="320" y="264" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">checkout-api</text>
  <text x="520" y="264" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">v2.4.1</text>
  <rect x="312" y="280" width="216" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="320" y="296" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">sidecar-otel</text>
  <text x="520" y="296" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">v0.9</text>
  <rect x="624" y="80" width="192" height="84" rx="6" fill="#f5f5f5"/>
  <rect x="624" y="80" width="192" height="84" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <rect x="632" y="88" width="64" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" strokeWidth="0.8"/>
  <text x="664" y="97" fill="#eb6c36" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">MANAGED</text>
  <text x="720" y="120" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">rds-primary</text>
  <rect x="632" y="132" width="176" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="640" y="148" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">postgres</text>
  <text x="800" y="148" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">16.2</text>
  <rect x="624" y="212" width="192" height="84" rx="6" fill="#f5f5f5"/>
  <rect x="624" y="212" width="192" height="84" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="632" y="220" width="64" height="12" rx="2" fill="transparent" stroke="rgba(79,93,117,0.50)" strokeWidth="0.8"/>
  <text x="664" y="229" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">MANAGED</text>
  <text x="720" y="252" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">rds-standby</text>
  <rect x="632" y="264" width="176" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="640" y="280" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif">postgres</text>
  <text x="800" y="280" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="end">16.2</text>
  <line x1="40" y1="340" x2="1000" y2="340" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="356" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="372" width="14" height="10" rx="2" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="60" y="380" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Focal / primary</text>
  <rect x="180" y="372" width="14" height="10" rx="2" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="200" y="380" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Infra node</text>
  <rect x="320" y="372" width="14" height="10" rx="2" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="340" y="380" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Store / standby</text>
  <rect x="460" y="372" width="14" height="10" rx="2" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="480" y="380" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Managed / CDN</text>
  <line x1="600" y1="376" x2="628" y2="376" stroke="#2e5aa8" strokeWidth="1.2" markerEnd="url(#arrow-link)"/>
  <text x="636" y="380" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Cross-zone</text>
  <line x1="740" y1="376" x2="768" y2="376" stroke="#eb6c36" strokeWidth="1" strokeDasharray="5,4" markerEnd="url(#arrow-accent)"/>
  <text x="776" y="380" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Replication</text>
  <line x1="880" y1="376" x2="908" y2="376" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <text x="916" y="380" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">In-zone call</text>
      </svg>
    </div>
  );
}
