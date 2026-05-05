'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Hide after 2.6 s (letters + line + LAB + small pause)
    const t = setTimeout(() => setVisible(false), 2600)
    return () => clearTimeout(t)
  }, [])

  const letters = 'VITTAZE'.split('')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-vit-preto"
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Subtle radial glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[40vw] h-[40vw] rounded-full bg-vit-taupe/10 blur-[80px]" />
          </div>

          <div className="relative flex flex-col items-center gap-3">
            {/* ── Letters ── */}
            <div className="flex items-center overflow-hidden">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="font-heading text-5xl sm:text-7xl font-light tracking-[0.2em] text-vit-white select-none"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* ── Expanding line ── */}
            <div className="w-full overflow-hidden h-px">
              <motion.div
                className="h-full"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, #A0958C 40%, #DCD8CF 60%, #A0958C 80%, transparent 100%)',
                }}
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                animate={{ scaleX: 1, transformOrigin: 'left' }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* ── LAB label ── */}
            <motion.span
              className="font-body text-[10px] tracking-[0.6em] uppercase text-vit-taupe"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.35, duration: 0.5 }}
            >
              LAB
            </motion.span>

            {/* ── Minimal loading dots ── */}
            <motion.div
              className="flex gap-1.5 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1 h-1 rounded-full bg-vit-taupe/50"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
