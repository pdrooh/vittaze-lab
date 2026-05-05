'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowUp } from 'lucide-react'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)
  const [showWA,  setShowWA]  = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShowTop(y > 500)
      setShowWA(y > 200)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-center gap-3">
      {/* ── Back to top ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-top"
            onClick={scrollTop}
            aria-label="Voltar ao topo"
            className="w-11 h-11 rounded-full flex items-center justify-center glass-dark border border-vit-taupe/30 hover:border-vit-taupe/60 hover:bg-vit-taupe/20 transition-colors duration-300 group"
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp
              size={15}
              strokeWidth={1.5}
              className="text-vit-taupe group-hover:text-vit-bege transition-colors"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── WhatsApp button ── */}
      <AnimatePresence>
        {showWA && (
          <motion.div
            key="whatsapp"
            className="relative"
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.05 }}
          >
            {/* Pulse rings */}
            <span
              className="absolute inset-0 rounded-full bg-vit-taupe/25 animate-ping"
              style={{ animationDuration: '2s' }}
            />
            <span
              className="absolute inset-0 rounded-full bg-vit-taupe/15 animate-ping"
              style={{ animationDuration: '2s', animationDelay: '0.5s' }}
            />

            <motion.a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp"
              className="relative flex w-14 h-14 rounded-full items-center justify-center shadow-premium"
              style={{ background: 'linear-gradient(135deg, #A0958C 0%, #655C55 100%)' }}
              whileHover={{ scale: 1.12, rotate: 6 }}
              whileTap={{ scale: 0.93 }}
            >
              <MessageCircle size={24} strokeWidth={1.5} className="text-vit-white" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
