import { useEffect } from "react";

/**
 * Loop / Cycle Diagram — A cyclic process with a central shared state.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface LoopDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

const CSS =
  ".dd-loop { --paper: #f5f5f5; --ink: #2d3142; --muted: #4f5d75; --soft: #7a8399; --accent: #eb6c36; --accent-tint: rgba(235,108,54,0.08); --link: #2e5aa8; --sans: 'Geist', system-ui, sans-serif; --serif: 'Instrument Serif', serif; --mono: 'Geist Mono', ui-monospace, monospace } .dd-loop .ring { fill: none; stroke: var(--muted); stroke-width: 1.2; } .dd-loop .spoke { fill: none; stroke: var(--soft); stroke-width: 1; stroke-dasharray: 5 4; } .dd-loop .station { fill: var(--paper); stroke: var(--ink); stroke-width: 1; } .dd-loop .station.focal { fill: var(--accent-tint); stroke: var(--accent); stroke-width: 1.2; } .dd-loop .hub { fill: var(--ink); } .dd-loop .node-name { fill: var(--ink); font: 600 12px var(--sans); text-anchor: middle; } .dd-loop .focal-name { fill: var(--accent); } .dd-loop .sublabel { fill: var(--soft); font: 400 8px var(--mono); text-anchor: middle; } .dd-loop .hub-name { fill: var(--paper); font: 600 16px var(--sans); text-anchor: middle; } .dd-loop .hub-sub { fill: var(--paper); opacity: 0.72; font: 400 8px var(--mono); text-anchor: middle; } .dd-loop .arrow-label { fill: var(--soft); font: 400 8px var(--mono); letter-spacing: 0.06em; text-anchor: middle; }";

export default function LoopDiagram({ className }: LoopDiagramProps) {
  // Load the editorial fonts (and scoped CSS when needed) once, on first mount.
  useEffect(() => {
    if (!document.getElementById("dd-fonts")) {
      const link = document.createElement("link");
      link.id = "dd-fonts";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }
    if (!document.getElementById("dd-css-loop")) {
      const style = document.createElement("style");
      style.id = "dd-css-loop";
      style.textContent = CSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="loop">
      <svg viewBox="0 0 1040 680" role="img" aria-labelledby="loop-title loop-desc">

  <title id="loop-title">The self-improving loop</title>
  <desc id="loop-desc">Six stations flow clockwise from Capture through Learn and back to Capture. Each station writes shared state into one central memory hub, with Decide highlighted as the human approval gate.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/></pattern>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
   <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
   <marker id="arrow-soft" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#7a8399"/></marker>
  </defs>
  <rect width="1040" height="680" fill="#f5f5f5"/>
  <rect width="1040" height="680" fill="url(#dots)" opacity="0.55"/>
  <path className="ring" d="M600 113.726 A240 240 0 0 1 704.969 187.073" markerEnd="url(#arrow)"/>
  <path className="ring" d="M743.285 252 A240 240 0 0 1 743.722 426.882" markerEnd="url(#arrow)"/>
  <path className="ring" d="M705.731 492 A240 240 0 0 1 601.130 565.871" markerEnd="url(#arrow)"/>
  <path className="ring" d="M440 566.274 A240 240 0 0 1 335.031 492.927" markerEnd="url(#arrow)"/>
  <path className="ring" d="M296.715 428 A240 240 0 0 1 296.278 253.118" markerEnd="url(#arrow)"/>
  <path className="ring" d="M334.269 188 A240 240 0 0 1 438.870 114.129" markerEnd="url(#arrow)"/>
  <path className="spoke" d="M520 132 V280" markerEnd="url(#arrow-soft)"/>
  <path className="spoke" d="M672 252 L616 284" markerEnd="url(#arrow-soft)"/>
  <path className="spoke" d="M672 428 L616 396" markerEnd="url(#arrow-soft)"/>
  <path className="spoke" d="M520 548 V400" markerEnd="url(#arrow-soft)"/>
  <path className="spoke" d="M368 428 L424 396" markerEnd="url(#arrow-soft)"/>
  <path className="spoke" d="M368 252 L424 284" markerEnd="url(#arrow-soft)"/>
  <rect x="532" y="200" width="48" height="16" rx="4" fill="#f5f5f5"/>
  <text x="556" y="212" className="arrow-label">SIGNALS</text>
  <rect x="460" y="464" width="52" height="16" rx="4" fill="#f5f5f5"/>
  <text x="486" y="476" className="arrow-label">OUTCOMES</text>
  <rect className="station" x="440" y="68" width="160" height="64" rx="6"/>
  <text x="520" y="96" className="node-name">Capture</text><text x="520" y="116" className="sublabel">signals in / intake</text>
  <rect className="station" x="648" y="188" width="160" height="64" rx="6"/>
  <text x="728" y="216" className="node-name">Research</text><text x="728" y="236" className="sublabel">evidence pulled</text>
  <rect className="station focal" x="648" y="428" width="160" height="64" rx="6"/>
  <text x="728" y="456" className="node-name focal-name">Decide</text><text x="728" y="476" className="sublabel">human approves</text>
  <rect className="station" x="440" y="548" width="160" height="64" rx="6"/>
  <text x="520" y="576" className="node-name">Act</text><text x="520" y="596" className="sublabel">work ships</text>
  <rect className="station" x="232" y="428" width="160" height="64" rx="6"/>
  <text x="312" y="456" className="node-name">Measure</text><text x="312" y="476" className="sublabel">outcomes logged</text>
  <rect className="station" x="232" y="188" width="160" height="64" rx="6"/>
  <text x="312" y="216" className="node-name">Learn</text><text x="312" y="236" className="sublabel">playbook updated</text>
  <rect className="hub" x="420" y="288" width="200" height="104" rx="8"/>
  <text x="520" y="336" className="hub-name">Shared memory</text>
  <text x="520" y="360" className="hub-sub">one record, every loop</text>
      </svg>
    </div>
  );
}
