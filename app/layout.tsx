import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})

const siteUrl = 'https://vittazelab.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vittaze Lab | Laboratório de Análises Clínicas — Bauru, SP',
    template: '%s | Vittaze Lab',
  },
  description:
    'Laboratório de análises clínicas premium em Bauru-SP. Exames laboratoriais, check-up, hormonais e coleta domiciliar. Resultados em até 72h. Agende: (14) 91005-2152.',
  keywords: [
    'laboratório análises clínicas Bauru',
    'exames laboratoriais Bauru SP',
    'check-up completo Bauru',
    'exames hormonais',
    'coleta domiciliar Bauru',
    'resultados online laboratório',
    'laboratório premium Bauru',
    'Vittaze Lab',
    'análises clínicas Vila Nova Cidade Universitária',
  ],
  authors: [{ name: 'Vittaze Lab' }],
  creator: 'Vittaze Lab',
  publisher: 'Vittaze Lab',
  category: 'health',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Vittaze Lab',
    title: 'Vittaze Lab | Laboratório de Análises Clínicas — Bauru, SP',
    description:
      'Excelência em diagnósticos clínicos com sofisticação, precisão e tecnologia avançada. Resultados em até 72h.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vittaze Lab — Laboratório de Análises Clínicas Premium em Bauru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vittaze Lab | Laboratório Premium — Bauru, SP',
    description: 'Excelência em diagnósticos clínicos com sofisticação e precisão. Bauru-SP.',
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
    canonical: siteUrl,
  },
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'Bauru',
    'geo.position': '-22.3147;-49.0609',
    'ICBM': '-22.3147, -49.0609',
  },
}

export const viewport: Viewport = {
  themeColor: '#232323',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalLab',
  name: 'Vittaze Lab',
  alternateName: 'Vittaze Laboratório de Análises Clínicas',
  description:
    'Laboratório de análises clínicas premium em Bauru-SP. Exames laboratoriais, check-up, hormonais e coleta domiciliar.',
  url: siteUrl,
  logo: `${siteUrl}/images/logo-dark.png`,
  image: `${siteUrl}/og-image.jpg`,
  telephone: '+55-14-91005-2152',
  email: 'contato@vittazelab.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alameda Dr. Octávio Pinheiro Brisolla, Quadra 17',
    addressLocality: 'Bauru',
    addressRegion: 'SP',
    postalCode: '17012-191',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-22.3147',
    longitude: '-49.0609',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '14:00',
      closes: '16:00',
    },
  ],
  sameAs: ['https://www.instagram.com/vittazelab_/'],
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  areaServed: {
    '@type': 'City',
    name: 'Bauru',
  },
  medicalSpecialty: 'LaboratoryMedicine',
  availableService: [
    { '@type': 'MedicalTest', name: 'Exames Laboratoriais' },
    { '@type': 'MedicalTest', name: 'Check-up Completo' },
    { '@type': 'MedicalTest', name: 'Exames Hormonais' },
    { '@type': 'MedicalTest', name: 'Análises Especializadas' },
    { '@type': 'MedicalTest', name: 'Coleta Domiciliar' },
  ],
  foundingDate: '2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-vit-white text-vit-preto antialiased">
        {children}
      </body>
    </html>
  )
}
