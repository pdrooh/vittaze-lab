import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vittaze Lab | Laboratório de Análises Clínicas Premium',
  description:
    'Vittaze Lab — excelência em diagnósticos clínicos com sofisticação, precisão e tecnologia avançada. Agende seu exame e acesse seus resultados online.',
  keywords: [
    'laboratório análises clínicas',
    'exames laboratoriais',
    'check-up completo',
    'exames hormonais',
    'coleta domiciliar',
    'resultados online',
    'laboratório premium',
    'Vittaze Lab',
  ],
  authors: [{ name: 'Vittaze Lab' }],
  creator: 'Vittaze Lab',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vittazelab.com.br',
    siteName: 'Vittaze Lab',
    title: 'Vittaze Lab | Laboratório de Análises Clínicas Premium',
    description:
      'Excelência em diagnósticos clínicos com sofisticação, precisão e tecnologia avançada.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vittaze Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vittaze Lab | Laboratório Premium',
    description: 'Excelência em diagnósticos com sofisticação e precisão.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vittazelab.com.br',
  },
  // Google Fonts loaded via <link> in the layout for better build compatibility
}

export const viewport: Viewport = {
  themeColor: '#232323',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-vit-white text-vit-preto antialiased">
        {children}
      </body>
    </html>
  )
}
