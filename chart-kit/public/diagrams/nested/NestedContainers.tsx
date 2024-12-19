import { useEffect } from "react";

/**
 * Nested Containers — Hierarchy as nested boxes.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface NestedContainersProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function NestedContainers({ className }: NestedContainersProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="nested">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="nested-title nested-desc">

  <title id="nested-title">The CLAUDE.md Hierarchy</title>
  <desc id="nested-desc">Nested diagram showing how project CLAUDE.md instructions inherit broader scopes from the global, vault, business, and marketing levels.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <rect x="40" y="60" width="920" height="380" rx="8" fill="rgba(45,49,66,0.015)" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <rect x="72" y="96" width="856" height="308" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.35)" strokeWidth="1"/>
  <rect x="104" y="132" width="792" height="236" rx="8" fill="rgba(45,49,66,0.025)" stroke="rgba(45,49,66,0.45)" strokeWidth="1"/>
  <rect x="136" y="168" width="728" height="164" rx="8" fill="rgba(45,49,66,0.03)" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="168" y="204" width="664" height="92" rx="8" fill="rgba(235,108,54,0.06)" stroke="#eb6c36" strokeWidth="1"/>
  <rect x="56" y="52" width="188" height="16" fill="#f5f5f5"/>
  <text x="64" y="64" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">~/.claude/ (global)</text>
  <rect x="88" y="88" width="148" height="16" fill="#f5f5f5"/>
  <text x="96" y="100" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">~/vault/ (notes)</text>
  <rect x="120" y="124" width="96" height="16" fill="#f5f5f5"/>
  <text x="128" y="136" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">/business</text>
  <rect x="152" y="160" width="108" height="16" fill="#f5f5f5"/>
  <text x="160" y="172" fill="#2d3142" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">/marketing</text>
  <rect x="184" y="196" width="88" height="16" fill="#f5f5f5"/>
  <text x="192" y="208" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" fontWeight="600">/project</text>
  <g transform="translate(908, 408)">
   <path d="M0 0 L16 0 L20 4 L20 20 L0 20 Z" fill="#f5f5f5" stroke="rgba(45,49,66,0.35)" strokeWidth="1"/>
   <path d="M16 0 L16 4 L20 4" fill="none" stroke="rgba(45,49,66,0.35)" strokeWidth="1"/>
  </g>
  <g transform="translate(876, 372)">
   <path d="M0 0 L16 0 L20 4 L20 20 L0 20 Z" fill="#f5f5f5" stroke="rgba(45,49,66,0.40)" strokeWidth="1"/>
   <path d="M16 0 L16 4 L20 4" fill="none" stroke="rgba(45,49,66,0.40)" strokeWidth="1"/>
  </g>
  <g transform="translate(844, 336)">
   <path d="M0 0 L16 0 L20 4 L20 20 L0 20 Z" fill="#f5f5f5" stroke="rgba(45,49,66,0.50)" strokeWidth="1"/>
   <path d="M16 0 L16 4 L20 4" fill="none" stroke="rgba(45,49,66,0.50)" strokeWidth="1"/>
  </g>
  <g transform="translate(812, 300)">
   <path d="M0 0 L16 0 L20 4 L20 20 L0 20 Z" fill="#f5f5f5" stroke="#4f5d75" strokeWidth="1"/>
   <path d="M16 0 L16 4 L20 4" fill="none" stroke="#4f5d75" strokeWidth="1"/>
  </g>
  <text x="500" y="248" fill="#2d3142" fontSize="16" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">CLAUDE.md</text>
  <text x="500" y="272" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">inherits every level above</text>
  <text x="904" y="36" fill="#2d3142" fontSize="14" fontStyle="italic" fontFamily="'Instrument Serif', serif" textAnchor="end">no imports, no configuration</text>
  <path d="M 820 44 Q 700 84 520 216" fill="none" stroke="rgba(45,49,66,0.40)" strokeWidth="1" strokeDasharray="4,3"/>
  <circle cx="520" cy="216" r="2" fill="#2d3142"/>
  <text x="40" y="484" fill="#4f5d75" fontSize="14" fontStyle="italic" fontFamily="'Instrument Serif', serif">structure IS the index</text>
      </svg>
    </div>
  );
}
