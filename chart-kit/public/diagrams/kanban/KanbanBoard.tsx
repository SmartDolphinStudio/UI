import { useEffect } from "react";

/**
 * Kanban Board — Work in progress across columns, with WIP limits.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface KanbanBoardProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

export default function KanbanBoard({ className }: KanbanBoardProps) {
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
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="kanban">
      <svg viewBox="0 0 1120 440" role="img" aria-labelledby="kanban-title kanban-desc">

  <title id="kanban-title">Platform team board · Kanban</title>
  <desc id="kanban-desc">Kanban board showing a platform team's work-in-progress across backlog, in-progress, review, and done columns, with the in-progress column over its WIP limit and one blocked card awaiting a vendor maintenance window.</desc>
  <defs>
   <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>
  <rect x="32" y="40" width="240" height="324" rx="8" fill="rgba(45,49,66,0.02)"/>
  <rect x="304" y="40" width="240" height="324" rx="8" fill="rgba(45,49,66,0.02)"/>
  <rect x="576" y="40" width="240" height="324" rx="8" fill="rgba(45,49,66,0.02)"/>
  <rect x="848" y="40" width="240" height="324" rx="8" fill="rgba(45,49,66,0.02)"/>
  <text x="48" y="60" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Backlog</text>
  <text x="320" y="60" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">In progress</text>
  <text x="592" y="60" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Review</text>
  <text x="864" y="60" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Done</text>
  <rect x="216" y="48" width="40" height="16" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="236" y="59" fill="rgba(45,49,66,0.8)" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">3</text>
  <rect x="488" y="48" width="40" height="16" rx="2" fill="transparent" stroke="#eb6c36" strokeWidth="0.8"/>
  <text x="508" y="59" fill="#eb6c36" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">4/3</text>
  <rect x="760" y="48" width="40" height="16" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="780" y="59" fill="rgba(45,49,66,0.8)" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">2/3</text>
  <rect x="1032" y="48" width="40" height="16" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" strokeWidth="0.8"/>
  <text x="1052" y="59" fill="rgba(45,49,66,0.8)" fontSize="8" fontFamily="'Geist Mono', monospace" textAnchor="middle">2</text>
  <line x1="32" y1="76" x2="272" y2="76" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <line x1="304" y1="76" x2="544" y2="76" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <line x1="576" y1="76" x2="816" y2="76" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <line x1="848" y1="76" x2="1088" y2="76" stroke="rgba(45,49,66,0.20)" strokeWidth="1"/>
  <rect x="48" y="88" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="60" y="110" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">API rate limiting</text>
  <text x="60" y="126" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-201 · priya</text>
  <rect x="48" y="156" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="60" y="178" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Terraform module cleanup</text>
  <text x="60" y="194" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-205 · leo</text>
  <rect x="48" y="224" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="60" y="246" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Onboarding docs refresh</text>
  <text x="60" y="262" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-209 · maya</text>
  <rect x="320" y="88" width="208" height="56" rx="6" fill="rgba(235,108,54,0.05)" stroke="#eb6c36" strokeWidth="1" strokeDasharray="4,4"/>
  <rect x="320" y="88" width="4" height="56" fill="#eb6c36"/>
  <text x="336" y="110" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Postgres 16 upgrade</text>
  <text x="336" y="126" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-118 · sam</text>
  <rect x="320" y="156" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="332" y="178" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">K8s node pool migration</text>
  <text x="332" y="194" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-142 · priya</text>
  <rect x="320" y="224" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="332" y="246" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Auth token rotation</text>
  <text x="332" y="262" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-150 · leo</text>
  <rect x="320" y="292" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="332" y="314" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Observability dashboards</text>
  <text x="332" y="330" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-161 · dara</text>
  <rect x="592" y="88" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="604" y="110" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Feature flag cleanup</text>
  <text x="604" y="126" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-176 · nadia</text>
  <rect x="592" y="156" width="208" height="56" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" strokeWidth="1" strokeDasharray="4,3"/>
  <text x="604" y="178" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Vendor SSO integration</text>
  <text x="604" y="194" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-183 · sam</text>
  <rect x="864" y="88" width="208" height="56" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="876" y="110" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">Log retention policy</text>
  <text x="876" y="126" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-090 · leo</text>
  <rect x="864" y="156" width="208" height="56" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="876" y="178" fill="#2d3142" fontSize="12" fontWeight="600" fontFamily="'Geist', sans-serif">CI cache warmup</text>
  <text x="876" y="194" fill="#4f5d75" fontSize="9" fontFamily="'Geist Mono', monospace">AVA-097 · maya</text>
  <line x1="32" y1="388" x2="1088" y2="388" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="32" y="404" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="32" y="416" width="16" height="8" fill="#ffffff" stroke="#2d3142" strokeWidth="1"/>
  <text x="56" y="424" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Default</text>
  <rect x="232" y="416" width="16" height="8" fill="rgba(235,108,54,0.05)" stroke="#eb6c36" strokeWidth="1" strokeDasharray="4,4"/>
  <text x="256" y="424" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Blocked</text>
  <rect x="432" y="416" width="16" height="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" strokeWidth="1" strokeDasharray="4,3"/>
  <text x="456" y="424" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Waiting / external</text>
  <rect x="632" y="416" width="16" height="8" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" strokeWidth="1"/>
  <text x="656" y="424" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Done</text>
  <rect x="832" y="416" width="16" height="8" rx="2" fill="transparent" stroke="#eb6c36" strokeWidth="0.8"/>
  <text x="856" y="424" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Over WIP limit</text>
      </svg>
    </div>
  );
}
