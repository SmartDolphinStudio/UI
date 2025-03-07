import { useEffect } from "react";

/**
 * Donut Chart — Part-to-whole composition, share of a total by category.
 * Self-contained editorial diagram (inline SVG) for React + Tailwind + TypeScript.
 */
interface DonutDiagramProps {
  /** Extra class names forwarded to the wrapper <div>. */
  className?: string;
}

/** One slice of the donut. Values are percentages; the sample set sums to 100. */
interface Segment {
  label: string;
  value: number;
  /** The focal slice is called out in the accent color and centered in the hole. */
  focal?: boolean;
}

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";

/** Sample data: share of monthly sessions by acquisition channel. */
const SEGMENTS: Segment[] = [
  { label: "Organic search", value: 38, focal: true },
  { label: "Paid ads", value: 24 },
  { label: "Social", value: 18 },
  { label: "Referral", value: 12 },
  { label: "Email", value: 8 },
];

/** Neutral fills for non-focal slices, darkest to lightest. */
const NEUTRAL_FILLS = [
  "rgba(79,93,117,0.30)",
  "rgba(79,93,117,0.20)",
  "rgba(79,93,117,0.26)",
  "rgba(79,93,117,0.14)",
];

const CX = 330;
const CY = 285;
const R_OUTER = 148;
const R_INNER = 92;
/** Visual gap (degrees) between adjacent slices. */
const PAD_ANGLE = 1.6;

/** Polar -> cartesian coordinates; 0deg starts at 12 o'clock and sweeps clockwise. */
function polar(cx: number, cy: number, r: number, angleDeg: number): [number, number] {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

/** Build an SVG path for one annular (donut) wedge between two angles. */
function donutArc(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startAngle: number,
  endAngle: number,
): string {
  const [x1, y1] = polar(cx, cy, rOuter, endAngle);
  const [x2, y2] = polar(cx, cy, rOuter, startAngle);
  const [x3, y3] = polar(cx, cy, rInner, startAngle);
  const [x4, y4] = polar(cx, cy, rInner, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${x1.toFixed(2)} ${y1.toFixed(2)}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 0 ${x2.toFixed(2)} ${y2.toFixed(2)}`,
    `L ${x3.toFixed(2)} ${y3.toFixed(2)}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 1 ${x4.toFixed(2)} ${y4.toFixed(2)}`,
    "Z",
  ].join(" ");
}

export default function DonutDiagram({ className }: DonutDiagramProps) {
  // Load the editorial fonts once, on first mount. The effect is idempotent,
  // so rendering many diagrams never duplicates the stylesheet link.
  useEffect(() => {
    if (!document.getElementById("dd-fonts")) {
      const link = document.createElement("link");
      link.id = "dd-fonts";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }
  }, []);

  const total = SEGMENTS.reduce((sum, s) => sum + s.value, 0);
  const focal = SEGMENTS.find((s) => s.focal) ?? SEGMENTS[0];

  // Walk the segments once, accumulating start angles and rendering data.
  let cursor = 0;
  const slices = SEGMENTS.map((segment, i) => {
    const sweep = (segment.value / total) * 360;
    const startAngle = cursor + PAD_ANGLE / 2;
    const endAngle = cursor + sweep - PAD_ANGLE / 2;
    cursor += sweep;
    return {
      ...segment,
      index: i,
      path: donutArc(CX, CY, R_OUTER, R_INNER, startAngle, endAngle),
    };
  });

  return (
    <div className={className ?? "w-full max-w-4xl mx-auto"} data-diagram="donut">
      <svg viewBox="0 0 1000 500" role="img" aria-labelledby="donut-title donut-desc">

  <title id="donut-title">Where traffic comes from · channel mix</title>
  <desc id="donut-desc">Donut chart of monthly sessions by acquisition channel: organic search 38 percent, paid ads 24, social 18, referral 12, email 8, with organic search as the leading channel.</desc>
  <defs>
   <pattern id="donut-dots" width="22" height="22" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
   </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <rect width="100%" height="100%" fill="url(#donut-dots)" opacity="0.55"/>

  {/* Header */}
  <text x="40" y="42" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">DONUT · COMPOSITION</text>
  <text x="40" y="74" fill="#2d3142" fontSize="27" fontStyle="italic" fontFamily="'Instrument Serif', serif">Where traffic comes from</text>
  <text x="40" y="96" fill="#4f5d75" fontSize="10" fontFamily="'Geist', sans-serif">Share of monthly sessions by acquisition channel · sample data, sums to {total}%</text>

  {/* Donut slices */}
  {slices.map((slice) => (
    <path
      key={slice.label}
      d={slice.path}
      fill={slice.focal ? "rgba(235,108,54,0.12)" : NEUTRAL_FILLS[(slice.index - 1 + NEUTRAL_FILLS.length) % NEUTRAL_FILLS.length]}
      stroke={slice.focal ? "#eb6c36" : "#4f5d75"}
      strokeWidth={slice.focal ? 1.4 : 0.8}
    />
  ))}

  {/* Center hole: the focal slice readout */}
  <text x={CX} y={CY - 8} fill="#eb6c36" fontSize="40" fontStyle="italic" fontFamily="'Instrument Serif', serif" textAnchor="middle">{focal.value}%</text>
  <text x={CX} y={CY + 16} fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.14em" textAnchor="middle">LEADING CHANNEL</text>
  <text x={CX} y={CY + 32} fill="#2d3142" fontSize="10" fontWeight="600" fontFamily="'Geist', sans-serif" textAnchor="middle">{focal.label}</text>

  {/* Right-hand legend with values */}
  {slices.map((slice, i) => {
    const y = 196 + i * 44;
    return (
      <g key={`legend-${slice.label}`}>
        <rect x="610" y={y - 11} width="16" height="10" rx="2" fill={slice.focal ? "rgba(235,108,54,0.12)" : NEUTRAL_FILLS[(slice.index - 1 + NEUTRAL_FILLS.length) % NEUTRAL_FILLS.length]} stroke={slice.focal ? "#eb6c36" : "#4f5d75"} strokeWidth={slice.focal ? 1.2 : 0.8}/>
        <text x="636" y={y - 1} fill={slice.focal ? "#eb6c36" : "#2d3142"} fontSize="11.5" fontWeight="600" fontFamily="'Geist', sans-serif">{slice.label}</text>
        <text x="950" y={y - 1} fill={slice.focal ? "#eb6c36" : "#4f5d75"} fontSize="11" fontFamily="'Geist Mono', monospace" textAnchor="end" fontWeight={slice.focal ? 600 : 400}>{slice.value}%</text>
      </g>
    );
  })}

  {/* Footer legend */}
  <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" strokeWidth="0.8"/>
  <text x="40" y="478" fill="#4f5d75" fontSize="8" fontFamily="'Geist Mono', monospace" letterSpacing="0.18em">LEGEND</text>
  <rect x="40" y="488" width="16" height="10" rx="2" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" strokeWidth="1"/>
  <text x="64" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Leading channel · focal slice</text>
  <rect x="280" y="488" width="16" height="10" rx="2" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" strokeWidth="0.8"/>
  <text x="304" y="497" fill="#4f5d75" fontSize="8.5" fontFamily="'Geist', sans-serif">Other channels</text>
      </svg>
    </div>
  );
}
