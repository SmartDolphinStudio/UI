import { useEffect } from "react";

/**
 * State Machine — States, transitions, rejection and revision.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface StateMachineProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function StateMachine({ className }: StateMachineProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="state">
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="state-title state-desc">

  <title id="state-title">Article lifecycle</title>
  <desc id="state-desc">State machine showing an article moving from Draft through In Review and Published to Archived, including rejection and revision.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
   <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
   <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <line x1="68" y1="200" x2="120" y2="200" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="280" y1="200" x2="340" y2="200" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="500" y1="200" x2="560" y2="200" stroke="#eb6c36" strokeWidth="1.4" markerEnd="url(#arrow-accent)"/>
  <line x1="640" y1="240" x2="640" y2="300" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <line x1="640" y1="400" x2="640" y2="432" stroke="#4f5d75" strokeWidth="1.2" markerEnd="url(#arrow)"/>
  <path d="M 420 160 C 420 96, 200 96, 200 160" fill="none" stroke="#4f5d75" strokeWidth="1.2" strokeDasharray="5,4" markerEnd="url(#arrow)"/>
  <rect x="172" y="184" width="48" height="12" rx="2" fill="#f5f5f5"/>
  <text x="196" y="194" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">CREATE</text>
  <rect x="288" y="184" width="48" height="12" rx="2" fill="#f5f5f5"/>
  <text x="312" y="194" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">SUBMIT</text>
  <rect x="500" y="184" width="60" height="12" rx="2" fill="#f5f5f5"/>
  <text x="530" y="194" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">APPROVE</text>
  <rect x="612" y="264" width="56" height="12" rx="2" fill="#f5f5f5"/>
  <text x="640" y="274" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">EXPIRE</text>
  <rect x="620" y="416" width="40" height="12" rx="2" fill="#f5f5f5"/>
  <text x="640" y="426" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">PURGE</text>
  <rect x="276" y="92" width="80" height="12" rx="2" fill="#f5f5f5"/>
  <text x="316" y="102" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">REJECT · REVISE</text>
  <circle cx="60" cy="200" r="6" fill="#2d3142"/>
  <rect x="120" y="160" width="160" height="80" rx="8" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="128" y="168" width="40" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="148" y="177" fill="#2d3142" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">STATE</text>
  <text x="200" y="208" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Draft</text>
  <text x="200" y="224" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">unpublished</text>
  <rect x="340" y="160" width="160" height="80" rx="8" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <rect x="348" y="168" width="40" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="368" y="177" fill="#2d3142" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">STATE</text>
  <text x="420" y="208" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">In Review</text>
  <text x="420" y="224" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">awaiting approval</text>
  <rect x="560" y="160" width="160" height="80" rx="8" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" strokeWidth="1"/>
  <rect x="568" y="168" width="40" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" strokeWidth="0.8"/>
  <text x="588" y="177" fill="#eb6c36" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">STATE</text>
  <text x="640" y="208" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Published</text>
  <text x="640" y="224" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">live on site</text>
  <rect x="560" y="300" width="160" height="100" rx="8" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <rect x="568" y="308" width="40" height="12" rx="2" fill="transparent" stroke="rgba(79,93,117,0.50)" strokeWidth="0.8"/>
  <text x="588" y="317" fill="#4f5d75" fontSize="7" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.08em">STATE</text>
  <text x="640" y="348" fill="#2d3142" fontSize="14" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Archived</text>
  <text x="640" y="364" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">noindex · hidden</text>
  <text x="640" y="382" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">redirect retained</text>
  <circle cx="640" cy="440" r="8" fill="none" stroke="#2d3142" strokeWidth="1"/>
  <circle cx="640" cy="440" r="5" fill="#2d3142"/>
      </svg>
    </div>
  );
}
