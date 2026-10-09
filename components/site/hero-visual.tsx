import { site } from '@/lib/site'

const GRID_STEPS = Array.from({ length: 9 }, (_, i) => i * 50)

const stages = [
  { x: 50, y: 250, label: 'Idea', fill: false },
  { x: 125, y: 175, label: 'Build', fill: false },
  { x: 200, y: 100, label: 'Product', fill: true },
] as const

/** Abstract composition: three ascending frames describing ideas maturing into products. */
export function HeroVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-md overflow-hidden rounded-md bg-forest text-paper lg:max-w-none">
      <div className="flex items-center justify-between border-b border-paper/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">
        <span>Aseera</span>
        <span>Est. {site.founded.short}</span>
      </div>

      <svg
        viewBox="0 0 400 400"
        className="block aspect-square w-full"
        role="img"
        aria-label="Abstract illustration of three ascending frames, representing an idea developing into a product."
      >
        <g stroke="currentColor" strokeOpacity="0.08" strokeWidth="1">
          {GRID_STEPS.map((p) => (
            <g key={p}>
              <line x1={p} y1="0" x2={p} y2="400" />
              <line x1="0" y1={p} x2="400" y2={p} />
            </g>
          ))}
        </g>

        <line x1="50" y1="350" x2="372" y2="28" stroke="var(--sage)" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="3 5" />

        {stages.map((s, i) => (
          <g key={s.label}>
            <rect
              x={s.x}
              y={s.y}
              width="100"
              height="100"
              fill={s.fill ? 'currentColor' : 'none'}
              fillOpacity={s.fill ? 0.96 : 0}
              stroke="currentColor"
              strokeOpacity={s.fill ? 1 : 0.35 + i * 0.2}
              strokeWidth="1"
            />
            <text
              x={s.x + 10}
              y={s.y + 88}
              className="font-mono"
              fontSize="10"
              letterSpacing="1.5"
              fill={s.fill ? 'var(--forest)' : 'currentColor'}
              fillOpacity={s.fill ? 1 : 0.6}
            >
              {`0${i + 1} ${s.label.toUpperCase()}`}
            </text>
          </g>
        ))}

        <circle cx="372" cy="28" r="4" fill="var(--sage)" />
        <circle cx="372" cy="28" r="10" fill="none" stroke="var(--sage)" strokeOpacity="0.5" />
      </svg>

      <figcaption className="flex items-center justify-between border-t border-paper/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">
        <span>Ideas → Products</span>
        <span className="text-paper/80">Go Beyond</span>
      </figcaption>
    </figure>
  )
}
