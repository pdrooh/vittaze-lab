'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'

const navLinks = [
  { label: 'Início',      href: '#hero' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Serviços',    href: '#servicos' },
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Resultados',  href: '#resultados' },
  { label: 'Contato',     href: '#contato' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section tracking
      const sections = navLinks.map(l => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass-dark py-2 shadow-glass'
            : 'bg-transparent py-4'
        )}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('#hero')}
            aria-label="Vittaze Lab — início"
            className="group flex items-center"
          >
            <Image
              src="/images/logo-white.png"
              alt="Vittaze Lab"
              width={80}
              height={80}
              className="h-20 w-auto object-contain object-left opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              priority
              style={{ width: 'auto' }}
            />
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={clsx(
                    'font-body text-xs tracking-widest uppercase transition-all duration-300 relative pb-0.5',
                    activeSection === link.href.slice(1)
                      ? 'text-vit-bege'
                      : 'text-vit-white/70 hover:text-vit-white'
                  )}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-vit-taupe" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNav('#resultados')}
              className="font-body text-xs tracking-widest uppercase text-vit-white/70 hover:text-vit-white transition-colors duration-300"
            >
              Meus Resultados
            </button>
            <button
              onClick={() => handleNav('#contato')}
              className="btn-taupe text-xs py-2.5 px-6"
            >
              Agendar Exame
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-vit-white p-2 -mr-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 lg:hidden transition-all duration-500',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-vit-preto/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-2">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={clsx(
                'font-heading text-3xl font-light tracking-wide text-vit-white/80 hover:text-vit-white py-3 transition-all duration-300',
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </button>
          ))}

          <div
            className={clsx(
              'mt-8 flex flex-col items-center gap-4 transition-all duration-500',
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
            style={{ transitionDelay: menuOpen ? '380ms' : '0ms' }}
          >
            <button
              onClick={() => handleNav('#contato')}
              className="btn-taupe"
            >
              Agendar Exame
            </button>
            <button
              onClick={() => handleNav('#resultados')}
              className="btn-outline-light text-sm"
            >
              Ver Resultados
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
