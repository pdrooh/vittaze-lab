import { Instagram, MessageCircle } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Navegação',
    links: [
      { label: 'Início',        href: '#hero' },
      { label: 'Diferenciais',  href: '#diferenciais' },
      { label: 'Serviços',      href: '#servicos' },
      { label: 'Sobre',         href: '#sobre' },
    ],
  },
  {
    heading: 'Pacientes',
    links: [
      { label: 'Resultados Online', href: '#resultados' },
      { label: 'Agendar Exame',     href: '#contato' },
      { label: 'Coleta Domiciliar', href: '#servicos' },
      { label: 'FAQ',               href: '#contato' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos de Uso',           href: '#' },
      { label: 'LGPD',                    href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-vit-preto border-t border-vit-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src="/images/logo-white.png"
              alt="Vittaze Lab · Laboratório de Análises Clínicas"
              className="h-36 w-auto object-contain object-left mb-4 opacity-95"
            />

            <p className="font-body text-sm text-vit-white/40 leading-relaxed max-w-xs mb-8">
              Excelência em diagnósticos clínicos com sofisticação, precisão e tecnologia avançada. Cuidando da sua saúde com dedicação.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram,     href: 'https://www.instagram.com/vittazelab_/', label: 'Instagram' },
                { icon: MessageCircle, href: 'https://wa.me/5514910052152',             label: 'WhatsApp'  },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-10 h-10 rounded-xl glass flex items-center justify-center hover:border-vit-taupe/40 hover:bg-vit-taupe/10 transition-all duration-300"
                >
                  <Icon size={16} strokeWidth={1.5} className="text-vit-taupe/60 group-hover:text-vit-bege transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <p className="font-body text-xs font-medium tracking-[0.25em] uppercase text-vit-taupe mb-5">
                {heading}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-body text-sm text-vit-white/40 hover:text-vit-white/80 transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-vit-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-vit-white/25">
            © {new Date().getFullYear()} Vittaze Lab. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-vit-white/20">
            Laboratório de Análises Clínicas Premium
          </p>
        </div>
      </div>
    </footer>
  )
}
