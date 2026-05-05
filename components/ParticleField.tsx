'use client'

/**
 * ParticleField — CSS-only particles, zero canvas, zero JS per frame.
 * All animation runs on the compositor thread via CSS keyframes:
 * transforms + opacity are GPU-composited — no layout/paint, no jank.
 */

import { useMemo } from 'react'

const ANIM_NAMES = ['pFloat0', 'pFloat1', 'pFloat2', 'pFloat3', 'pFloat4']
const COLORS = ['#A0958C', '#DCD8CF', '#655C55', '#A0958C', '#DCD8CF']

interface Dot {
  top: number       // %
  left: number      // %
  size: number      // px
  alpha: number
  color: string
  anim: string
  duration: number  // s
  delay: number     // s
}

// Seeded pseudo-random so SSR and client produce the same values
function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

export default function ParticleField({ count = 28 }: { count?: number }) {
  const dots = useMemo<Dot[]>(() =>
    Array.from({ length: count }, (_, i) => ({
      top:      seededRand(i * 7 + 0) * 100,
      left:     seededRand(i * 7 + 1) * 100,
      size:     seededRand(i * 7 + 2) * 2 + 1,          // 1–3 px
      alpha:    seededRand(i * 7 + 3) * 0.28 + 0.07,    // 0.07–0.35
      color:    COLORS[i % COLORS.length],
      anim:     ANIM_NAMES[i % ANIM_NAMES.length],
      duration: seededRand(i * 7 + 4) * 10 + 7,         // 7–17 s
      delay:    seededRand(i * 7 + 5) * -12,             // negative = already mid-anim
    })),
    [count]
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            top:             `${d.top}%`,
            left:            `${d.left}%`,
            width:           d.size,
            height:          d.size,
            backgroundColor: d.color,
            opacity:         d.alpha,
            willChange:      'transform',          // hint to browser
            animation:       `${d.anim} ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
