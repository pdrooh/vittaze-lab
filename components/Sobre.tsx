'use client'

import { motion } from 'framer-motion'
import FadeIn, { StaggerGroup, StaggerItem } from './FadeIn'
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
  return (
    <section id="sobre" className="relative bg-vit-preto section-padding overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-vit-taupe/8 blur-[120px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #DCD8CF 0px, #DCD8CF 1px, transparent 1px, transparent 80px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — DNA visual */}
          <FadeIn direction="left" className="order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-56 md:w-72">
              {/* Ring menor */}
              <motion.div
                className="absolute inset-0 rounded-full border border-vit-taupe/20"
                animate={{ scale: [1.1, 1.14, 1.1] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />

              {/* DNA */}
              <div className="opacity-70">
                <DnaAnimation />
              </div>

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="glass rounded-2xl px-6 py-4 text-center border border-vit-taupe/25"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="font-heading text-2xl font-light text-vit-bege block leading-tight">Nova<br/>era</span>
                  <span className="font-body text-xs tracking-widest uppercase text-vit-taupe">
                    em diagnósticos
                  </span>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <p className="eyebrow text-vit-taupe mb-4">Sobre a Vittaze</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-vit-white mb-6">
                Uma marca que{' '}
                <span className="font-heading italic gradient-text">vai além</span>{' '}
                do diagnóstico.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="h-px w-12 bg-vit-taupe/50 mb-8" />
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="body-lg text-vit-white/55 mb-6">
                A Vittaze nasce da convicção de que saúde de qualidade e sofisticação não são excludentes. Unimos tecnologia de ponta com um atendimento verdadeiramente humano.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="body-lg text-vit-white/55 mb-12">
                Aqui, cada detalhe é pensado para que você se sinta acolhido, seguro e confiante — porque cuidar da sua saúde é um ato de cuidar de você por inteiro.
              </p>
            </FadeIn>

            {/* Pillars */}
            <StaggerGroup stagger={0.1} className="flex flex-col gap-4">
              {pillars.map((pillar) => (
                <StaggerItem key={pillar.label}>
                  <motion.div
                    className="card-dark rounded-xl p-5 flex gap-5 items-start"
                    whileHover={{ x: 4, borderColor: 'rgba(160,149,140,0.35)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  >
                    <div className="w-1 self-stretch rounded-full bg-gradient-to-b from-vit-taupe to-vit-cinza shrink-0" />
                    <div>
                      <p className="eyebrow text-vit-taupe mb-1">{pillar.label}</p>
                      <p className="body-md text-vit-white/55 text-sm">{pillar.text}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>

        {/* Bottom quote */}
        <FadeIn delay={0.1} className="mt-24 text-center px-4">
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light italic text-vit-white/35 max-w-3xl mx-auto leading-relaxed">
            "O design não comunica apenas estética — comunica{' '}
            <span className="text-vit-bege/65">preço, confiança e exclusividade.</span>"
          </p>
          <p className="mt-4 eyebrow text-vit-taupe/45">Identidade Vittaze Lab</p>
        </FadeIn>
      </div>
    </section>
  )
}
