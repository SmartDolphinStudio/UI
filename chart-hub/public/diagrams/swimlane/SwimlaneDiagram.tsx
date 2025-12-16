import { useEffect } from "react";

/**
 * Swimlane Diagram — A workflow across roles.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface SwimlaneDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function SwimlaneDiagram({ className }: SwimlaneDiagramProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="swimlane">
      <svg viewBox="0 0 1000 480" role="img" aria-labelledby="swimlane-title swimlane-desc">

  <title id="swimlane-title">Publishing an article</title>
  <desc id="swimlane-desc">Swimlane diagram showing an article moving from MDX draft through review, editing, approval, build, and Cloudflare Pages deployment.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <line x1="40" y1="80" x2="960" y2="80" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <line x1="40" y1="160" x2="960" y2="160" stroke="rgba(45,49,66,0.10)" strokeWidth="1"/>
  <line x1="40" y1="240" x2="960" y2="240" stroke="rgba(45,49,66,0.10)" strokeWidth="1"/>
  <line x1="40" y1="320" x2="960" y2="320" stroke="rgba(45,49,66,0.10)" strokeWidth="1"/>
  <line x1="40" y1="400" x2="960" y2="400" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <line x1="160" y1="80" x2="160" y2="400" stroke="rgba(45,49,66,0.22)" strokeWidth="1"/>
  <text x="60" y="124" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">AUTHOR</text>
  <text x="60" y="204" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">REVIEWER</text>
  <text x="60" y="284" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">EDITOR</text>
  <text x="60" y="364" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">CI / CD</text>
  <line x1="300" y1="120" x2="340" y2="120" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="460" y1="144" x2="500" y2="176" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="570" y1="224" x2="570" y2="256" stroke="#4f5d75" strokeWidth="1.2" strokeDasharray="5,4" markerEnd="url(#arrow)"/>
  <line x1="640" y1="280" x2="680" y2="280" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="750" y1="304" x2="720" y2="336" stroke="#eb6c36" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/>
  <line x1="760" y1="360" x2="800" y2="360" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <rect x="478" y="140" width="60" height="12" rx="2" fill="#f5f5f5"/>
  <text x="508" y="150" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.12em">HANDOFF</text>
  <rect x="548" y="228" width="52" height="12" rx="2" fill="#ececec"/>
  <text x="574" y="238" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.12em">REVISE</text>
  <rect x="712" y="308" width="80" height="12" rx="2" fill="#f5f5f5"/>
  <text x="752" y="318" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.12em">DEPLOY TRIGGER</text>
  <rect x="180" y="96" width="120" height="48" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="240" y="118" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Draft MDX</text>
  <text x="240" y="132" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">src/content/…</text>
  <rect x="340" y="96" width="120" height="48" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="400" y="118" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Open PR</text>
  <text x="400" y="132" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">gh pr create</text>
  <rect x="500" y="176" width="140" height="48" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="570" y="198" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Review content</text>
  <text x="570" y="212" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">fact-check · voice</text>
  <rect x="500" y="256" width="140" height="48" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="570" y="278" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Polish copy</text>
  <text x="570" y="292" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">style · line edits</text>
  <rect x="680" y="256" width="140" height="48" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="750" y="278" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Approve merge</text>
  <text x="750" y="292" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">squash · main</text>
  <rect x="680" y="336" width="80" height="48" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="720" y="358" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Build</text>
  <text x="720" y="372" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">astro build</text>
  <rect x="800" y="336" width="120" height="48" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="860" y="358" fill="#2d3142" fontSize="11" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Deploy</text>
  <text x="860" y="372" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">cloudflare pages</text>
  <line x1="40" y1="428" x2="960" y2="428" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="444" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="460" width="14" height="10" rx="2" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="60" y="468" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Step</text>
  <rect x="132" y="460" width="14" height="10" rx="2" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="152" y="468" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Focal outcome</text>
  <line x1="268" y1="466" x2="296" y2="466" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <text x="304" y="468" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Within-lane step</text>
  <line x1="444" y1="466" x2="472" y2="466" stroke="#4f5d75" strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#arrow)"/>
  <text x="480" y="468" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Revision loop</text>
  <line x1="608" y1="466" x2="636" y2="466" stroke="#eb6c36" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/>
  <text x="644" y="468" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Critical handoff</text>
      </svg>
    </div>
  );
}
