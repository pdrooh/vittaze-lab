'use client'

export default function DnaAnimation({ className = '' }: { className?: string }) {
  const nodes = Array.from({ length: 12 })

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 100 560"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="strand1Grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#A0958C" stopOpacity="0.8" />
            <stop offset="50%"  stopColor="#DCD8CF" stopOpacity="1" />
            <stop offset="100%" stopColor="#A0958C" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="strand2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#655C55" stopOpacity="0.6" />
            <stop offset="50%"  stopColor="#A0958C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#655C55" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Strand 1 — sine curve going right */}
        <path
          d="M 50,10 C 90,50 10,90 50,130 C 90,170 10,210 50,250 C 90,290 10,330 50,370 C 90,410 10,450 50,490 C 90,530 10,570 50,550"
          fill="none"
          stroke="url(#strand1Grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{
            animation: 'dnaStrand1 8s ease-in-out infinite alternate',
          }}
        />

        {/* Strand 2 — sine curve going left (inverted) */}
        <path
          d="M 50,10 C 10,50 90,90 50,130 C 10,170 90,210 50,250 C 10,290 90,330 50,370 C 10,410 90,450 50,490 C 10,530 90,570 50,550"
          fill="none"
          stroke="url(#strand2Grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{
            animation: 'dnaStrand1 8s ease-in-out infinite alternate-reverse',
          }}
        />

        {/* Connecting rungs */}
        {nodes.map((_, i) => {
          const y = 10 + i * 49
          const progress = (i % 2 === 0) ? 1 : -1
          const x1 = 50 + progress * 35
          const x2 = 50 - progress * 35
          const opacity = 0.3 + (i % 3) * 0.15

          return (
            <line
              key={i}
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke="#DCD8CF"
              strokeWidth="0.8"
              strokeOpacity={opacity}
              strokeDasharray="2 2"
            />
          )
        })}

        {/* Node dots on strand 1 */}
        {nodes.map((_, i) => {
          const y = 10 + i * 49
          const phase = (i * Math.PI) / 6
          const x = 50 + Math.sin(phase) * 40
          return (
            <circle
              key={`d1-${i}`}
              cx={x}
              cy={y}
              r="2.5"
              fill="#A0958C"
              filter="url(#glow)"
              opacity="0.9"
            />
          )
        })}

        {/* Node dots on strand 2 */}
        {nodes.map((_, i) => {
          const y = 10 + i * 49
          const phase = (i * Math.PI) / 6 + Math.PI
          const x = 50 + Math.sin(phase) * 40
          return (
            <circle
              key={`d2-${i}`}
              cx={x}
              cy={y}
              r="2"
              fill="#655C55"
              filter="url(#glow)"
              opacity="0.7"
            />
          )
        })}
      </svg>

      <style jsx>{`
        @keyframes dnaStrand1 {
          0%   { opacity: 0.7; }
          50%  { opacity: 1; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}
