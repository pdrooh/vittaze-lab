'use client'

import { Zap, Microscope, Heart, ShieldCheck, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn, { StaggerGroup, StaggerItem } from './FadeIn'

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
  return (
    <section id="diferenciais" className="bg-vit-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="eyebrow mb-4">Por que a Vittaze</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg text-vit-preto">
              Diferenciais que{' '}
              <span className="font-heading italic">fazem a diferença</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="divider-gold mx-auto mt-6" />
          </FadeIn>
        </div>

        {/* Cards */}
        <StaggerGroup stagger={0.09} delayChildren={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  className="group card-premium flex flex-col gap-5 h-full transition-shadow duration-300 hover:shadow-premium"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-vit-bege/60 group-hover:bg-vit-taupe/20 flex items-center justify-center transition-colors duration-300"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-vit-cinza group-hover:text-vit-taupe transition-colors duration-300"
                    />
                  </motion.div>

                  {/* Animated underline */}
                  <motion.div
                    className="h-px bg-vit-bege group-hover:bg-vit-taupe transition-colors duration-300"
                    initial={{ width: 32 }}
                    whileHover={{ width: 48 }}
                  />

                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="font-heading text-xl font-medium text-vit-preto leading-tight">
                      {item.title}
                    </h3>
                    <p className="body-md text-vit-cinza/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        {/* Bottom CTA strip */}
        <FadeIn delay={0.1} className="mt-20">
          <div className="p-8 rounded-2xl bg-vit-preto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-heading text-2xl font-light text-vit-white text-center md:text-left">
              Pronto para cuidar da sua saúde com{' '}
              <span className="italic gradient-text">excelência</span>?
            </p>
            <motion.a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-taupe shrink-0"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Agendar Exame
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
