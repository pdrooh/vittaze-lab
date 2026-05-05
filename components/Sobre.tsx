'use client'

import { useEffect, useRef } from 'react'
import DnaAnimation from './DnaAnimation'

const pillars = [
  {
    label: 'Missão',
    text: 'Oferecer diagnósticos clínicos de alta precisão com cuidado humanizado, contribuindo para decisões médicas mais seguras e uma saúde de qualidade.',
  },
  {
    label: 'Visão',
    text: 'Ser referência em excelência diagnóstica, reconhecida pela inovação, confiança e pelo compromisso com o bem-estar de cada paciente.',
  },
  {
    label: 'Valores',
    text: 'Precisão. Integridade. Humanidade. Inovação. Excelência em cada detalhe, do atendimento ao laudo.',
  },
]

export default function Sobre() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sobre"
      className="relative bg-vit-preto section-padding overflow-hidden"
      ref={sectionRef}
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-vit-taupe/8 blur-[120px] rounded-full pointer-events-none" />

      {/* Brand pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #DCD8CF 0px,
            #DCD8CF 1px,
            transparent 1px,
            transparent 80px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — DNA visual */}
          <div className="reveal order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-56 md:w-72">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-vit-taupe/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-vit-bege/10 scale-125" />

              {/* DNA */}
              <div className="opacity-70">
                <DnaAnimation />
              </div>

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-2xl px-6 py-4 text-center border border-vit-taupe/25">
                  <span className="font-heading text-3xl font-light text-vit-bege block">
                    10+
                  </span>
                  <span className="font-body text-xs tracking-widest uppercase text-vit-taupe">
                    anos de excelência
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <p className="reveal eyebrow text-vit-taupe mb-4">Sobre a Vittaze</p>

            <h2 className="reveal reveal-delay-1 heading-lg text-vit-white mb-6">
              Uma marca que{' '}
              <span className="font-heading italic gradient-text">
                vai além
              </span>{' '}
              do diagnóstico.
            </h2>

            <div className="reveal reveal-delay-2 h-px w-12 bg-vit-taupe/50 mb-8" />

            <p className="reveal reveal-delay-2 body-lg text-vit-white/55 mb-6">
              A Vittaze nasceu da convicção de que saúde de qualidade e sofisticação não são excludentes. Unimos tecnologia de ponta com um atendimento verdadeiramente humano.
            </p>
            <p className="reveal reveal-delay-3 body-lg text-vit-white/55 mb-12">
              Aqui, cada detalhe é pensado para que você se sinta acolhido, seguro e confiante — porque cuidar da sua saúde é um ato de cuidar de você por inteiro.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-5">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.label}
                  className={`reveal reveal-delay-${i + 3} card-dark rounded-xl p-5 flex gap-5 items-start`}
                >
                  <div className="w-1 self-stretch rounded-full bg-gradient-to-b from-vit-taupe to-vit-cinza shrink-0" />
                  <div>
                    <p className="eyebrow text-vit-taupe mb-1">{pillar.label}</p>
                    <p className="body-md text-vit-white/55 text-sm">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="reveal mt-24 text-center px-4">
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light italic text-vit-white/40 max-w-3xl mx-auto leading-relaxed">
            "O design não comunica apenas estética — comunica{' '}
            <span className="text-vit-bege/70">preço, confiança e exclusividade.</span>"
          </p>
          <p className="mt-4 eyebrow text-vit-taupe/50">Identidade Vittaze Lab</p>
        </div>
      </div>
    </section>
  )
}
