'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Clock, Phone, Instagram, Facebook, MessageCircle, Mail } from 'lucide-react'

const hours = [
  { day: 'Segunda a Sexta', time: '07h00 – 17h00' },
  { day: 'Sábado',          time: '07h00 – 12h00' },
  { day: 'Domingo',         time: 'Fechado' },
]

const contacts = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '(00) 00000-0000',
    href: 'https://wa.me/5500000000000',
    primary: true,
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(00) 0000-0000',
    href: 'tel:0000000000',
    primary: false,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@vittazelab.com.br',
    href: 'mailto:contato@vittazelab.com.br',
    primary: false,
  },
]

export default function Contato() {
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
      id="contato"
      className="relative bg-vit-preto section-padding overflow-hidden"
      ref={sectionRef}
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[60vw] h-[40vw] bg-vit-taupe/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40vw] h-[30vw] bg-vit-cinza/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="reveal eyebrow text-vit-taupe mb-4">Fale conosco</p>
          <h2 className="reveal reveal-delay-1 heading-lg text-vit-white">
            Estamos aqui{' '}
            <span className="font-heading italic gradient-text">para você</span>
          </h2>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Contacts */}
          <div className="reveal lg:col-span-1 flex flex-col gap-4">
            <h3 className="font-heading text-xl font-light text-vit-white mb-2">
              Canais de atendimento
            </h3>
            {contacts.map((c) => {
              const Icon = c.icon
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 ${
                    c.primary
                      ? 'bg-vit-taupe/20 border border-vit-taupe/30 hover:bg-vit-taupe/30'
                      : 'glass hover:border-vit-taupe/30'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    c.primary ? 'bg-vit-taupe/30 group-hover:bg-vit-taupe/50' : 'bg-vit-white/5 group-hover:bg-vit-taupe/20'
                  }`}>
                    <Icon size={18} strokeWidth={1.5} className={c.primary ? 'text-vit-bege' : 'text-vit-taupe'} />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-vit-taupe/60 mb-0.5">
                      {c.label}
                    </p>
                    <p className="font-body text-sm text-vit-white/80 group-hover:text-vit-white transition-colors">
                      {c.value}
                    </p>
                  </div>
                  {c.primary && (
                    <span className="ml-auto font-body text-xs tracking-widest uppercase text-vit-taupe/60">
                      Online ↗
                    </span>
                  )}
                </a>
              )
            })}
          </div>

          {/* Location */}
          <div className="reveal reveal-delay-1 card-dark rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <MapPin size={18} strokeWidth={1.5} className="text-vit-taupe" />
              <h3 className="font-heading text-xl font-light text-vit-white">
                Nossa localização
              </h3>
            </div>
            {/* Mock map placeholder */}
            <div className="rounded-xl overflow-hidden bg-vit-preto/50 border border-vit-taupe/15 h-40 flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, #655C55 0px, #655C55 1px, transparent 1px, transparent 40px),
                    repeating-linear-gradient(90deg, #655C55 0px, #655C55 1px, transparent 1px, transparent 40px)`
                }}
              />
              <div className="relative flex flex-col items-center gap-2">
                <div className="w-8 h-8 bg-vit-taupe rounded-full flex items-center justify-center">
                  <MapPin size={16} className="text-vit-white" />
                </div>
                <span className="font-body text-xs text-vit-white/50">Vittaze Lab</span>
              </div>
            </div>
            <div>
              <p className="font-body text-sm text-vit-white/70 leading-relaxed">
                Rua das Clínicas, 000 — Sala 101<br />
                Bairro Nobre, Cidade — Estado<br />
                CEP 00000-000
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-vit-taupe hover:text-vit-bege transition-colors"
              >
                Ver no mapa ↗
              </a>
            </div>
          </div>

          {/* Hours + Social */}
          <div className="reveal reveal-delay-2 flex flex-col gap-4">
            {/* Hours */}
            <div className="card-dark rounded-2xl p-7 flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-3">
                <Clock size={18} strokeWidth={1.5} className="text-vit-taupe" />
                <h3 className="font-heading text-xl font-light text-vit-white">
                  Horários
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-vit-white/5 last:border-0">
                    <span className="font-body text-sm text-vit-white/55">{day}</span>
                    <span className={`font-body text-sm font-medium ${time === 'Fechado' ? 'text-vit-taupe/50' : 'text-vit-bege'}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="card-dark rounded-2xl p-6 flex flex-col gap-4">
              <p className="eyebrow text-vit-taupe">Redes sociais</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: 'https://instagram.com/vittazelab', label: 'Instagram' },
                  { icon: Facebook,  href: 'https://facebook.com/vittazelab', label: 'Facebook' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-vit-taupe/40 hover:bg-vit-taupe/10 transition-all duration-300"
                  >
                    <Icon size={18} strokeWidth={1.5} className="text-vit-taupe group-hover:text-vit-bege transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Big WhatsApp CTA */}
        <div className="reveal mt-12">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-vit-taupe/20 to-vit-cinza/20 border border-vit-taupe/20 hover:border-vit-taupe/40 p-8 transition-all duration-300 hover:bg-vit-taupe/15"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-vit-taupe/25 flex items-center justify-center group-hover:bg-vit-taupe/40 transition-colors duration-300">
                <MessageCircle size={26} strokeWidth={1.5} className="text-vit-bege" />
              </div>
              <div>
                <p className="font-heading text-xl text-vit-white font-light">
                  Prefere pelo WhatsApp?
                </p>
                <p className="font-body text-sm text-vit-white/50">
                  Atendimento rápido e personalizado para tirar todas as suas dúvidas.
                </p>
              </div>
            </div>
            <span className="btn-taupe shrink-0">
              Iniciar conversa
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
