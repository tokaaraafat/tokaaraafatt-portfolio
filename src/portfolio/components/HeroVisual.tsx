/** Decorative bar-and-trend chart. It carries no data claims, so it is hidden from assistive tech. */
const bars = [
  { x: 38, y: 200, h: 70 },
  { x: 88, y: 170, h: 100 },
  { x: 138, y: 185, h: 85 },
  { x: 188, y: 140, h: 130 },
  { x: 238, y: 120, h: 150 },
  { x: 288, y: 130, h: 140 },
  { x: 338, y: 85, h: 185 },
]

export function HeroVisual() {
  return (
    <svg viewBox="0 0 420 340" className="block h-auto w-full" aria-hidden focusable="false">
      <g stroke="rgba(245,241,230,.15)">
        {[60, 130, 200, 270].map((y) => (
          <line key={y} x1="20" y1={y} x2="400" y2={y} />
        ))}
      </g>
      <g fill="#8c9c7a">
        {bars.map((b, i) => (
          <rect
            key={b.x}
            className="hero-bar"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            x={b.x}
            y={b.y}
            width="30"
            height={b.h}
          />
        ))}
      </g>
      <polyline
        className="draw-line"
        fill="none"
        stroke="#ddb962"
        strokeWidth="3"
        points="53,190 103,150 153,165 203,115 253,95 303,105 353,55"
      />
      <polyline
        fill="none"
        stroke="#f5f1e6"
        strokeWidth="2"
        strokeDasharray="6 6"
        points="53,195 103,175 153,160 203,140 253,118 303,108 353,85"
      />
      <circle cx="353" cy="55" r="6" fill="#ddb962" />
    </svg>
  )
}
