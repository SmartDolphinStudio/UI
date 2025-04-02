import { useEffect } from "react";

/**
 * Entity-Relationship Diagram — Entities and their relationships.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface ErDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function ErDiagram({ className }: ErDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="er">
      <svg viewBox="0 0 1000 480" role="img" aria-labelledby="er-title er-desc">

  <title id="er-title">Content platform · data model</title>
  <desc id="er-desc">Entity-relationship diagram showing authors writing articles and articles connecting to tags and categories.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <line x1="260" y1="240" x2="400" y2="240" stroke="#4f5d75" strokeWidth="1" />
  <path d="M 640,320 H 702 Q 710,320 710,328 H 780" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  <line x1="880" y1="248" x2="880" y2="280" stroke="#4f5d75" strokeWidth="1" />
  <rect x="266" y="232" width="12" height="12" rx="2" fill="#f5f5f5"/>
  <text x="272" y="242" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">1</text>
  <rect x="378" y="232" width="16" height="12" rx="2" fill="#f5f5f5"/>
  <text x="386" y="242" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">N</text>
  <rect x="646" y="316" width="12" height="12" rx="2" fill="#f5f5f5"/>
  <text x="652" y="326" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">1</text>
  <rect x="760" y="324" width="16" height="12" rx="2" fill="#f5f5f5"/>
  <text x="768" y="334" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">N</text>
  <rect x="872" y="252" width="16" height="12" rx="2" fill="#f5f5f5"/>
  <text x="880" y="262" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">1</text>
  <rect x="872" y="268" width="16" height="12" rx="2" fill="#f5f5f5"/>
  <text x="880" y="278" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="middle" fontWeight="600">N</text>
  <rect x="304" y="220" width="56" height="14" rx="2" fill="#f5f5f5"/>
  <text x="332" y="230" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.12em">WRITES</text>
  <rect x="688" y="300" width="56" height="14" rx="2" fill="#f5f5f5"/>
  <text x="716" y="310" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.12em">TAGGED</text>
  <rect x="60" y="160" width="200" height="160" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="60" y="160" width="200" height="40" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
  <rect x="60" y="192" width="200" height="8" fill="rgba(45,49,66,0.04)"/>
  <line x1="60" y1="200" x2="260" y2="200" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="76" y="176" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">ENTITY</text>
  <text x="76" y="192" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif">Author</text>
  <text x="76" y="220" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace"># id</text>
  <text x="220" y="220" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="76" y="240" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">handle</text>
  <text x="220" y="240" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <text x="76" y="260" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">name</text>
  <text x="220" y="260" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <text x="76" y="280" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">bio</text>
  <text x="220" y="280" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <text x="76" y="300" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">site_url</text>
  <text x="220" y="300" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <rect x="400" y="120" width="240" height="240" rx="6" fill="rgba(235,108,54,0.04)" stroke="#eb6c36" strokeWidth="1"/>
  <rect x="400" y="120" width="240" height="40" rx="6" fill="rgba(235,108,54,0.10)" stroke="none"/>
  <rect x="400" y="152" width="240" height="8" fill="rgba(235,108,54,0.10)"/>
  <line x1="400" y1="160" x2="640" y2="160" stroke="rgba(235,108,54,0.40)" strokeWidth="1"/>
  <text x="416" y="136" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">ENTITY · AGGREGATE ROOT</text>
  <text x="416" y="152" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif">Article</text>
  <text x="416" y="180" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace"># id</text>
  <text x="600" y="180" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="416" y="200" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">title</text>
  <text x="600" y="200" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <text x="416" y="220" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">slug</text>
  <text x="600" y="220" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text · unique</text>
  <text x="416" y="240" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">body_mdx</text>
  <text x="600" y="240" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <text x="416" y="260" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">published_at</text>
  <text x="600" y="260" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">timestamp</text>
  <text x="416" y="280" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">→ author_id</text>
  <text x="600" y="280" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="416" y="300" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">status</text>
  <text x="600" y="300" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">enum</text>
  <text x="416" y="320" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">og_image</text>
  <text x="600" y="320" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text · url</text>
  <rect x="780" y="120" width="200" height="128" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="780" y="120" width="200" height="40" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
  <rect x="780" y="152" width="200" height="8" fill="rgba(45,49,66,0.04)"/>
  <line x1="780" y1="160" x2="980" y2="160" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="796" y="136" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">ENTITY</text>
  <text x="796" y="152" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif">Tag</text>
  <text x="796" y="180" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace"># id</text>
  <text x="940" y="180" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="796" y="200" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">slug</text>
  <text x="940" y="200" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text · unique</text>
  <text x="796" y="220" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">name</text>
  <text x="940" y="220" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <text x="796" y="240" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">description</text>
  <text x="940" y="240" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">text</text>
  <rect x="780" y="280" width="200" height="96" rx="6" fill="rgba(45,49,66,0.04)" stroke="#4f5d75" strokeWidth="1" strokeDasharray="4,3"/>
  <rect x="780" y="280" width="200" height="40" rx="6" fill="rgba(45,49,66,0.06)" stroke="none"/>
  <rect x="780" y="312" width="200" height="8" fill="rgba(45,49,66,0.06)"/>
  <line x1="780" y1="320" x2="980" y2="320" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="796" y="296" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">JOIN</text>
  <text x="796" y="312" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif">ArticleTag</text>
  <text x="796" y="340" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">→ article_id</text>
  <text x="940" y="340" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <text x="796" y="360" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace">→ tag_id</text>
  <text x="940" y="360" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end">uuid</text>
  <line x1="40" y1="404" x2="960" y2="404" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="420" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="436" width="14" height="10" rx="2" fill="rgba(235,108,54,0.04)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="60" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Aggregate root</text>
  <rect x="180" y="436" width="14" height="10" rx="2" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="200" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Entity</text>
  <rect x="268" y="436" width="14" height="10" rx="2" fill="rgba(45,49,66,0.04)" stroke="#4f5d75" strokeWidth="1" strokeDasharray="3,2"/>
  <text x="288" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Join table</text>
  <text x="372" y="444" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace" fontWeight="600">#</text>
  <text x="388" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Primary key</text>
  <text x="476" y="444" fill="#2d3142" fontSize="10" fontFamily="'Geist Mono', monospace" fontWeight="600">→</text>
  <text x="492" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Foreign key</text>
  <text x="584" y="444" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" fontWeight="600">1 / N</text>
  <text x="616" y="444" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Cardinality</text>
      </svg>
    </div>
  );
}
