import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout/Layout'
import PerformanceMonitor from '@/components/ui/PerformanceMonitor'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://medspapro.agency'),
  title: {
    default: 'Ads for MedSpas - AI-Powered Marketing Solutions | Generate 20+ Leads/Month',
    template: '%s | Ads for MedSpas'
  },
  description: 'Generate 20+ qualified leads per month for your Med Spa with our AI-powered marketing solutions. Facebook/Instagram ads, Google Maps optimization, and more. Guaranteed results or free.',
  keywords: [
    'med spa marketing',
    'medical spa advertising',
    'Facebook ads for med spas',
    'Instagram ads for med spas',
    'Google Maps optimization',
    'med spa lead generation',
    'AI marketing for med spas',
    'med spa digital marketing',
    'cosmetic procedure marketing',
    'med spa SEO',
    'med spa social media marketing',
    'med spa advertising agency'
  ],
  authors: [{ name: 'Ads for MedSpas' }],
  creator: 'Ads for MedSpas',
  publisher: 'Ads for MedSpas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ads for MedSpas - AI-Powered Marketing Solutions',
    description: 'Generate 20+ qualified leads per month for your Med Spa with our AI-powered marketing solutions. Facebook/Instagram ads, Google Maps optimization, and more.',
    url: 'https://medspapro.agency',
    siteName: 'Ads for MedSpas',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ads for MedSpas - AI-Powered Marketing Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ads for MedSpas - AI-Powered Marketing Solutions',
    description: 'Generate 20+ qualified leads per month for your Med Spa with our AI-powered marketing solutions.',
    images: ['/og-image.jpg'],
    creator: '@medspapro',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://medspapro.agency',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/videos/beforeafter.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/lips.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/botox.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/laser.mp4" as="video" type="video/mp4" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ads for MedSpas",
              "url": "https://medspapro.agency",
              "logo": "https://medspapro.agency/logo.png",
              "description": "AI-powered marketing solutions for medical spas and aesthetic practices",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/medspapro",
                "https://www.linkedin.com/company/medspapro"
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Med Spa Marketing Services",
              "provider": {
                "@type": "Organization",
                "name": "Ads for MedSpas"
              },
              "description": "AI-powered marketing solutions including Facebook ads, Instagram ads, Google Maps optimization, and lead generation for medical spas",
              "serviceType": "Digital Marketing",
              "areaServed": "United States",
              "offers": {
                "@type": "Offer",
                "description": "Guaranteed 20+ qualified leads per month or free",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Layout>{children}</Layout>
        <PerformanceMonitor />
      </body>
    </html>
  )
}