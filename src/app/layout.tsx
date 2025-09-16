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
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
})
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adsformedspas.com'),
  title: {
    default: 'AI Ads for Med Spas | Smarter Ads. More Appointments.',
    template: '%s | AI Ads for Med Spas'
  },
  description: 'AI-powered ad creative and local visibility that books more patients. See plans: Basic, Standard, Custom.',
  keywords: [
    'AI ads for med spas',
    'med spa marketing',
    'med spa advertising',
    'Google Maps optimization',
    'med spa lead generation',
    'AI video creative',
    'med spa digital marketing',
    'local med spa marketing',
    'med spa visibility',
    'med spa appointments',
    'med spa bookings',
    'med spa marketing agency'
  ],
  authors: [{ name: 'Ads for MedSpas' }],
  creator: 'Ads for MedSpas',
  publisher: 'Ads for MedSpas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Marketing Services',
  classification: 'Business',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#14b8a6',
  },
  openGraph: {
    title: 'AI Ads for Med Spas | Smarter Ads. More Appointments.',
    description: 'AI-powered ad creative and local visibility that books more patients. See plans: Basic, Standard, Custom.',
    url: 'https://adsformedspas.com',
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
    title: 'AI Ads for Med Spas | Smarter Ads. More Appointments.',
    description: 'AI-powered ad creative and local visibility that books more patients.',
    images: ['/og-image.jpg'],
    creator: '@adsformedspas',
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
    canonical: 'https://adsformedspas.com',
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
        
        {/* Preload critical images */}
        <link rel="preload" href="/results-1.jpg" as="image" />
        <link rel="preload" href="/logo.png" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ads for MedSpas",
              "url": "https://adsformedspas.com",
              "logo": "https://adsformedspas.com/logo.png",
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
                "https://www.facebook.com/adsformedspas",
                "https://www.linkedin.com/company/adsformedspas"
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
        <PerformanceMonitor enableReporting={true} />
      </body>
    </html>
  )
}