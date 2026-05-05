'use client'

import { FlaskConical, HeartPulse, Activity, Stethoscope, Building2, Home, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn, { StaggerGroup, StaggerItem } from './FadeIn'

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
  return (
    <section
      id="servicos"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #EDE9E2 0%, #F8F6F3 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <FadeIn>
              <p className="eyebrow mb-4">O que oferecemos</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-vit-preto max-w-sm">
                Nossos{' '}
                <span className="font-heading italic">serviços</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} direction="left">
            <p className="body-lg text-vit-cinza max-w-sm">
              Soluções diagnósticas completas para cada etapa da sua jornada de saúde.
            </p>
          </FadeIn>
        </div>

        {/* Grid */}
        <StaggerGroup stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer h-full transition-shadow duration-300 ${
                    service.highlight
                      ? 'bg-vit-preto hover:shadow-premium'
                      : 'bg-vit-white border border-vit-bege/70 hover:shadow-premium'
                  }`}
                  whileHover={{ y: -7 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <div className="p-8 flex flex-col gap-6 h-full">
                    {/* Icon row */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          service.highlight ? 'bg-vit-taupe/30' : 'bg-vit-bege/70'
                        }`}
                        whileHover={{ scale: 1.12, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className={service.highlight ? 'text-vit-bege' : 'text-vit-cinza group-hover:text-vit-taupe transition-colors duration-300'}
                        />
                      </motion.div>

                      <motion.div
                        className="opacity-0 group-hover:opacity-100"
                        initial={{ x: -8 }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ArrowRight size={16} className="text-vit-taupe" />
                      </motion.div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className={`font-heading text-xl font-medium leading-tight ${service.highlight ? 'text-vit-white' : 'text-vit-preto'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm leading-relaxed font-light ${service.highlight ? 'text-vit-white/55' : 'text-vit-cinza/80'}`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Animated bottom line */}
                    <motion.div
                      className={`h-px ${service.highlight ? 'bg-vit-taupe/50' : 'bg-vit-bege'}`}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>

                  {/* Highlight: decorative corner */}
                  {service.highlight && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-vit-taupe/10 rounded-bl-full pointer-events-none" />
                  )}
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        {/* Bottom CTA */}
        <FadeIn delay={0.1} className="mt-12 text-center">
          <p className="body-md text-vit-cinza mb-4">
            Não encontrou o que procura? Fale com nossa equipe.
          </p>
          <motion.a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Ver todos os exames
          </motion.a>
        </FadeIn>
      </div>
    </section>
  )
}
