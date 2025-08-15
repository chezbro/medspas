import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Med Spa Agency - AI-Powered Marketing Solutions',
  description: 'Generate 20+ qualified leads per month for your Med Spa with our AI-powered marketing solutions. Facebook/Instagram ads, Google Maps optimization, and more.',
  openGraph: {
    title: 'Med Spa Agency - AI-Powered Marketing Solutions',
    description: 'Generate 20+ qualified leads per month for your Med Spa with our AI-powered marketing solutions.',
    url: 'https://medspapro.agency',
    siteName: 'Med Spa Agency',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}