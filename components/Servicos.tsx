'use client'

import { useEffect, useRef } from 'react'
import { FlaskConical, HeartPulse, Activity, Stethoscope, Building2, Home, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: FlaskConical,
    title: 'Exames Laboratoriais',
    description:
      'Hemograma, bioquímica, urinálise e centenas de análises com máxima precisão e agilidade nos resultados.',
    highlight: false,
  },
  {
    icon: HeartPulse,
    title: 'Check-up Completo',
    description:
      'Pacotes personalizados de avaliação global da saúde, com relatório médico detalhado e orientações preventivas.',
    highlight: true,
  },
  {
    icon: Activity,
    title: 'Exames Hormonais',
    description:
      'Avaliação completa do perfil hormonal feminino e masculino para diagnósticos precisos e tratamentos eficazes.',
    highlight: false,
  },
  {
    icon: Stethoscope,
    title: 'Análises Especializadas',
    description:
      'Genética molecular, imunologia avançada, toxicologia e outras análises de alta complexidade.',
    highlight: false,
  },
  {
    icon: Building2,
    title: 'Atendimento Empresarial',
    description:
      'Soluções corporativas em saúde ocupacional, exames admissionais e programas de bem-estar para equipes.',
    highlight: false,
  },
  {
    icon: Home,
    title: 'Coleta Domiciliar',
    description:
      'Toda a comodidade de uma coleta profissional no conforto da sua casa, com agendamento flexível.',
    highlight: false,
  },
]

export default function Servicos() {
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
      id="servicos"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #EDE9E2 0%, #F8F6F3 100%)' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="reveal eyebrow mb-4">O que oferecemos</p>
            <h2 className="reveal reveal-delay-1 heading-lg text-vit-preto max-w-sm">
              Nossos{' '}
              <span className="font-heading italic">serviços</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 body-lg text-vit-cinza max-w-sm">
            Soluções diagnósticas completas para cada etapa da sua jornada de saúde.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  service.highlight
                    ? 'bg-vit-preto shadow-premium'
                    : 'bg-vit-white border border-vit-bege/70 shadow-card hover:shadow-premium'
                }`}
              >
                {/* Card content */}
                <div className="p-8 flex flex-col gap-6 h-full">
                  {/* Icon row */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        service.highlight
                          ? 'bg-vit-taupe/30 group-hover:bg-vit-taupe/50'
                          : 'bg-vit-bege/70 group-hover:bg-vit-taupe/20'
                      }`}
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className={service.highlight ? 'text-vit-bege' : 'text-vit-cinza group-hover:text-vit-taupe transition-colors duration-300'}
                      />
                    </div>
                    <ArrowRight
                      size={16}
                      className={`opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${
                        service.highlight ? 'text-vit-taupe' : 'text-vit-taupe'
                      }`}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 flex-1">
                    <h3
                      className={`font-heading text-xl font-medium leading-tight ${
                        service.highlight ? 'text-vit-white' : 'text-vit-preto'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed font-light ${
                        service.highlight ? 'text-vit-white/60' : 'text-vit-cinza/80'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom line */}
                  <div
                    className={`h-px w-0 group-hover:w-full transition-all duration-500 ${
                      service.highlight ? 'bg-vit-taupe/50' : 'bg-vit-bege'
                    }`}
                  />
                </div>

                {/* Highlight: decorative corner element */}
                {service.highlight && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-vit-taupe/10 rounded-bl-full" />
                )}
              </div>
            )
          })}
        </div>

        {/* CTA under grid */}
        <div className="reveal mt-12 text-center">
          <p className="body-md text-vit-cinza mb-4">
            Não encontrou o que procura? Fale com nossa equipe.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver todos os exames
          </a>
        </div>
      </div>
    </section>
  )
}
