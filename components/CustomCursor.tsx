'use client'

/**
 * CustomCursor — zero React state, zero re-renders.
 * All updates go directly to DOM via refs + rAF loop.
 * The compositor only deals with transform, which is GPU-accelerated.
 */

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip on touch / stylus devices
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Show cursors (they start hidden via opacity:0 in inline style)
    dot.style.opacity  = '0'
    ring.style.opacity = '0'

    let mx = 0, my = 0     // mouse position (instant)
    let rx = 0, ry = 0     // ring position  (lagged)
    let visible  = false
    let hovered  = false
    let raf: number

    /* ── Mouse tracking ─────────────────────────────────────── */
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY

      if (!visible) {
        visible = true
        dot.style.opacity  = '1'
        ring.style.opacity = '1'
      }
    }

    const onLeave  = () => { visible = false; dot.style.opacity = '0'; ring.style.opacity = '0' }
    const onEnter  = () => { visible = true;  dot.style.opacity = '1'; ring.style.opacity = '1' }

    /* ── Hover detection on interactive elements ────────────── */
    const setHover = (on: boolean) => {
      hovered = on
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px) scale(${on ? 1.9 : 1})`
      ring.style.borderColor = on ? 'rgba(220,216,207,0.65)' : 'rgba(160,149,140,0.42)'
      dot.style.backgroundColor = on ? '#DCD8CF' : '#A0958C'
    }

    const handleIn  = () => setHover(true)
    const handleOut = () => setHover(false)

    const attachHovers = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', handleIn,  { passive: true })
        el.addEventListener('mouseleave', handleOut, { passive: true })
      })
    }

    /* ── rAF loop: only transform (GPU composited) ──────────── */
    const tick = () => {
      // Lag: ring chases mouse position
      rx += (mx - rx) * 0.09
      ry += (my - ry) * 0.09

      // Dot: instant (updated separately for snappiness)
      dot.style.transform  = `translate(${mx - 3}px, ${my - 3}px)`

      // Ring: lagged + hover scale handled in setHover above for instant response,
      // but we still need to update position every frame
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px) scale(${hovered ? 1.9 : 1})`

      raf = requestAnimationFrame(tick)
    }

    /* ── Attach ─────────────────────────────────────────────── */
    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    raf = requestAnimationFrame(tick)

    // Attach hover listeners after slight delay so dynamic elements exist
    const t = setTimeout(attachHovers, 600)

    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.removeEventListener('mouseenter', handleIn)
        el.removeEventListener('mouseleave', handleOut)
      })
    }
  }, [])

  return (
    <>
      {/* Dot — 6 px, instant follow */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full"
        style={{
          width: 6,
          height: 6,
          backgroundColor: '#A0958C',
          opacity: 0,
          willChange: 'transform',
          transition: 'opacity 0.2s, background-color 0.2s',
        }}
      />

      {/* Ring — 36 px, lagged follow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[998] rounded-full"
        style={{
          width: 36,
          height: 36,
          border: '1px solid rgba(160,149,140,0.42)',
          opacity: 0,
          willChange: 'transform',
          transition: 'opacity 0.25s, border-color 0.25s, scale 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      />
    </>
  )
}
