'use client'

import { MapPin, Clock, Phone, Instagram, MessageCircle, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn, { StaggerGroup, StaggerItem } from './FadeIn'

const hours = [
  { day: 'Segunda a Sexta', time: '07h – 12h  ·  14h – 16h' },
]

const contacts = [
  { icon: MessageCircle, label: 'WhatsApp', value: '(00) 00000-0000', href: 'https://wa.me/5500000000000', primary: true },
  { icon: Phone,         label: 'Telefone', value: '(00) 0000-0000',  href: 'tel:0000000000',              primary: false },
  { icon: Mail,          label: 'E-mail',   value: 'contato@vittazelab.com', href: 'mailto:contato@vittazelab.com', primary: false },
]

export default function Contato() {
  return (
    <section id="contato" className="relative bg-vit-preto section-padding overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[60vw] h-[40vw] bg-vit-taupe/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40vw] h-[30vw] bg-vit-cinza/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn><p className="eyebrow text-vit-taupe mb-4">Fale conosco</p></FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg text-vit-white">
              Estamos aqui{' '}
              <span className="font-heading italic gradient-text">para você</span>
            </h2>
          </FadeIn>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Contacts */}
          <FadeIn direction="left" className="lg:col-span-1 flex flex-col gap-4">
            <h3 className="font-heading text-xl font-light text-vit-white mb-1">
              Canais de atendimento
            </h3>
            {contacts.map((c) => {
              const Icon = c.icon
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 rounded-2xl p-5 transition-colors duration-300 ${
                    c.primary
                      ? 'bg-vit-taupe/20 border border-vit-taupe/30'
                      : 'glass'
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      c.primary ? 'bg-vit-taupe/30' : 'bg-vit-white/5'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Icon size={18} strokeWidth={1.5} className={c.primary ? 'text-vit-bege' : 'text-vit-taupe'} />
                  </motion.div>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-vit-taupe/60 mb-0.5">{c.label}</p>
                    <p className="font-body text-sm text-vit-white/80">{c.value}</p>
                  </div>
                  {c.primary && (
                    <span className="ml-auto font-body text-xs tracking-widest uppercase text-vit-taupe/60">Online ↗</span>
                  )}
                </motion.a>
              )
            })}
          </FadeIn>

          {/* Location */}
          <FadeIn delay={0.1} className="card-dark rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <MapPin size={18} strokeWidth={1.5} className="text-vit-taupe" />
              <h3 className="font-heading text-xl font-light text-vit-white">Nossa localização</h3>
            </div>
            <div className="rounded-xl overflow-hidden bg-vit-preto/50 border border-vit-taupe/15 h-40 flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, #655C55 0px, #655C55 1px, transparent 1px, transparent 40px),
                    repeating-linear-gradient(90deg, #655C55 0px, #655C55 1px, transparent 1px, transparent 40px)`,
                }}
              />
              <motion.div
                className="relative flex flex-col items-center gap-2"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 bg-vit-taupe rounded-full flex items-center justify-center shadow-premium">
                  <MapPin size={16} className="text-vit-white" />
                </div>
                <span className="font-body text-xs text-vit-white/50">Vittaze Lab</span>
              </motion.div>
            </div>
            <div>
              <p className="font-body text-sm text-vit-white/70 leading-relaxed">
                Alameda Dr. Octávio Pinheiro Brisolla, Qd. 17<br />
                Vila Nova Cidade Universitária<br />
                Bauru — SP · 17012-191
              </p>
              <a href="https://maps.google.com/?q=Alameda+Dr.+Octávio+Pinheiro+Brisolla,+Quadra+17,+Vila+Nova+Cidade+Universitária,+Bauru,+SP" target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-vit-taupe hover:text-vit-bege transition-colors">
                Ver no mapa ↗
              </a>
            </div>
          </FadeIn>

          {/* Hours + Social */}
          <FadeIn delay={0.15} direction="right" className="flex flex-col gap-4">
            <div className="card-dark rounded-2xl p-7 flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-3">
                <Clock size={18} strokeWidth={1.5} className="text-vit-taupe" />
                <h3 className="font-heading text-xl font-light text-vit-white">Horários</h3>
              </div>
              <StaggerGroup stagger={0.08} className="flex flex-col gap-3">
                {hours.map(({ day, time }) => (
                  <StaggerItem key={day}>
                    <div className="flex justify-between items-center py-2 border-b border-vit-white/5 last:border-0">
                      <span className="font-body text-sm text-vit-white/55">{day}</span>
                      <span className={`font-body text-sm font-medium ${time === 'Fechado' ? 'text-vit-taupe/50' : 'text-vit-bege'}`}>
                        {time}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>

            <div className="card-dark rounded-2xl p-6 flex flex-col gap-4">
              <p className="eyebrow text-vit-taupe">Redes sociais</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/vittazelab_/', label: 'Instagram' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center"
                    whileHover={{ scale: 1.12, rotate: 5, borderColor: 'rgba(160,149,140,0.5)' }}
                    whileTap={{ scale: 0.93 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <Icon size={18} strokeWidth={1.5} className="text-vit-taupe hover:text-vit-bege transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Big WhatsApp CTA */}
        <FadeIn delay={0.1} className="mt-12">
          <motion.a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-vit-taupe/20 to-vit-cinza/20 border border-vit-taupe/20 p-8"
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          >
            <div className="flex items-center gap-5">
              <motion.div
                className="w-14 h-14 rounded-2xl bg-vit-taupe/25 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <MessageCircle size={26} strokeWidth={1.5} className="text-vit-bege" />
              </motion.div>
              <div>
                <p className="font-heading text-xl text-vit-white font-light">Prefere pelo WhatsApp?</p>
                <p className="font-body text-sm text-vit-white/50">Atendimento rápido e personalizado.</p>
              </div>
            </div>
            <motion.span
              className="btn-taupe shrink-0"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Iniciar conversa
            </motion.span>
          </motion.a>
        </FadeIn>
      </div>
    </section>
  )
}
