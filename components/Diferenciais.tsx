'use client'

import { useEffect, useRef } from 'react'
import { Zap, Microscope, Heart, ShieldCheck, Award } from 'lucide-react'

const items = [
  {
    icon: Zap,
    title: 'Resultados Rápidos',
    description:
      'Laudo digital disponível em até 24 horas. Acesso online a qualquer hora, de qualquer lugar.',
  },
  {
    icon: Microscope,
    title: 'Tecnologia de Ponta',
    description:
      'Equipamentos de última geração e metodologias validadas pelos melhores padrões internacionais.',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description:
      'Uma equipe que cuida de você com atenção, respeito e acolhimento em cada etapa.',
  },
  {
    icon: ShieldCheck,
    title: 'Precisão Diagnóstica',
    description:
      'Controle rigoroso de qualidade em todos os processos, garantindo confiabilidade absoluta.',
  },
  {
    icon: Award,
    title: 'Segurança e Confiança',
    description:
      'Acreditação de excelência, protocolos rígidos e total confidencialidade dos seus dados.',
  },
]

export default function Diferenciais() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="diferenciais" className="bg-vit-white section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="reveal eyebrow mb-4">Por que a Vittaze</p>
          <h2 className="reveal reveal-delay-1 heading-lg text-vit-preto">
            Diferenciais que{' '}
            <span className="font-heading italic">fazem a diferença</span>
          </h2>
          <div className="reveal reveal-delay-2 divider-gold mx-auto mt-6" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} group card-premium flex flex-col gap-5`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-vit-bege/60 flex items-center justify-center group-hover:bg-vit-taupe/20 transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.5} className="text-vit-cinza group-hover:text-vit-taupe transition-colors duration-300" />
                </div>

                {/* Line */}
                <div className="h-px w-8 bg-vit-bege group-hover:bg-vit-taupe transition-colors duration-300" />

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-xl font-medium text-vit-preto leading-tight">
                    {item.title}
                  </h3>
                  <p className="body-md text-vit-cinza/80 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom strip */}
        <div className="reveal mt-20 p-8 rounded-2xl bg-vit-preto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-2xl font-light text-vit-white">
              Pronto para cuidar da sua saúde com{' '}
              <span className="italic gradient-text">excelência</span>?
            </p>
          </div>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-taupe shrink-0"
          >
            Agendar Exame
          </a>
        </div>
      </div>
    </section>
  )
}
