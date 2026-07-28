'use client'

import { Zap, Microscope, Heart, ShieldCheck, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn, { StaggerGroup, StaggerItem } from './FadeIn'

const items = [
  {
    num: '01',
    icon: Zap,
    title: 'Resultados Rápidos',
    description:
      'Laudo digital disponível em até 72h. Acesso online a qualquer hora, de qualquer lugar.',
  },
  {
    num: '02',
    icon: Microscope,
    title: 'Tecnologia de Ponta',
    description:
      'Equipamentos de última geração e metodologias validadas pelos melhores padrões internacionais.',
  },
  {
    num: '03',
    icon: Heart,
    title: 'Atendimento Humanizado',
    description:
      'Uma equipe que cuida de você com atenção, respeito e acolhimento em cada etapa.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Precisão Diagnóstica',
    description:
      'Controle rigoroso de qualidade em todos os processos, garantindo confiabilidade absoluta.',
  },
  {
    num: '05',
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <FadeIn><p className="eyebrow mb-5">Por que a Vittaze</p></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-vit-preto">
                Diferenciais que{' '}
                <span className="font-heading italic">fazem a diferença</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="left">
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="divider-gold lg:ml-auto" />
              <p className="body-md text-vit-cinza/65 max-w-xs lg:text-right text-sm leading-relaxed">
                Cada detalhe pensado para oferecer a melhor experiência diagnóstica do interior paulista.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Cards */}
        <StaggerGroup stagger={0.09} delayChildren={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  className="group card-premium flex flex-col gap-5 h-full relative overflow-hidden"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  {/* Corner number */}
                  <span
                    className="absolute top-5 right-5 font-heading text-[2.5rem] font-light leading-none text-vit-bege/45 group-hover:text-vit-taupe/25 transition-colors duration-500 select-none pointer-events-none"
                    aria-hidden
                  >
                    {item.num}
                  </span>

                  {/* Icon */}
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-vit-bege/80 to-vit-bege/30 group-hover:from-vit-taupe/25 group-hover:to-vit-taupe/10 flex items-center justify-center transition-all duration-300 shrink-0"
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-vit-cinza group-hover:text-vit-taupe transition-colors duration-300"
                    />
                  </motion.div>

                  {/* Animated accent line */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-vit-taupe/60 to-transparent"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />

                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="font-heading text-xl font-medium text-vit-preto leading-tight pr-8">
                      {item.title}
                    </h3>
                    <p className="body-md text-vit-cinza/75 text-sm leading-relaxed">
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
          <div className="relative overflow-hidden p-8 lg:p-10 rounded-2xl bg-vit-preto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-40 bg-vit-taupe/12 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute right-0 bottom-0 w-48 h-32 bg-vit-cinza/10 blur-[60px] rounded-full pointer-events-none" />
            <p className="relative font-heading text-2xl md:text-3xl font-light text-vit-white text-center md:text-left text-balance">
              Pronto para cuidar da sua saúde com{' '}
              <em className="gradient-text not-italic">excelência</em>?
            </p>
            <motion.a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="relative btn-taupe shrink-0"
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
