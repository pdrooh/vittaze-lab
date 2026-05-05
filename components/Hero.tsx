'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Calendar, FileText, MessageCircle } from 'lucide-react'
import DnaAnimation from './DnaAnimation'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  // Subtle parallax on scroll
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onScroll = () => {
      const y = window.scrollY
      const bg = el.querySelector('.hero-bg') as HTMLElement
      if (bg) bg.style.transform = `translateY(${y * 0.3}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollNext = () => {
    const next = document.getElementById('diferenciais')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-vit-preto"
    >
      {/* ── Background texture layer ── */}
      <div className="hero-bg absolute inset-0 will-change-transform">
        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-vit" />

        {/* Warm radial glow top-left */}
        <div className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full bg-vit-taupe/10 blur-[120px]" />

        {/* Warm radial glow bottom-right */}
        <div className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-vit-cinza/15 blur-[100px]" />

        {/* Fine grain texture via SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* Subtle brand pattern lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #DCD8CF 0px,
              #DCD8CF 1px,
              transparent 1px,
              transparent 60px
            )`
          }}
        />
      </div>

      {/* ── DNA animation — desktop right side ── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-24 lg:w-40 opacity-25 hidden md:block">
        <DnaAnimation />
      </div>

      {/* ── DNA animation — desktop left side (mirror) ── */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-16 lg:w-28 opacity-10 hidden lg:block scale-x-[-1]">
        <DnaAnimation />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-16 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}
          >
            <span className="eyebrow text-vit-taupe">Vittaze Lab</span>
            <span className="h-px w-12 bg-vit-taupe/50" />
            <span className="eyebrow text-vit-taupe/60">Laboratório Premium</span>
          </div>

          {/* Headline */}
          <h1
            className="heading-xl text-vit-white mb-6"
            style={{ animation: 'fadeUp 0.7s ease 0.2s both' }}
          >
            Precisão{' '}
            <span className="font-heading italic font-light gradient-text">
              clínica
            </span>{' '}
            com excelência e{' '}
            <span className="font-heading italic font-light gradient-text">
              sofisticação.
            </span>
          </h1>

          {/* Sub */}
          <p
            className="body-lg text-vit-white/60 max-w-xl mb-12"
            style={{ animation: 'fadeUp 0.7s ease 0.35s both' }}
          >
            Tecnologia avançada, atendimento humanizado e resultados
            confiáveis para cuidar da saúde que você merece.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.7s ease 0.5s both' }}
          >
            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-taupe group"
            >
              <Calendar size={16} className="transition-transform group-hover:scale-110" />
              Agendar Exame
            </a>
            <a
              href="#resultados"
              onClick={e => { e.preventDefault(); document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline-light group"
            >
              <FileText size={16} className="transition-transform group-hover:scale-110" />
              Consultar Resultados
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light group"
            >
              <MessageCircle size={16} className="transition-transform group-hover:scale-110" />
              Fale Conosco
            </a>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          className="mt-20 pt-12 border-t border-vit-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ animation: 'fadeUp 0.7s ease 0.65s both' }}
        >
          {[
            { value: '98%',    label: 'Precisão diagnóstica' },
            { value: '24h',    label: 'Resultados online' },
            { value: '50+',    label: 'Tipos de exames' },
            { value: '10 anos', label: 'De excelência' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-heading text-3xl sm:text-4xl font-light text-vit-bege">
                {stat.value}
              </span>
              <span className="body-md text-vit-white/40 text-xs tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll down indicator ── */}
      <button
        onClick={scrollNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        aria-label="Rolar para baixo"
        style={{ animation: 'fadeIn 1s ease 1.2s both' }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-vit-white/30 group-hover:text-vit-white/60 transition-colors">
          Explorar
        </span>
        <ArrowDown
          size={16}
          className="text-vit-white/30 group-hover:text-vit-taupe transition-all duration-300 animate-bounce"
        />
      </button>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
