import { useEffect } from "react";

/**
 * Architecture Diagram — System-level architecture: components, connections, and entry points at a glance.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface ArchitectureDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function ArchitectureDiagram({ className }: ArchitectureDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="architecture">
      <svg viewBox="0 0 1000 480" role="img" aria-labelledby="architecture-title architecture-desc">

  <title id="architecture-title">Content site in production</title>
  <desc id="architecture-desc">Architecture diagram showing reader requests moving through Cloudflare to an Astro origin, MDX bundle, and content CMS.</desc>
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
  <rect x="616" y="128" width="164" height="272" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <rect x="672" y="132" width="52" height="12" rx="2" fill="#f5f5f5"/>
  <text x="698" y="141" fill="rgba(45,49,66,0.40)" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">CONTENT</text>
  <line x1="168" y1="272" x2="220" y2="272" stroke="#2e5aa8" strokeWidth="1.2" markerEnd="url(#arrow-link)"/>
  <line x1="364" y1="272" x2="416" y2="272" stroke="#eb6c36" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/>
  <path d="M 496,240 H 692 Q 700,240 700,232 V 224" fill="none" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <path d="M 496,304 H 692 Q 700,304 700,312 V 320" fill="none" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <path d="M 220,288 H 168" fill="none" stroke="#4f5d75" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arrow)"/>
  <rect x="172" y="252" width="48" height="12" rx="2" fill="#f5f5f5"/>
  <text x="196" y="262" fill="#2e5aa8" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">HTTPS</text>
  <rect x="172" y="278" width="32" height="12" rx="2" fill="#f5f5f5"/>
  <text x="188" y="287" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">RESP</text>
  <rect x="368" y="252" width="48" height="12" rx="2" fill="#f5f5f5"/>
  <text x="392" y="262" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">SSR</text>
  <rect x="632" y="246" width="60" height="12" rx="2" fill="#f5f5f5"/>
  <text x="662" y="255" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">READ MDX</text>
  <rect x="632" y="286" width="44" height="12" rx="2" fill="#f5f5f5"/>
  <text x="654" y="295" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">QUERY</text>
  <rect x="40" y="240" width="128" height="64" rx="6" fill="#f5f5f5"/>
  <rect x="40" y="240" width="128" height="64" rx="6" fill="rgba(79,93,117,0.10)" stroke="#7a8399" strokeWidth="1"/>
  <rect x="48" y="248" width="28" height="12" rx="2" fill="transparent" stroke="rgba(122,131,153,0.40)" strokeWidth="0.8"/>
  <text x="62" y="257" fill="#7a8399" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">EXT</text>
  <text x="104" y="276" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Reader</text>
  <text x="104" y="292" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">Browser</text>
  <rect x="220" y="240" width="144" height="64" rx="6" fill="#f5f5f5"/>
  <rect x="220" y="240" width="144" height="64" rx="6" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <rect x="228" y="248" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.22)" strokeWidth="0.8"/>
  <text x="244" y="257" fill="#7a8399" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">EDGE</text>
  <text x="356" y="300" fill="rgba(45,49,66,0.06)" fontSize="32" fontWeight="600" fontFamily="'Geist Mono', monospace" textAnchor="end">01</text>
  <text x="292" y="276" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Cloudflare</text>
  <text x="292" y="292" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">Pages · cache</text>
  <rect x="416" y="240" width="160" height="64" rx="6" fill="#f5f5f5"/>
  <rect x="416" y="240" width="160" height="64" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <rect x="424" y="248" width="32" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" strokeWidth="0.8"/>
  <text x="440" y="257" fill="#eb6c36" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">ORIG</text>
  <text x="568" y="300" fill="rgba(235,108,54,0.10)" fontSize="32" fontWeight="600" fontFamily="'Geist Mono', monospace" textAnchor="end">02</text>
  <text x="496" y="276" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Astro Origin</text>
  <text x="496" y="292" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">SSR + MDX</text>
  <rect x="628" y="160" width="144" height="64" rx="6" fill="#f5f5f5"/>
  <rect x="628" y="160" width="144" height="64" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="636" y="168" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="652" y="177" fill="#2d3142" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">BUN</text>
  <text x="700" y="196" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">MDX Bundle</text>
  <text x="700" y="212" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">src/content/*.mdx</text>
  <rect x="628" y="320" width="144" height="64" rx="6" fill="#f5f5f5"/>
  <rect x="628" y="320" width="144" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="636" y="328" width="28" height="12" rx="2" fill="transparent" stroke="rgba(79,93,117,0.50)" strokeWidth="0.8"/>
  <text x="650" y="337" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">CMS</text>
  <text x="700" y="356" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Content CMS</text>
  <text x="700" y="372" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">assets · og images</text>
  <line x1="40" y1="404" x2="960" y2="404" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="420" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="436" width="14" height="10" rx="2" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="60" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Focal / origin</text>
  <rect x="180" y="436" width="14" height="10" rx="2" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="200" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Backend / bundle</text>
  <rect x="340" y="436" width="14" height="10" rx="2" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="360" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Store</text>
  <rect x="436" y="436" width="14" height="10" rx="2" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <text x="456" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Cloud</text>
  <rect x="528" y="436" width="14" height="10" rx="2" fill="rgba(79,93,117,0.10)" stroke="#7a8399" strokeWidth="1"/>
  <text x="548" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">External</text>
  <line x1="636" y1="442" x2="664" y2="442" stroke="#2e5aa8" strokeWidth="1.2" markerEnd="url(#arrow-link)"/>
  <text x="672" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">HTTP request</text>
  <line x1="784" y1="442" x2="812" y2="442" stroke="#eb6c36" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/>
  <text x="820" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Primary flow</text>
  <line x1="900" y1="442" x2="928" y2="442" stroke="#4f5d75" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arrow)"/>
  <text x="936" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Return / async</text>
      </svg>
    </div>
  );
}
