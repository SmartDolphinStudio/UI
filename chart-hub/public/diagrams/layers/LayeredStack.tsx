import { useEffect } from "react";

/**
 * Layered Stack — Stack layers with one focal layer.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface LayeredStackProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function LayeredStack({ className }: LayeredStackProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="layers">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="layers-title layers-desc">

  <title id="layers-title">AI app stack · Where the work actually happens</title>
  <desc id="layers-desc">Layer stack showing model weights, SDK, prompts, agent harness, and UI surface, with the agent harness highlighted as the focal layer.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <text x="60" y="68" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">ABSTRACTION</text>
  <line x1="80" y1="80" x2="80" y2="400" stroke="rgba(45,49,66,0.30)" strokeWidth="1"/>
  <polygon points="76,80 84,80 80,72" fill="#4f5d75"/>
  <text x="60" y="416" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">SILICON</text>
  <line x1="120" y1="80" x2="960" y2="80" stroke="rgba(45,49,66,0.12)" strokeWidth="1"/>
  <line x1="120" y1="400" x2="960" y2="400" stroke="rgba(45,49,66,0.12)" strokeWidth="1"/>
  <rect x="120" y="80" width="840" height="64" fill="#ffffff"/>
  <line x1="120" y1="144" x2="960" y2="144" stroke="rgba(45,49,66,0.12)" strokeWidth="1"/>
  <text x="140" y="116" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">L5</text>
  <text x="260" y="118" fill="#2d3142" fontSize="16" fontWeight="600" fontFamily="'Geist', sans-serif">UI surface</text>
  <text x="940" y="118" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.08em">chat, editor, canvas</text>
  <rect x="120" y="144" width="840" height="64" fill="rgba(235,108,54,0.08)"/>
  <rect x="120" y="144" width="840" height="64" fill="none" stroke="#eb6c36" strokeWidth="1"/>
  <text x="140" y="180" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" fontWeight="600">L4</text>
  <text x="260" y="182" fill="#2d3142" fontSize="16" fontWeight="600" fontFamily="'Geist', sans-serif">Agent harness</text>
  <text x="940" y="182" fill="#eb6c36" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.08em">tools, memory, loop</text>
  <rect x="120" y="208" width="840" height="64" fill="#f5f5f5"/>
  <line x1="120" y1="272" x2="960" y2="272" stroke="rgba(45,49,66,0.12)" strokeWidth="1"/>
  <text x="140" y="244" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">L3</text>
  <text x="260" y="246" fill="#2d3142" fontSize="16" fontWeight="600" fontFamily="'Geist', sans-serif">Prompt layer</text>
  <text x="940" y="246" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.08em">system, few-shot, caching</text>
  <rect x="120" y="272" width="840" height="64" fill="#ececec"/>
  <line x1="120" y1="336" x2="960" y2="336" stroke="rgba(45,49,66,0.12)" strokeWidth="1"/>
  <text x="140" y="308" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">L2</text>
  <text x="260" y="310" fill="#2d3142" fontSize="16" fontWeight="600" fontFamily="'Geist', sans-serif">SDK / client</text>
  <text x="940" y="310" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.08em">auth, retries, streaming</text>
  <rect x="120" y="336" width="840" height="64" fill="#ececec"/>
  <text x="140" y="372" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em">L1</text>
  <text x="260" y="374" fill="#2d3142" fontSize="16" fontWeight="600" fontFamily="'Geist', sans-serif">Model weights</text>
  <text x="940" y="374" fill="#4f5d75" fontSize="10" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.08em">opus, sonnet, haiku</text>
  <text x="120" y="456" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">FOCAL LAYER</text>
  <text x="240" y="456" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif" fontStyle="italic">The harness is where most product differentiation actually lives — tools, memory, and the loop that stitches model calls into useful work.</text>
      </svg>
    </div>
  );
}
