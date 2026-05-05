'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Calendar, FileText, MessageCircle } from 'lucide-react'
import DnaAnimation from './DnaAnimation'
import ParticleField from './ParticleField'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  // Parallax: background moves slower than scroll (transform only — GPU composited)
  const bgY = useTransform(scrollY, [0, 700], [0, 120])

  const scrollNext = () => {
    document.getElementById('diferenciais')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-vit-preto"
    >
      {/* ── Parallax background layer ── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-vit" />

        {/* Warm glows */}
        <div className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full bg-vit-taupe/10 blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[55vw] h-[55vw] rounded-full bg-vit-cinza/15 blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 w-[40vw] h-[40vw] -translate-x-1/2 rounded-full bg-vit-taupe/5 blur-[80px]" />

        {/* SVG grain */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        {/* Diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg, #DCD8CF 0px, #DCD8CF 1px, transparent 1px, transparent 60px
            )`,
          }}
        />
      </motion.div>

      {/* ── Particle field ── */}
      <div className="absolute inset-0 opacity-80">
        <ParticleField count={60} />
      </div>

      {/* ── DNA — right ── */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 w-24 lg:w-44 hidden md:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.22, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
      >
        <DnaAnimation />
      </motion.div>

      {/* ── DNA — left (mirror) ── */}
      <motion.div
        className="absolute left-6 top-1/2 -translate-y-1/2 w-16 lg:w-28 hidden lg:block scale-x-[-1]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.08, x: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
      >
        <DnaAnimation />
      </motion.div>

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-16 pt-32 pb-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
            <span className="eyebrow text-vit-taupe">Vittaze Lab</span>
            <span className="h-px w-10 bg-vit-taupe/50" />
            <span className="eyebrow text-vit-taupe/55">Laboratório Premium</span>
          </motion.div>

          {/* H1 — word by word stagger */}
          <motion.h1
            className="heading-xl text-vit-white mb-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {['Precisão', 'clínica', 'com', 'excelência', 'e', 'sofisticação.'].map(
              (word, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  className={`inline-block mr-[0.22em] ${
                    word === 'clínica' || word === 'sofisticação.'
                      ? 'font-heading italic gradient-text'
                      : ''
                  }`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {word}
                </motion.span>
              )
            )}
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="body-lg text-vit-white/55 max-w-xl mb-12"
          >
            Tecnologia avançada, atendimento humanizado e resultados confiáveis
            para cuidar da saúde que você merece.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            {[
              {
                label: 'Agendar Exame',
                icon: Calendar,
                className: 'btn-taupe',
                href: '#contato',
              },
              {
                label: 'Consultar Resultados',
                icon: FileText,
                className: 'btn-outline-light',
                href: '#resultados',
              },
              {
                label: 'Fale Conosco',
                icon: MessageCircle,
                className: 'btn-outline-light',
                href: 'https://wa.me/5500000000000',
                external: true,
              },
            ].map(({ label, icon: Icon, className, href, external }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                onClick={
                  !external
                    ? (e) => {
                        e.preventDefault()
                        document
                          .querySelector(href)
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }
                    : undefined
                }
                className={className}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <Icon size={15} />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Stats ── */}
        <motion.div
          variants={fadeIn}
          className="mt-20 pt-12 border-t border-vit-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '98%',    label: 'Precisão diagnóstica' },
            { value: '24h',    label: 'Resultados online' },
            { value: '50+',    label: 'Tipos de exames' },
            { value: '2025',    label: 'Inauguração' },
          ].map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="flex flex-col gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
            >
              <span className="font-heading text-3xl sm:text-4xl font-light text-vit-bege">
                {value}
              </span>
              <span className="body-md text-vit-white/35 text-xs tracking-wide">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={scrollNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        whileHover={{ y: 2 }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-vit-white/25 group-hover:text-vit-white/50 transition-colors">
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={15} className="text-vit-white/25 group-hover:text-vit-taupe transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  )
}
