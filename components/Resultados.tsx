'use client'

import { useEffect, useRef, useState } from 'react'
import { FileText, Lock, Eye, EyeOff, Download, Search, Shield } from 'lucide-react'

export default function Resultados() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [showPass, setShowPass]   = useState(false)
  const [cpf, setCpf]             = useState('')
  const [senha, setSenha]         = useState('')

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

  const formatCpf = (v: string) => {
    const nums = v.replace(/\D/g, '').slice(0, 11)
    return nums
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  }

  return (
    <section id="resultados" className="bg-vit-white section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — info */}
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

            {/* Feature list */}
            <div className="reveal reveal-delay-3 flex flex-col gap-4 mb-10">
              {[
                { icon: FileText, text: 'Laudos em PDF de alta resolução' },
                { icon: Download, text: 'Download e compartilhamento seguro' },
                { icon: Search,   text: 'Histórico completo de exames' },
                { icon: Shield,   text: 'Dados protegidos com SSL e LGPD' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-vit-bege/60 flex items-center justify-center shrink-0">
                    <Icon size={15} strokeWidth={1.5} className="text-vit-cinza" />
                  </div>
                  <span className="body-md text-vit-cinza text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4">
              <p className="body-md text-vit-cinza/60 text-xs">
                Primeiro acesso? Seu código de acesso é enviado por SMS e e-mail após a coleta.
              </p>
            </div>
          </div>

          {/* Right — mock portal UI */}
          <div className="reveal reveal-delay-2">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 bg-vit-taupe/10 blur-3xl rounded-3xl" />

              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-vit-bege/60">
                {/* Portal header */}
                <div className="bg-vit-preto px-6 py-4 flex items-center justify-between">
                  <div className="flex flex-col leading-none">
                    <span className="font-heading text-sm tracking-widest text-vit-white">VITTAZE</span>
                    <span className="font-body text-[8px] tracking-[0.4em] text-vit-taupe uppercase">Lab Portal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-vit-taupe/40" />
                    <div className="w-2 h-2 rounded-full bg-vit-taupe/60" />
                    <div className="w-2 h-2 rounded-full bg-vit-taupe" />
                  </div>
                </div>

                {/* Portal body */}
                <div className="bg-vit-white p-8">
                  <p className="eyebrow mb-2 text-center">Acesse seus resultados</p>
                  <p className="font-heading text-2xl font-light text-vit-preto text-center mb-8">
                    Bem-vindo de volta
                  </p>

                  <div className="flex flex-col gap-4">
                    {/* CPF field */}
                    <div className="relative">
                      <label className="font-body text-xs tracking-widest uppercase text-vit-cinza/60 mb-1.5 block">
                        CPF do paciente
                      </label>
                      <input
                        type="text"
                        value={cpf}
                        onChange={e => setCpf(formatCpf(e.target.value))}
                        placeholder="000.000.000-00"
                        className="w-full px-4 py-3.5 rounded-xl border border-vit-bege bg-vit-white/80 font-body text-sm text-vit-preto placeholder:text-vit-bege focus:outline-none focus:border-vit-taupe transition-colors"
                      />
                    </div>

                    {/* Password field */}
                    <div className="relative">
                      <label className="font-body text-xs tracking-widest uppercase text-vit-cinza/60 mb-1.5 block">
                        Código de acesso
                      </label>
                      <div className="relative">
                        <input
                          type={showPass ? 'text' : 'password'}
                          value={senha}
                          onChange={e => setSenha(e.target.value)}
                          placeholder="••••••••"
                          className="w-full px-4 py-3.5 pr-12 rounded-xl border border-vit-bege bg-vit-white/80 font-body text-sm text-vit-preto placeholder:text-vit-bege focus:outline-none focus:border-vit-taupe transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass(v => !v)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-vit-taupe/60 hover:text-vit-taupe transition-colors"
                        >
                          {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* Submit */}
                    <button className="btn-primary w-full justify-center mt-2 gap-3">
                      <Lock size={14} />
                      Acessar resultados
                    </button>

                    {/* Forgot */}
                    <p className="text-center font-body text-xs text-vit-taupe/60 hover:text-vit-taupe cursor-pointer transition-colors">
                      Esqueceu seu código de acesso?
                    </p>
                  </div>

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
          </div>
        </div>
      </div>
    </section>
  )
}
