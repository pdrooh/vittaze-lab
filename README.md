# Vittaze Lab — Site Premium

Site institucional do **Vittaze Lab - Laboratório de Análises Clínicas**, desenvolvido em Next.js 14 com design premium e SEO otimizado.

## Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Lucide React** (ícones)
- **Google Fonts** — Cormorant Garamond + DM Sans

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

## Como fazer build para produção

```bash
npm run build
npm run start
```

## Estrutura

```
├── app/
│   ├── layout.tsx      # Layout raiz com SEO e fontes
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globais + animações
└── components/
    ├── Navbar.tsx       # Navbar sticky com glassmorphism
    ├── Hero.tsx         # Hero section impactante
    ├── DnaAnimation.tsx # Animação DNA em SVG
    ├── Diferenciais.tsx # Seção de diferenciais
    ├── Servicos.tsx     # Cards de serviços
    ├── Sobre.tsx        # Sobre a marca
    ├── Resultados.tsx   # Portal de resultados
    ├── Contato.tsx      # Contato e localização
    └── Footer.tsx       # Rodapé institucional
```

## Personalização

Atualize as informações reais nos seguintes arquivos:

- **`components/Contato.tsx`** — WhatsApp, e-mail, endereço, horários
- **`components/Footer.tsx`** — Links das redes sociais
- **`app/layout.tsx`** — URL canônica e metadados SEO
- **`app/globals.css`** — Cores da paleta (variáveis CSS)

## Deploy

Recomendamos deploy na **Vercel** para melhor performance e SEO:

```bash
npx vercel
```
