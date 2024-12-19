import { useEffect } from "react";

/**
 * User Journey Map — Stages, actions, touchpoints, and sentiment.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface UserJourneyMapProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function UserJourneyMap({ className }: UserJourneyMapProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="journey">
      <svg viewBox="0 0 1200 520" role="img" aria-labelledby="journey-title journey-desc">

  <title id="journey-title">Trial to paid: the first week</title>
  <desc id="journey-desc">User journey map of a new trial user across five stages, showing actions, touchpoints, and a sentiment curve that dips at the usage-limit stage before recovering at upgrade.</desc>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <text x="164" y="40" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">STAGE 1</text>
  <text x="164" y="60" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Sign up</text>
  <text x="388" y="40" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">STAGE 2</text>
  <text x="388" y="60" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">First run</text>
  <text x="612" y="40" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">STAGE 3</text>
  <text x="612" y="60" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Invite team</text>
  <text x="836" y="40" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">STAGE 4</text>
  <text x="836" y="60" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Hit the limit</text>
  <text x="1060" y="40" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.14em">STAGE 5</text>
  <text x="1060" y="60" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">Upgrade</text>
  <line x1="64" y1="100" x2="1160" y2="100" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <line x1="64" y1="180" x2="1160" y2="180" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <line x1="64" y1="260" x2="1160" y2="260" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="56" y="104" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.10em">HIGH</text>
  <text x="56" y="184" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.10em">NEUTRAL</text>
  <text x="56" y="264" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.10em">LOW</text>
  <polyline points="164,100 388,180 612,100" fill="none" stroke="#4f5d75" strokeWidth="1.5" strokeLinejoin="round"/>
  <polyline points="612,100 836,260" fill="none" stroke="#eb6c36" strokeWidth="1.5" strokeLinejoin="round"/>
  <polyline points="836,260 1060,180" fill="none" stroke="#4f5d75" strokeWidth="1.5" strokeLinejoin="round"/>
  <circle cx="164" cy="100" r="5" fill="#4f5d75"/>
  <circle cx="388" cy="180" r="5" fill="#4f5d75"/>
  <circle cx="612" cy="100" r="5" fill="#4f5d75"/>
  <circle cx="836" cy="260" r="5" fill="#eb6c36"/>
  <circle cx="1060" cy="180" r="5" fill="#4f5d75"/>
  <line x1="64" y1="280" x2="1160" y2="280" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <line x1="64" y1="376" x2="1160" y2="376" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="56" y="328" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.14em">ACTIONS</text>
  <text x="72" y="408" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="end" letterSpacing="0.14em">TOUCHPOINTS</text>
  <text x="164" y="300" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif" textAnchor="middle">Create workspace</text>
  <text x="388" y="300" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif" textAnchor="middle">Import first dataset</text>
  <text x="612" y="300" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif" textAnchor="middle">Add 3 teammates</text>
  <text x="836" y="300" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif" textAnchor="middle">Export blocked mid-report</text>
  <text x="1060" y="300" fill="#2d3142" fontSize="12" fontFamily="'Geist', sans-serif" textAnchor="middle">Pick annual plan</text>
  <rect x="744" y="312" width="184" height="16" rx="2" fill="rgba(235,108,54,0.08)" stroke="rgba(235,108,54,0.50)" strokeWidth="0.8" strokeDasharray="3,3"/>
  <text x="836" y="324" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.04em">NO WARNING AT 80%</text>
  <rect x="744" y="332" width="184" height="16" rx="2" fill="rgba(235,108,54,0.08)" stroke="rgba(235,108,54,0.50)" strokeWidth="0.8" strokeDasharray="3,3"/>
  <text x="836" y="344" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle" letterSpacing="0.02em">PRICING PAGE IS 3 CLICKS AWAY</text>
  <text x="164" y="412" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">signup form</text>
  <text x="388" y="412" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">onboarding wizard</text>
  <text x="612" y="412" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">email invite</text>
  <text x="836" y="412" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">in-app modal</text>
  <text x="1060" y="412" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace" textAnchor="middle">billing page</text>
  <line x1="40" y1="464" x2="1160" y2="464" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="480" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <line x1="40" y1="496" x2="56" y2="496" stroke="#4f5d75" strokeWidth="1.5"/>
  <circle cx="48" cy="496" r="3" fill="#4f5d75"/>
  <text x="64" y="500" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Sentiment curve</text>
  <line x1="220" y1="496" x2="236" y2="496" stroke="#eb6c36" strokeWidth="1.5"/>
  <circle cx="228" cy="496" r="3" fill="#eb6c36"/>
  <text x="244" y="500" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Trough stage</text>
  <rect x="384" y="492" width="16" height="8" rx="2" fill="rgba(235,108,54,0.08)" stroke="rgba(235,108,54,0.50)" strokeWidth="0.8" strokeDasharray="3,3"/>
  <text x="408" y="500" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Pain marker</text>
      </svg>
    </div>
  );
}
