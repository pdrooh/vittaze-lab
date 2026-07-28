'use client'

import { useEffect, useRef, useState } from 'react'
import { FileText, Eye, EyeOff, Download, Search, Shield, Lock, ExternalLink } from 'lucide-react'
import FadeIn, { StaggerGroup, StaggerItem } from './FadeIn'

const features = [
  { icon: FileText, text: 'Laudos em PDF de alta resolução' },
  { icon: Download, text: 'Download e compartilhamento seguro' },
  { icon: Search,   text: 'Histórico completo de exames' },
  { icon: Shield,   text: 'Dados protegidos com SSL e LGPD' },
]

const roleOptions = [
  { value: 'paciente', label: 'Paciente' },
  { value: 'medico',   label: 'Médico'   },
  { value: 'convenio', label: 'Convênio' },
  { value: 'unidade',  label: 'Unidade'  },
]

export default function Resultados() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [showPass, setShowPass] = useState(false)

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
    <section id="resultados" className="bg-vit-white section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left — info ── */}
          <div>
            <p className="reveal eyebrow mb-4">Portal do Paciente</p>
            <h2 className="reveal reveal-delay-1 heading-lg text-vit-preto mb-6">
              Seus resultados,{' '}
              <span className="font-heading italic">onde você estiver.</span>
            </h2>
            <div className="reveal reveal-delay-2 h-px w-12 bg-vit-taupe/50 mb-8" />

            <p className="reveal reveal-delay-2 body-lg text-vit-cinza mb-8">
              Acesse seus laudos de forma rápida, segura e elegante. Nossa plataforma protege suas informações com criptografia de ponta a ponta.
            </p>

            <StaggerGroup stagger={0.08} className="flex flex-col gap-4 mb-10">
              {features.map(({ icon: Icon, text }) => (
                <StaggerItem key={text}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-vit-bege/60 flex items-center justify-center shrink-0">
                      <Icon size={15} strokeWidth={1.5} className="text-vit-cinza" />
                    </div>
                    <span className="body-md text-vit-cinza text-sm">{text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <FadeIn>
              <p className="body-md text-vit-cinza/55 text-xs leading-relaxed">
                Primeiro acesso? Sua chave e senha são enviadas por SMS e e-mail logo após a coleta.
              </p>
            </FadeIn>
          </div>

          {/* ── Right — real portal form ── */}
          <FadeIn delay={0.15}>
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute -inset-6 bg-vit-taupe/10 blur-3xl rounded-3xl pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-vit-bege/60">
                {/* Portal chrome bar */}
                <div className="bg-vit-preto px-6 py-4 flex items-center justify-between">
                  <div className="flex flex-col leading-none">
                    <span className="font-heading text-sm tracking-widest text-vit-white">VITTAZE</span>
                    <span className="font-body text-[8px] tracking-[0.4em] text-vit-taupe uppercase">Lab Portal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                </div>

                {/* Form body */}
                <div className="bg-vit-white p-8">
                  <p className="eyebrow mb-2 text-center">Acesse seus resultados</p>
                  <p className="font-heading text-2xl font-light text-vit-preto text-center mb-8">
                    Bem-vindo de volta
                  </p>

                  {/*
                    Real portal form — submits via POST to worklabweb in a new tab.
                    Field names must match exactly: tbCodigo, tbSenha, rdbOpcao.
                  */}
                  <form
                    method="post"
                    target="_blank"
                    action="https://portal.worklabweb.com.br/resultados/4165"
                    className="flex flex-col gap-4"
                  >
                    {/* CHAVE field */}
                    <div>
                      <label
                        htmlFor="tbCodigo"
                        className="font-body text-xs tracking-widest uppercase text-vit-cinza/60 mb-1.5 block"
                      >
                        Chave de acesso
                      </label>
                      <input
                        id="tbCodigo"
                        name="tbCodigo"
                        type="text"
                        maxLength={16}
                        placeholder="Código recebido por SMS / e-mail"
                        autoComplete="username"
                        className="w-full px-4 py-3.5 rounded-xl border border-vit-bege bg-vit-white/80 font-body text-sm text-vit-preto placeholder:text-vit-bege focus:outline-none focus:border-vit-taupe transition-colors"
                      />
                    </div>

                    {/* SENHA field */}
                    <div>
                      <label
                        htmlFor="tbSenha"
                        className="font-body text-xs tracking-widest uppercase text-vit-cinza/60 mb-1.5 block"
                      >
                        Senha
                      </label>
                      <div className="relative">
                        <input
                          id="tbSenha"
                          name="tbSenha"
                          type={showPass ? 'text' : 'password'}
                          maxLength={16}
                          placeholder="••••••••"
                          autoComplete="current-password"
                          className="w-full px-4 py-3.5 pr-12 rounded-xl border border-vit-bege bg-vit-white/80 font-body text-sm text-vit-preto placeholder:text-vit-bege focus:outline-none focus:border-vit-taupe transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass(v => !v)}
                          aria-label={showPass ? 'Ocultar senha' : 'Mostrar senha'}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-vit-taupe/60 hover:text-vit-taupe transition-colors"
                        >
                          {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* Tipo de acesso */}
                    <div>
                      <label
                        htmlFor="rdbOpcao"
                        className="font-body text-xs tracking-widest uppercase text-vit-cinza/60 mb-1.5 block"
                      >
                        Tipo de acesso
                      </label>
                      <select
                        id="rdbOpcao"
                        name="rdbOpcao"
                        className="w-full px-4 py-3.5 rounded-xl border border-vit-bege bg-vit-white/80 font-body text-sm text-vit-preto focus:outline-none focus:border-vit-taupe transition-colors appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23A0958C' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                      >
                        {roleOptions.map(({ value, label }) => (
                          <option key={value} value={value}>{label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Submit — native form POST opens portal in new tab */}
                    <button
                      type="submit"
                      className="btn-primary w-full justify-center mt-2 gap-3"
                    >
                      <Lock size={14} />
                      Acessar resultados
                      <ExternalLink size={12} className="opacity-50" />
                    </button>
                  </form>

                  {/* Security badge */}
                  <div className="mt-6 pt-5 border-t border-vit-bege/50 flex items-center justify-center gap-2">
                    <Shield size={12} strokeWidth={1.5} className="text-vit-taupe/50" />
                    <span className="font-body text-[10px] tracking-wider text-vit-taupe/50 uppercase">
                      Conexão segura · LGPD compliant · SSL 256-bit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
